import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import devtools from 'devtools-detect';
import { useEffect, useMemo, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import axios from "axios";
import Image from '@/components/ui/image'
import { MovieData } from "@/server/interfaces/Movie";
import './style/Player.css'


function Player() {
    const { t } = useTranslation();
    const { id } = useParams();
    const [movieData, setMovieData] = useState<MovieData | null>(null)
    const [isSpecial, setIsSpecial] = useState(false)
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
        const data: MovieData = response.data
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

      const num = Math.floor(Math.random() * (10000 - 1 + 1) ) + 1;
      if(num === 1) {
        setIsSpecial(true)
      }
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
      <div className="flex justify-center text-center flex-col items-center">
          {isSpecial && 
            <div className="flex items-center justify-center flex-col">
            <Image
              src={`https://cdn.discordapp.com/attachments/1192222383067627731/1213625647272824932/8_663408582.jpeg?ex=65f627f6&is=65e3b2f6&hm=9df6d7a844747af896c9e40476fcd1aaedb52e708a89ddb2957323895131b25f&`}
              alt="sectionimage"
              className="w-96 h-96 object-fill"
            />
            <h1 className="pb-5">
              <em>Well, if getting lost in dreams about me is a problem, I suggest you invest in a better GPS...</em>
              <br></br>
              <em>or maybe just set your coordinates to "Reality" next time!</em> - <strong>Guardian</strong>
            </h1>
            </div>
          }
          <h1>
            <strong>{(movieData as MovieData)?.title}</strong>
            <br></br>
            <strong>{(movieData as MovieData)?.rating ? (movieData as MovieData)?.rating.toFixed(1) : "N/A"}</strong> <b style={{color: "gold"}}>★</b>
          </h1>
          <div className="flex flex-row flex-wrap">
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              {(movieData as MovieData)?.description}
            </p>
          </div>
          <iframe height={392} width={698} allowFullScreen={true} frameBorder={0} src={`https://vidsrc.xyz/embed/movie?tmdb=${id}&sub_url=https%3A%2F%2Fvidsrc.me%2Fsample.srt`} />
          <h1 className="pt-6 font-bold uppercase">{t("HOSTED_ELSEWHERE")}</h1>
          <ModeToggle />
      </div>
      </ThemeProvider>
    );
}

export default Player;