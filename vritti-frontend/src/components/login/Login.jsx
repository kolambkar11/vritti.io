import { Link } from "react-router-dom"
const Login = () =>{
    return(
        <>
        <section className="text-gray-600 body-font relative ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-12 text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get your dream Job</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        </div>
        <div className="p-2 w-full">
            Not a user?  <Link to="/register">Reigster</Link>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Login