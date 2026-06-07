import SideBar from '../components/dashboard/SideBar'
import Feed from '../components/dashboard/Feed'

function DashboardPage(){
    return(
        <div className='bg-tertiary-color flex'>
            <SideBar/>
            <Feed/>
        </div>
        
    )
}

export default DashboardPage