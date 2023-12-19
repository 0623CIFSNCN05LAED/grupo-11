import { useEffect, useState } from "react";
import UsersItem from "./UsersItem";


function Users() {

    const [users, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3011/api/users")
            const result = await response.json()
            console.log("USUARIOS", result.users);
            setUser(result.users)
        }

        fetchData()
    }, [])

    return (
        <section className="content">
            <h2 className="mt-3">Usuarios</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <button type="button" className="list-group-item list-group-item-action active text-center"
                    aria-current="true">
                    Listado de usuarios
                </button>
                {users.length === 0 ?
                    "Cargando..." :
                    users.map((user) => (
                        <UsersItem
                            key={user.id}
                            name={user.name}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Users