import React, { useEffect, useState } from 'react';
import { Card ,Button} from 'react-bootstrap'


import Header from './Header';

import axios from 'axios';
import { useParams } from 'react-router-dom';






const Home = () => {
  const {id} =useParams();
   


    const  [users,setUsers] = useState([{
        title:"",price:"",image:"",rate:""
      }]);
    useEffect(() => {
        fetchItems();
        
        
       }, []);
     
       
       const fetchItems = () =>{
         axios.get('http://localhost:8080/create')
        .then(users=> setUsers(users.data))
        .catch(err => console.log(err))
       }
 

  return (
    <div>
    <Header/>
    <div>
       <div >
   
       
     
<div className='cd'>
{users.map((user) => (
        <div key={user._id}>
        
      <Card style={{width:'15rem',display:'inline-block'} }>
      <Card.Img 
      style={{height:'13rem'}}
      className='p-2'
      variant="top"
      src={user.image}/>


      <Card.Body>
        <Card.Title>{user.title}</Card.Title>
        
        <h5> price:{user.price}</h5>
        <div>
          <h4>Rate:{user.rate}</h4>
        </div>
        <Button variant='primary' style={{backgroundColor:"red"}} onClick={`/addcard/${user._id}` }>Add to Cart</Button>
      </Card.Body>
    </Card>
</div>
      ))}
      
     
</div>

</div>
    </div>
    </div>
  );
}

export default Home;
