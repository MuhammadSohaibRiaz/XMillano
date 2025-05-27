import Header from "./components/Header"
import ProductGrid from "./components/ProductGrid"
import FilterSection from "./components/FilterSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-light mb-8">All</h1>

          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Size</span>
              <select className="border border-gray-300 px-4 py-2 rounded-none bg-white min-w-[120px]">
                <option>All Sizes</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          <FilterSection />
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
