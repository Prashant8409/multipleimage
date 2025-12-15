import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryDisplay from "@/components/CategoryDisplay";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();
  
  const MOBILE_PRODUCTS_PER_PAGE = 10;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const displayedProducts = useMemo(() => {
    if (isMobile) {
      return filteredProducts.slice(0, currentPage * MOBILE_PRODUCTS_PER_PAGE);
    }
    return filteredProducts;
  }, [filteredProducts, currentPage, isMobile]);

  const hasMoreProducts = isMobile && displayedProducts.length < filteredProducts.length;

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <CategoryDisplay />

      <main className="container py-4 md:py-6">
        <ProductGrid 
          products={displayedProducts} 
          hasMore={hasMoreProducts}
          onLoadMore={handleLoadMore}
        />
      </main>
    </div>
  );
};

export default Index;
