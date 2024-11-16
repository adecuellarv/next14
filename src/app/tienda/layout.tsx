import Link from "next/link"
import { getCollections } from "@/services/shopify/collections"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main className="">
      <h1>Explore</h1>
      <nav>
        <ul className="">
          {
            collections?.map((collection: any) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className="">
                {collection.title}
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}