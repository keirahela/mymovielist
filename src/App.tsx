import './App.css'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle';
import { LanguageSelector } from './components/language-selector';
import translations from '../translations.json'
import { DropdownMenuRadioItem } from './components/ui/dropdown-menu';

function App() {
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
        <ModeToggle />
        {t('WELCOME_TO_PAGE')}
      </ThemeProvider>
    </>
  )
}

export default App
