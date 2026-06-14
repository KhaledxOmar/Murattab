import { FaBoltLightning, FaChartLine, FaShieldHalved, FaCirclePlay, FaCreditCard, FaUser } from "react-icons/fa6"
import { FaCircle } from "react-icons/fa"


function Features(){
    const boxes = 'bg-white h-[210px] w-[310px] px-8 pt-7 rounded-2xl border-[#b3bfa7]/15 border-1 hover:shadow-xl hover:-translate-y-1 duration-300 mt-9 max-xl:mx-4'
    const title = "text-primary-color text-lg font-semibold mb-3"
    const body = "text-[#959d8d] text-sm"

    return(
        <section id="features" className="bg-tertiary-color pt-20 pb-25">
            
            <div className="flex justify-center">
                <h4 className="px-4 py-1 bg-[#f7fdf0] text-secondary-color rounded-2xl mb-8 text-center">
                <FaCircle className="inline text-xs ml-2 px-[1px]"/>
                    المميزات
                </h4>
            </div>
            

            <h1 className="text-center text-primary-color pb-7 text-5xl font-extrabold max-md:text-2xl max-lg:text-3xl">
            كل ما تحتاجه في مكان واحد
            </h1>
            
            <h5 className="text-center text-[#959d8d] pb-2">
            أدوات قوية وسهلة الاستخدام لإنشاء وبيع دوراتك التعليمية
            </h5>

            <div className="flex justify-between items-center flex-wrap px-65 max-xl:justify-center max-xl:px-30 max-lg:justify-center max-md:justify-center max-md:px-30 max-xl:flex-wrap max-sm:flex-col">
                <div className={boxes}>
                    
                        <FaBoltLightning className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>منشئ صفحات سريع
                        </h1>
                        <h1 className={body}>أنشئ صفحة احترافية لأكاديميتك بدون كود.</h1>
                    
                    
                </div>

                <div className={boxes}>
                
                        <FaCirclePlay className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>استضافة فيديوهات
                        </h1>
                        <h1 className={body}>ارفع فيديوهات دوراتك بجودة عالية مع حماية كاملة من النسخ.</h1>
                    
                </div>

                <div className={boxes}>
                    
                        <FaCreditCard className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>بوابة دفع متكاملة</h1>
                        <h1 className={body}>استقبل المدفوعات بسهولة - توصلك فلوسك لحسابك.</h1>
                    
                </div>

                <div className={boxes}>
                
                        <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>تحليلات متقدمة</h1>
                        <h1 className={body}>تابع مبيعاتك وأداء دوراتك بلوحة تحكم ذكية ومفصّلة.</h1>
                    
                </div>

                <div className={boxes}>
                
                        <FaUser className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>إدارة الطلاب</h1>
                        <h1 className={body}>تواصل مع طلابك، تابع تقدمهم، وأدر مجتمعك بسهولة.</h1>
                
                </div>

                <div className={boxes}>
                    
                        <FaShieldHalved className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>حماية المحتوى</h1>
                        <h1 className={body}>محتواك محمي بتشفير متقدم ومنع التحميل غير المصرح به.</h1>
                    
                </div>
            </div>
        </section>
    )
}

export default Features