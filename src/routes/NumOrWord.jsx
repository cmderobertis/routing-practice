import React from "react"
import { useParams } from "react-router-dom"

const Word = () => {
  let params = useParams()
  return (
    <div className="text-center">
      {isNaN(params.numOrWord) ? (
        <h1>The word is: {params.numOrWord}</h1>
      ) : (
        <h1>The number is: {params.numOrWord}</h1>
      )}
    </div>
  )
}

export default Word
