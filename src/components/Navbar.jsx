
import logo from '../assets/Group 2.svg'
import { navLinks } from '../constant'
import {React  , useState }from 'react'
import { Link } from 'react-router-dom'
import  menu from '../assets/menu.svg'
import close from '../assets/close.svg'


const Navbar = () => {
    const [toggle,setToggle] = useState(false);
    return(
        <section className='flex flex-row fixed top-0 z-50 w-full'>
                <div className='bg-[#5D5D5D] bg-opacity-80 flex flex-col h-16 items-center w-2/6 pl-4'>
                    <Link to='/' onClick={()=>{window.scrollTo(0,0)}}>
                        <img src={logo} alt="logo" className=' h-14  '  />
                    </Link>
                </div>
                <div className=' bg-[#5D5D5D] bg-opacity-80 h-16 w-4/6 flex flex-col items-center justify-center '>
                    <ul className=' list-none hidden md:flex flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16 font-poppins'>
                        {navLinks.map((link) => (
                            <li key={link.id} className={`text-white hover:text-primary text-[12px] md:text-[15px] lg:text-[18px] cursor-pointer font-medium`} >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className=' md:hidden flex flex-col items-center top-5 absolute right-5 '>
                        <div className=' w-full flex flex-row justify-end'>
                            <img src={toggle ? close :menu} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)} />
                        </div>
                        <div className={`${!toggle ? 'hidden' : 'flex'} bg-trbg p-5 pt-5 top-20 w-full rounded-xl z-20`}>
                            <ul className=' list-none flex justify-end items-start flex-col gap-4'>
                                {navLinks.map((link) => (
                                    <li key={link.id} className={`text-white hover:text-primary font-poppins text-[16px] cursor-pointer font-medium`} onClick={()=>{setToggle(!toggle);}}>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
            

    );
}

export default Navbar