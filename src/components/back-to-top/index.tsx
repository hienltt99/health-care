import React, { useEffect, useState } from "react";
import "./backtotop.scss";
import icon_arrow from "../../assets/icons/icon_arrow.svg";

const ButtonBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      title={"Back to top"}
      className={`${isVisible ? '' : 'invisible'} btn-backtotop`}
    >
      <img src={icon_arrow} alt="icon arrow"/>
    </button>
  )
}

export default ButtonBackToTop