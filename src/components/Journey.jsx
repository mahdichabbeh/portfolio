import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { journies } from '../constant';
import shape from '../assets/shape.png';
import wwave from '../assets/wwave.svg';
const Journey = () => {
    return(
        <section id="journey" className='w-full h-fit flex flex-col items-center mt-32 lg:mt-52 gap-16 bg-black pb-20 relative'>
            <img src={wwave} alt="wwave" className=' w-full' />
            <img src={shape} alt="shape" className=' absolute top-20 left-[-80px]' />
            <img src={shape} alt="shape" className=' absolute bottom-10 right-[-80px]' />
            <div className=' lg:w-1/6 text-center '>
                <h2 className="p-2 text-primary text-2xl sm:text-4xl font-bold">Journey</h2>
            </div>
            <div className='w-full h-full'>
                <VerticalTimeline>
                    {journies.map((link) => (
                        <VerticalTimelineElement
                        className={link.className}
                        contentStyle={link.contentStyle}
                        contentArrowStyle={link.contentArrowStyle}
                        date={link.date}
                        iconStyle={link.iconStyle}>
                            <h3 className="vertical-timeline-element-title">{link.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{link.subtitle}</h4>
                            <p>{link.skills}</p> 
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>         
        </section>

    )
}


export default Journey