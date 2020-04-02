import React from "react"
import Post from "./Post"
import Extra from "./Extra"
import Footer from "./Footer"
import MissingTeams from "./MissingTeams"

const Slide = ({ data, team, nextTeam, selected }) => (
  <div key={data.team_slug} className={`slide${selected ? " selected" : ""}`}>
    {team ? (
      <Post data={data} team={team} />
    ) : data.length && data[0].slug ? (
      <MissingTeams data={data} />
    ) : (
      <Extra data={data} />
    )}
    {nextTeam && <Footer team={nextTeam} />}
  </div>
)

export default Slide
