import Image from "next/image";
import Link from "next/link";

interface ProductsWrapperProps {
    products: ProductType[]
}

const Products = ({ products }: ProductsWrapperProps) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {products.map((product, key) => (
                    <div key={key} className="">
                        <Link href={`/producto/${product.handle}?id=${product.id}`}>
                            <Image
                                src={product.image}
                                alt={product.title}
                                quality={80}
                                layout="responsive"
                                width={500}
                                height={300}
                                loading="eager"
                            />
                        </Link>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Products;