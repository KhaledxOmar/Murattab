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
        <section className="w-[48vh] h-[89vh] bg-white mr-7 mt-18 rounded-xl">
            
            <p className="mt-4 pr-5 py-1 text-secondary-color text-lg font-semibold mb-1">
            <FaCircle className="inline text-xs ml-2 px-[1px]"/>
                <span className='text-primary-color'>آخر الاشتراكات</span>
            </p>

            <section className='felx flex-col'>
            
                {
                    subscriptions.map((subscription)=>
                        <FeedItem subscription={subscription}/>
                    )
                }
                
            </section>

        </section>
    )

}

export default Feed