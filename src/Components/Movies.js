import React, { useState } from 'react';
import Data from './Movies.json';
import './movies.css';

export default function Movies() {
    const [local, setLocal] = useState(Data);
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState("");

    const a = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?apikey=18eaeb4f&s=${name}&type=movie&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.Search || []));
    };

    const b = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <div className='' id="SA">
                <div className='row mt-5'>
                    <div className='col-md-12 bg-dark'>
                        <center>
                            <h1 className='p-4' id="fo">Movie Search</h1>
                            <form onSubmit={a}>
                                <input 
                                    type='text' 
                                    value={name} 
                                    onChange={b} 
                                    placeholder='Search item' 
                                    className='search-input w-50 p-2 m-4' 
                                />
                                <input 
                                    type='submit' 
                                    value="Search" 
                                    className='btn btn-danger p-2 mb-2' 
                                />
                            </form>
                        </center>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='row'>
                    {movies.length > 0 && movies.map((movie) => (
                        <div key={movie.imdbID} className='col-md-4 mb-4'>
                            <div className='card' id="api">
                                <img src={movie.Poster} className='card-img-top' alt={movie.Title} width='100%' height='350px' id="movi" />
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.Title}</h5>
                                    <p className='card-text'>Year: {movie.Year}</p>
                                    <a 
                                        href={`https://www.imdb.com/title/${movie.imdbID}`} 
                                        target='_blank' 
                                        rel='noopener noreferrer' 
                                        className='btn text-light' 
                                        style={{ borderRadius: '15%', backgroundColor: 'red' }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row'>
                    {local.map((x) => (
                        <div key={x.Title} className='col-md-4 mb-4'>
                            <div className='card mt-3' id="ap">
                                <img src={x.url} className='card-img-top' alt='' width='100%' height='350' id="movi" />
                                <div className='card-body'>
                                    <h5 className='card-title'>{x.Title}</h5>
                                    <p className='card-text'>Rating: {x.rate}</p>
                                    <button style={{ borderRadius: '15%', backgroundColor: 'red' }}>{x.Details}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
