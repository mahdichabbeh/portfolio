import dev from '../assets/web.png';
import prog from '../assets/programming.png';
import devops from '../assets/devopss.png';
import db from '../assets/database.png';
import ds from '../assets/ds.png';
import others from '../assets/more.png';
import cims from '../assets/cims.jpg';
import pat from "../assets/PAT.png";
import aws from "../assets/aws.pdf";
import aws1 from "../assets/aws1.pdf";
import aws2 from "../assets/aws2.pdf";
import devops1 from "../assets/devops1.pdf";
import ml1 from "../assets/ml1.pdf";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "journey",
      title: "Journey",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
      id: "certificates",
      title: "Certificates",
    },
    {
        id: "contact",
        title: "Contact",
    }
  ];

  export const journies=[
  {
      className:"vertical-timeline-element--work",
      contentStyle:{ background: '#52D3D8', color: '#fff'},
      contentArrowStyle:{ borderRight: '7px solid  #52D3D8' },
      date:"2023",
      iconStyle:{background: '#52D3D8', color: '#6A6A6A' },
      icon:"<work/>",
      title:"Ministry Of Health's IT Center",
      subtitle:"Internship",
      skills:"HTML TailwindCSS JS PHP MySQL  "
    },
    {
      className:"vertical-timeline-element--education",
      contentStyle:{ background: '#52D3D8', color: '#fff' },
      contentArrowStyle:{ borderRight: '7px solid  #52D3D8' },
      date:"2022 - present",
      iconStyle:{background: '#52D3D8', color: '#fff' },
      icon:"<work/>",
      title:"National school of engineering",
      subtitle:"Student",
      skills:"C++ C UML DataBases AI Web-Dev Project-Management "
    },
    {
      className:"vertical-timeline-element--education",
      contentStyle:{ background: '#52D3D8', color: '#fff' },
      contentArrowStyle:{ borderRight: '7px solid  #52D3D8' },
      date:"2020 - 2022",
      iconStyle:{background: '#52D3D8', color: '#969696' },
      icon:"<work/>",
      title:"Tunis Preparatory Engineering Institute",
      subtitle:"Student",
      skills:"Python Object-Oriented-Programming Statistics Probability physics"
    },
    {
      className:"vertical-timeline-element--work",
      contentStyle:{ background: '#52D3D8', color: '#fff' },
      contentArrowStyle:{ borderRight: '7px solid  #52D3D8' },
      date:"2016-2020",
      iconStyle:{background: '#52D3D8', color: '#6A6A6A' },
      icon:"<work/>",
      title:"Baccalaureate Degree",
      subtitle:"Student",
      skills:"Mathematics"
    },
  ];

  export const cards=[
    {
      titre:"Web-Development",
      skills:[{id:'HTML'},{id:'CSS'},{id:'Javascript'},{id:'ReactJs'},{id:'TailwindCss'},{id:'NodeJs'},{id:'PHP'}],
      image:dev 
    },
    {
      titre:"Programming Languages",
      skills:[{id:'C'},{id:'C++'},{id:'Python'},{id:'Javascript'},{id:'PHP'},{id:'Java'}],
      image:prog 
    },
    {
      titre:"Devops",
      skills:[{id:'Docker'},{id:'Kubernetes'},{id:'Linux'},{id:'AWS Services'},{id:'Cloud Computing'},],
      image:devops   
    },
    {
      titre:"DataBases",
      skills:[{id:'SQL'},{id:'MySQLi'},{id:'PostgresSQL'},{id:'PLSQL',color:"#52D3D8"},{id:'MongoDB',color:"#52D3D8"},{id:'Oracle',color:"#52D3D8"}],
      image:db    
    },
    {
      titre:"ML/AI",
      skills:[{id:'Pandas',color:"#52D3D8"},{id:'Scipy',color:"#52D3D8"},{id:'ML Algorithms',color:"#52D3D8"},{id:'TensorFlow',color:"#52D3D8"},{id:'DeepLearning',color:"#52D3D8"}],
      image:ds   
    },
    {
      titre:"Others",
      skills:[{id:'Problem Solving',color:"#52D3D8"},{id:'Finance',color:"#52D3D8"},{id:'UML',color:"#52D3D8"},{id:'Agile Methods',color:"#52D3D8"},{id:'Git',color:"#52D3D8"},{id:'Management',color:"#52D3D8"}],
      image:others 
    }
  ];

  export const prjs = [
    {
      title:"Cims Web Form",
      img:cims,
      techs:[{id:'HTML'},{id:'TailwindCss'},{id:'Javascript'},{id:'JQuery'},{id:'MySQL'},{id:'PHP'}],
      description:'This project developed a web-based solution for hospitals to manage oxygen stock efficiently. Using HTML, Tailwind CSS, PHP, MySQL, JavaScript, and jQuery, it created a user-friendly interface and robust backend system. Features included real-time updates, order processing, automatic notifications, and data visualization, enhancing workflow efficiency and supporting patient care during challenging times.'
    },
    {
      title:"Tunisia's Pet Association WebSite",
      img:pat,
      techs:[{id:'HTML'},{id:'CSS'},{id:'Javascript'},{id:'MySQL'},{id:'PHP'}],
      description:"This website for the Pet Association of Tunisia, built with HTML, CSS, JavaScript, and PHP, offers an intuitive interface for pet adoption, events, education, and community forums. JavaScript adds dynamic elements for enhanced user experience, while PHP handles server-side processing and database interactions. The site promotes pet adoption and community engagement across Tunisia"
    }
  ];

  export const awscert = [aws,aws1,aws2];
  export const devopscert=[devops1];
  export const mlcert=[ml1];