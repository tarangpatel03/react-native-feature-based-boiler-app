# Import Rules

## Goal

Keep layers isolated and prevent hidden coupling.

## Dependency direction

```txt
modules -> features -> entities -> shared
app -> everything
```

## Rules

### `shared`

- must not import from `entities`, `features`, or `modules`

### `entities`

- can import from `shared`
- can import from same entity using relative imports
- should not import from `features` or `modules`

### `features`

- can import from `shared`
- can import from `entities`
- can import from itself using relative imports
- should not deep-import from another feature

### `modules`

- can import from `shared`
- can import from `entities`
- can import from `features`
- can import from itself using relative imports

## Public API imports

Use `index.ts` as the public API.

Good:

```ts
import { ProductCard } from "@/entities/product";
import { ChatStack } from "@/features/chat";
```

Avoid:

```ts
import { ProductCard } from "@/entities/product/components/ProductCard";
import { ChatStack } from "@/features/chat/navigation/ChatStack";
```

## Internal imports

Inside the same layer folder, use relative imports.

Good:

```ts
import { HomeHeader } from "../components/HomeHeader";
```

## Home/composition screen rule

Composition features like `home` can assemble public pieces from `entities` and `features`, but should not own their internal business logic.
