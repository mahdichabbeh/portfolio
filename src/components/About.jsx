import blue from '../assets/blue.jpg'
import rec from '../assets/rec.jpg';
import engineer from "../assets/engineer.svg"


const About = ()=>{
    return(
        <section id="about" className="w-screen h-fit bg-white md:pt-16">
            
            <div className='flex flex-row w-full justify-center items-center lg:gap-20 '>
                <div className='hidden md:block w-1/3 mt-5'>
                    <img src={engineer} alt="rec" className='  w-full' />
                </div>
                <div className=' w-2/3 md:w-1/2 '>
                    
                    <div className=' h-full flex flex-col items-start w-full md:w-5/6 gap-4 lg:gap-8 pt-10'>
                            <div className='font-poppins mt-10 font-bold text-lg phone:text-2xl md:text-[2.5vw]'>
                                <h1 >Hello,want to </h1>
                                <h1 className='flex flex-row'> Know ,<h1 className=' bg-primary text-nowrap text-white'>who am i ?</h1></h1>
                            </div>
                            <h6 className='font-poppins font-light text-md phone:text-xl leading-relaxed h-fit md:text-[1.7vw]'>A passionate software engineer, devops enthusiast and a Competitive programmer. My academic journey is marked
                                by a strong commitment to learning and adapting to the rapidly evolving IT landscape.I've been fortunate to participate in many projects especially with web dev. I am constantly looking for opportunities to enhance my skills and participate in real life projects.</h6>
                    </div>
                </div>
            </div>
        </section>
    
    
    
    );
}

export default About