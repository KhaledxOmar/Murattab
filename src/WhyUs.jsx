import { FaBoltLightning, FaHeadphones, FaArrowTrendUp, FaShieldHalved } from "react-icons/fa6"

function WhyUs(){

    const boxes = 'bg-[#b3bfa7]/8 h-[240px] w-[280px] px-8 pt-7 rounded-2xl border-[#b3bfa7]/15 border-1 hover:border-[#b3bfa7]/28 duration-200'
    const title = "text-tertiary-color/90 text-lg font-semibold mb-3"
    const body = "text-[#b3bfa7]/60 text-sm"

    return(
        <section className="bg-primary-color pt-27">
            <h1 className="text-center text-tertiary-color pb-5 text-5xl font-extrabold max-md:text-3xl">
                لماذا تختار مُرتَّب ؟
            </h1>
            
            <h5 className="text-center text-[#b3bfa7] pb-20">
                نحن نقدم أفضل حل لصنّاع المحتوى العرب
            </h5>

            <div className="flex justify-around items-center px-36 gap-3 pb-30 max-md:flex-col">
                <div className={boxes}>
                    
                    <FaBoltLightning className="text-tertiary-color/80 bg-secondary-color/50 w-[3rem] h-[3rem] px-4 py-1 rounded-lg mb-5"/>
                    <h1 className={title}>سهولة الاستخدام
                    </h1>
                    <h1 className={body}>واجهة بديهية تجعل إنشاء أكاديميتك سهلاً حتى لو لم تكن لديك خبرة تقنية.</h1>
                
                    
                </div>

                <div className={boxes}>
                    
                    <FaShieldHalved className="text-tertiary-color/80 bg-secondary-color/50 w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    <h1 className={title}>أمان لمحتواك
                    </h1>
                    <h1 className={body}>حماية متقدمة لفيديوهاتك ومحتواك التعليمي من النسخ والتنزيل.</h1>
            
                </div>

                <div className={boxes}>
                    
                    <FaHeadphones className="text-tertiary-color/80 bg-secondary-color/50 w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    <h1 className={title}>دعم عربي</h1>
                    <h1 className={body}>فريق دعم متخصص يتحدث اللغة العربية ويفهم احتياجاتك بشكل كامل.</h1>
                    
                </div>

                <div className={boxes}>
                    
                    <FaArrowTrendUp className="text-tertiary-color/80 bg-secondary-color/50 w-[3rem] h-[3rem] px-3 py-1 rounded-lg mb-5"/>
                    <h1 className={title}>نمو مستمر</h1>
                    <h1 className={body}>فريق دعم متخصص يتحدث اللغة العربية ويفهم احتياجاتك بشكل كامل.</h1>
                    
                </div>
            </div>
        </section>
    )
}

export default WhyUs