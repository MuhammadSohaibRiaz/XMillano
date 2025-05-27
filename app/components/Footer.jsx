import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-black border-b-2 border-black">1</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">2</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">3</button>
            <span className="px-3 py-2 text-sm text-gray-400">...</span>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">5</button>
          </div>

          <button className="p-2 text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500 space-x-4">
          <span>© 2025, xMilano Powered by Shopify</span>
          <span>•</span>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Refund policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Privacy policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-700 transition-colors">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  )
}
