import SideBar from '../components/dashboard/SideBar'
import Feed from '../components/dashboard/Feed'
import Chart from '../components/dashboard/Chart'
import Statistics from '../components/dashboard/Statistics'
function DashboardPage(){
    return(
        <div className='bg-tertiary-color flex min-h-screen'>
            <SideBar/>
            <div>
                <Chart/>
                <Statistics/>
            </div>
            <Feed/>
        </div>
        
    )
}

export default DashboardPage