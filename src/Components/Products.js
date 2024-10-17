import React, { useState, useEffect } from 'react';
import './Product.css'
import Footer from './Footer'
export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products')
      .then(res => res.json())
      .then(json => setProducts(json.products));
  }, []);
 
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
 
  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <input type="text" placeholder="Search" value={search} onChange={handleSearch} className="form-control mb-3 mt-3" />
        </div>
      </div>
      <div className='row   p-4'>
        {products.filter((item) => item.category.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.id} className='col-md-4 mb-4'>
              <div className="card h-100" >
                <img src={item.image} className="card-img-top" alt="" style={{ height: '300px', objectFit:'cover' }} />
                <div className="card-body" >
                  <h5 className="card-title">{item.category}</h5>
                  <h4 className='card-title'>${item.price}</h4>
                 
                  <footer>
                  <a href="#" className="btn btn-success">Go somewhere</a>
                  </footer>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}