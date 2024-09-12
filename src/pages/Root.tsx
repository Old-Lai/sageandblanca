import { Outlet } from "react-router-dom"
import { NavBar } from "../components"
import { ShoppingCart } from 'lucide-react';


export default function Root(){
    return(
        <>
            <header className="bg-orange-300 w-full h-16 flex justify-between items-center">
                <NavBar/>
                <h1 className="flex-1 text-center">Shop Name</h1>
                <ShoppingCart className="w-16"/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}