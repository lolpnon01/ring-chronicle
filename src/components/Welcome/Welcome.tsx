import imgBgSrc from "assets/images/welcome.webp"
import { ReactComponent as Explore } from "assets/icons/explore-btn.svg"
import "./Welcome.scss"

export const Welcome = (): JSX.Element => {
  return (
    <div className="welcome">
      <img src={imgBgSrc} alt="background" className="welcome-bg" />
      <h1 className="welcome-title">Welcome to The Ring Chronicle</h1>
      <p className="welcome-desc">
        We keep building and provide you the best opportunity to play to earn. A real play to earn.
      </p>
      <Explore className="welcome-btn" />
    </div>
  )
}
