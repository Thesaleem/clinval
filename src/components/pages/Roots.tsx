import NavBar from "../Landing Page/Navbar"
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Root