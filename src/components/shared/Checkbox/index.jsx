import React,{useEffect, useState} from 'react'
import { Icon } from '@iconify/react';
import {
    StyledItemOption,
} from './style.js';


function ItemOption({
      backgroundColor=false,
      checked,
      label,onClick
    }) {
      
        return (
          <StyledItemOption backgroundColor={backgroundColor} onClick={onClick}>
           {
            checked?<Icon icon="bx:checkbox-checked" color="#4c8cbd" width="36" height="36" />:   <Icon icon="bx:checkbox" color="#4c8cbd" width="36" height="36" />
           }
           <p>{label}</p>
          </StyledItemOption>
        )
      }
export default ItemOption;