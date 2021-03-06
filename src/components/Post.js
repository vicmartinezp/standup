import React from "react"
import KPIs from "./KPIs"
import Team from "./Team"
import Header from "./Header"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const Post = ({ data, team }) => (
  <Wrapper>
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
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  flex-direction: column;

  .content {
    flex: 1;
    display: flex;
    overflow: auto;

    .left,
    .right {
      flex: 1;
      display: flex;
      overflow: auto;
      flex-direction: column;
      border-top: 1px solid #ffffff;

      .card {
        flex: 1;
        display: flex;
        overflow: auto;
        border-radius: 4px;
        flex-direction: column;
        margin: 1rem 1rem 0 1rem;
        background-color: #ffffff;
        border: 1px solid #ccdee3;
        box-shadow: 1px 1px 6px -6px rgba(0, 0, 0, 1);

        &:last-child {
          margin-bottom: 1rem;
        }

        h3 {
          padding: 0.2rem 0.5rem;
          background-color: #ccdee3;
          border-bottom: 1px solid #eaeaea;
        }

        .markdown-body {
          flex: 1;
          padding: 1rem;
          overflow: auto;
        }
      }
    }

    .left {
      margin: 0 0 1rem 4rem;
      border-right: 1px solid #eaeaea;
    }

    .right {
      margin: 0 4rem 1rem 0;
      border-left: 1px solid #ffffff;
    }
  }
`

export default Post
