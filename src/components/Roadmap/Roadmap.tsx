import classNames from "classnames"

import imgRoadmapSrc from "assets/images/roadmap.webp"
import imgArrowSrc from "assets/images/arrow-roadmap.webp"
import { ReactComponent as Arrow } from "assets/icons/arrow-right.svg"
import "./Roadmap.scss"

export const Roadmap = (): JSX.Element => {
  const list = [
    {
      title: "PHASE 1",
      steps: ["MARKETING EVENT", "COMMUNITY BUILDING", "PRIVATE SALE", "NFT SALE", "PRESALE", "GAME BETA", "IDO"],
    },
    {
      title: "PHASE 2",
      steps: ["PVE RELEASE", "GROWTH MARKETING & MEDIA", "PVP", "RANKING", "CEX LISTING"],
    },
    {
      title: "PHASE 3",
      steps: ["PROJECT CORE TEAM FOUNDED", "INITIAL PROJECT MEETING", "SMART CONTRACT"],
    },
    {
      title: "PHASE 4",
      steps: ["PROJECT LAUNCH", "DESIGN COMPLETION", "TEAM KYC", "GAME DEVELOPMENT"],
    },
  ]

  return (
    <div className="roadmap">
      <img src={imgRoadmapSrc} alt="roadmap" className="roadmap-bg" />
      <h2 className="roadmap-title">
        ROADMAP
        <Arrow className="roadmap-arrow" />
      </h2>
      <div className="roadmap-content">
        {list.map((item, index) => (
          <div className={classNames("roadmap-phase", `roadmap-phase-${index + 1}`)} key={index}>
            <img src={imgArrowSrc} alt="arrow" className="roadmap-phase-img" />
            <h3 className="roadmap-phase-title">{item.title}</h3>
            {item.steps.map((step, index) => (
              <div className="roadmap-phase-step" key={index}>
                {step}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
