import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="block animate-fade-in">
      <article className="jiji-card group">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-foreground text-sm line-clamp-2 min-h-[2.5rem] mb-2">
            {product.title}
          </h3>
          <p className="jiji-price text-lg mb-1">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-1 jiji-location">
            <MapPin size={14} />
            <span>{product.location}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
