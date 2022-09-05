import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./routes/Home"
import NumOrWord from "./routes/NumOrWord"
import TextColor from "./routes/TextColor"
import BgColor from "./routes/BgColor"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path=":numOrWord" element={<NumOrWord />} />
          <Route path=":word/:textColor" element={<TextColor />} />
          <Route path=":word/:textColor/:bgColor" element={<BgColor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
