import { useState } from "react"
import { FaArrowDown } from "react-icons/fa6"

function FaqItem({question, answer}) {

    const [faqState, setFaqState] = useState(false)

    function handleFaqState(){
        setFaqState((prev)=>!prev)
    }
    return(
        <>
            <div onClick={handleFaqState} className={`text-tertiary-color/80 bg-[#364527] w-[50rem] min-h-[4rem] py-4 mb-5 rounded-xl text-start text-md font-semibold flex flex-col justify-center border-[#b3bfa7]/15 border-1 hover:border-[#b3bfa7]/28 hover:bg-[gray]/25 duration-500 cursor-pointer max-md:w-[24rem]`}>
                <h1 className="text-start text-md font-semibold flex justify-between items-center px-8 max-md:text-sm">
                    {question}
                    <FaArrowDown className={`transform duration-500 ${faqState ? 'rotate-180' : ''}`} />
                </h1>

                {faqState &&  
                    
                    <h1 className="text-start text-sm font-medium flex justify-between items-center mt-3 px-8 max-md:text-xs">
                        {answer}
                    </h1>
                    
                }

            </div>

            
        </>
    )
}
export default FaqItem