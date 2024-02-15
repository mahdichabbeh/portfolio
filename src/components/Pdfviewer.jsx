import React from "react";
import { Document } from 'react-pdf';

const PDFViewer = ({img=""}) => {
 return (
 <div className=" w-[250px] phone:w-[400px] phone:h-[360px] h-[200px] object-contain">
    <iframe src={img} title="cert" width="100%" height="100%"/>
 </div>
 );
};
export default PDFViewer;