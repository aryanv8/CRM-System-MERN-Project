import React,{useState} from 'react';
import { Link} from "react-router-dom";
import '../styles/Home.css';
function Home(){
    var [row1,setRow1]=useState('');
    var [row2,setRow2]=useState('');
    setTimeout(()=>{setRow1( <div class="row">
    <div class="col-6">
    <img class="img1" src="https://img.freepik.com/free-photo/elegant-businessman-office_155003-12612.jpg?size=626&ext=jpg&ga=GA1.1.1950086803.1687017148&semt=ais"  alt="happy clients"/>
    <h2 class="text-uppercase">Achieving customers satisfication</h2>
    </div>
    <div class="col-6">
    <img class="img1" src="https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1950086803.1687017148&semt=ais"  alt="data management"/>
    <h2 class="text-uppercase">Managing customers information</h2>
    </div>
       </div>);},1000);
    setTimeout(()=>{setRow2( <div class="row">
    <div class="col-6">
     <img class="img1" src="https://img.freepik.com/free-vector/hand-drawn-shrug-illustration_23-2149318024.jpg?size=626&ext=jpg&ga=GA1.2.1950086803.1687017148&semt=ais" alt="clarify doubts"/>
     <h2 class="text-uppercase">Solving customers problems very soon</h2>
    </div>
    <div class="col-6">
 <img class="img3 border-radius-rounded" src="https://img.freepik.com/free-vector/stock-market-analysis-with-chart_23-2148584739.jpg?size=626&ext=jpg&ga=GA1.2.1950086803.1687017148&semt=ais" alt="visualize"/>
 <h2 class="text-uppercase">Visualisation of Customers Information</h2>
    </div>
    
    <h3><br/><button class="btn btn-outline-light"> <Link to="/contact" class="nav-link">Contact</Link></button> us for any clarification</h3></div>);},1900);

return(<div className="home container-fluid">
    <br/>
    <h1 className="text-uppercase text-right">Good customer relations<br/> equals success</h1><br/>
  {row1}<br/>
  {row2}
  
    </div>
);
}
export default Home;