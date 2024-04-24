import MenuInfo from "./MenuInfo";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Menu() {

  return (
    <>
      <NavBar />
      <div className="my-20">
        <MenuInfo />
      </div>
      <Footer />

    </>
  );
}

export default Menu;
