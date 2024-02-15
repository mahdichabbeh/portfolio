import Card from "./Card";
import { cards } from "../constant";

const Skills = () => {
    return ( 
        <section id="skills" className="flex flex-col justify-start items-center py-28 gap-20 w-screen h-fit" >
            <div className=" w-1/4">
                <h2 className="font-bold font-poppins text-center text-4xl text-primary">Skills</h2>
            </div>
            <div className=" w-full flex flex-row flex-wrap gap-10 justify-center items-center px-10">
                {cards.map((card)=>(
                    <Card titre={card.titre} skills={card.skills} img={card.image}/>
                ))}
            </div>
        </section>
     );
}
 
export default Skills;