import { FaBook } from "react-icons/fa"

function NavBar(){

    return(
        <>
            <div className="bg-[#d6ffae90] py-4 px-13 w-full flex justify-around fixed">
                <div className="inline">
                    <FaBook className="bg-[#92B66E] text-[#EAFADA] text-4xl px-2 py-2 inline rounded-md ml-3"/>
                    <a className="text-xl w-full h-full font-bold text-[#2B3B1B]">
                        مُرتَّب
                    </a>
                </div>

                <div className="features pt-1.5 flex justify-around gap-7">
                    <a href="">المميزات</a>
                    <a href="">كيف يعمل</a>
                    <a href="">الأسعار</a>
                    <a href="">الأسئلة الشائعة</a>
                </div>

                <button className="px-4 bg-[#92B66E] text-[#EAFADA] rounded-xl font-medium hover:shadow-lg duration-300 cursor-pointer">تسجيل الدخول</button>
            </div>
        </>
    )
}

export default NavBar