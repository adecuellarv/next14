import Link from "next/link"
import { getCollections } from "@/services/shopify/collections"
import { getProducts } from "@/services/shopify/products"
import Products from "@/components/Products/Products"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections = await getCollections()
    const products = await getProducts()

    return (
        <main className="flex flex-col px-16 mx-auto mt-10">
            <nav className="mt-5">
                <ul className="list-none p-0 m-0 flex flex-wrap gap-x-4 gap-y-4 mb-8">
                    {
                        collections?.map((collection: any) => (
                            <Link key={collection.id} href={'/tienda/' + collection.handle} className="bg-gradient-to-r from-purple-400 via-indigo-600 to-blue-800 rounded-3xl py-2 px-4 text-white font-bold no-underline">
                                {collection.title}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            <div>
                <Products products={products} />
            </div>
            {children}
        </main>
    )
}