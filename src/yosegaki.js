import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: inline-block;
  width: 30%;
  border: solid 1px #AAA;
  border-radius
`

const Yosegaki = (props) => {
  return <Card>
    <div className="yosegaki-text">{props.y.description}</div>
    <div className="yosegaki-name">{props.y.name}</div>
    <div className="yosegaki-id">#{props.id}</div>
  </Card>
}

export default Yosegaki