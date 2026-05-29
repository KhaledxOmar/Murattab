import { FaBook, FaArrowLeft, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer(){

    const footerStyle = 'text-[#778767] text-sm cursor-pointer pt-2 max-md:text-xs'
    const socialMedia = 'text-[#778767] text-2xl cursor-pointer pt-2 ml-2'

    return(
        <>
        <section className="bg-tertiary-color min-h-[35rem] w-full flex justify-center items-center">

            <div className="bg-primary-color h-[20rem] w-[50rem] flex flex-col justify-center items-center rounded-3xl max-lg:w-[25rem]">
                <p className="text-tertiary-color text-5xl pb-5 font-bold max-lg:text-2xl">جاهز تبدأ رحلتك ؟</p>
                <p className="text-[#b3bfa7] pb-8">انضم لصنّاع المحتوى الذين يبيعون دوراتهم عبر مُرتَّب</p>
                <button className="bg-secondary-color px-8 py-3 rounded-xl text-tertiary-color hover:scale-101 hover:shadow-lg duration-300 cursor-pointer">
                    <span>
                        <a href="/login">ابدأ الآن مجاناً</a>
                    </span>
                    <FaArrowLeft className="inline mr-2.5 mb-[0.18rem]"/>
                </button>
            </div>

        </section>
        
        <hr className="text-[#b3bfa7]/60"/>

        <section className="bg-tertiary-color min-h-[12rem] w-full flex justify-around items-center">

            <div className="h-[10rem] w-full flex justify-between items-center pl-39 pr-30 max-lg:pr-2 max-lg:pl-2">
                <div className="pb-10 max-lg:pb-2">
                    <div className="pb-3">
                        <FaBook className="bg-secondary-color text-tertiary-color text-4xl px-2 py-2 inline rounded-md ml-3"/>
                        <a className="text-xl w-full h-full font-bold text-primary-color max-lg:text-lg">
                            مُرتَّب
                        </a>
                    </div>

                    <p className="text-[#778767] text-sm max-md:text-xs max-lg:max-w-[120px]">منصة عربية متكاملة لإنشاء وبيع الدورات التعليمية</p>
                </div>

                <div>
                    <ul>
                        <li className="text-primary-color text-md font-semibold pb-1 max-lg:text-xs">المنتج</li>
                        <li className={footerStyle}><a href="#features">المميزات</a></li>
                        <li className={footerStyle}><a href="#prices">الأسعار</a></li>
                        <li className={footerStyle}><a href="#how">كيف يعمل</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="text-primary-color text-md font-semibold pb-1 max-lg:text-xs">الشركة</li>
                        <li className={footerStyle}><a href="#">عن مرتب</a></li>
                        <li className={footerStyle}><a href="#">المدونة</a></li>
                        <li className={footerStyle}><a href="#">وظائف</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li className="text-primary-color text-md font-semibold pb-1 max-lg:text-xs">الدعم</li>
                        <li className={footerStyle}><a href="#">الشروط والأحكام</a></li>
                        <li className={footerStyle}><a href="#">سياسة الخصوصية</a></li>
                        <li className={footerStyle}><a href="#">تواصل معنا</a></li>
                    </ul>
                </div>

                
            </div>

        </section>

        <hr className="text-[#b3bfa7]/60"/>

        <section className="bg-tertiary-color h-[5rem] w-full flex justify-center items-center">

            <div className="h-[3rem] w-full flex justify-between items-center pl-39 pr-30 max-lg:pr-5 max-lg:pl-5">

                <div>
                    <p className="text-[#778767] text-sm">© ٢٠٢٦ مُرتَّب. جميع الحقوق محفوظة.</p>
                </div>

                <div className="pb-1">
                    <ul className="flex">
                        <li className={socialMedia}><a href="#"><FaInstagram/></a></li>
                        <li className={socialMedia}><a href="#"><FaLinkedin/></a></li>
                        <li className={socialMedia}><a href="#"><FaTwitter/></a></li>
                    </ul>
                </div>

            </div>

        </section>
        </>
        


    )
}
export default Footer