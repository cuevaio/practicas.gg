import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-black border-b dark:border-b-zinc-800">
      <nav className="container">
        <MobileNavbar />
        <DesktopNavbar />
      </nav>
    </div>
  )
}
