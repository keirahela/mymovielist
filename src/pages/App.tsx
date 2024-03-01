import '../App.css'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '../components/mode-toggle';
import { LanguageSelector } from '../components/language-selector';
import translations from '../../translations.json'
import { DropdownMenuRadioItem } from '../components/ui/dropdown-menu';
import { Card } from '../components/movie-card'
import { useState, useMemo, useEffect, Key } from 'react';
import axios from 'axios';
import { MovieCardSkeleton } from '@/components/Skeleton';

function App() {
  const { t, i18n } = useTranslation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [dependency, setDependency] = useState(0);
  
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
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LanguageSelector title={t('OPEN_TRANSLATION')} label={t('TRANSLATIONS')} child={
          Object.keys(translations).map((lang) => (
            <DropdownMenuRadioItem className='text-center' key={lang} onClick={() => {
              i18n.changeLanguage(lang)
            }} value={lang}>
              {translations[lang as keyof typeof translations].nativeName}
            </DropdownMenuRadioItem>
        ))}>
        </LanguageSelector>
        <div className='flex flex-wrap flex-row-3'>
        {isLoading ?
          Array(10).fill(0).map((_, index) => {
            return (
              <MovieCardSkeleton key={index} />
            )
          })
        : 
          movies.map((movie: any, index: Key | null | undefined) => {
            return (
              <Card className='flex-auto' key={index} title={movie.title} description={movie.overview} thumbnail={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} id={movie.id} />
            )
          })
        }
        </div>
        <ModeToggle />
      </ThemeProvider>
    </>
  )
}

export default App
