import imgPlayBgSrc from "assets/images/play.webp"
import "./Play.scss"

export const Play = (): JSX.Element => {
  return (
    <div className="play">
      <img src={imgPlayBgSrc} alt="play bg" className="play-bg" />
      <h2 className="play-title">EASY TO PLAY, PLAY TO EARN</h2>
    </div>
  )
}
