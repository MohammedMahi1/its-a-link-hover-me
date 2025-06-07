
import { Outlet } from 'react-router'
import Navbar from '../components/ui/nav-bar'
import Button from '../components/ui/button'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default Layout