import { FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa"
import { useQuery } from "@tanstack/react-query"
import { fetchFooter } from "../api/footer"

function Footer() {
  const { data, isLoading } = useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooter,
  })

  if (isLoading) return null

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            {data?.companyName || "IncenseCo"}
          </h2>
          <p className="text-sm">
            {data?.description || "Premium incense crafted with tradition and purity for a peaceful lifestyle."}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Products</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">{data?.address || "Delhi, India"}</p>
          <p className="text-sm">{data?.phone || "+91 98765 43210"}</p>
          <p className="text-sm">{data?.email || "contact@incenseco.com"}</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">

            {/* Website */}
            {data?.website ? (
              <a href={data.website} target="_blank" rel="noreferrer">
                <FaGlobe className="hover:text-yellow-400 cursor-pointer" />
              </a>
            ) : (
              <span title="Coming Soon" className="opacity-60 cursor-not-allowed">
                <FaGlobe />
              </span>
            )}

            {/* Instagram */}
            {data?.instagram ? (
              <a href={data.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
              </a>
            ) : (
              <span title="Coming Soon" className="opacity-60 cursor-not-allowed">
                <FaInstagram />
              </span>
            )}

            {/* Twitter */}
            {data?.twitter ? (
              <a href={data.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
              </a>
            ) : (
              <span title="Coming Soon" className="opacity-60 cursor-not-allowed">
                <FaTwitter />
              </span>
            )}

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} {data?.companyName || "IncenseCo"}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer