import Navbar from "../components/navbar";
// import { promises } from "node:dns"
import { resolve } from "node:path"

export default async function Categories() {
 await new Promise((resolve) => {
    setTimeout(resolve , 4000);
})

  return (
    <div>
       <Navbar/>
       <ol className="text-center p-11">
         <li>Medical Books</li>
         <li>Engineering Books</li>
         <li>Arts Books</li>
         <li>Commerce Books</li>

       </ol>
    </div>
  )
}
