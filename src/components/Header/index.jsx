import HeaderTop from "./components/HeaderTop";
import Menu from "./components/Menu";

function Header(props) {
  return (
    <div className="header">
      <HeaderTop />
      <Menu />
    </div>
  );
}

export default Header;
