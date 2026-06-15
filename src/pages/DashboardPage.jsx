import { useState } from 'react'
import SideBar from '../components/dashboard/SideBar'
import Feed from '../components/dashboard/Feed'
import Chart from '../components/dashboard/Chart'
import Statistics from '../components/dashboard/Statistics'

function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-tertiary-color overflow-x-scroll">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 flex gap-6 p-6 pr-70 max-[800px]:flex-col max-[800px]:pr-4">
        <div className="flex-1 flex flex-col gap-4">
          <Chart onMenuClick={() => setIsSidebarOpen(true)} />
          <Statistics />
        </div>
        <Feed />
      </main>
    </div>
  )
}

export default DashboardPage