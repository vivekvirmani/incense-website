import { useQuery } from "@tanstack/react-query"
import { fetchAbout } from "../api/about"
import { urlFor } from "../sanityImage"

function About() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        {data?.image && (
          <img
            src={urlFor(data.image).width(600).url()}
            alt="about"
            className="rounded-2xl shadow-md"
          />
        )}

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            {data?.title || "About Us"}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {data?.description || "Default about content"}
          </p>
        </div>

      </div>
    </section>
  )
}

export default About