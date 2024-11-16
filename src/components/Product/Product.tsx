import Image from "next/image";
import Link from "next/link";

interface ProductWrapperProps {
    product: ProductType[]
}

const Product = ({ product }: ProductWrapperProps) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <h1>Producto</h1>

            </div>
        </>
    )
}

export default Product;