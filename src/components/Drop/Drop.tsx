import imgDropBgSrc from "assets/gifs/drop.gif"
import imgAppStoreSrc from "assets/images/appstore.webp"
import imgGoogleSrc from "assets/images/googleplay.webp"
import "./Drop.scss"
import { socials } from "utils"

export const Drop = (): JSX.Element => {
  return (
    <div className="drop">
      <img src={imgDropBgSrc} alt="drop bg" className="drop-bg" />
      <div className="drop-left">
        <h2 className="drop-left-title">READY FOR NEXT NFT DROP?</h2>
        <p className="drop-left-desc">
          ARE YOU READY FOR THE ADVENTURE?
          <br />
          PICK UP YOUR WEAPON AND FIGHT FOR THE MIDDLE-EARTH. <br /> FOLLOW us!!
        </p>
        <div className="drop-left-socials">
          {socials.map((item, index) => (
            <a rel="noreferrer" target="_blank" key={index} href={item.link} className="drop-left-socials-item">
              {item.icon}
            </a>
          ))}
        </div>
        <a className="drop-left-link" rel="noreferrer" target="_blank">
          CONTACT US: info@company.com
        </a>
      </div>
      <div className="drop-right">
        <a className="drop-right-item">
          <img src={imgAppStoreSrc} alt="link" />
        </a>
        <a className="drop-right-item">
          <img src={imgGoogleSrc} alt="link" />
        </a>
      </div>
    </div>
  )
}
