import '../App.css'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '../components/mode-toggle';
import { LanguageSelector } from '../components/language-selector';
import translations from '../../translations.json'
import { DropdownMenuRadioItem } from '../components/ui/dropdown-menu';
import MainPage from './MainPage';
import { useState, useEffect } from 'react';
import LoginPage from './login';

function App() {
    const [hasCookies, setHasCookies] = useState(false);

    useEffect(() => {
      const checkCookies = () => {
        const cookiesNeeded = document.cookie
        if(cookiesNeeded.indexOf('userData=') > -1) {
            setHasCookies(true)
        } else {
            setHasCookies(false)
        }
      };
      checkCookies()
    })
  const { t, i18n } = useTranslation();

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
        <div className='flex flex-row items-center justify-center'>
          {hasCookies ? <MainPage /> : <LoginPage />}
        </div>
        <div className='flex items-center justify-center'>
          <ModeToggle />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
