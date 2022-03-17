import { About, Game, Header, Play, Token, Welcome, What, Drop, Copyright, Roadmap } from "components"

import "./Main.scss"

export const Main = (): JSX.Element => {
  return (
    <div className="main">
      <Header />
      <Welcome />
      <What />
      <About />
      <Game />
      <Token />
      <Roadmap />
      <Play />
      <Drop />
      <Copyright />
    </div>
  )
}
