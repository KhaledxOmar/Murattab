import { FaChartLine, FaDollarSign, FaCartShopping } from "react-icons/fa6"
import riyal from '../../assets/Saudi_Riyal.svg'; // Path to your file


function Statistics(){

    return(
        <div className='flex justify-between w-[114vh] h-[95vh] px-1 mt-8 mr-11'>

            {/* day statistics */}
            <div className="flex flex-col">
                <p className="mr-1 mb-3 font-bold text-lg text-primary-color">اليوم</p>
                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>
                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الإيرادات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaDollarSign className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mt-1.5"/>
                    
                </div>

                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الأرباح</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>

                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>

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
            <div className="flex flex-col">
                <p className="mr-1 mb-3 font-bold text-lg text-primary-color">هذا الشهر</p>
                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>
                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الإيرادات</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaDollarSign className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mt-1.5"/>
                    
                </div>

                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>

                    <div className="w-100">
                        <p className="text-sm text-secondary-color mb-1 text-start">الأرباح</p>
                        <p className="text-xl text-primary-color font-semibold flex">
                            <p className="pl-1.5 mr-0.5">540</p>
                            <img src={riyal} className="" alt="My downloaded icon" width="18" height="18" />
                        </p>

                    </div>

                    <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    
                </div>

                <div className='w-95 bg-white text-center h-27 mb-8 rounded-xl flex justify-between pt-6 px-6'>

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