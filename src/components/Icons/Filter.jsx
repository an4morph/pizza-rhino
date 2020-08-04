import React from 'react'

function FilterIcon(props) {
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
        d="M14 12V19.88C14.04 20.18 13.94 20.5 13.71 20.71C13.6175 20.8027 13.5076 20.8762 13.3866 20.9264C13.2657 20.9766 13.136 21.0024 13.005 21.0024C12.874 21.0024 12.7444 20.9766 12.6234 20.9264C12.5024 20.8762 12.3925 20.8027 12.3 20.71L10.29 18.7C10.1809 18.5934 10.098 18.463 10.0477 18.319C9.9974 18.175 9.98107 18.0213 10 17.87V12H9.97001L4.21001 4.62C4.04762 4.41153 3.97434 4.14726 4.0062 3.88493C4.03805 3.6226 4.17244 3.38355 4.38001 3.22C4.57001 3.08 4.78001 3 5.00001 3H19C19.22 3 19.43 3.08 19.62 3.22C19.8276 3.38355 19.962 3.6226 19.9938 3.88493C20.0257 4.14726 19.9524 4.41153 19.79 4.62L14.03 12H14Z"
        fill="currentColor"
      />
    </svg>

  )
}

export default FilterIcon