'use client';

import HeaderTitle from '@/ui/header-title/header-title';
import EmptyProudctList from '@/ui/empty-products-list/empty-products-list';
import ProductCard from '@/components/product-card/product-card';
import ProductCardTypeContainer from '@/components/product-card-type-container/product-card-type-container';
import { use_product_card_type_store } from '@/store/product-card-type.store';
import { ProductModel } from '@/models/product.model';
import clsx from 'clsx';

interface HomePageClientProps {
  products_list: ProductModel[];
}

export default function HomePageClient({ products_list }: HomePageClientProps) {
  const product_card_type = use_product_card_type_store(
    (state) => state.product_card_type,
  );

  return (
    <main className="flex flex-col w-full max-w-4xl gap-y-5 p-10 mx-auto">
      <HeaderTitle title="products list" />

      <ProductCardTypeContainer />

      {products_list.length === 0 && (
        <EmptyProudctList message="No products found" />
      )}

      {products_list.length > 0 && (
        <section
          className={`grid gap-5 ${clsx(
            product_card_type === 'default'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 lg:grid-cols-2',
          )}`}
        >
          {products_list.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              card_type={product_card_type}
            />
          ))}
        </section>
      )}
    </main>
  );
}
