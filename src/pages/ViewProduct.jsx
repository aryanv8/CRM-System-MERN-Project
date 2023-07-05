import React from 'react';
import {useParams,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
function ViewProduct(){
    const [data, setData] = useState([]);

    useEffect(() => {
      const url="https://dummyjson.com/products";
      axios.get(url)
      .then((res) => {
        if(res.status===200){
        console.log(res);
        setData(res.data.products);
        console.log(data);}
        else{
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
    }, []);

return(<div class="row container-fluid mx-auto">
  <h1 class="text-white text-uppercase">Product details</h1>
     {data.map((data) => (<div class="col-4">
  <div class="card bg-primary text-center" style={{width:"24rem",height:"35rem"}}>
  <img src={data.images[0]} class="card-img-top" style={{height:"20rem"}} alt={data.title}/>
  <div class="card-body">
    <h5 class="card-title">{data.title}</h5>
    <p class="card-text">{data.description}</p>
    <div class="row card-text">
        <div class="col-4 card-text">Brand:{data.brand}</div>
        <div class="col-4 card-text">Price:${data.price}</div>
        <div class="col-4 card-text">Stock:{data.stock}</div>
    </div><br/>
    <button class="btn btn-outline-dark"><Link to={"/feedback/"+data.title} class="nav-link">Feedback</Link></button>
  </div>
</div>
<br/>

  </div>
  
  ))
  
  
  }
</div>);
}
export default ViewProduct;