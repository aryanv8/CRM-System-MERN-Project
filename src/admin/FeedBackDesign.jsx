import React, { Component } from 'react';
import "../styles/FeedBackDesign.css"
function FeedBackDesign(props){

    //Object Destruction 
    // const {_id,name,product_name,feedback,overall_rating} = props.obj;
    const {name,product_name,feedback,overall_rating} = {name:"Poovarasan",product_name:"iPhone 9",
    feedback:"i think it's overpriced if it is really almost $1000. This was supposed to be a successor to iPhone SE in the $500 to $600 range. It doesn't even have 5G connectivity. The cameras as so basic. The display is nothing to rave about. Surely it can't be that expensive?",
    overall_rating:"3"};



    return(
     
        <div className="col-sm-5 col-md-6 col-12 pb-4 mx-auto" >
            <div className="text-justify darkerfeed mt-4 ">
                    <br/>
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" class="rounded-circle" width="70" height="70" /><br/>
                    <br /><h4 id="pn">{name}</h4>
                    <p >Product Name:{product_name}</p>
                    <p>Rating: {overall_rating}</p>
                    <p>{feedback}</p>
                </div><br />
        </div>
    );
}

export default FeedBackDesign;