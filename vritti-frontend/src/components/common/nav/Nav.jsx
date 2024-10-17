import { Link, NavLink } from "react-router-dom"

const Nav = ()=>{
return(<>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <Link to="/"><span className="ml-3 text-xl">Vritti.io</span>
    
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

      <Link className="mr-5 hover:text-gray-900" to="/login">Login</Link>
      <Link className="mr-5 hover:text-gray-900" to="/register">Register</Link>
      <Link className="mr-5 hover:text-gray-900" to="/profile">Profile</Link>
      <Link className="mr-5 hover:text-gray-900" >Welcome User,</Link>
    </nav>
  </div>
</header>
  </>)
}
export default Nav