import { FaBook, FaDesktop, FaUser, FaCog, FaTasks, FaEnvelope, FaEllipsisV } from "react-icons/fa" 
import { Link, NavLink } from "react-router-dom"

function SideBar(){

    const styles = 'text-secondary-color py-3 pr-5 flex items-center justify-start hover:bg-secondary-color/50 hover:rounded-lg mx-1.5 hover:text-tertiary-color duration-200 text-sm'
    let activeLink = ({isActive}) => 
        isActive ? 
        'text-secondary-color bg-secondary-color/50 rounded-lg text-tertiary-color py-3 my-1 pr-5 flex items-center justify-start hover:bg-secondary-color mx-1.5 hover:text-tertiary-color duration-200 text-sm' 
        : 
        "text-secondary-color py-3 pr-5 flex items-center justify-start hover:bg-secondary-color/50 hover:rounded-lg mx-1.5 hover:text-tertiary-color duration-200 text-sm"


    let activeLinkMaterial = ({isActive}) => 
        isActive ? 
        'text-secondary-color bg-secondary-color/50 rounded-lg text-tertiary-color py-2 my-1 pr-5 flex items-center justify-start hover:bg-secondary-color mx-1.5 hover:text-tertiary-color duration-200 text-sm' 
        : 
        "text-secondary-color py-3 pr-5 flex items-center justify-start hover:bg-secondary-color/50 hover:rounded-lg mx-1.5 hover:text-tertiary-color duration-200 text-sm"

    return(
        <div className="min-h-[100vh] w-[16vw] bg-primary-color flex flex-col justify-between">
        
            <div>
                <div className="text-center pt-3 flex items-center justify-start mr-6 mb-3">
                    <FaBook className="bg-secondary-color text-tertiary-color text-3xl px-2 py-1 ml-2 rounded-md max-md:text-2xl max-md:ml-1"/>
                    <a href="/" className="text-md font-bold text-tertiary-color ml-5 max-md:text-lg">
                        مُرتَّب
                    </a>
                </div>
                <hr className="mb-3 text-secondary-color/50"></hr>

                <ul>
                    <NavLink className={activeLinkMaterial} to="/dashboard"><li><span className="material-symbols-outlined text-xs ml-1 w-[22px] h-[23px] inline">space_dashboard</span></li>لوحة التحكم</NavLink>
                    {/* <li className={styles}><span className="material-symbols-outlined text-xs ml-1 w-[22px] h-[23px]">space_dashboard</span><Link to="/dashboard">لوحة التحكم</Link></li> */}
                    <NavLink className={activeLink} to="/users"><li><FaUser className="inline ml-2"/></li>المستخدمين</NavLink>
                    <NavLink className={activeLink} to="/site"><li><FaDesktop className="inline ml-2"/></li>الموقع</NavLink>
                    <NavLink className={activeLink} to="/students/mail"><li><FaEnvelope className="inline ml-2"/></li>الإيميل</NavLink>
                    <NavLink className={activeLink} to="/settings"><li><FaCog className="inline ml-2"/></li>الإعدادات</NavLink>
                    <NavLink className={activeLink} to="/courses"><li><FaTasks className="inline ml-2"/></li>الدورات</NavLink>
                </ul> 
            </div>

            <NavLink className="text-tertiary-color py-3 pr-6 border-1 border-secondary-color/50 flex items-center justify-between hover:bg-secondary-color/50 duration-200 text-sm" to="/account"><span>El Zero</span><FaEllipsisV className="ml-2"/></NavLink>

        </div>  
    )
}
export default SideBar