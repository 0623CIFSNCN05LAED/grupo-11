import HeaderWrap from "./HeaderWrap"
import Products from "./content/Products"
import Users from "./content/Users"

function ContentWrap () {
    return (
		<main className="content-wrap" style={{maxHeight: "calc(100vh - 6rem)"}}>
            <HeaderWrap/>
            <Products/>
            <Users/>
        </main>
    )
}

export default ContentWrap