import { useState } from "react";
import { HiOutlineMoon } from "react-icons/hi2";

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    if(isDarkTheme) {
      setIsDarkTheme(!isDarkTheme)
      document.documentElement.classList.remove('dark')
      return
    }
    setIsDarkTheme(!isDarkTheme)
    document.documentElement.classList.add('dark')
  }

  return (
    <header className="text-very-dark-blue-txt bg-white-txt-elem flex justify-between items-center px-4 py-8 shadow-lg shadow-dark-gray-input/10 dark:text-white-txt-elem dark:bg-dark-blue dark:shadow-sm dark:shadow-very-dark-blue-bg">
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
    </header>
  )
}

export default Header