import { FaBoltLightning, FaChartLine, FaShieldHalved, FaCirclePlay, FaCreditCard, FaUser } from "react-icons/fa6"

function Features(){
    const boxes = 'bg-white h-[210px] w-[310px] rounded-2xl border-[#b3bfa7]/15 border-1 hover:shadow-xl hover:-translate-y-1 duration-300 mt-9'
    const title = "text-primary-color text-lg font-semibold mb-3"
    const body = "text-[#959d8d] text-sm"

    return(
        <section id="features" className="bg-tertiary-color pt-27 pb-27">
            <h1 className="text-center text-primary-color pb-7 text-5xl font-extrabold">
            كل ما تحتاجه في مكان واحد
            </h1>
            
            <h5 className="text-center text-[#959d8d] pb-2">
            أدوات قوية وسهلة الاستخدام لإنشاء وبيع دوراتك التعليمية
            </h5>

            <div className="flex justify-between items-center flex-wrap px-65">
                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaBoltLightning className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-4 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>منشئ صفحات سريع
                        </h1>
                        <h1 className={body}>أنشئ صفحة احترافية لأكاديميتك بدون كود.</h1>
                    </div>
                    
                </div>

                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaCirclePlay className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>استضافة فيديوهات
                        </h1>
                        <h1 className={body}>ارفع فيديوهات دوراتك بجودة عالية مع حماية كاملة من النسخ.</h1>
                    </div>
                </div>

                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaCreditCard className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>بوابة دفع متكاملة</h1>
                        <h1 className={body}>استقبل المدفوعات بسهولة - توصلك فلوسك لحسابك.</h1>
                    </div>
                </div>

                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaChartLine className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>تحليلات متقدمة</h1>
                        <h1 className={body}>تابع مبيعاتك وأداء دوراتك بلوحة تحكم ذكية ومفصّلة.</h1>
                    </div>
                </div>

                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaUser className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>إدارة الطلاب</h1>
                        <h1 className={body}>تواصل مع طلابك، تابع تقدمهم، وأدر مجتمعك بسهولة.</h1>
                    </div>
                </div>

                <div className={boxes}>
                    <div className="mx-8 mt-7">
                        <FaShieldHalved className="text-secondary-color bg-tertiary-color w-[3rem] h-[3rem] px-3.5 py-1 rounded-lg mb-5"/>
                        <h1 className={title}>حماية المحتوى</h1>
                        <h1 className={body}>محتواك محمي بتشفير متقدم ومنع التحميل غير المصرح به.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features