import React from 'react'

interface Props {
  msg: string | null
}

console.log('hello world')
export const Feedback: React.FC<Props> = ({ msg }) => {
  return (
    <div className="feedback-modal-container">
      <p>Hello World</p>
    </div>
  )
}
