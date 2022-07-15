import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishList: (id: number) => void
}

export function SearchResult({ results, onAddToWishList, totalPrice }: SearchResultProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product}  onAddToWishList={onAddToWishList} />
        )
      })}
    </div>
  )
}