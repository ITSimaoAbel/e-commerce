import { NavBar } from "./nav-bar";
import { ShoppingBag, User } from "@phosphor-icons/react";

export const Header = () => {
    return (
        <header className="flex items-center justify-between bg-cyan-700 text-white h-20 px-8 text-lg ">
            <h1 className="text-2xl font-bold border border-white p-2">LOGO</h1>
            <section className="flex gap-5">
                <NavBar/>
                <div>
                    <User size={24} weight="bold"/>
                </div> 
                <div>
                    <ShoppingBag size={24} weight="bold"/>
                </div>
            </section>
        </header>
    )
}