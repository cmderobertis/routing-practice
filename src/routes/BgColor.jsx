import React from "react"
import { useParams } from "react-router-dom"

const BgColor = () => {
  let params = useParams()
  return (
    <div className="text-center">
      <h1 style={{ color: params.textColor, backgroundColor: params.bgColor }}>
        The word is: {params.word}
      </h1>
    </div>
  )
}

export default BgColor
