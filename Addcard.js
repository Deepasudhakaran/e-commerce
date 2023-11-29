import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Addcard = () => {
  
  
  const {id} = useParams()
  const [title,setTitle]= useState("");
  const [image,setImage]= useState("");
  const [price,setPrice]= useState("");
  const [rate,setRate]= useState("");
  
  
  
  useEffect(()=>{
   const fetchData = async () =>{
    try{
      const response = await axios.get('http://localhost:8080/create/'+id);
      console.log(response);
      setTitle(response.data.title);
      setImage(response.data.image);
      setPrice(response.data.price);
      setRate(response.data.rate);
  
    }catch(err){
      console.log(err);
    }
   }
  fetchData();
    },[id]);
  

   
  return (
    <div>
      <h1>Your Cards</h1>



      <div className='cd'>


      
        
      <Card style={{width:'15rem',display:'inline-block'} }>
      <Card.Img 
      style={{height:'13rem'}}
      className='p-2'
      variant="top"
      src={image}/>


      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <h5> price:{price}</h5>
        <div>
          <h4>Rate:{rate}</h4>
        </div>
      </Card.Body>
    </Card>
</div>
     
      

    </div>
  );
}

export default Addcard;
