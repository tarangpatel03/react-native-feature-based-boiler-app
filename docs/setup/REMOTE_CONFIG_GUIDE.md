# Remote Config Guide

## Purpose

Use remote config for feature flags and runtime configuration that may change without a new release.

Use cases:

- enable/disable feature
- switch old/new UI
- maintenance mode
- rollout experiments
- configurable limits

## Where it belongs

```txt
shared/
  integrations/
    remoteConfig/
      remoteConfigKeys.ts
      remoteConfigService.ts
```

## Define keys

```ts
export const RemoteConfigKeys = {
  ENABLE_CHAT: "enable_chat",
  ENABLE_NEW_CHECKOUT: "enable_new_checkout",
  SHOW_HOME_BANNER: "show_home_banner",
  MAX_UPLOAD_SIZE_MB: "max_upload_size_mb",
} as const;
```

## Service example

```ts
class RemoteConfigService {
  async init() {
    await remoteConfig().setDefaults({
      enable_chat: true,
      enable_new_checkout: false,
      show_home_banner: true,
      max_upload_size_mb: 20,
    });

    await remoteConfig().fetchAndActivate();
  }

  getBoolean(key: string) {
    return remoteConfig().getValue(key).asBoolean();
  }

  getNumber(key: string) {
    return remoteConfig().getValue(key).asNumber();
  }

  getString(key: string) {
    return remoteConfig().getValue(key).asString();
  }
}
```

## Bootstrap usage

Initialise once during app startup.

```ts
await remoteConfigService.init();
```

## Feature usage

```ts
const isChatEnabled = remoteConfigService.getBoolean(
  RemoteConfigKeys.ENABLE_CHAT,
);
```

```tsx
{
  isChatEnabled && <ChatEntry />;
}
```

## Good practices

- always define defaults
- keep keys centralized
- fetch once on startup unless you have a reason not to
- remove old flags after rollout ends
- use remote config for runtime flags, not secrets

## Env vs remote config

| Need               | Use           |
| ------------------ | ------------- |
| API URL            | env           |
| API key            | env           |
| enable feature     | remote config |
| maintenance mode   | remote config |
| rollout experiment | remote config |
