import imgTokenBgSrc from "assets/images/token-bg.webp"
import imgTokenSrc from "assets/images/token.webp"
import imgArrowSrc from "assets/images/arrow-vertical-2.webp"
import "./Token.scss"

export const Token = (): JSX.Element => {
  return (
    <div className="token">
      <img src={imgTokenBgSrc} alt="token bg" className="token-bg" />
      <h2 className="token-title">TOKENOMICS</h2>
      <img src={imgArrowSrc} alt="arrow" className="token-arrow" />
      <img src={imgTokenSrc} alt="token" className="token-img" />
    </div>
  )
}
