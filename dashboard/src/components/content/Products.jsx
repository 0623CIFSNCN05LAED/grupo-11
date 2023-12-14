import { useEffect, useState } from "react";
import ProductsItem from "./ProductsItem";


function Products() {

    const [products, setProtuct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            console.log(result.data);
            setProtuct(result.data)
        }

        fetchData()
    }, [])

    return (
        <section className="content">
            <h2 className="mt-3">Productos</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de Productos
                </button>
                {products.length === 0 ?
                    "Cargando..." :
                    products.map((product) => (
                        <ProductsItem
                            key={product.id}
                            price={product.price}
                            discount={product.discount}
                            product_name={product.product_name}
                            image={product.image}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Products