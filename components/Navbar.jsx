import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  return (
    <div className="container">
      <div className="box_nav">
        <img className="logo_img" src="logo.png" alt="" />
        <div className="menu">
          <Hamburger
            onToggle={(toggle) => {
              if (toggle) {
                document.getElementById("list").style.transform =
                  "translateY(0)";
              } else {
                document.getElementById("list").style.transform =
                  "translateY(-100%)";
              }
            }}
          />
        </div>
        <ul className="ul1">
          <lic className="li1">Bosh sahifa</lic>
          <li className="li1">Kasiblar</li>
          <li className='li1'>Kurslar</li>
          <li className='li1'>Fikrlar</li>
          <button className="nav_btn">Kirish</button>
        </ul>
      </div>
      <div id="list">
        <ul className="ul2">
          <li className="li_burger">Bosh sahifa</li>
          <li className="li_burger">Kasiblar</li>
          <li className="li_burger">Kurslar</li>
          <li className="li_burger">Fikrlar</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
