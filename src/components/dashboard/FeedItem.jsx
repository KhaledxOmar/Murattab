
function FeedItem({subscription}) {

    return(
        <section>

            <div className='flex justify-between px-6 mb-3 mt-3'>
                <div>
                    <p className='text-[14px] font-medium text-primary-color mb-0.5'>{subscription.buyer}</p>
                    <p className='text-[12.5px] font-[450] text-secondary-color mb-0.5'>{subscription.courseName}</p>
                    <p className='text-[11.5px] text-[#959d8d]'>{subscription.time}</p>
                </div>

                <p className='text-[14px] font-medium text-secondary-color'>
                    {subscription.amount}
                </p>
            </div>
            
            <hr className="text-[#b3bfa7]/20 border-1 mx-7"/>

        </section>
    )
}
export default FeedItem