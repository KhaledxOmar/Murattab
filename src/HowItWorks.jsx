import { FaCircle } from "react-icons/fa6"

function HowItWorks(){

    const boxes = ' h-[240px] w-[280px] rounded-2xl flex flex-col items-center text-center'
    const title = "text-tertiary-color/90 text-lg font-bold mb-3"
    const body = "text-[#b3bfa7]/60 text-md"

    return(
        <section className="bg-primary-color pt-27 pb-15">

            <div className="flex justify-center">
                <h4 className="px-4 py-1 bg-secondary-color/50 text-tertiary-color/80 rounded-2xl mb-8 text-center">
                <FaCircle className="inline text-xs ml-2 px-[1px] text-[#92b66e]"/>
                    كيف يعمل ؟
                </h4>
            </div>

            <h1 className="text-center text-tertiary-color pb-5 text-5xl font-extrabold">
                ثلاث خطوات فقط وتبيع كورساتك!
            </h1>
            
            <h5 className="text-center text-[#b3bfa7] pb-15">
                من الفكرة إلى أول عملية بيع في دقائق    
            </h5>

            <div className="flex justify-around items-center px-36 gap-3">
                <div className={boxes}>
                    
                    <h1 className="text-tertiary-color/80 bg-secondary-color/50 w-[4rem] h-[4rem] px-4 pt-1.5 rounded-xl mb-5 text-center text-3xl pt-3">
                        ١
                    </h1>
                    
                    <h1 className={title}>
                        أنشئ صفحتك
                    </h1>

                    <h1 className={body}>اختر قالبًا جاهزًا وخصصه بهويتك البصرية خلال دقائق.</h1>
                    
                    
                </div>

                <div className={boxes}>
                    
                    <h1 className="text-tertiary-color/80 bg-secondary-color/50 w-[4rem] h-[4rem] px-4 pt-1.5 rounded-xl mb-5 text-center text-3xl pt-3">2</h1>
                    <h1 className={title}>
                        ارفع دوراتك 
                    </h1>

                    <h1 className={body}>أضف الفيديوهات والمواد التعليمية وحدد أسعارك بحرية.</h1>
                    
                </div>

                <div className={boxes}>
                    
                    <h1 className="text-tertiary-color/80 bg-secondary-color/50 w-[4rem] h-[4rem] px-4 pt-1.5 rounded-xl mb-5 text-center text-3xl pt-3">
                        3
                    </h1>

                    <h1 className={title}>
                        ابدأ البيع  
                    </h1>

                    <h1 className={body}>انشر رابطك وابدأ باستقبال الطلاب والمدفوعات فورًا.</h1>

                </div>

                
            </div>
        </section>
    )

}

export default HowItWorks