import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useQuery } from "@tanstack/react-query"
import { fetchTestimonials } from "../api/testimonials"

function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  })

  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    if (!data || data.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [data])

  // Loading state
  if (isLoading) return <p className="text-center">Loading...</p>

  // Safety check
  if (!data || data.length === 0) {
    return <p className="text-center">No testimonials available</p>
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <p className="text-gray-600 mb-4">
              "{data[index]?.text}"
            </p>

            <h4 className="font-semibold">
              - {data[index]?.name}
            </h4>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-300"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  )
}

export default Testimonials