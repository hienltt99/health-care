import React from "react";
import Card from "../../../components/card";
import "./categories.scss";
import icon_knife from "../../../assets/icons/icon_knife.svg";
import icon_cup from "../../../assets/icons/icon_cup.svg";
import Button from "../../../components/button";

const MenuCategory = () => {
  const menus = [
    {
      menuName: "05.21.Morning",
      thumb: require("../../../assets/images/pic_morning.jpg")
    },
    {
      menuName: "05.21.Lunch",
      thumb: require("../../../assets/images/pic_lunch1.jpg")
    },
    {
      menuName: "05.21.Dinner",
      thumb: require("../../../assets/images/pic_dinner1.jpg")
    },
    {
      menuName: "05.21.Snack",
      thumb: require("../../../assets/images/pic_snack1.jpg")
    },
    {
      menuName: "05.20.Morning",
      thumb: require("../../../assets/images/pic_morning.jpg")
    },
    {
      menuName: "05.20.Lunch",
      thumb: require("../../../assets/images/pic_lunch2.jpg")
    },
    {
      menuName: "05.20.Dinner",
      thumb: require("../../../assets/images/pic_dinner2.jpg")
    },
    {
      menuName: "05.21.Snack",
      thumb: require("../../../assets/images/pic_snack2.jpg")
    }
  ];

  const categories = [
    {
      categoryName: "Morning",
      icon: icon_knife
    },
    {
      categoryName: "Lunch",
      icon: icon_knife
    },
    {
      categoryName: "Dinner",
      icon: icon_knife
    },
    {
      categoryName: "Snack",
      icon: icon_cup
    },
  ];

  const _renderCategories = () => (
    <div className={"d-flex flex-wrap justify-content-center gap-5 mb-4"}>
      {categories.map(cate => (
        <div key={cate.categoryName}
             className={"categories-food d-flex flex-column color-white justify-content-center align-items-center"}>
          <img src={cate.icon} alt={cate.categoryName}/>
          <span className={"category-name color-white"}>{cate.categoryName}</span>
        </div>
      ))}
    </div>
  )
  const _renderMenus = () => (
    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
      {menus.map(menu => (
        <Card key={menu.menuName} source={menu.thumb} title={menu.menuName}/>
      ))}
    </div>
  )

  return (
    <section className={"container menu-category my-5 text-center"}>
      {_renderCategories()}
      {_renderMenus()}

      <Button text={"記録をもっと見る"}/>
    </section>
  )
}

export default MenuCategory