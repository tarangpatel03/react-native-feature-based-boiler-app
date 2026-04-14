# React Native Boilerplate Instructions

## Core Principles

- Use TypeScript strictly (no `any`)
- Use functional components only
- Keep business logic outside UI
- Follow feature-based modular architecture

## Project Architecture

### App Layer (`src/app`)

Responsible for app-level setup only.

Contains:

- bootstrap → app initialization logic
- navigation → all navigators
- providers → global providers (theme, store)
- store → root store
- config → environment config

Rules:

- Do NOT add feature logic here
- Do NOT add API calls here

---

### Features Layer (`src/features`)

Each feature must be isolated and self-contained.

#### Structure:

feature/

- screens/
- components/
- hooks/
- services/ OR api/
- store/
- types/
- utils/

Rules:

- No cross-feature imports
- Use only shared/ for cross-feature reuse
- Business logic stays inside feature

---

### Shared Layer (`src/shared`)

Reusable, global-level modules only.

Contains:

- components → reusable UI (Button, Loader, etc.)
- hooks → generic hooks (useToggle, useNetwork)
- utils → helpers (date, number, logger, etc.)
- services → API client, interceptors, retry queue
- errors → error handling system
- themes → theme system
- store → global slices (e.g. loader)
- constants → app-wide constants
- types → global types
- integrations → external SDKs (firebase)

Rules:

- Must be generic (no feature-specific logic)
- Can be used anywhere

---

### Assets Layer (`src/assets`)

Contains:

- images
- icons
- fonts
- animations

Rules:

- No logic here
- Only static resources

---

### Naming Conventions

- Screens → `PascalCase + Screen`

  Example: `HomeScreen.tsx`

- Components → PascalCase

  Example: `Button.tsx`

- Hooks → camelCase starting with `use`

  Example: `useNetwork.ts`

- Files/Folders → `camelCase` (except components/screens)

---

### Component Rules

- One component per file
- Avoid components >150 lines
- No business logic inside components
- Extract logic into hooks

Bad:

```tsx
<Button onPress={() => login()} />
```

Good:

```tsx
const handleLogin = () => {
  login();
};

<Button onPress={handleLogin} />;
```

---

### Hooks Rules

- Encapsulate logic
- No UI inside hooks
- Reusable across components
- Place inside feature or shared

---

### API & Services

Feature-level APIs

- Place inside: `services/`

Global API system

- Use:
  - shared/services/apiClient.ts
  - shared/services/interceptors.ts
  - shared/services/retryQueue.ts

Rules:

- No API calls inside components

---

### State Management

- Feature state → inside feature/store
- Global state → shared/store

Rules:

- Avoid unnecessary global state
- Keep state close to usage

---

### Error Handling

Use centralized system:

- shared/errors/
  - errorHandler
  - errorMapper
  - parsers

Rules:

- Do not handle raw errors in components
- Always map errors before displaying

---

### Utilities

Use structured utility system:

- date/
- number/
- logger/
- toast/
- loaderHandler/

Rules:

- No duplicate utility functions
- Always reuse shared/utils

---

### Logging

Use structured logging:

```ts
console.log('[Auth] login success:', user);
```

Use shared logger when available.

---

### Styling

- Use theme system from `shared/themes`
- Avoid inline styles
- Use StyleSheet or theme-based styles

Bad:

```tsx
<View style={{ margin: 10 }} />
```

---

### Navigation

- All navigation inside `app/navigation`
- Do NOT define navigation inside features

---

### Imports

Order:

1. React / React Native
2. Third-party libs
3. shared/
4. features/
5. styles/types

Avoid deep relative paths.

---

### Performance

- Use React.memo for reusable components
- Use useCallback for handlers
- Avoid unnecessary re-renders
- Optimize FlatList properly

---

### Code Quality

- Follow ESLint strictly
- Fix all errors before commit
- Use Prettier formatting

---

### Prohibited Practices

- ❌ Inline styles
- ❌ API calls in components
- ❌ Cross-feature imports
- ❌ Large components with mixed responsibilities
- ❌ Duplicating utilities
