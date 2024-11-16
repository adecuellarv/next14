import Image from "next/image";
import { SanitizeHTML } from "@/components/shared/SanitizeHTML";

interface ProductWrapperProps {
    product: ProductType
}

const Product = ({ product }: ProductWrapperProps) => {
    return (
        <>
            <main className="max-w-screen-xl mx-auto grid grid-cols-[1fr_450px] gap-20 mt-20">
                <section className="justify-self-end">
                    <Image
                        loading="eager"
                        src={product.image}
                        width={500}
                        height={500}
                        quality={80}
                        alt={product.title}
                        className="rounded-sm"
                    />
                </section>
                <section className="flex flex-col">
                    <h1 className="text-2xl font-bold mt-0 mb-2">{product.title}</h1>
                    <p className="w-fit text-xl leading-6 tracking-tight border-2 border-main-contrast text-text-color shadow-[0_0_7px_var(--main-contrast),0_0_10px_var(--main-contrast),0_0_21px_var(--main-contrast)] py-2 px-4 rounded-xl mt-4 mb-0">{product.tags}</p>
                    <SanitizeHTML tag="p">
                        {product.description}
                    </SanitizeHTML>
                    <span className="text-3xl font-bold text-secondary">
                        $ {product.price}
                    </span>
                </section>
            </main>
        </>
    )
}

export default Product;