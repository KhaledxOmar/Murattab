import { FaArrowLeft, FaPlayCircle, FaCircle } from "react-icons/fa"

function Hero() {


    return(
        <section className="bg-tertiary-color flex flex-col justify-start pt-35 pb-35 items-center min-h-[90vh] max-md:min-h-[80vh] max-[1920px]:min-h-[60vh] min-[1921px]:h-[60vh] min-[1921px]:pt-50">
            <h4 className="px-4 py-1 bg-[#f7fdf0] text-secondary-color rounded-2xl mb-8">
            <FaCircle className="inline text-xs ml-2 px-[1px]"/>
            منصة عربية متكاملة لبيع الدورات
            </h4>

            <h1 className="text-primary-color text-7xl font-extrabold mb-4 max-md:text-3xl max-lg:text-4xl min-[1921px]:text-8xl min-[1921px]:mb-6">
                أنشئ أكاديميتك
            </h1>

            <h1 className="text-secondary-color text-7xl font-extrabold mb-6 max-md:text-3xl max-lg:text-4xl min-[1921px]:text-8xl min-[1921px]:mb-10">
                وابدأ ببيع دوراتك
            </h1>

            <h6 className="text-[#778767] text-center max-md:text-sm max-md:max-w-[300px] min-[1921px]:text-lg">
                مُرتَّب منصة سهلة الاستخدام تمكّنك من رفع دوراتك ومنتجاتك الرقمية وبيعها خلال دقائق <br />
                 بدون أي خبرة تقنية
            </h6>

            <div className="flex gap-3 mt-9">
                
                <button className="bg-secondary-color px-8 py-2 rounded-xl text-tertiary-color hover:scale-101 hover:shadow-lg duration-300 cursor-pointer">
                    <span>
                        <a href="/register">ابدأ مجاناً</a>
                    
                    </span>
                    <FaArrowLeft className="inline mr-2.5 mb-[0.18rem]"/>
                </button>

                <button className="bg-tertiary-color px-8 py-2 rounded-xl text-primary-color border-2 border-[#c4d4b3] font-medium hover:border-secondary-color hover:text-secondary-color duration-300 cursor-pointer">
                    <span>
                    شاهد كيف يعمل
                    </span>

                    <FaPlayCircle className="inline mr-2.5 mb-0.5"></FaPlayCircle>
                </button>
            </div>

            <div className="bg-tertiary-color mt-8 border-7 border-white rounded-xl w-[50rem] h-[70px] flex flex-col items-center justify-center max-md:w-[25rem] max-lg:w-[43rem]">
                <div className="flex justify-center items-center gap-8">
                    <div className="flex gap-1.5">
                        <FaCircle className="text-[red] text-xs inline"/>
                        <FaCircle className="text-[orange] text-xs inline"/>
                        <FaCircle className="text-[green] text-xs inline"/>
                    </div>
                    <div dir="ltr"className="bg-[#e4f1d6] text-[#b1bca5] w-[40rem] h-[30px] rounded-xl px-3 py-0.5 max-md:w-[17rem] max-md:text-sm max-lg:w-[35rem]">https://yourAcademy/murattab.com</div>
                </div>
            </div>

        </section>
    )
}

export default Hero