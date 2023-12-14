import './Dashboard.css'
import ContentWrap from './ContentWrap'
import SearchWrap from './SearchWrap'
import MenuWrap from './MenuWrap'

function DashBoard(){
    return(
        <div className="dashboard">
            <SearchWrap/>
            <MenuWrap/>
            <ContentWrap/>
        </div>
    )
}

export default DashBoard