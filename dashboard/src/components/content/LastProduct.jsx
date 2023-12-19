import { useEffect, useState } from "react";

function LastProduct () {

    const [products, setProtuct] = useState([])
    const [lastProduct, setLastProduct] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            console.log(result.products);
            setProtuct(result.products)
        }

        const getLastProduct = () => {
            const last = products[products.length - 1];
            setLastProduct(last.name)
        }

        fetchData()
        getLastProduct()
    }, [])

    return (
        <section className="content">
            <h2 className="mt-3">Último producto</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button type="button" className="list-group-item list-group-item-action text-center">
                {lastProduct}
            </button>
            </div>
        </section>
    )
}

export default LastProduct