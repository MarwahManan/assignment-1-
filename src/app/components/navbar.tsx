import Link from "next/link";

import React from "react";
const Navbar = () =>{
    return(
       <div>
          <h1 className="flex justify-self-start font-bold text-cyan-400 border-1 p-4 text-2xl ">M <sub>2</sub> BOOKSTORE</h1>
           <div className="flex justify-center gap-7 text-cyan-400">
           <Link href="/" className=" hover:bg-slate-400">Home</Link>
            
            <Link href="/about" className=" hover:bg-slate-400">About</Link>
            
            <Link href="/categories"   className=" hover:bg-slate-400">Categories</Link>
            
            <Link href="/shop"  className="hover:bg-slate-400">Shop</Link>

            <Link href="/contact"  className=" hover:bg-slate-400">Contact</Link>
            
           
           </div>
        </div>

    )
} 

export default Navbar