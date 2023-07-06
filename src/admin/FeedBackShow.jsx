import React,{ useState,useEffect } from 'react';
import FeedBackDesign from './FeedBackDesign';


function FeedBackShow() {
  //feedback retrieve from backend and store on setResFeedBackData
  const [resFeedBackData,setResFeedBackData] = useState([]);

  useEffect(() => {
    //backend Axios using
  }, [])
  
  
  const tableData = () =>{
    // return resData.map((val,ind)=>{
    //   return <FeedBackDesign obj={val} key={ind} />
    // })
    return <FeedBackDesign />
  }
  return (
    <div className='container-fluid table-responsive-sm customers'>
      <br/>
      <h2 className='mt-3 mb-4'>Feedback Page</h2>
      {FeedBackDesign()}
    </div>
  )
}

export default FeedBackShow;