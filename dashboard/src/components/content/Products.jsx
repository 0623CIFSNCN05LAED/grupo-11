import { useEffect, useState } from "react";
import UsersItem from "./UsersItem";


function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            console.log("PRODUCTOS", result.products);
            setProducts(result.products)
        }

        fetchData()
    }, [])

    return (
        <section className="content">
            <h2 className="mt-3">Productos</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de productos
                </button>
                {products.length === 0 ?
                    "Cargando..." :
                    products.map((product) => (
                        <UsersItem 
                            key={product.id}
                            name={product.name}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Products