import TotalProducts from "./content/TotalProducts"
import { useState, useEffect } from "react"

function HeaderWrap () {

    const [total, setTotal] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            const totalProducts = result.meta.total
            setTotal(totalProducts)
        }

        fetchData()
    }, [])

    return(
        <div>
            <TotalProducts total={total} />
        </div>
    )
}

export default HeaderWrap