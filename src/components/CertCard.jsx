import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PDFViewer from "./Pdfviewer";
const CertCard = ({img='',desc='',certs=[], title=''}) => {
    const [state, setState] = useState({
        statee: false,
    });
    
    return ( 
        <div className=" phone:w-[400px] phone:h-[450px] h-fit w-4/5 flex flex-col border-solid shadow-md bg-gray-900 z-10 justify-start items-center p-4 gap-4 rounded-2xl">
            <h1 className=" text-center text-white font-bold">{title}</h1>
            <div className="w-[100px] h-[100px] object-contain">
                <img src={img} alt="desc" />
            </div>
            <div className=" text-white text-center rounded-2xl p-4 flex h-[300px] flex-col justify-between ">
                <p className=" font-poppins text-sm ">{desc}</p>
                <button className=" underline text-primary font-semibold font-poppins" onClick={() => setState({ statee: true })}>View Certificates</button>
            </div>
            
                

        <SlidingPane
        width="100%"
        from="bottom"
        overlayClassName="some-custom"
        isOpen={state.statee}
        title={title}
        onRequestClose={() => {
          setState({ state: false });
        }}
        >
        <div className=" w-full flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-14 flex-wrap">
            {certs.map((cert)=>(
                <PDFViewer img={cert.img} id={cert .id}></PDFViewer>
            ))}
        </div>

      </SlidingPane>
    </div>
     );
}
 
export default CertCard;