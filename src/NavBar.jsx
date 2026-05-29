import { FaBook } from "react-icons/fa"

function NavBar(){

    return(
        <>
            <nav className="bg-tertiary-color/50 py-4 px-13 w-full flex justify-around fixed z-9 max-md:px-0 max-md:text-xs max-md:justify-around">
                <div>
                    <FaBook className="bg-secondary-color text-tertiary-color text-4xl px-2 py-2 inline rounded-md ml-3 max-md:text-2xl max-md:ml-1"/>
                    <a className="text-xl w-full h-full font-bold text-primary-color max-md:text-lg">
                        مُرتَّب
                    </a>
                </div>

                <div className="features pt-1.5 flex justify-around gap-7 max-md:gap-1 max-md:text-xs">
                    <a href="#features">المميزات</a>
                    <a href="#how">كيف يعمل</a>
                    <a href="#prices">الأسعار</a>
                    <a href="#FAQ">الأسئلة الشائعة</a>
                </div>

                <button className="px-4 bg-secondary-color text-tertiary-color rounded-xl font-medium hover:shadow-lg duration-300 hover:scale-101 cursor-pointer max-md:px-1 max-md:font-sm">تسجيل الدخول</button>
            </nav>
        </>
    )
}

export default NavBar