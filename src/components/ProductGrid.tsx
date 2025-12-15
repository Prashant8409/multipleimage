import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  title?: string;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

const ProductGrid = ({ 
  products, 
  title = "Trending Ads",
  hasMore = false,
  onLoadMore 
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No products found</p>
        <p className="text-muted-foreground text-sm mt-2">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <span className="text-sm text-muted-foreground">{products.length} items</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && onLoadMore && (
        <div className="flex justify-center mt-6">
          <Button 
            onClick={onLoadMore}
            className="jiji-btn-buy px-8"
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
