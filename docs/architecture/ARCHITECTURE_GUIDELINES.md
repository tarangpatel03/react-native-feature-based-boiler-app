# Architecture Guidelines

## Purpose

This document explains how to structure the codebase as it grows.

Use it to decide:

- what belongs in `features`
- when to introduce `entities`
- when to introduce `modules`
- what belongs in `shared`
- how layer dependencies should flow

## Architecture overview

```txt
src/
  app/
  modules/
  features/
  entities/
  shared/
```

Dependency direction:

```txt
modules -> features -> entities -> shared
app -> everything
```

| Layer      | Responsibility                                          |
| ---------- | ------------------------------------------------------- |
| `app`      | bootstrap, providers, root navigation, app-level wiring |
| `modules`  | multi-step workflows                                    |
| `features` | user capabilities and composition screens               |
| `entities` | reusable domain models and domain UI                    |
| `shared`   | reusable technical foundation                           |

## What belongs where

### `app`

Use for:

- bootstrap
- root providers
- root navigation
- app config
- session restore setup
- startup orchestration

### `features`

Use for:

- screens
- feature navigation
- feature-specific queries
- feature-specific services
- feature-specific store
- screen composition

Examples:

- auth
- chat
- profile
- support
- home

### `entities`

Use for reusable domain concepts.

Examples:

- product
- user
- auction
- message
- order

### `modules`

Use for complex multi-step flows spanning multiple domains.

Examples:

- checkout
- onboarding
- claimFlow
- sellerFlow

### `shared`

Use for reusable technical pieces.

Examples:

- ui primitives
- hooks
- utils
- lib
- network
- integrations
- theme
- config

## Rules

- Do not deep-import from another feature.
- Do not put screen-specific UI into `shared`.
- Do not put screens or navigation inside `entities`.
- Do not create `modules` too early.
- Use `index.ts` as public API for each feature/entity/module.
- Keep business/domain reuse in `entities`, not in random shared folders.

## Quick decision rules

| Question                               | Use       |
| -------------------------------------- | --------- |
| Is it a user capability?               | `feature` |
| Is it a reusable domain object?        | `entity`  |
| Is it a multi-step cross-feature flow? | `module`  |
| Is it a generic technical helper?      | `shared`  |

## Public API rule

Outside a layer, import only from its `index.ts`.

Good:

```ts
import { ChatStack } from '@/features/chat';
import { ProductCard } from '@/entities/product';
```

Avoid:

```ts
import { useMessages } from '@/features/chat/queries/useMessages';
import { ProductCard } from '@/entities/product/components/ProductCard';
```
