import { motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query"
import { fetchStats } from "../api/stats"
import CountUp from "react-countup"

function Stats() {
  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  })

  if (isLoading) return <p className="text-center">Loading...</p>

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

       {data?.items?.map((item, index) => {
  if (!item) return null

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-yellow-400">
        {typeof item?.value === "number" ? (
          <CountUp end={item.value} duration={2}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        ) : (
          <span>0</span>
        )}
        +
      </h2>

      <p className="mt-2 text-gray-300">
        {item?.label || "N/A"}
      </p>
    </motion.div>
  )
})}

      </div>
    </section>
      )
}

export default Stats