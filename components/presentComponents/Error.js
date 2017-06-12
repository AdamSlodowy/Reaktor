import React from 'react'

const Error = ({errorMsg, onRetry}) => {
  return (
      <div>
          <p>{errorMsg}</p>
          <button onClick={onRetry}>Retry</button>
      </div>
  )
};

export default Error;