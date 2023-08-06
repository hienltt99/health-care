import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouterUrl } from "../../constants";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import icon_memo from "../../assets/icons/icon_memo.svg";
import icon_challenge from "../../assets/icons/icon_challenge.svg";
import icon_info from "../../assets/icons/icon_info.svg";
import Menu from "../menu";

const Header = () => {
  let params = useLocation();
  const [activeRoute, setActiveRoute] = useState(params.pathname || "");

  useEffect(() => {
    setActiveRoute(params.pathname);
  }, [params.pathname])

  return (
    <header className={"bg-main color-white"}>
      <section className={"container d-flex align-items-center justify-content-between"}>
        <Link to={RouterUrl.HOME}>
          <img src={logo} alt="logo_app" className={"nav-brand logo"}/>
        </Link>
        <nav className={"nav-items w-70"}>
          <ul className={"menus d-flex list-unstyled justify-content-between mb-0"}>
            <Link className={`link color-white ${activeRoute === RouterUrl.RECORDS && 'active'}`}
                  to={RouterUrl.RECORDS}>
              <img src={icon_memo} alt="icon_memo"/>
              自分の記録
            </Link>
            <li>
              <img src={icon_challenge} alt="icon_challenge"/>
              チャレンジ
            </li>
            <li className={"d-flex"}>
              <div className={"position-relative"}>
                <img src={icon_info} alt="icon_info"></img>
                <text className={"unread-message position-absolute top-0"}>1</text>
              </div>
              <span className={"ms-3"}>お知らせ</span>
            </li>
            <li>
              <Menu/>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header