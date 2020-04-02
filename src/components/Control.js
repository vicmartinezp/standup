import React from "react"

const Control = ({ type, handler }) => (
  <div
    tabIndex={0}
    role="button"
    onClick={handler}
    onKeyPress={handler}
    className={`control ${type}`}
  ></div>
)

export default Control
