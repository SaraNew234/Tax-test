import React from 'react'

import {StyledButton} from './style.js';

function Button({label}) {
  return (
    <StyledButton>
        <button type='submit'>
            {label}
        </button>


    </StyledButton>
  )
}

export default Button