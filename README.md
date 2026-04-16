# Feature-Based Boiler App

A React Native starter app built around a modular, feature-based architecture. The repository is designed for fast development of mobile apps with clear separation between application setup, feature modules, shared utilities, and assets.

## Project Overview

This project uses a feature-based folder structure to keep each app domain self-contained. Each feature can include its screens, components, hooks, navigation, services, store logic, types, and utilities. Shared logic and UI components are stored in the `src/shared` area.

## Folder Structure

### Root folders

- `scripts/` - helper scripts for project generation and automation.
- `src/` - main app source code and feature modules.
- `assets/` - shared assets such as images, fonts, icons, and animations.
- `App.tsx` / `index.js` - app entry points for React Native.

### `src/` folders

- `src/app/` - app bootstrap, root navigation setup, providers, and app-level configuration.
- `src/assets/` - typed asset exports and shared media references used throughout the app.
- `src/features/` - feature modules; each feature is isolated and contains its own implementation details.
- `src/shared/` - shared configuration, form logic, hooks, integrations, network utilities, store helpers, themes, and reusable UI elements.

### Feature module structure

Each feature under `src/features/` follows the same pattern:

- `components/` - feature-specific UI components.
- `hooks/` - custom hooks used only by that feature.
- `navigation/` - navigation definitions and route helpers for the feature.
- `screens/` - feature screens and page-level components.
- `services/` - feature-specific services, API calls, or business logic.
- `store/` - feature-specific Redux slices or state management logic.
- `types/` - TypeScript interfaces and types for the feature.
- `utils/` - utilities and helpers used by the feature.
- `index.ts` - feature entry export file.

## Add New Features

This repository includes a generator script to create a new feature module with the standard folder layout.

### Create a new feature

1. Make sure the script is executable (only required once):

```bash
chmod +x scripts/generateFeature.js
```

2. Run the generator with the new feature name:

```bash
yarn generate <feature-name>
```

This creates a new folder under `src/features/<feature-name>/` with the standard subfolders and starter index files.

## Best Practices

- Keep feature logic self-contained in `src/features/` unless it is truly reusable.
- Put UI components or utilities used by multiple features into `src/shared/`.
- Keep app-wide navigation, providers, and configuration inside `src/app/`.
- Use `yarn generate <feature-name>` to maintain consistency for new feature scaffolding.

## Additional Usage

### 1. Navigate within and outside feature screens

- Inside a screen component, use the React Navigation `navigation` prop:

  - `navigation.navigate('RouteName', params)`
  - `navigation.goBack()`
  - `navigation.replace('RouteName')`

  ```ts
  navigation.getParent()?.navigate('StackName', {
    screen: 'RouteName',
    params: { params }, // Optional
  });
  ```

- Outside screen components, use the shared navigation service from `src/shared/navigation/navigationService.ts`:

```ts
import { navigate } from '@/shared/navigation/navigationService';

navigate('SomeScreen', { id: 123 });
```

This helper checks whether the navigation container is ready before navigating, so it is safe to call from hooks, services, or business logic outside a screen.

### 2. Use form input

This project uses the shared form helpers in `src/shared/form`.

- Create a form instance with `useForm(...)`.
- Use `useField(form, 'fieldName')` to bind input state.
- Call `form.handleSubmit(onValid)` to validate and submit.

Example:

```ts
const form = useForm({
  email: {
    value: '',
    validators: [required('Email Required'), email()],
  },
  password: {
    value: '',
    validators: [required('Password Required'), minLength(6)],
  },
});

const emailField = useField(form, 'email');
const passwordField = useField(form, 'password');

<AppInput
  label="Email"
  value={emailField.value}
  onChangeText={emailField.onChangeText}
  onBlur={emailField.onBlur}
  error={emailField.error}
/>;

const onSubmit = () => {
  form.handleSubmit((values) => {
    // submit valid values
  });
};
```

Validation runs automatically on blur for fields, and `handleSubmit` validates all fields before calling your callback.

### 3. Use logger properly

Import the shared logger from `@/shared/lib`:

```ts
import { logger } from '@/shared/lib';

logger.info('User loaded', { userId });
logger.warn('Missing profile data');
logger.error('Save failed', { error });
logger.debug('Request payload', { payload });
```

- In development, all log levels print to the console.
- In production, only `error` logs are printed by default.
- Avoid logging sensitive user data.
- Use structured data objects for easier debugging.

### 4. Handle permissions

Use the built-in permission helpers in `src/shared/lib/permissions` such as:

```ts
import {
  requestCameraPermission,
  requestPhotoPermission,
  requestLocationPermission,
} from '@/shared/lib';

const granted = await requestCameraPermission();
if (granted) {
  // safe to access camera
}
```

These helpers:

- translate platform permission constants
- check and request permissions
- show an error toast when permission is denied or blocked

If you need custom handling, the shared permission service also exposes `checkPermission` and `requestPermission` for manual control.
s
