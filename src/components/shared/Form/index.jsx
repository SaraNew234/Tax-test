import React from 'react';
import {StyledFormItemInput} from './style'

function FormItem({
 
  placeholder,
  type = "text",
  required = true,
  width,
  mobile,
  icon,
  label,
  onChange,
  name,
  value,
  error,
  query,
  setQuery,
}) {
  return (
        <StyledFormItemInput width={width} error={error} mobile={mobile}>
           {icon}
            <input
            
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={query?(e)=>{
               
                  setQuery(e.target.value || null)

                }:onChange}
               
               
            />
            <span>{label}</span>
           
        </StyledFormItemInput>
 
);
}

export default FormItem