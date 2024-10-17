import InnerOpportunities from "./inneropportunities";

const Opportunities = () =>{
    return(
        <>
        <section className="text-gray-600 body-font">
            <div className=" px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <InnerOpportunities title="New Opportunities"/>
                    <InnerOpportunities title="Old Opportunities"/>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default Opportunities;