"use client"
import { useState } from "react"
import Image from "next/image"
import Header from "../../components/Header"
import { Minus, Plus, Share } from "lucide-react"

const productData = {
  1: {
    id: 1,
    name: "MUGHAL E AZAM COLLECTION STITCHED SHALWAR WITH KAMEEZ",
    color: "Navy",
    sku: "mst50",
    originalPrice: "Rs.4,980.00 PKR",
    salePrice: "Rs.3,490.00 PKR",
    badge: "Sale",
    images: ["/images/product1.webp", "/images/product1-detail1.webp"],
    features: [
      "Cut shorter above the knee.",
      "Ban & cuffed sleeves",
      "Premium All Season Fall Fabric",
      "Blended Wash & Wear",
    ],
    shalwarFeatures: ["Modern Style Shalwar", "Round Hem", "Premium All Season Fall Fabric"],
  },
  2: {
    id: 2,
    name: "SIMPLE KURTA TROUSER",
    color: "All Season",
    sku: "skt01",
    originalPrice: "Rs.4,000.00 PKR",
    salePrice: "Rs.2,690.00 PKR",
    badge: "Sold out",
    images: ["/images/product2.webp", "/images/product2-detail1.webp"],
    features: ["Ban & Matching snap button", "All Season fabric", "Comfortable fit", "Premium quality"],
    shalwarFeatures: ["Modern Style", "Comfortable fit", "All Season fabric"],
  },
  3: {
    id: 3,
    name: "Premium Empty Packing Box",
    color: "Black",
    sku: "peb01",
    originalPrice: "Rs.1,000.00 PKR",
    salePrice: "Rs.300.00 PKR",
    badge: "Sold out",
    images: ["/images/product3.webp", "/images/product3-detail1.webp"],
    features: ["Premium packaging", "Elegant design", "Perfect for gifts", "Durable material"],
    shalwarFeatures: ["Gift ready", "Premium finish", "Elegant presentation"],
  },
  4: {
    id: 4,
    name: "Formal Fall Mandarin Stitched Suit with Laser Badge",
    color: "Egg White",
    sku: "fms01",
    originalPrice: "Rs.4,500.00 PKR",
    salePrice: "Rs.3,490.00 PKR",
    badge: "Sale",
    images: ["/images/product4.webp", "/images/product4-detail1.webp"],
    features: ["Laser badge detail", "Mandarin collar", "Fall fabric", "Formal design"],
    shalwarFeatures: ["Tailored fit", "Premium fabric", "Elegant finish"],
  },
  5: {
    id: 5,
    name: "Mughal & Azam Stitched All Season Suit with Gold Hook Buttons",
    color: "Black",
    sku: "mas01",
    originalPrice: "Rs.4,500.00 PKR",
    salePrice: "Rs.3,690.00 PKR",
    badge: "Sale",
    images: ["/images/product5.webp"],
    features: ["Gold hook buttons", "All season fabric", "Mughal design", "Premium stitching"],
    shalwarFeatures: ["Traditional style", "Modern fit", "Premium fabric"],
  },
  6: {
    id: 6,
    name: "Embossed Gold Logo Collection Stitched All Season Blended Collar Suit",
    color: "Black",
    sku: "egl01",
    originalPrice: "Rs.4,000.00 PKR",
    salePrice: "Rs.3,690.00 PKR",
    badge: "Sale",
    images: ["/images/product6.webp", "/images/product6-detail1.webp"],
    features: ["Embossed gold logo", "Blended collar", "All season fabric", "Premium quality"],
    shalwarFeatures: ["Designer collar", "Premium blend", "Elegant finish"],
  },
}

export default function ProductDetail({ params }) {
  const [selectedSize, setSelectedSize] = useState("S")
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Get the actual product ID from params
  const productId = Number.parseInt(params.id)
  const product = productData[productId]

  // If product not found, show error or redirect
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  const sizes = ["XS", "S", "M", "L", "XL"]

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg?height=600&width=480"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-[4/5] bg-gray-50 cursor-pointer overflow-hidden border-2 ${
                      currentImageIndex === index ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=200&width=160"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* SKU */}
            <div className="text-sm text-gray-500">{product.sku}</div>

            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-light text-gray-900 leading-tight">
                {product.name} - {product.color}
              </h1>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              <span className="text-2xl font-medium text-gray-900">{product.salePrice}</span>
              {product.badge && (
                <span className="bg-black text-white px-3 py-1 text-sm font-medium">{product.badge}</span>
              )}
            </div>

            {/* Size Chart Link */}
            <div>
              <button className="text-sm text-gray-900 underline hover:no-underline">Size Chart</button>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="flex items-center border border-gray-300 w-32">
                <button onClick={decrementQuantity} className="p-3 hover:bg-gray-50 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center py-3 border-x border-gray-300">{quantity}</span>
                <button onClick={incrementQuantity} className="p-3 hover:bg-gray-50 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white border border-gray-900 text-gray-900 py-4 px-6 hover:bg-gray-50 transition-colors font-medium">
                Add to cart
              </button>
              <button className="w-full bg-black text-white py-4 px-6 hover:bg-gray-800 transition-colors font-medium">
                Buy it now
              </button>
            </div>

            {/* Product Features */}
            <div className="space-y-6 pt-8">
              <div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Shalwar</h4>
                <ul className="space-y-2">
                  {product.shalwarFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share Button */}
              <button className="flex items-center space-x-2 text-sm text-gray-900 hover:text-gray-700 transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
