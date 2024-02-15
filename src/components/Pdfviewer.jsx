import React from "react";


const PDFViewer = ({img="",id=""}) => {
 return (
 <div className="  lg:w-[400px] lg:h-[360px] object-contain">
    <iframe src={img} title="cert" width="100%" height="100%" className="hidden lg:block"/>
    <a href={img} target="_blank" rel="noreferrer" className=" text-xl font-poppins underline lg:hidden font-bold">+{id} </a>
 </div>
 );
};
export default PDFViewer;