import { getProducts } from "@/services/shopify/products"
import Products from "@/components/Products/Products"
export default async function Tienda() {
  const products = await getProducts()
  return (
    <div className="">
      <main className="">
        <Products products={products} />
      </main>

    </div>
  );
}
