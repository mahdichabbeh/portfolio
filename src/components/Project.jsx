const Projects = ({title='',img='',description='',techs=[]}) => {
    return ( 
        <div className="w-full h-full flex items-center justify-center flex-col gap-6 p-3 text-white bg-transparent">
            
            <div className='h-2/3 w-full flex md:flex-row flex-col flex-wrap justify-center items-center gap-10 md:px-20'>
                <div className=' lg:w-[350px] lg:h-[350px] md:h-[200px] md:w-[200px] phone:w-[300px]phone:h-[300px] w-[200px] h-[200px] object-contain bg-[#009CB3] border-l-8 border-t-8  border-white '>
                    <img src={img} alt="me"/>
                </div>
                <div className=" flex flex-col h-[35%] md:justify-start justify-center text-center md:text-left items-center gap-3 lg:gap-8 md:w-1/2 w-5/6">
                    <h1 className=' font-semibold font-poppins text-lg lg:text-2xl w-full'>{title}</h1>
                    <div className=' font-poppins h-[50%]'>
                        <p className=" text-[12px] md:text-xs lg:text-base font-light font-poppins">{description}</p>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-start w-full p-2 gap-1'>
                        {techs.map((tech) => (
                            <div key={tech.id} style={{ backgroundColor: "white" }} className={` w-fit text-black text-sm lg:text-lg font-poppins px-3 border-solid border-2 shadow-md rounded-lg `}>
                                <h6>{tech.id}</h6>
                            </div>
                        ))}
                    </div>
                    <div className='h-fit w-full underline text-primary'>
                        <a href="####" ><p className=" text-lg">Github Repository</p></a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Projects;