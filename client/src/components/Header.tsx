import { useState, useEffect } from "react";
import { HiOutlineMoon } from "react-icons/hi2";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    if(isDarkTheme) {
      setIsDarkTheme(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', JSON.stringify(isDarkTheme))
      return
    }
    setIsDarkTheme(true)
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', JSON.stringify(isDarkTheme))
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('color-theme')!) === true || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setIsDarkTheme(true)
    } else {
        document.documentElement.classList.remove('dark')
    }
}, [])

useEffect(() => {
    let app = document.documentElement
    isDarkTheme ? app.classList.add('dark') : app.classList.remove('dark')
    localStorage.setItem('color-theme', JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  return (
    <header className="text-very-dark-blue-txt bg-white-txt-elem shadow-lg shadow-dark-gray-input/10 dark:text-white-txt-elem dark:bg-dark-blue dark:shadow-sm dark:shadow-very-dark-blue-bg sm:max-h-[80px]">
      <div className="flex justify-between items-center px-4 py-8 xl:max-w-[1440px] xl:mx-auto min-[1440px]:px-24">
        <h1 className="font-extrabold text-lg">Where in the world?</h1>
        <div 
          className="flex justify-end items-center gap-2 font-semibold cursor-pointer"
          onClick={changeTheme}
        >
          <span className="text-lg">
            <HiOutlineMoon />
          </span>
          <span className="text-base">Dark Mode</span>
        </div>
      </div>
    </header>
  )
}

export default Header