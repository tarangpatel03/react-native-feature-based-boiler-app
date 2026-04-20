# DTO

## Ex: Product

### Raw backend shape

```ts
type ProductDto = {
  id: string;
  product_name: string;
  image_url: string | null;
  auction_price: number;
};
```

### App model

What UI/features use

```ts
type Product = {
  id: string;
  name: string;
  imageUrl: string | null;
  price: number;
};
```

### Mapper

Converts DTO → app model

```ts
export const mapProductDto = (dto: ProductDto): Product => ({
  id: dto.id,
  name: dto.product_name,
  imageUrl: dto.image_url,
  price: dto.auction_price,
});
```

### For list response

```ts
export const mapProductListDto = (dtos: ProductDto[]): Product[] =>
  dtos.map(mapProductDto);
```

### Folder structure example

```txt
entities/
  product/
    types/
      product.types.ts
      product.dto.ts
    utils/
      product.mapper.ts
```
