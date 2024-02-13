import wave from '../assets/wave.svg'
import blue from '../assets/blue.jpg'
import rec from '../assets/rec.jpg'


const About = ()=>{
    return(
        <section id="about" className="w-screen h-fit bg-white ">
            <div className=' w-full'>
                <div className='w-full hidden phone:block bg-black h-[50px]'></div>
                <img src={wave} alt="wave" className=' w-full' />
            </div>
            <div className='flex flex-row w-full md:justify-normal justify-center gap-10 lg:gap-20 '>
                <div className='hidden md:block w-1/3 relative mt-5'>
                    <img src={rec} alt="rec" className=' absolute top-16 left-8 lg:left-20 w-4/5' />
                    <img src={blue} alt="blue" className=' absolute left-14 lg:left-28 top-24 w-4/5 ' />
                </div>
                <div className='relative w-2/3 md:w-2/3 '>
                    
                    <div className=' h-full flex flex-col items-start w-full md:w-5/6 gap-4 lg:gap-8 pt-10'>
                            <div className='font-poppins mt-10 font-bold text-lg phone:text-2xl md:text-[2.5vw]'>
                                <h1 >Hello,want to </h1>
                                <h1 className='flex flex-row'> Know ,<h1 className=' bg-primary text-nowrap text-white'>who am i ?</h1></h1>
                            </div>
                            <h6 className='font-poppins font-light text-md phone:text-xl leading-relaxed h-fit md:text-[1.7vw]'>As a second-year IT engineering student, I am deeply passionate about the world of technology. My academic journey is marked
                                by a strong commitment to learning and adapting to the rapidly evolving IT landscape. With a drive to excel, I actively seek
                                opportunities to enhance my skills and understanding of IT systems. I'm excited to leverage my knowledge and enthusiasm to
                                contribute effectively to IT projects and challenges, while continuing to grow and innovate in this dynamic field.</h6>
                    </div>
                </div>
            </div>
        </section>
    
    
    
    );
}

export default About