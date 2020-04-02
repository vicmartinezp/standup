import React from "react"

const Team = ({ team }) => (
  <div className="team">
    <div
      className="image"
      style={{ backgroundImage: `url(${team.avatarUrl})` }}
    ></div>
    <div className="members">
      {team.members.nodes.map(member => (
        <div className="member" key={member.login}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${member.avatarUrl})` }}
          ></div>
        </div>
      ))}
    </div>
  </div>
)

export default Team
