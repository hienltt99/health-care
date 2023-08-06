import React, { useState } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { RouterUrl } from "../../constants";

const Menu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menus = [
    {
      title: "自分の記録",
      href: RouterUrl.RECORDS
    },
    {
      title: "体重グラフ",
      href: "/"
    },

    {
      title: "目標",
      href: "/"
    },

    {
      title: "選択中のコース",
      href: "/"
    },

    {
      title: "コラム一覧",
      href: RouterUrl.COLUMN
    },

    {
      title: "設定",
      href: "/"
    },
  ];

  const handleOpenMenu = () => {
    const elm = document.getElementById('icon_menu');

    if (elm) {
      elm.classList.toggle('active');
    }
    setIsShowMenu(!isShowMenu)
  }

  return (
    <div>
      <nav className={"menu position-relative"}>
        <div id="icon_menu" className="icon-menu example5" onClick={handleOpenMenu}>
          <span></span>
        </div>
        {isShowMenu && <ul className={"dropdown-list z-3 p-0 position-absolute"}>
          {menus.map(menu => (
            <li key={menu.title} onClick={handleOpenMenu}>
              <Link to={menu.href}>{menu.title}</Link>
            </li>
          ))}
        </ul>}
      </nav>
      {isShowMenu && <div onClick={handleOpenMenu} className={"overlay"}></div>}
    </div>
  )
}

export default Menu