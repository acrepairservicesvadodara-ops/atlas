"use client";

import { MessageCircle, Send } from "lucide-react";

interface WhatsAppEnquiryProps {
  productName: string;
  productSku?: string;
  productPrice?: number | string;
  className?: string;
  variant?: "primary" | "compact" | "card";
}

export default function WhatsAppEnquiry({
  productName,
  productSku,
  productPrice,
  className = "",
  variant = "primary",
}: WhatsAppEnquiryProps) {
  const phone = "919727257141";

  const priceText =
    typeof productPrice === "number"
      ? `₹${productPrice.toLocaleString("en-IN")}`
      : productPrice === "variable"
      ? "Price on request"
      : "";

  const message = `Hi Atlas Aircon! I'm interested in:\n\n*${productName}*${
    productSku ? `\nSKU: ${productSku}` : ""
  }${priceText ? `\nPrice: ${priceText}` : ""}\n\nPlease share more details and availability.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (variant === "card") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg font-medium transition ${className}`}
      >
        <Send className="w-3.5 h-3.5" />
        Enquiry
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold transition ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
        Send Enquiry
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="w-6 h-6" fill="white" />
      Send Enquiry on WhatsApp
    </a>
  );
}
