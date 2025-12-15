import { useParams, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getProductById, formatPrice } from "@/data/products";
import ImageGallery from "@/components/ImageGallery";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header showBackButton onBack={() => navigate("/")} />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton onBack={() => navigate("/")} />

      <main className="container py-4 md:py-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden animate-fade-in p-4 md:p-6">
            {/* Product Image Gallery */}
            <ImageGallery images={product.images} title={product.title} />

            {/* Product Info */}
            <div className="pt-4 md:pt-6">
              <h1 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {product.title}
              </h1>

              <p className="text-2xl md:text-3xl jiji-price mb-4">
                {formatPrice(product.price)}
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin size={18} />
                <span>{product.location}</span>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <h2 className="font-semibold text-foreground mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Buy Now Button */}
              <Button
                onClick={() => navigate(`/address/${product.id}`)}
                className="jiji-btn-buy text-lg h-14"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
