
import { Outlet } from 'react-router'
import NavBar from '../components/ui/nav-bar'


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Layout