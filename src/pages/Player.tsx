import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import devtools from 'devtools-detect';
import { useEffect, useMemo, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import axios from "axios";
import Image from '@/components/ui/image'
import './style/Player.css'
import { MovieData } from "@/server/interfaces/Request";


function Player() {
    const { t } = useTranslation();
    const { id } = useParams();
    const Theme = localStorage.getItem('vite-ui-theme')
    const [movieData, setMovieData] = useState([])
    const navigate = useNavigate();

    const getDetails = useMemo(() => async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `/api/movies/details/${id}`,
          headers: {
            Accept: 'application/json',
          }
        })
        const data = response.data
        console.log(data)
        setMovieData(data)
      }
      catch (error: any) {
        (error.request.status === 500 || error.request.status === 404) && navigate('/')
      }
    }, [id])

    useEffect(() => {
        // if (devtools.isOpen) {
        //     navigate('/')
        // }

        // window.addEventListener('devtoolschange', event => {
        //   if (event.detail.isOpen) {
        //     navigate('/')
        //   }
        // });

      if(Number.isNaN(Number(id))) navigate('/')

      getDetails();
    }, [navigate])

    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <header className="flex justify-center pb-12">
        <div className="flex flex-col justify-center h-96 w-5/12 relative overflow-hidden">
          <Image
            src={`${(movieData as unknown as MovieData).thumbnail}`}
            alt="sectionimage"
            className="w-full h-full object-fill"
          />
        <div className={`absolute inset-0 bg-gradient-to-b from-[#FF000000] to-[#ffffff]`} />
      </div>
      </header> */}
      <div className="flex justify-center text-center flex-col">
          <iframe height={392} width={698} allowFullScreen={true} frameBorder={0} src={`https://vidsrc.xyz/embed/movie?tmdb=${id}&sub_url=https%3A%2F%2Fvidsrc.me%2Fsample.srt&ds_langs=en,de`} />
          <h1 className="pt-6 font-bold uppercase">{t("HOSTED_ELSEWHERE")}</h1>
          <ModeToggle />
      </div>
      </ThemeProvider>
    );
}

export default Player;