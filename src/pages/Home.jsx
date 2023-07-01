import React,{useState} from 'react';
import '../styles/Home.css';
function Home(){
    var [slo,seTslo]=useState('');
    var tem="Good customer relations equals success";
return(<div><br></br><div className="home">
    <h1 className="text-uppercase font-italic">{tem}</h1>
   

    </div>
</div>);
}
export default Home;