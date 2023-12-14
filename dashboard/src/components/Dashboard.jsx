import './Dashboard.css'
import Products from './content/Products'
import Users from './content/Users'

function DashBoard(){
    return(
        <div className="dashboard">
           <Products/>
           <Users/>
        </div>
    )
}

export default DashBoard