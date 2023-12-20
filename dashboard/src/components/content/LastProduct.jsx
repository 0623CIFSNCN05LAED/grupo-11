import { useEffect, useState } from "react";

function LastProduct () {

    const [lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            const last = result.products[result.products.length-1].name
            console.log(last);
            setLastProduct(last)
        }

        fetchData()
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