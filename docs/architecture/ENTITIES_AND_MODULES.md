# Entities and Modules Guide

## When to introduce `entities`

Create an entity when the code represents a reusable domain concept used across multiple features.

Typical signs:

- same model appears in multiple features
- same card/list item UI is reused in multiple places
- same queries or mappers are reused
- domain logic is spreading across features

Examples:

- `user`
- `product`
- `auction`
- `message`
- `order`

## Do not create an entity for

- one screen only UI
- navigation stacks
- multi-step flows
- page-only logic

Examples:

- `HomeBanner`
- `ProfileHeaderBackground`
- `CheckoutSummaryScreen`

## Entity folder structure

```txt
entities/
  product/
    components/
      ProductCard.tsx
      ProductPrice.tsx
    queries/
      productKeys.ts
      useProduct.ts
      useProducts.ts
    types/
      product.types.ts
    utils/
      product.mapper.ts
      product.format.ts
    constants/
      product.constants.ts
    index.ts
```

## Entity responsibilities

Entities may contain:

- types
- query hooks
- query keys
- domain mappers
- reusable domain UI
- constants
- domain formatting helpers

Entities should not contain:

- screens
- navigation
- large workflows
- unrelated app-specific state

---

## When to introduce `modules`

Create a module when the flow is too large for a single feature and coordinates multiple domains.

Typical signs:

- multi-step process
- spans multiple screens
- uses multiple entities/features
- reused from multiple entry points
- needs temporary orchestration state

Examples:

- `checkout`
- `onboarding`
- `claimFlow`
- `sellerFlow`

## Do not create a module for

- a simple feature
- a single screen
- UI-only composition
- a standard domain feature

Examples that should stay features:

- `chat`
- `auth`
- `profile`
- `home`

## Module folder structure

```txt
modules/
  checkout/
    screens/
      CheckoutScreen.tsx
      PaymentScreen.tsx
      SuccessScreen.tsx
    navigation/
      CheckoutStack.tsx
    hooks/
      useCheckoutFlow.ts
    services/
      checkout.service.ts
    store/
      checkout.slice.ts
    types/
      checkout.types.ts
    utils/
      checkout.mapper.ts
    index.ts
```

## Module responsibilities

Modules coordinate:

- multiple features/entities
- step transitions
- temporary flow state
- cross-domain validations
- cross-domain API orchestration

## Simple rule

- Reusable business object -> `entity`
- User capability -> `feature`
- Multi-step workflow -> `module`
