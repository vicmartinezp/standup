import React from "react"
import Counter from "./Counter"

const Header = ({ team, mood }) => (
  <div className="header">
    <div className="title">
      <h1>
        {mood} {team.name}
      </h1>
      <p>{team.description}</p>
    </div>
    <Counter start={0} />
  </div>
)

export default Header
