import TotalProducts from "./content/TotalProducts"
import { useState, useEffect } from "react"
import TotalUsers from "./content/TotalUsers"

function HeaderWrap () {

    const [total, setTotal] = useState()
    const [totalUsers, setTotalUsers] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/products")
            const result = await response.json()
            const totalProducts = result.meta.total
            setTotal(totalProducts)
        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/users")
            const result = await response.json()
            const totalUsers = result.meta.total
            setTotalUsers(totalUsers)
        }

        fetchData()
    }, [])



    return(
        <div>
            <TotalProducts total={total} />
            <TotalUsers total={totalUsers}/>
        </div>
    )
}

export default HeaderWrap