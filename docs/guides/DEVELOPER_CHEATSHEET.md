# Developer CheatSheet

## Quick decisions

| Situation              | Put it in             |
| ---------------------- | --------------------- |
| reusable domain object | `entities`            |
| user capability        | `features`            |
| multi-step flow        | `modules`             |
| generic UI primitive   | `shared/ui`           |
| small pure helper      | `shared/utils`        |
| wrapper around library | `shared/lib`          |
| api infrastructure     | `shared/network`      |
| external sdk setup     | `shared/integrations` |

## Layer dependency rule

```txt
modules -> features -> entities -> shared
app -> everything
```

## Feature structure reminder

```txt
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

## Query reminders

- GET -> `useQuery`
- POST/PUT/PATCH/DELETE -> `useMutation`
- keep query keys in factories
- invalidate related queries after mutations

## Remote config reminder

- use for feature flags
- keep keys centralized
- fetch once on startup
- set defaults

## Import reminder

- same feature/entity/module -> relative imports
- outside layer -> import from public API (`index.ts`)
- do not deep-import from another feature
