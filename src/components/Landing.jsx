import shape from '../assets/shape.png'
import me from '../assets/me5.jpg'



const Landing = () => {
    return (
            <section className='phone:h-screen w-full flex phone:flex-row flex-col gap-8 phone:gap-0 relative bg-black phone:pt-0 pt-[64px] z-0'>
                <div className="  w-full phone:w-2/6 h-full flex flex-col items-center">
                    <div className=' phone:hidden w-[250px] mt-16 border-solid border-primary border-2 rounded-xl z-10'>
                        <img src={me} alt="me" className=' object-cover rounded-xl' />
                    </div>
                    <img src={shape} alt="shape" className=' absolute top-14 left-[-80px] w-2/3 phone:w-[30%]' />
                </div>
                <div className='w-0 phone:w-4/6 h-full ' >
                    <img src={me} alt="me" className='h-full w-full object-cover'/>
                </div>
                <div className=' bottom-48 phone:bottom-20 left-[15%] phone:absolute flex phone:items-start items-center flex-col pb-20 z-10'>
                        <div className='text-xl phone:text-3xl md:text-5xl text-white w-[300px] phone:w-full text-left '>
                            <h4>My name is</h4>
                            <h2 className=' font-bold mt-2'>CHEBBAH MEHDI</h2>
                        </div>
                        <div className=' bg-primary p-5 w-[300px] phone:w-full text-center text-lg phone.text-2xl md:text-4xl font-semibold  font-poppins mt-2 phone:mt-4 lg:mt-8'>
                            <h4>I'M A SOFTWARE ENGINEER</h4>
                        </div>
                </div>
            </section>
      );
}
 
export default Landing;