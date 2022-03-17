import imgLogoSrc from "assets/images/logo.webp"
import "./Header.scss"

export const Header = (): JSX.Element => {
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

  return (
    <div className="header">
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
      </div>
    </div>
  )
}
