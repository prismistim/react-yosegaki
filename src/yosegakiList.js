import React from 'react'
import Yosegaki from './yosegaki'

const YosegakiList = (props) => {
  let text = props.text
  console.log(text)
  return text.map((n, t, i) => (
    <Yosegaki name={n} text={t} index={i} {...props}/>
  ))
}

export default YosegakiList