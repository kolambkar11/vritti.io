import CardInner from "./CardInner"

const Card = () =>{
return(<>
<section className="text-gray-600 body-font">
  <div className=" px-5 py-14 mx-auto">
    <div className="flex flex-wrap -m-4">
        {/* card component */}
        <CardInner/>
        <CardInner/>
        <CardInner/>
        <CardInner/>
        {/* card component */}
    </div>
  </div>
</section>
</>)
}
export default Card