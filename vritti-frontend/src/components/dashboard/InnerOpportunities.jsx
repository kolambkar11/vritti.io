const InnerOpportunities = (props) =>{

return(<>
    <div className="p-4 lg:w-1/2">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-16 rounded-lg overflow-hidden relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{props.title}</h1>
            <table className="text-center border-collapse border border-slate-500 w-full">
                <thead>
                    <tr>
                    <th className="border border-slate-600 p-4">Sr. No</th>
                    <th className="border border-slate-600 p-4">Organization Name</th>
                    <th className="border border-slate-600 p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-slate-700 p-4">1</td>
                    <td className="border border-slate-700 p-4">TATA Consultancy TATA Consultancy TATA Consultancy</td>
                    <td className="border border-slate-700 p-4">View</td>
                    </tr>
                    <tr>
                    <td className="border border-slate-700 p-4">2</td>
                    <td className="border border-slate-700 p-4">TATA Consultancy TATA Consultancy TATA Consultancy</td>
                    <td className="border border-slate-700 p-4">View</td>
                    </tr>
                    <tr>
                    <td className="border border-slate-700 p-4">3</td>
                    <td className="border border-slate-700 p-4">TATA Consultancy TATA Consultancy TATA Consultancy</td>
                    <td className="border border-slate-700 p-4">View</td>
                    </tr>
                </tbody>
            </table>

            <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
                </span>
            </div>
        </div>
    </div>
</>)

    }

    export default InnerOpportunities