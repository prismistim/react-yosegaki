import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  width: 30%;
  border: solid 1px #AAA;
`

const Yosegaki = (props) => {
  return <Card>
    <div className="yosegaki-text">{props.text}</div>
    <div className="yosegaki-name">{props.name}</div>
  </Card>
}

export default Yosegaki