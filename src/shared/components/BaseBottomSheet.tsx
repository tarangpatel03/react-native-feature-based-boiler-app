import React, { forwardRef, useMemo, useCallback, useImperativeHandle } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type BaseBottomSheetRef = {
  open: () => void;
  close: () => void;
};

type Props = {
  children: React.ReactNode;
  snapPoints?: (string | number)[];
  onDismiss?: () => void;
};

export const BaseBottomSheet = forwardRef<BaseBottomSheetRef, Props>(
  ({ children, snapPoints = ['40%'], onDismiss }, ref) => {
    const sheetRef = React.useRef<BottomSheetModal>(null);
    const insets = useSafeAreaInsets();

    const memoSnapPoints = useMemo(() => snapPoints, [snapPoints]);

    const handleOpen = useCallback(() => {
      sheetRef.current?.present();
    }, []);

    const handleClose = useCallback(() => {
      sheetRef.current?.dismiss();
    }, []);

    useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={memoSnapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        keyboardBehavior={'interactive'}
        keyboardBlurBehavior={'restore'}
        onDismiss={onDismiss}
      >
        <BottomSheetView style={[styles.container, { paddingBottom: insets.bottom }]}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
});
