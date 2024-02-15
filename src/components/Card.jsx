const colarray = ["#FFF0C9","#C9EFFF","#E7C9FF","#C9FFF2","#C9FFFF","#C9FFD2","#DEFFC9"];
const getRandomElementFromArray = (array) => {
  return array.length === 0 ? undefined : array[Math.floor(Math.random() * array.length)];
};


const Card = ({titre='',skills=[],img=''}) => {
    return ( 
        <div className=" bg-gray-900 border-[1px] border-neutral-300 shadow-sm  w-[400px] h-fit phone:h-[250px] flex flex-col items-center gap-4 justify-start pt-8 border-solid rounded-lg">
            <h2 className='text-neutral-200 font-medium font-poppins text-center text-xl'>{titre}</h2>
            <img src={img} alt="img" className=" w-[40px] h-[40px]" />
            <div className='flex flex-row flex-wrap items-center justify-start w-full p-2 gap-1'>
            {skills.map((skill) => (
                <div key={skill.id} className=" w-fit text-lg text-neutral-200 font-poppins px-3 border-solid border-[1px] border-neutral-400 shadow-sm rounded-lg">
                    <h6>{skill.id}</h6>
                </div>
            ))}

            </div>

        </div> 
    );
}
 
export default Card;