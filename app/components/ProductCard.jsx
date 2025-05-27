"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const hasHoverImage = product.hoverImage && product.hoverImage !== product.image

  return (
    <Link href={`/products/${product.id}`} className="group cursor-pointer block">
      <div
        className="relative overflow-hidden bg-gray-50 aspect-[3/4] mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasHoverImage ? (
          <>
            {/* Primary Image */}
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
            />

            {/* Hover Image */}
            <Image
              src={product.hoverImage || "/placeholder.svg"}
              alt={product.name}
              fill
              className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
            />
          </>
        ) : (
          /* Single Image with Scale Effect */
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
          />
        )}

        {/* Badge */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`px-3 py-1 text-xs font-medium text-white ${
              product.badge === "Sale" ? "bg-black" : "bg-gray-600"
            }`}
          >
            {product.badge}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-sm text-gray-900 leading-tight line-clamp-2">{product.name}</h3>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
          <span className="text-sm font-medium text-gray-900">{product.salePrice}</span>
        </div>
      </div>
    </Link>
  )
}
