import imgArrowSrc from "assets/images/arrow-vertical.webp"
import imgNft1Src from "assets/images/nft/NFT1.webp"
import imgNft2Src from "assets/images/nft/NFT2.webp"
import imgNft3Src from "assets/images/nft/NFT3.webp"
import imgNft4Src from "assets/images/nft/NFT4.webp"
import imgEffect1Src from "assets/images/card-fire/1.webp"
import imgEffect2Src from "assets/images/card-fire/2.webp"

import "./What.scss"

export const What = (): JSX.Element => {
  return (
    <div className="what">
      <img src={imgEffect1Src} alt="effect" className="what-effect-1" />
      <img src={imgEffect2Src} alt="effect" className="what-effect-2" />
      <div className="what-left">
        <div className="what-left-title">
          <h1 className="what-left-title-text">WHAT IS RING CHRONICLE?</h1>
        </div>
        <div className="what-left-desc">
          <img src={imgArrowSrc} alt="arrow" className="what-left-desc-img" />
          <p className="what-left-desc-text">
            THIS IS A MULTIPLAYER STRATEGY AND ROLE-PLAYING GAME. YOU CAN PICK WHICH KINGDOM AND FIGHT WITH YOUR NFT
            TROOP AGAINST MONSTER OR FELLOW PLAYERS. AND WE ARE BUILDING A DECENTRALIZED GAME TOO, SHARE GAME REVENUE
            WITH PLAYERS.
          </p>
        </div>
      </div>
      <div className="what-right">
        <img src={imgNft1Src} alt="nft" className="what-right-nft" />
        <img src={imgNft2Src} alt="nft" className="what-right-nft-2" />
        <img src={imgNft3Src} alt="nft" className="what-right-nft" />
        <img src={imgNft4Src} alt="nft" className="what-right-nft" />
      </div>
    </div>
  )
}
