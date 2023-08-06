import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const menuFooter = [
    {
      text: "会員登録",
      href: "/sign-up"
    },
    {
      text: "運営会社",
      href: "/operate-company"
    },
    {
      text: "利用規約",
      href: "/terms"
    },
    {
      text: "個人情報の取扱について",
      href: "/process-personal-information"
    },
    {
      text: "特定商取引法に基づく表記",
      href: "/specified-commercial-transaction"
    },
    {
      text: "お問い合わせ",
      href: "/inquiry"
    },
  ]

  return (
    <footer className={"bg-main d-flex justify-content-evenly"}>
      {menuFooter.map(item => (
        <Link key={item.href} className={"color-white"} to={item.href}>
          {item.text}
        </Link>
      ))}
    </footer>
  )
}

export default Footer