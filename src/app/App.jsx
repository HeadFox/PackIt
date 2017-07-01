import React from "react" // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"

import "./App.scss"

const App = () => (
  <div className="packit">
    <h1 className="packit__title">Welcome to PackIt</h1>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))

export default App
