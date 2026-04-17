# Feature-Based Boilerplate App

A React Native starter app built around a scalable, feature-based architecture.

This boilerplate is designed to help you ship apps faster while keeping the codebase predictable, modular, and easy to extend.

## What this boilerplate includes

- Feature-based folder structure
- App bootstrap and provider setup
- Typed navigation, API, and reusable UI primitives
- Axios + TanStack Query setup
- Global loader, toast, logger, and permission helpers
- Environment manager
- Offline retry queue support
- Light/Dark theme support
- Localization support
- External integration layer (Firebase, AWS, etc.)

## Folder structure

```txt
src/
  app/
    bootstrap/
    config/
    navigation/
    providers/
    store/

  assets/
    animations/
    fonts/
    icons/
    images/
    index.ts

  entities/
    <entity-name>/

  features/
    <feature-name>/

  modules/
    <module-name>/

  shared/
    config/
    errors/
    form/
    hooks/
    integrations/
    lib/
    navigation/
    network/
    store/
    theme/
    types/
    ui/
    utils/
```

## Layer overview

| Layer      | Responsibility                                          |
| ---------- | ------------------------------------------------------- |
| `app`      | bootstrap, providers, root navigation, app-level wiring |
| `features` | user capabilities and screen-level flows                |
| `entities` | reusable domain models and domain UI                    |
| `modules`  | multi-step cross-feature workflows                      |
| `shared`   | reusable technical foundation                           |

Dependency direction:

```txt
modules -> features -> entities -> shared
app -> everything
```

## Feature structure

Each feature can contain:

```txt
features/<feature-name>/
  components/
  hooks/
  navigation/
  queries/
  screens/
  services/
  store/
  types/
  utils/
  index.ts
```

Use `index.ts` as the public API of the feature.

## Documentation

Project docs are split by use case:

- [Architecture Guidelines](docs/architecture/ARCHITECTURE_GUIDELINES.md)
- [Import Rules](docs/architecture/IMPORT_RULES.md)
- [Feature Creation Guide](docs/features/FEATURE_CREATION_GUIDE.md)
- [Entities and Modules Guide](docs/architecture/ENTITIES_AND_MODULES.md)
- [TanStack Query Guide](docs/guides/TANSTACK_QUERY_GUIDE.md)
- [Remote Config Guide](docs/setup/REMOTE_CONFIG_GUIDE.md)
- [Developer CheatSheet](docs/guides/DEVELOPER_CHEATSHEET.md)

## Add a new feature

Generate a feature using the project script:

```bash
yarn generate <feature-name>
```

This creates the standard feature folder layout under `src/features/<feature-name>/`.

## Best practices

- Keep feature logic inside its own feature unless it is truly reusable.
- Move reusable domain code into `entities`.
- Create `modules` only for complex multi-step workflows.
- Put generic UI and technical helpers in `shared`.
- Do not deep-import from another feature.
- Keep query keys centralized using query key factories.
- Use remote config for feature flags, not environment files.

## Common examples

### Navigation inside screens

```ts
navigation.navigate('RouteName', params);
navigation.goBack();
navigation.replace('RouteName');
```

### Navigation outside screens

```ts
import { navigate } from '@/shared/navigation';

navigate('SomeScreen', { id: 123 });
```

### Form usage

```ts
const form = useForm({
  email: {
    value: '',
    validators: [required('Email Required'), email()],
  },
});

const emailField = useField(form, 'email');
```

### Logger usage

```ts
import { logger } from '@/shared/lib';

logger.info('User loaded', { userId });
logger.error('Save failed', { error });
```

### Permission usage

```ts
import { requestCameraPermission } from '@/shared/lib';

const granted = await requestCameraPermission();
```
