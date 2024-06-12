import { Hero } from "../components/ui/Hero"
import BookPage from "./BookPage"

function HomePage() {
  return (
  <>
   <Hero/>
   <BookPage isHome={true}/>
  </>
  )
}

export default HomePage