import imgArrowSrc from "assets/images/arrow-gorizontal-2.webp"
import img1Src from "assets/images/game/1.webp"
import img2Src from "assets/images/game/2.webp"
import img3Src from "assets/images/game/3.webp"
import imgEffectSrc from "assets/images/card-fire/4.webp"
import "./Game.scss"

export const Game = (): JSX.Element => {
  const list = [
    {
      img: img1Src,
      desc: (
        <p>
          NFT INTRO THE RING CHRONICLE BLOCKCHAIN TECHNOLOGY TO <br /> ENABLE PLAY-TO-EARN,
        </p>
      ),
    },
    {
      img: img2Src,
      desc: (
        <p>
          PVE INTRO INTRO THE RING CHRONICLE BLOCKCHAIN <br /> TECHNOLOGY TO ENABLE PLAY-TO-EARN,
        </p>
      ),
    },
    {
      img: img3Src,
      desc: (
        <p>
          PVE INTRO INTRO THE RING CHRONICLE BLOCKCHAIN <br /> TECHNOLOGY TO ENABLE PLAY-TO-EARN,
        </p>
      ),
    },
  ]

  return (
    <div className="game">
      <img src={imgEffectSrc} alt="effect" className="game-effect" />
      <h2 className="game-title">GAME FEATURE</h2>
      <img src={imgArrowSrc} alt="arrow" className="game-arrow" />
      <div className="game-list">
        {list.map((item, index) => (
          <div key={index} className="game-list-item">
            <img src={item.img} alt="game screen" className="game-list-item-img" />
            {item.desc}
          </div>
        ))}
      </div>
    </div>
  )
}
