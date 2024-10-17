import React, { useState } from 'react';
import Data from './Food.json';
import './Food.css';
// import pic from './images/cheff.png';
// import flogo from './images/flo-removebg-preview.png';
// import Footer from './Footer';

export default function Food() {
  const [food, setFood] = useState(Data);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "18ea9fd5";
  const YOUR_APP_KEY = "eaec06f952263681a8c3aca72bcc1972";

  const submitHandle = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setData(data.hits))
      .catch(error => console.error('Fetch error:', error));
  };

  const f1 = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className='bg-dark text-light'>
        <center>
          <h1 className='text-warning p-2'>Select Food Recipe</h1>
          <form onSubmit={submitHandle}>
            <input 
              type='text' 
              value={search} 
              onChange={f1} 
              placeholder='Search item' 
              className='w-50 p-2 m-4' 
            />
            <input type='submit' value="Search" className='btn btn-warning p-2 mb-2' />
          </form>
        </center>
  
        <div className='container-fluid'>
          <div className='row'>
            {data.length > 0 ? data.map((item, index) => (
              <div key={index} className='col-md-4 bg-dark'>
                <div className="style card m-2 mb-2">
                  <img src={item.recipe.image} className="card-img-top img-fluid" alt={item.recipe.label} id="foods" />
                  <div className="card-body">
                    <h5 className="card-title">{item.recipe.label}</h5>
                    <p>Amount calories: {Math.round(item.recipe.calories)}</p>
                    <button className="btn btn-danger" style={{ borderRadius: '15%', backgroundColor: 'red' }}>
                      ₹{Math.round(item.recipe.totalWeight) - 500}
                    </button>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col text-center">
                <p>{search}</p>
              </div>
            )}
          </div>

          <div className='row'>
            {food.map((x, index) => (
              <div key={index} className='col-md-4'>
                <div className='style card mt-3'>
                  <img src={x.url} className='card-img-top' alt={x.Title} width='100%' height='350' id="foods" />
                  <div className='card-body'>
                    <h5 className='card-title'>{x.Title}</h5>
                    <p className='card-text'>Amount calories: {x.Calories}</p>
                    <button style={{ borderRadius: '15%', backgroundColor: 'red' }}>{x.Price}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
