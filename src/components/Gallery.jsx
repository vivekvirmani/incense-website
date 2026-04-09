import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query"
import { fetchGallery } from "../api/gallery"
import { urlFor } from "../sanityImage"

function Gallery() {
  const { data, isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
  })

  if (isLoading) return <p className="text-center">Loading...</p>

  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {data?.images?.map((img, index) => (
            <motion.img
              key={index}
              src={urlFor(img).width(400).height(300).url()}
              alt="gallery"
              whileHover={{ scale: 1.1 }}
              className="rounded-lg object-cover h-60 w-full"
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Gallery