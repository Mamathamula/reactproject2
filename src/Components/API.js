import React from 'react'  
import { Link } from 'react-router-dom'
import weather from './images/weatherimg.jpg'
import recipe from './images/food1.jpg'
import bmi from './images/bmi6.jpg'
import news from './images/news1.jpg'
import movies from './images/movies1.jpg'
import products from './images/products.jpg'
import './cards.css'
export default function API() {
  return (
    <div className='.bg-light'>
        <center>
    <h1 style={{color:'orange',padding:"30px"}} id="font">Applications</h1>
  </center>
 <div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col">
    <div class="card" id="api">
      <img src={weather} class="card-img-top" alt="..." id="a"/>
      <div class="card-body">
        
        <button id='abc' ><Link to="/Weather" href="#" id="c"  className='text-light'>Weather</Link> </button>     
</div>
    </div>
  </div>
  <div class="col">
    <div class="card" id="api">
      <img src={recipe} class="card-img-top" alt="..." id="a"/>
      <div class="card-body">
        
        <button id='abc' ><Link to="/Food" href="#" id="c" className='text-light'>Food</Link> </button>   
  </div>
    </div>
  </div>
  <div class="col">
    <div class="card" id="api">
      <img src={movies} class="card-img-top" alt="..." id="a"/>
      <div class="card-body">
        
        <button id='abc' ><Link to="/Movies" href="#" id="c" className='text-light'>Movies</Link> </button>   
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" id="api">
      <img src={news} class="card-img-top" alt="..." id="a"/>
      <div class="card-body">
        
        <button id='abc'><Link to="/News" href="#" id="c" className='text-light'>News</Link> </button>   
 
 </div>
    </div>
  </div>
  <div class="col">
    <div class="card" id="api">
      <img src={products} class="card-img-top" alt="..."className='  img-fluid' id="a"/>
      <div class="card-body">
        
        <button id='abc'><Link to="/Products" href="#" id="c" className='text-light'>Products</Link> </button>   
 
    </div>
    </div>
  </div>
  <div class="col">
    <div class="card" id="api">
      <img src={bmi} class="card-img-top" alt="..." className='img-fluid' id="a"/>
      <div class="card-body">
        
        <button id='abc'><Link to="/CheCkbmi" href="#" id="c"  className='text-light'>Bmi</Link> </button>   
  
 </div>
    </div>
  </div>
</div> 

    </div>
  )
}
