import {Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'
import NavBar from '../components/landing/NavBar'

function NotFoundPage(){

    return(
        <>
           <NavBar/>
            <section className='text-center flex flex-col justify-center items-center h-96 pt-20 h-[30rem]'>
                <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
                <h1 className='text-6xl text-primary-color font-bold mb-6 max-md:text-3xl'>غير موجودة 404</h1>
                <p className='text-xl text-primary-color mb-5 max-md:text-lg'>هذه الصفحة غير موجودة</p>
                <Link
                    to='/'
                    className='text-white bg-secondary-color hover:shadow-lg duration-300 hover:scale-101 cursor-pointer rounded-md px-3 py-2 mt-4'
                >
                    العودة للخلف
                </Link>
            </section> 
        </>
        
    )
}
export default NotFoundPage