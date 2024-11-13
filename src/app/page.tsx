import Image from "next/image";
import Navbar from "./components/navbar";




export default function Home() {
  return (
    <div>
       <Navbar/>
       <p className="text-center p-11">Welcome to M<sup>2</sup> Bookstore</p>
    </div>
  )
}
