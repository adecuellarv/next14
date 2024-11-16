import { getProducts } from "@/services/shopify/products"
import { getCollectionProducts } from "@/services/shopify/collections"
import Products from "@/components/Products/Products"

interface CategoriasProps {
    params: {
        categorias: String
    },
    searchParams: {
        id: string
    }
}
export default async function Categorias(props: CategoriasProps) {
    let products = [];
    const id = props?.searchParams.id
    if (props?.params?.categorias) products = await getCollectionProducts(id)
    else products = await getProducts()
    return (
        <div className="">
            <main className="">
                <h1>Categoria: {props?.params?.categorias}</h1>
            </main>
            <div>
                <Products products={products} />
            </div>
        </div>
    );
}
