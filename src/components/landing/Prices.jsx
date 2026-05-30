import { FaCircle } from "react-icons/fa6"


function Prices() {

    const boxes = 'bg-white h-[400px] w-[300px] rounded-3xl border-[#b3bfa7]/15 border-1 hover:shadow-xl hover:-translate-y-1 duration-300 mt-9 px-8 pt-7'
    const title = "text-primary-color text-lg font-semibold mb-3"
    const body = "text-[#959d8d] text-sm"

    return(
        <section id="prices" className="bg-tertiary-color pt-20 pb-25">
            
            <div className="flex justify-center">
                <h4 className="px-4 py-1 bg-[#f7fdf0] text-secondary-color rounded-2xl mb-8 text-center">
                <FaCircle className="inline text-xs ml-2 px-[1px]"/>
                    الأسعار
                </h4>
            </div>
            

            <h1 className="text-center text-primary-color pb-7 text-5xl font-extrabold max-md:text-2xl max-lg:text-3xl">
                خطة تناسب الجميع
            </h1>
            
            <h5 className="text-center text-[#959d8d] pb-2">
                 خذ راحتك وبيع كورساتك  
            </h5>

            <div className="flex justify-center items-center px-70 max-md:px-25">

                {/* <div className={boxes}>
                       
                    <h1 className={title}>
                        مجاني     
                    </h1>

                    <h1 className={body}>باقة متكاملة للبداية</h1>

                    <h1 className="text-primary-color text-4xl font-bold my-4 inline-block">10%</h1>

                    <h1 className="text-[#959d8d] inline-block mr-1">من إجمالي المبيعات</h1>

                    <ul className="prices text-primary-color text-sm">
                        <li>7 GB مساحة تخزين</li>
                        <li>7 كورسات مدفوعة</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    
                </div> */}

                <div className='bg-secondary-color h-[580px] w-[420px] rounded-3xl border-[#abc394] border-1 hover:shadow-xl hover:-translate-y-3 duration-300 mt-9 px-6.5 pt-9 max-md:w-[410px]'>
                    
                    <h1 className="text-tertiary-color text-2xl font-extrabold mb-3">
                      مجانية    
                    </h1>

                    <h1 className="text-white/55 text-md">سعة كبيرة مع استخدام الميزات مجاناً</h1>

                    <h1 className="text-tertiary-color text-3xl font-bold mt-7 mb-9 inline-block">8%</h1>

                    <h1 className="text-white/55 inline-block mr-2">من إجمالي المبيعات</h1>
                    
                    <ul className="prices text-tertiary-color text-sm mb-13">
                        <li>7 GB مساحة تخزين</li>
                        <li>7 كورسات مدفوعة</li>
                        <li>صفحة هبوط</li>
                        <li>تحليلات للمبيعات</li>
                        <li>أكواد خصم</li>
                        <li>دعم مننا 24 ساعة</li>
                    </ul>
                    
                    <div className="flex justify-center">
                        <button className="bg-tertiary-color text-secondary-color font-medium px-38 py-3 rounded-2xl hover:bg-white duration-200 cursor-pointer max-md:text-sm">ابدأ الآن</button>
                    </div>
                    
                    
                </div>

                {/* <div className={boxes}>
                    
                    <h1 className={title}>مؤسسات</h1>

                    <h1 className={body}>للأكاديميات الكبيرة</h1>

                    <h1 className="text-primary-color text-4xl font-extrabold my-4 inline-block">تواصل</h1>
                    
                </div> */}

            </div>

        </section>
    )
}
export default Prices