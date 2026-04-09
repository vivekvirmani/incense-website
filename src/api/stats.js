import { client } from "../sanityClient"

export const fetchStats = async () => {
  return await client.fetch(`*[_type == "stats"][0]`)
}