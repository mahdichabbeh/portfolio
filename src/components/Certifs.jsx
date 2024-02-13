import React, { useState } from "react";
import shape from "../assets/shapeb.png"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PDFViewer from "./Pdfviewer";
import { awscert, devopscert, mlcert } from "../constant";
import aws from "../assets/aws.png";
import devops from "../assets/devops2.png";
import ml from "../assets/ml.png";
const Certifs = () => {
    const [state, setState] = useState({
        isPaneOpenAWS: false,
        isPaneOpenDevops: false,
        isPaneOpenML: false,
      });
    
    return ( 
    <div id="certificates" className=" pb-24 h-fit w-screen flex flex-col gap-24 justify-start items-center pt-14 z-0 bg-white relative">
        <img src={shape} alt="shape" className=" w-72 h-72 lg:h-max lg:w-max absolute right-[-100px] bottom-16" />
        <h2 className=" text-3xl lg:text-4xl font-bold font-poppins w-full text-center text-primary">Certificates</h2>
      <div className=" flex flex-col gap-6">
      <div className=" w-fit cursor-pointer text-xl sm:text-4xl lg:text-6xl flex flex-row justify-center items-center gap-5 phone:gap-10 underline hover:text-primary font-poppins" onClick={() => setState({ isPaneOpenAWS: true })}>
        + Amazon Web Services
        <img src={aws} alt="aws" className=" w-[50px] h-[50px] mt-5 " />
      </div>
        <div className="w-fit cursor-pointer text-xl sm:text-4xl lg:text-6xl flex flex-row justify-center items-center gap-10 underline hover:text-primary font-poppins" onClick={() => setState({ isPaneOpenDevops: true })}>
          + Devops
          <img src={devops} alt="aws" className=" w-[50px] h-[50px] mt-5"  />
        </div>
        <div className="w-fit cursor-pointer text-xl sm:text-4xl lg:text-6xl flex flex-row justify-center items-center gap-10 underline hover:text-primary font-poppins" onClick={() => setState({ isPaneOpenML: true })}>
          + ML-AI
          <img src={ml} alt="aws" className=" w-[50px] h-[50px] mt-5" />
        </div>
      </div>

      <SlidingPane
        width="100%"
        from="bottom"
        overlayClassName="some-custom"
        isOpen={state.isPaneOpenAWS}
        title="AWS Certificates."
        onRequestClose={() => {
          setState({ isPaneOpenAWS: false });
        }}
      >
        <div className=" w-full flex flex-row justify-center gap-4 flex-wrap">
            {awscert.map((awsc)=>(
                <PDFViewer img={awsc}></PDFViewer>
            ))}
        </div>

      </SlidingPane>
      <SlidingPane
        isOpen={state.isPaneOpenDevops}
        title="Devops Certificates."
        from="bottom"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenDevops: false })}
      >
        <div className=" w-full flex flex-row justify-center gap-4 flex-wrap">
            {devopscert.map((devopsc)=>(
                <PDFViewer img={devopsc}></PDFViewer>
            ))}
        </div>
      </SlidingPane>
      <SlidingPane
        isOpen={state.isPaneOpenML}
        title="Devops Certificates."
        from="bottom"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenML: false })}
      >
        <div className=" w-full flex flex-row justify-center gap-4 flex-wrap">
            {mlcert.map((mlc)=>(
                <PDFViewer img={mlc}></PDFViewer>
            ))}
        </div>
      </SlidingPane>
    </div>
     );
}
 
export default Certifs;