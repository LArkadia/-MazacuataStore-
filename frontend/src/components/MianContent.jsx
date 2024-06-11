import { Outlet } from "react-router-dom"
import { Header } from "./ui/Header"
import { Footer } from "./ui/Footer"

export const MianContent = () => {
  return (
    <> 
       <Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}
