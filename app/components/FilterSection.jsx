"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FilterSection() {
  const [showAvailability, setShowAvailability] = useState(false)
  const [showPrice, setShowPrice] = useState(false)
  const [showSort, setShowSort] = useState(false)
  const [selectedAvailability, setSelectedAvailability] = useState([])
  const [priceFrom, setPriceFrom] = useState(0)
  const [priceTo, setPriceTo] = useState(4490)

  const availabilityOptions = [
    { label: "In stock (108)", value: "in_stock", count: 108 },
    { label: "Out of stock (156)", value: "out_of_stock", count: 156 },
  ]

  const sortOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ]

  const handleAvailabilityChange = (value) => {
    setSelectedAvailability((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const resetAvailability = () => {
    setSelectedAvailability([])
  }

  const resetPrice = () => {
    setPriceFrom(0)
    setPriceTo(4490)
  }

  return (
    <div className="flex items-center justify-between mb-8 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-6">
        <span className="text-sm text-gray-600">Filter:</span>

        {/* Availability Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowAvailability(!showAvailability)}
            className="flex items-center space-x-1 cursor-pointer"
          >
            <span className="text-sm text-gray-700">Availability</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {showAvailability && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg z-10">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">{selectedAvailability.length} selected</span>
                  <button onClick={resetAvailability} className="text-sm text-gray-500 hover:text-gray-700">
                    Reset
                  </button>
                </div>
                <div className="space-y-2">
                  {availabilityOptions.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAvailability.includes(option.value)}
                        onChange={() => handleAvailabilityChange(option.value)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Price Dropdown */}
        <div className="relative">
          <button onClick={() => setShowPrice(!showPrice)} className="flex items-center space-x-1 cursor-pointer">
            <span className="text-sm text-gray-700">Price</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {showPrice && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg z-10">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">The highest price is Rs.4,490.00</span>
                  <button onClick={resetPrice} className="text-sm text-gray-500 hover:text-gray-700">
                    Reset
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">From</label>
                    <div className="flex items-center border border-gray-300">
                      <span className="px-3 py-2 text-sm text-gray-500">₨</span>
                      <input
                        type="number"
                        value={priceFrom}
                        onChange={(e) => setPriceFrom(Number(e.target.value))}
                        className="flex-1 px-3 py-2 text-sm border-0 focus:outline-none"
                        min="0"
                        max="4490"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">To</label>
                    <div className="flex items-center border border-gray-300">
                      <span className="px-3 py-2 text-sm text-gray-500">₨</span>
                      <input
                        type="number"
                        value={priceTo}
                        onChange={(e) => setPriceTo(Number(e.target.value))}
                        className="flex-1 px-3 py-2 text-sm border-0 focus:outline-none"
                        min="0"
                        max="4490"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="relative">
            <button onClick={() => setShowSort(!showSort)} className="flex items-center space-x-1 cursor-pointer">
              <span className="text-sm text-gray-700">Best selling</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {showSort && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowSort(false)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="text-sm text-gray-500">210 products</span>
      </div>
    </div>
  )
}
