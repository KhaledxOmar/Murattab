import {FaCircle} from 'react-icons/fa'
import FeedItem from './FeedItem'

function Feed() {

    const subscriptions = [
        {
            buyer: 'سارة أحمد',
            courseName: 'تصميم UX المتقدم',
            time: 'منذ 3 دقائق',
            amount: '49 ر.س'
        },
        {
            buyer: 'khaled omar',
            courseName: 'react js full course',
            time: 'منذ 10 دقائق',
            amount: '120 ر.س'
        },
        {
            buyer: 'سعد الهبيدي',
            courseName: 'react js full course',
            time: 'منذ 10 دقائق',
            amount: '120 ر.س'
        },
        {
            buyer: 'أسعد الهابط',
            courseName: 'react js full course',
            time: 'منذ 10 دقائق',
            amount: '120 ر.س'
        }

    ]
    
    return(
        
        <div className='flex flex-col max-[800px]:pt-60 max-[800px]:items-center ml-2'>
            <div className="flex justify-between">

                <div>
                  <button className="bg-tertiary-color px-8 py-1 ml-2 rounded-xl text-primary-color border-2 border-[#c4d4b3] font-medium hover:border-secondary-color hover:text-secondary-color duration-300 cursor-pointer">
                      <span>
                        <a href="/your-academy">أكاديميتك</a>
                      </span>
                  </button>    

                  <button className="bg-secondary-color px-8 py-1 rounded-xl text-tertiary-color hover:scale-101 hover:shadow-lg duration-300 cursor-pointer">
                      <span>
                        <a href="/courses/add-course">أنشئ كورس</a>
                      </span>
                  </button>
                </div>
                     
            </div>

            <section className="w-full min-h-[89vh] bg-white mt-8 pt-1 rounded-xl max-[1150px]:w-3/4">
            
                <p className="mt-4 pr-5 py-1 text-secondary-color text-lg font-semibold mb-1">
                <FaCircle className="inline text-xs ml-2 px-[1px]"/>
                    <span className='text-primary-color'>آخر الاشتراكات</span>
                </p>

                <section className='flex flex-col'>
                
                    {
                        subscriptions.map((subscription)=>
                            <FeedItem subscription={subscription}/>
                        )
                    }
                    
                </section>

            </section>
        </div>
        
    )

}

export default Feed