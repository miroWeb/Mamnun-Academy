import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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
          <li className="li1">Kurslar</li>
          <li className="li1">Fikrlar</li>

          <button onClick={toggleModal} className="btn-modal" id="nav_btn">
            Kirish
          </button>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2 className="tel_text">Tizimga kirish</h2>
                <form className="modal_form">
                  <div className="inp_tel">
                    <p>Telefon raqam</p>
                    <input
                      className="tel"
                      type="number"
                      placeholder="+998 99 999 80 84"
                    />
                  </div>
                  <div className="inp_password">
                    <p>Parol</p>
                    <input
                      className="password"
                      type="password"
                      placeholder="parol"
                    />  
                  </div>
                  <div className="div_btn_modal">
                    <button className="btn_modal">Kirish</button>
                  </div>
                </form>
                <button className="close-modal" onClick={toggleModal}>
                  X
                </button>
              </div>
            </div>
          )}
        </ul>
      </div>
      <div id="list">
        <ul className="ul2">
          <li className="li_burger">Bosh sahifa</li>
          <li className="li_burger">Kurslar</li>
          <li className="li_burger">Fikrlar</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
