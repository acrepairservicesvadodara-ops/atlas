import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import WhatsAppEnquiry from "./WhatsAppEnquiry";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const priceDisplay =
    typeof product.price === "number"
      ? `₹${product.price.toLocaleString("en-IN")}`
      : "Get Quote";

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group flex flex-col">
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.images[0] || "/og-image.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
        />
        {product.tags && product.tags[0] && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
            {product.tags[0]}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition text-sm sm:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
        <p className="text-gray-600 text-xs line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-yellow-400"
              fill={i < 4 ? "currentColor" : "none"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">4.8</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-gray-100">
          <span className="text-lg font-bold text-blue-600">
            {priceDisplay}
          </span>
          <WhatsAppEnquiry
            productName={product.name}
            productSku={product.sku}
            productPrice={product.price}
            variant="card"
          />
        </div>
      </div>
    </div>
  );
}
