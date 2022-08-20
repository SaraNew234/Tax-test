import React,{useEffect, useState} from 'react'
import {
    StyledItemOptions,
    StyledItem
} from './style.js';
import {useApp} from '../../providers/app.Provider';
import ItemOption from '../shared/Checkbox/index'

  export function ItemOptions({item,setSelected}) {
    const {
      state: {applied_to,applicable_items},
      dispatch
  } = useApp();
    const [items, setItems] = useState([])
    useEffect(()=>{
      setItems(item)
    },[])
   
    const handleChange=(item)=>{
     
      if(item.hasOwnProperty('categoryName') && item.checked===false){
          let tempItems=[...item.items]
      tempItems.forEach((item)=>{
        item.checked=true;
            })
      setItems({
        ...items,
        checked:true,
        items:tempItems
            })
               dispatch({
          type:'selectAll',
          data:item.items
        })
      }
      else{
        let tempItems=[...item.items]
        tempItems.forEach((item)=>{
          item.checked=false;
              })
        setItems({
          ...items,
          checked:false,
          items:tempItems
              })
                items.items.forEach((items)=>{
          dispatch({
            type:'removeAll',
            data:items.id
          })
          setSelected('some')
        })
      }
       
    }
      return (
        <StyledItemOptions>
          <ItemOption 
           checked={ item.items.filter((item)=>item.checked!==true).length<1} 
           label={items.categoryName}
            backgroundColor={true}
            onClick={()=>{
              if(!items.checked){
                handleChange(items)
              }
              else{
                handleChange(items)
              }
            }}
            />
          <StyledItem>
            {
              item.items.map((item)=>{
                return <ItemOption
                 checked={item.checked} 
                 label={item.name}
                 setSelected={setSelected}
                 onClick={()=>{
                  if(item.checked){
                    item.checked=!item.checked;
                    dispatch({
                      type:'UnSelect',
                      data:item.id
                    })
                  }
                  else{
                    item.checked=!item.checked;
                    dispatch({
                      type:'select',
                      data:item.id
                    })

                  }
                 }}
                 />
              })
            }
          </StyledItem>
        </StyledItemOptions>
      )
    }
