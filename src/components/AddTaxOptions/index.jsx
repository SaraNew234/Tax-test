import React,{useState,useEffect}from 'react';
import {
  StyledAddTaxOptions
} from './style'

import { Icon } from '@iconify/react';
import {useApp} from '../../providers/app.Provider'
function AddTaxOptions({label,selected,onClick}) {
 
  const {
    state: {applied_to},
} = useApp();
const [mouseOver, setMouseOver] = useState(false)
  return (
    
    <StyledAddTaxOptions checked={selected} onClick={onClick} onMouseEnter={() => setMouseOver(true)}
    onMouseLeave={() => setMouseOver(false)}>
      {selected?<Icon icon="bi:check-circle-fill" color="#f26419" width="22" height="22" />: mouseOver?<Icon icon="fluent:radio-button-24-regular" color="#f26419" width="24" height="24" />:
      <Icon icon="ic:twotone-radio-button-unchecked" color="#d6d6d6" width="24" height="24" />}
      <p>{label}</p>
   
    </StyledAddTaxOptions>
  )
}

export default AddTaxOptions