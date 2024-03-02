import { Card } from '../components/movie-card'
import { useState, useMemo, useEffect, Key } from 'react';
import axios from 'axios';
import { MovieCardSkeleton } from '@/components/Skeleton';

export default function MainPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [dependency, _] = useState(0);

    const fetchMovies = useMemo(() => async () => {
        try {
          const response = await axios({
            method: 'GET',
            url: '/api/movies',
            headers: {
              Accept: 'application/json',
            }
          });
          setMovies(response.data.data)
          setLoading(false)
        }
        catch (error) {
          console.error(error)
        }
      }, [dependency])
    
      useEffect(() => {
        fetchMovies()
      }, [fetchMovies])

    return (
        <div className='flex flex-wrap flex-row justify-center items-center'>
        {isLoading ?
          Array(10).fill(0).map((_, index) => {
            return (
              <MovieCardSkeleton key={index} />
            )
          })
        : 
          
          movies.map((movie: any, index: Key | null | undefined) => {
            return (
              <Card className='flex-auto' key={index} rating={movie.vote_average} title={movie.title} description={movie.overview} thumbnail={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} id={movie.id} />
            )
          })
        }
        </div>        
    )
}