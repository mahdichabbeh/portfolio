import shape from "../assets/shapeb.png"
import { awscert, devopscert, mlcert } from "../constant";
import aws from "../assets/aws.png";
import devops from "../assets/devops2.png";
import ml from "../assets/ml.png";
import CertCard from "./CertCard";

const Certifs = () => {  
  const devopsdesc = "DevOps merges software development with IT operations, promoting collaboration and automation for faster software delivery. It emphasizes continuous integration and deployment to streamline processes and improve efficiency, ultimately enabling organizations to deliver better software products more quickly.";
  const awsdesc = "AWS, or Amazon Web Services, is a leading cloud computing platform by Amazon. It offers various online services like storage, computing power, and databases on a pay-as-you-go basis, helping businesses innovate and scale without upfront infrastructure costs.";  
  const mldesc = "AI and ML empower computers to learn from data and make decisions autonomously, without explicit programming. They revolutionize industries by enhancing efficiency, predicting trends, and enabling personalized experiences. These technologies continue to evolve, promising transformative advancements in various fields, from healthcare to finance.";
  return ( 
    <div id="certificates" className=" pb-24 h-fit w-screen flex flex-col gap-24 justify-start items-center pt-14 z-0 bg-white relative">
        <img src={shape} alt="shape" className=" w-72 h-72 lg:h-max lg:w-max absolute right-[-100px] bottom-16" />
        <h2 className=" text-3xl lg:text-4xl font-bold font-poppins w-full text-center text-primary">Certificates</h2>
      <div className=" flex flex-row gap-6 flex-wrap justify-center items-center">
        <CertCard img={aws} desc={awsdesc} statee="isPaneOpenAWS" title="Aws" certs={awscert}></CertCard>
        <CertCard img={devops} desc={devopsdesc} statee="isPaneOpenDevops" title="Devops" certs={devopscert}></CertCard>
        <CertCard img={ml} desc={mldesc} statee="isPaneOpenML" title="ML/AI " certs={mlcert}></CertCard>
      </div>
    </div>
     );
}
 
export default Certifs;