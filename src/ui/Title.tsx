import React from 'react'

interface Props{
    children: React.ReactNode
}

const Title = ({children}:Props) => {
  return (
    <div>
      <h1 className="text-5xl textStyle">{children}</h1>
    </div>
  )
}

export default Title
