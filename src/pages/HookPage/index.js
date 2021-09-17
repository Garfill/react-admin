import React, { useEffect, useState } from 'react'

const boxStyle = {padding: '10px', margin: '10px', background: '#fff'}

function StateUI() {
  const [id, setId] = useState(0);
  const onClick = () => {
    setId(id + 1)
  }
  return (
    <div style={boxStyle}>
      <h1>UseState Hook</h1>
      <div>{id}</div>
      <button onClick={ onClick }>click</button>
    </div>
  )
}

function EffectUI() {
  const [id, setId] = useState(0)
  const [status, setStatus] = useState(false)
  const onClick = () => {
    setId(id => id + 1)
  }

  useEffect(() => {
    if (id > 0) {
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 1000)
    }
  }, [id])

  return (
    <div style={boxStyle}>
      <h1>UseEffect Hook</h1>
      <div className={status ? 'effect-rotate effect-hook' : 'effect-hook'}>You clicked {id} times</div>
      <button onClick={ onClick }>click</button>
    </div>
  )
}

function HookPage() {
  return (
    <>
      <StateUI></StateUI>
      <EffectUI></EffectUI>
    </>
  )
}

export default HookPage