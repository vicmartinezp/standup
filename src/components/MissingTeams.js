import React from "react"

const MissingTeams = ({ data }) => (
  <div className="missing-teams">
    <div className="header">
      <h1>Les Absents</h1>
    </div>
    <div className="content">
      <ul>
        {data &&
          data.length &&
          data.map((team, i) => <li key={i}>{team.name}</li>)}
      </ul>
    </div>
  </div>
)

export default MissingTeams
