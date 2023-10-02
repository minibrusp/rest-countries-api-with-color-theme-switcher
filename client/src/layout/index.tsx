import Header from "../components/Header"


type Props = { children: JSX.Element }

const Layout = ({ children } : Props ) => {
  return (
    <div className="font-Nunito-Sans bg-very-light-gray-bg min-h-screen dark:bg-very-dark-blue-bg">
      <Header />
      { children }
    </div>
  )
}

export default Layout