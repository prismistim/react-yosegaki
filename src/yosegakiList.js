import React from 'react'
import Yosegaki from './yosegaki'

const YosegakiList = (props) => {
  console.log(props)
  let yosegaki = props.yosegaki
  let yosegaki_json = JSON.parse(props.json)

  // map(element, index, array)
  return yosegaki.map((y, i) => (
    <Yosegaki y={y} id={i} {...props}/>
  ))
}

export default YosegakiList