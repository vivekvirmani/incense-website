import { useQuery } from "@tanstack/react-query"
import { fetchAbout } from "../api/about"
import { urlFor } from "../sanityImage"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function About() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  })

  if (isLoading) return <p className="text-center py-10">Loading...</p>

  return (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the essence of purity, tradition, and fragrance crafted with care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          {data?.image?.asset && (
            <motion.img
              src={urlFor(data.image).width(700).url()}
              alt="about"
              className="rounded-3xl shadow-xl w-full object-cover"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-yellow-500">
              {data?.title || "Crafting Fragrance with Passion"}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {data?.description ||
                "We create premium incense sticks using traditional methods and natural ingredients to bring peace, positivity, and divine aroma into your space."}
            </p>

            {/* CTA Button */}
            <Link
              to="/products"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Explore Products
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About