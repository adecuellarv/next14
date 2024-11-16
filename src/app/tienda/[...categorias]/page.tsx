interface CategoriasProps{
    params: {
        categorias: String
    }
}
export default function Categorias(props: CategoriasProps) {
    return (
        <div className="">
            <main className="">
                <h1>Categoria: {props?.params?.categorias}</h1>
            </main>
        </div>
    );
}
