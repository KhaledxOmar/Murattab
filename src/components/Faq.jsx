import { FaCircle } from "react-icons/fa6"
import FaqItem from './FaqItem'



/*

    <div onClick={handleFaqState} className="text-tertiary-color/80 bg-[#364527] w-[50rem] min-h-[4rem] px-8 py-5 rounded-xl mb-5 text-start text-md font-semibold flex flex-col  border-[#b3bfa7]/15 border-1 hover:border-[#b3bfa7]/28 hover:bg-[gray]/25 duration-200 cursor-pointer">
        <h1 className="text-start text-md font-semibold flex justify-between items-center">
            هل يمكن لعملائي الدفع من جميع أنحاء العالم ؟
            <FaArrowDown/>
        </h1>
    
    </div>


    <div onClick={handleFaqState} className="text-tertiary-color/80 bg-[#364527] w-[50rem] min-h-[4rem] px-8 py-5 rounded-t-xl text-start text-md font-semibold flex flex-col  border-[#b3bfa7]/15 border-1 hover:border-[#b3bfa7]/28 hover:bg-[gray]/25 duration-200 cursor-pointer">
            <h1 className="text-start text-md font-semibold flex justify-between items-center">
                هل يمكن لعملائي الدفع من جميع أنحاء العالم ؟
                <FaArrowDown/>
            </h1>
    
    </div>

    <div className="text-tertiary-color/80 bg-[#364527] w-[50rem] min-h-[4rem] px-8 py-5 rounded-b-xl mb-5 text-start text-md font-semibold flex flex-col border-[#b3bfa7]/15 border-t-[#364527] border-1"> 
        <h1 className="text-start text-sm font-medium flex justify-between items-center ">
                هل يمكن لعملائي الدفع من جميع أنحاء العالم ؟
        </h1>
    </div>


*/
function Faq(){

    const boxes = ' h-[240px] w-[280px] rounded-2xl flex flex-col items-center text-center'
    const title = "text-tertiary-color/90 text-lg font-bold mb-3"
    const body = "text-[#b3bfa7]/60 text-md"

    const questionsList = [
        {
            question: "ما هو مرتَّب ؟",
            answer: "منصة تقنية هدفها تسهيل حياة صناع المحتوى العرب وتمكنهم من بيع كورساتهم دون الانشغال بأي أمر تقني."
        },
        {
            question: "هل يمكن لعملائي الدفع من جميع أنحاء العالم ؟",
            answer: "نعم! تقبل مُرتَّب المدفوعات من جميع أنحاء العالم من خلال بطاقات الائتمان والخدمات المالية الدولية. عملاؤك لا يحتاجون للقلق بشأن موقعهم الجغرافي."
        },

        {
            question: "ماهي طرق الدفع المتاحة للطلاب ؟",
            answer: (
                <ul className="list-disc list-inside">
                    <li>بطاقات الائتمان والخصم (Visa, Mastercard)</li>
                    <li>محافظ رقمية (Apple Pay, Google Pay)</li>
                    <li>التحويلات البنكية المباشرة</li>
                    <li>خدمات الدفع الإلكترونية المحلية</li>
                </ul>
            )
        },

        {
            question: "كم سعر الاشتراك في مُرتَّب ؟",
            answer: "مجاناً."
        },
        {
            question: "كم وقت يستغرق التحويل لحسابي البنكي ؟",
            answer: "التحويل يتم كل 17 يوم. بعد بدء التحويل من طرفنا، يستغرق وصوله إلى حسابك من يوم إلى 3 أيام حسب بنكك."
        },


    ]



    return(
        <section id="FAQ" className="bg-primary-color pt-27 pb-15">

            <div className="flex justify-center">
                <h4 className="px-4 py-1 bg-secondary-color/50 text-tertiary-color/80 rounded-2xl mb-8 text-center">
                <FaCircle className="inline text-xs ml-2 px-[1px] text-[#92b66e]"/>
                   الأسئلة الشائعة
                </h4>
            </div>

            <h1 className="text-center text-tertiary-color pb-5 text-5xl font-extrabold max-md:text-2xl max-lg:text-3xl">
                إجابات على أسئلتك
            </h1>
            
            <h5 className="text-center text-[#b3bfa7] pb-15">
               كل ما تحتاج معرفته عن المنصة والدفع والمدفوعات    
            </h5>

            <div className="flex flex-col items-center px-36 max-md:px-10">
                
                    
 
                {
                   questionsList.map((question, index)=> 
                    
                    <div key={index}>
                        <FaqItem question={question.question} answer={question.answer}/>
                    </div>

                   ) 
                    
                }       

                
            </div>

        </section>
    )

}

export default Faq