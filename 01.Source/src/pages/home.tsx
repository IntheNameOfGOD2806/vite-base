import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '#/components/theme/ThemeSwitcher'
import { Button } from '#/components/ui-react-aria'
import { useAuthentication } from '#/context/auth/AuthProvider'
import { useTranslation } from 'react-i18next'

// Assets in public directory cannot be imported from JavaScript.
// Instead, we use `src/assets` directory.
import ViteLogo from '../assets/images/vite.svg'

export default function Home() {  
  const { user, loggedIn } = useAuthentication()
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mx-auto flex h-full min-h-screen w-full flex-col">
      <header className="w-full p-4 flex justify-between items-center">
        <div>
          <Button variant="primary" className="mr-2" onClick={() => changeLanguage('en')}>English</Button>
          <Button variant="secondary" className="mr-2" onClick={() => changeLanguage('fr')}>French</Button>
          {/* <Button variant="destructive" onClick={() => changeLanguage('vi')}>Vietnamese</Button> */}
          {/* Add more language buttons as needed */}
        </div>
        <ThemeSwitcher className="size-9" />
      </header>
      <div className="mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full border-collapse items-center justify-center">
          <img src={ViteLogo} alt="Vite logo" className="h-28" />
        </div>
        <div className="text-center text-gray-600 text-lg sm:mt-8 dark:text-gray-400">
          <p className="leading-8">{t('welcome')}</p>
          <p className="leading-8">
            Vite + React + Typescript + Tailwind CSS + React Hook Form + Vitest
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
