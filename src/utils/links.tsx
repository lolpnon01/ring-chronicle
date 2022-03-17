import { ReactNode } from "react"
import { hrefs } from "./sources"

import { ReactComponent as Telegram } from "assets/icons/telegram.svg"
import { ReactComponent as Discord } from "assets/icons/discord.svg"
import { ReactComponent as Twitter } from "assets/icons/twitter.svg"
import { ReactComponent as Medium } from "assets/icons/medium.svg"

export const socials: {
  icon: ReactNode
  link: string
}[] = [
  {
    icon: <Twitter />,
    link: hrefs.twitter,
  },
  {
    icon: <Telegram />,
    link: hrefs.telegram,
  },
  {
    icon: <Discord />,
    link: hrefs.discord,
  },
  {
    link: hrefs.medium,
    icon: <Medium />,
  },
]