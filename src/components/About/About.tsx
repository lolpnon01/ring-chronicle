import imgAboutSrc from "assets/images/about.webp"
import imgArrowSrc from "assets/images/arrow-gorizontal.webp"
import img1Src from "assets/images/about/1.webp"
import img2Src from "assets/images/about/2.webp"
import img3Src from "assets/images/about/3.webp"
import imgEffectSrc from "assets/images/card-fire/3.webp"
import "./About.scss"

export const About = (): JSX.Element => {
  return (
    <div className="about">
      <img src={imgAboutSrc} alt="about" className="about-bg" />
      <img src={imgEffectSrc} alt="effect" className="about-effect" />
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <img src={imgArrowSrc} alt="arrow" className="about-arrow" />
        <div className="about-imgs">
          <img src={img1Src} alt="about" className="about-imgs-item" />
          <img src={img2Src} alt="about" className="about-imgs-item" />
          <img src={img3Src} alt="about" className="about-imgs-item" />
        </div>
        <p className="about-desc">
          THE RING CHRONICLE BLOCKCHAIN TECHNOLOGY TO ENABLE PLAY-TO-EARN, ALLOWING PLAYERS TO USE IN-GAME NFT ASSETS TO
          INCREASE VALUE OVER TIME. WE ARE INTENDED TO PROVIDE MOENTARY VALUE TO THE COMMUNITY VIA THE PLAY- TO-EARN
          BLOCKCHAIN SYSTEM
        </p>
      </div>
    </div>
  )
}
