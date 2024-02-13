import shape from '../assets/shape.png'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import whatsapp from '../assets/whatsapp.svg'
import github from '../assets/github.svg'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'
const Contact = () => {
    return ( 
        <section id="contact"className="relative w-screen h-fit bg-black flex flex-col gap-10 sm:gap-16 items-center justify-start py-20 z-0">
            <img src={shape} alt="shape" className=' absolute bottom-[10px] left-[-70px] z-0' />
            <h1 className=" text-4xl md:text-7xl font-poppins bg-primary text-white w-fit px-4 font-bold z-10">Contact Me</h1>
            <div className='flex flex-row flex-wrap items-center md:gap-24 gap-10 justify-center w-full h-fit mt-20 px-4 z-30'>
                <a target='_blank' rel='noreferrer' href="https://www.facebook.com/mahdi.chabbeh/"><img src={fb} alt="fb" className=' w-9 h-9 md:w-16 md:h-16'/></a>
                <a target='_blank' rel='noreferrer' href="https://www.instagram.com/mahdi_chabbeh/"><img src={insta} alt="insta" className=' w-9 h-9 md:w-16 md:h-16' /></a>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/chabbeh-mahdi/"><img src={linkedin} alt="linkedin" className=' w-9 h-9  md:w-16 md:h-16' /></a>
                <a target='_blank' rel='noreferrer' href="https://wa.me/21658932351"><img src={whatsapp} alt="whatsapp" className=' w-9 h-9 md:w-16 md:h-16' /></a>
                <a target='_blank' rel='noreferrer' href="https://github.com/mahdichabbeh"><img src={github} alt="github" className=' w-9 h-9 md:w-16 md:h-16' /></a>    
            </div>
            <div className=' text-white w-fit h-fit flex flex-col items-center justify-center px-10 z-30'>
                <a href="mailto:mahdichabeh1233@gmail.com"><span className=' hover:text-primary'>mahdichabeh1233@gmail.com</span></a>
                <p>Adress : Boumehl  Ben Arous , Tunisia</p>
                <Link to='/' onClick={()=>{window.scrollTo(0,0)}}   >
                    <img src={arrow} alt="arrow" className=' pt-9 sm:pt-16' />
                </Link>
            </div>
            
            <div className=' absolute bottom-0 left-0 pl-5 text-gray-500 pb-5'>
                <p>© 2024 Mehdi Chebbah. All rights reserved.</p>
            </div>
        </section>
     );
}
 
export default Contact;