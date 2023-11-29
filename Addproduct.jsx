import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router';


const Addproduct = () => {
    const[title, setTitle] = useState(" ")
    const[price, setPrice] = useState(" ")
    const[image, setImage] = useState(" ")
    const[rate, setRate] = useState(" ")
    const navigate = useNavigate();
   

    const handlecreate =(e) =>{
        e.preventDefault();
       
        axios.post('http://localhost:8080/create', { title,price,image,rate })
      .then(result => {
        console.log(result);

        navigate('/');
      })
      .catch(err => console.log(err));
  };
       

  return (
    <div>
         <div className='d-flex w-70 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
      <form onSubmit={handlecreate} >
        <h3>Add Product</h3><br/>
      <div>
            <label>Title</label>
            <input type='text'
             name='name'
             value={title}
            onChange={e => setTitle(e.target.value)}
             className='form-control'
              placeholder='enter product name'/>
        </div>

        <div>
            <label>ImageURL</label><br/>
            <input type='text'
             name='email'
             value={image}
            onChange={e => setImage(e.target.value)}  
            className='form-control' 
            placeholder='enter urll'/>
        </div><br/>
        
        <div>
            <label>Price</label>
            <input type='number'
             name='name'
             value={price}
            onChange={e => setPrice(e.target.value)}
             className='form-control'
              placeholder='enter price'/>
        </div>

        <div>
            <label>Rate</label>
            <input type='number'
             name='rate'
             value={rate}
            onChange={e => setRate(e.target.value)}
             className='form-control'
              placeholder='enter price'/>
        </div>

        

       
        <button className='btn btn-info'>sumbit</button>
      </form>
      </div>
    </div>
      
    </div>
  );
}

export default Addproduct;
