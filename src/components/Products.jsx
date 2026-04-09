import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/products"
import { urlFor } from "../sanityImage"


function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {data?.map((item) => (
            <div
              key={item._id}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              {item.image && (
               <img
                src={urlFor(item.image).width(400).height(300).url()}
                alt={item.name}
                className="w-full h-64 object-cover"
/>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-yellow-500 font-bold mb-4">
                  ₹{item.price}
                </p>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Products