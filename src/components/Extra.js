import React from "react"
import Counter from "./Counter"

const Extra = ({ data }) => (
  <div className="extra">
    <div className="header">
      <h1>{data.title}</h1>
      {data.timeout && <Counter start={0} />}
    </div>
    <div className="content">
      <ul>
        {data.entries &&
          data.entries.length &&
          data.entries.map((entry, i) => (
            <li key={i}>
              <p dangerouslySetInnerHTML={{ __html: entry }}></p>
            </li>
          ))}
      </ul>
    </div>
  </div>
)

export default Extra
