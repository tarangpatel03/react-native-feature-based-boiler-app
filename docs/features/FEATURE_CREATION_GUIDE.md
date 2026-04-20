# Feature Creation Guide

## When to create a feature

Create a feature for a user capability or a screen-oriented domain.

Examples:

- auth
- chat
- profile
- support
- search
- home

## Standard feature structure

```txt
features/
  <feature-name>/
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

## What to add where

### `components/`

Feature-specific UI used only inside this feature.

### `hooks/`

Feature-specific hooks.

### `navigation/`

Feature stack or route helpers.

### `queries/`

TanStack Query hooks and query key factories.

### `screens/`

Feature screens.

### `services/`

Feature-specific API functions or service logic.

### `store/`

Feature-local Redux slices when truly needed.

### `types/`

Feature-local TypeScript types.

### `utils/`

Feature-local helpers.

### `index.ts`

Public API of the feature.

## Generator usage

```bash
yarn generate <feature-name>
```

## Feature creation checklist

- create feature folder
- add required sub-folders
- keep outside imports through public APIs
- add query keys if server state exists
- export only required files from `index.ts`
- move reusable domain parts to `entities` when duplication appears

## Home feature note

`home` is usually a composition feature.

It can assemble public pieces from other domains but should not contain all their business logic.

## Import custom script

run with correct file path:

```zsh
chmod +x scripts/generateFeature.js
```
