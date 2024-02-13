import React from "react";
import { Document , Page ,  } from 'react-pdf';

const PDFViewer = ({pdf=''}) => {
 return (
 <div className=" w-[250px] phone:w-[400px] phone:h-[360px] h-[200px] object-contain">
   <Document file={pdf} >
      <Page pageNumber={1}/>
   </Document>
 </div>
 );
};
export default PDFViewer;