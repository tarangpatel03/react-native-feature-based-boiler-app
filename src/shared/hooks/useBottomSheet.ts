import { useRef, useCallback, useEffect } from 'react';
import { BaseBottomSheetRef } from '@/shared/ui';

type Resolver<T> = (value: T | null) => void;

export function useBottomSheet<TData = any, TResult = any>() {
  const ref = useRef<BaseBottomSheetRef>(null);

  const resolver = useRef<Resolver<TResult> | null>(null);
  const dataRef = useRef<TData | null>(null);
  const isResolved = useRef(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;

      // cleanup → avoid memory leaks
      if (resolver.current && !isResolved.current) {
        resolver.current(null);
      }
    };
  }, []);

  const open = useCallback((data?: TData) => {
    dataRef.current = data ?? null;
    isResolved.current = false;

    return new Promise<TResult | null>((resolve) => {
      resolver.current = resolve;
      ref.current?.open();
    });
  }, []);

  const resolve = useCallback((value: TResult | null) => {
    if (isResolved.current) return;

    isResolved.current = true;

    if (resolver.current && isMounted.current) {
      resolver.current(value);
    }

    resolver.current = null;
    ref.current?.close();
  }, []);

  const close = useCallback(() => {
    resolve(null);
  }, [resolve]);

  // 🔥 important: called when user dismisses sheet manually
  const onDismiss = useCallback(() => {
    resolve(null);
  }, [resolve]);

  return {
    ref,
    open,
    close,
    resolve,
    onDismiss,
    data: dataRef.current,
  };
}
