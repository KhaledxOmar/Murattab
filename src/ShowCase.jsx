import { FaCircle} from "react-icons/fa"
import dashBoardImg from '/src/assets/dashboard.png'


function ShowCase(){

    const boxes = 'bg-[#b3bfa7]/8 h-[240px] w-[280px] rounded-2xl border-[#b3bfa7]/15 border-1 hover:border-[#b3bfa7]/28 duration-200'
    const title = "text-tertiary-color/90 text-lg font-semibold mb-3"
    const body = "text-[#b3bfa7]/60 text-sm"

    return(
        <section className="bg-white pt-20 pb-25">
            <div className="flex justify-center">
                <h4 className="px-4 py-1 bg-[#f7fdf0] text-secondary-color rounded-2xl mb-8 text-center">
                <FaCircle className="inline text-xs ml-2 px-[1px]"/>
                    لوحة التحكم
                </h4>
            </div>
            <h1 className="text-center text-primary-color pb-5 text-5xl font-extrabold max-md:text-xl">
                هكذا ستبدو لوحة تحكمك
            </h1>
            
            <h5 className="text-center text-[#959d8d] pb-20">
                إدارة دوراتك وطلابك ومبيعاتك من مكان واحد آمن وسهل  
            </h5>

            <div className="flex justify-center items-center px-36 gap-3 max-md:px-5">
                <img src={dashBoardImg}/>
            </div>
        </section>
    )
}

export default ShowCase