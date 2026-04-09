import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "3eh2jial",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})