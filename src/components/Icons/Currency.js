import React from 'react'

function CurrencyIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 7.757L7.757 12L12 16.243L16.243 12L12 7.757Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default CurrencyIcon
