import { FaChartLine, FaDollarSign, FaCartShopping } from "react-icons/fa6"
import riyal from '../../assets/Saudi_Riyal.svg'; // Path to your file


function Statistics(){

    const boxes = 'w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6 max-[1500px]:w-80 max-[1400px]:w-70 max-[1300px]:w-50 max-[1150px]:w-95'
    return(
        <div className='flex justify-between h-[95vh] px-7 mt-8 max-[1150px]:flex-col min-[1835px]:px-40'>

            {/* day statistics */}
            <div className="flex flex-col max-[800px]:items-center">
                <p className="mr-1 mb-3 font-bold text-lg text-primary-color">اليوم</p>

                <div className={boxes}>
                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الإيرادات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaDollarSign className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mt-1.5"/>
                    
                </div>

                <div className={boxes}>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الأرباح</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>

                <div className={boxes}>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">المبيعات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">6 كورسات</p>
                        </p>

                    </div>

                    <FaCartShopping className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>
            </div>

            {/* month statistics */}
            <div className="flex flex-col max-[800px]:items-center">
                <p className="mr-1 mb-3 font-bold text-lg text-primary-color">هذا الشهر</p>
                <div className={boxes}>
                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الإيرادات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaDollarSign className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mt-1.5"/>
                    
                </div>

                <div className={boxes}>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الأرباح</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>

                <div className={boxes}>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">المبيعات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">12 كورس</p>
                        </p>

                    </div>

                    <FaCartShopping className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>
            </div>
            
            
        </div>
    )
}
export default Statistics