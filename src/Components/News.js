
import React, { useState, useEffect } from 'react';
import './News.css'
import news from './images/br1.jpg'
import sport from './images/s1.jpg'
import business11 from './images/b1.jpg'
import Footer from './Footer'
export default function News() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=18ed2d1832924313ae196aabf8fb6d24')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArticles(filteredArticles);
  };
  return (<>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={sport} class="d-block w-100 img-fluid" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={news} class="d-block w-100 img-fluid" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={business11} class="d-block w-100 img-fluid" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div className='container-fluid'>


      <div className='row bg-dark'>
        <center>
          <div className='col-md-8'>

            <h1 className='my-4 text-light  '>Search  India News</h1>
            <form className='form-inline mb-4'>
              <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='search item' className='w-50 p-2 m-4 ' />
              <input type='submit' value="search" onClick={handleSearch} className='btn btn-warning p-2 mb-2' />
            </form>

          </div>
        </center>
      </div>
      <div className='row bg-dark'>
        {articles.map(article => (
          <div key={article.url} className='col-md-4 mb-4'>
            <div className='card ' style={{ height: 400, marginBottom: 30, borderRadius: '10px' }}>
              {article.urlToImage && (
                <img src={article.urlToImage} className='card-img-top'
                  alt='News' />)}
              <div className='bod card-body  text-light'>
                <h5  id="bl"className='card-title'>{article.title}</h5>
                <p className='card-text '>{article.description}</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    Source: {article.source.name}
                  </small>
                </p>
                <a href={article.url} className='btn btn-primary stretched-link' target='_blank' rel='noopener noreferrer' >
                  Read more
                </a>
              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  </>
  );
}

