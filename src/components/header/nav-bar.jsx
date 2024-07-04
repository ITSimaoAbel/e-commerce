import { NavLink }  from "react-router-dom"

export const NavBar = () => {
    const activeStyles = "text-red-500";
    const inactiveStyles = "text-white";
    return (
        <nav className="space-x-2">  
            <NavLink to={"/"} className={({isActive}) => `${isActive ? activeStyles : inactiveStyles}`}>Pagina inicial</NavLink>
            <NavLink to={"/products"} className={({isActive}) => `${isActive ? activeStyles : inactiveStyles}`}>Productos</NavLink>
            <NavLink to={"/about"} className={({isActive}) => `${isActive ? activeStyles : inactiveStyles}`}>Sobre Nos</NavLink>
            <NavLink to={"/contact"} className={({isActive}) => `${isActive ? activeStyles : inactiveStyles}`}>Contacto</NavLink>
            <NavLink to={"/faq"} className={({isActive}) => `${isActive ? activeStyles : inactiveStyles}`}>FAQ</NavLink>
        </nav>
    )
}