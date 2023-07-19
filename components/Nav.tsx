import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  return (
    <header className="py-4 sticky top-0 z-50 bg-off-white shadow-sm">
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Nav;
