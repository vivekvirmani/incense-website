import { useQuery } from "@tanstack/react-query"
import { fetchHero } from "../api/hero"
import { urlFor } from "../sanityImage"
import { Link } from "react-router-dom"

function Hero() {
  const { data, isLoading } = useQuery({
    queryKey: ["hero"],
    queryFn: fetchHero,
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <section
      className="relative text-white py-32 px-6 text-center bg-cover bg-center"
      style={{
        backgroundImage: data?.image
          ? `url(${urlFor(data.image).url()})`
          : "none",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {data?.title || "Default Title"}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          {data?.subtitle || "Default Subtitle"}
        </p>

        <Link to="/products" className="hover:text-black cursor-pointer bg-yellow-500 px-6 py-3 rounded-full font-semibold"> Explore Products</Link>
      </div>
    </section>
  )
}

export default Hero