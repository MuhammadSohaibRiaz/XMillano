import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    name: "MUGHAL & AZAM COLLECTION STITCHED SHALWAR WITH KAMEEZ - Navy",
    image: "/images/product1.webp",
    hoverImage: "/images/product1-detail1.webp",
    originalPrice: "Rs.4,980.00 PKR",
    salePrice: "Rs.3,490.00 PKR",
    badge: "Sale",
  },
  {
    id: 2,
    name: "SIMPLE KURTA TROUSER Stitched with Ban & Matching snap button - All Season",
    image: "/images/product2.webp",
    hoverImage: "/images/product2-detail1.webp",
    originalPrice: "Rs.4,000.00 PKR",
    salePrice: "Rs.2,690.00 PKR",
    badge: "Sold out",
  },
  {
    id: 3,
    name: "Premium Empty Packing Box",
    image: "/images/product3.webp",
    hoverImage: "/images/product3-detail1.webp",
    originalPrice: "Rs.1,000.00 PKR",
    salePrice: "Rs.300.00 PKR",
    badge: "Sold out",
  },
  {
    id: 4,
    name: "Formal Fall Mandarin Stitched Suit with Laser Badge - Egg White",
    image: "/images/product4.webp",
    hoverImage: "/images/product4-detail1.webp",
    originalPrice: "Rs.4,500.00 PKR",
    salePrice: "Rs.3,490.00 PKR",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Mughal & Azam Stitched All Season Suit with Gold Hook Buttons - Black",
    image: "/images/product5.webp",
    hoverImage: null, // No hover image - will use scale effect
    originalPrice: "Rs.4,500.00 PKR",
    salePrice: "Rs.3,690.00 PKR",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Embossed Gold Logo Collection Stitched All Season Blended Collar Suit - Black",
    image: "/images/product6.webp",
    hoverImage: "/images/product6-detail1.webp",
    originalPrice: "Rs.4,000.00 PKR",
    salePrice: "Rs.3,690.00 PKR",
    badge: "Sale",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
