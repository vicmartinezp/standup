import React from "react"
import KPIs from "./KPIs"
import Team from "./Team"
import Header from "./Header"
import ReactMarkdown from "react-markdown"

const Post = ({ data, team }) => (
  <div className="post">
    <Header team={team} mood={data.mood} />
    <KPIs kpis={data.kpis} />
    <div className="content">
      <div className="left">
        <Team team={team} />
        <div className="card">
          <h3>Besoins:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.needs} />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <h3>Priorités:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.priorities} />
          </div>
        </div>
        <div className="card">
          <h3>Echéances / Evénements:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.term} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Post
