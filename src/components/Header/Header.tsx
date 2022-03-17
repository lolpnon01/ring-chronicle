import { useState } from "react"
import { useMedia } from "use-media"
import classNames from "classnames"

import { mixins } from "utils"

import { ReactComponent as Burger } from "assets/icons/burger.svg"
import { ReactComponent as Close } from "assets/icons/close.svg"
import imgLogoSrc from "assets/images/logo.webp"
import "./Header.scss"

export const Header = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false)
  const isM = useMedia({ maxWidth: mixins.m })
  const links = [
    {
      title: "Marketplace",
      link: "",
    },
    {
      title: "Whitepaper",
      link: "",
    },
    {
      title: "Pitch deck",
      link: "",
    },
    {
      title: "Mint",
      link: "",
    },
  ]

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className="header">
      {isM && (
        <div
          className={classNames("header-sidebar", {
            active: sidebar,
          })}
        >
          <div className="header-links">
            {links.map((link, index) => (
              <a rel="noreferrer" target="_blank" key={index} href={link.link} className="header-sidebar-link">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
      <img src={imgLogoSrc} alt="logo" className="header-img" />
      <div className="header-other">
        {links.map((item, index) => (
          <a rel="noreferrer" target="_blank" key={index} href={item.link} className="header-other-link">
            {item.title}
          </a>
        ))}
        <button type="button" className="header-other-btn">
          Play Now
        </button>
        <button className="header-other-burger" onClick={toggleSidebar}>
          {sidebar ? <Close /> : <Burger />}
        </button>
      </div>
    </div>
  )
}
