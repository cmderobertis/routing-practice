import React from "react"
import { useParams } from "react-router-dom"

const TextColor = () => {
  let params = useParams()
  return (
    <div className="text-center">
      <h1 style={{ color: params.textColor }}>The word is: {params.word}</h1>
    </div>
  )
}

export default TextColor
