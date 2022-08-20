import React,{useState,useEffect}from 'react';
import * as Yup from 'yup'
import {
  StyledHome,
  StyledAddTaxForm,
  StyledAOptions,
  StyledApplicableItemCategory,
  StyledHeader,
  StyledMain
} from './style.js';

import Button from '../Button/index';
import {useApp} from '../../providers/app.Provider';
import FormItem from '../shared/Form/index';
import AddTaxOptions from '../AddTaxOptions/index'
import { Icon } from '@iconify/react';
import {data} from '../../data';
import {ItemOptions} from '../Category/index'
import {useFormik } from 'formik';
function Home() {

  const {
    state: {applied_to,applicable_items},
    dispatch,
} = useApp();


const [selected, setSelected] = useState(applied_to);
const [datas, setDatas] = useState([]);
const [error, setError] = useState('');
const [searchItems, setSearchItems] = useState([]);
const [query, setQuery] = useState('')
console.log(datas)
  const options=[
    {
      label:'Apply to all items in collection',
      value:'all'
    },
    {
      label:'Apply to specific items',
      value:'some'
    }
  ]
  useEffect(()=>{
    setDatas(data)

  },[])
  useEffect(()=>{
    console.log('ppppp')
    console.log(datas)

  },[datas])
  useEffect(()=>{
   if(query){
    console.log(query)
    console.log(Boolean(query))
    let tempData=datas.filter((item)=>{
      let queryy=query[0].toUpperCase()+query.slice(1)
      console.log(queryy)
      let tempQuery=''
      item.items.forEach((item)=>{
        console.log(item)
        if(item.name.includes(queryy)){
          tempQuery=true
        }
      })
      return tempQuery

    })
    
    setSearchItems(tempData)

    searchItems.length===undefined&&setError('No Items Found')
    console.log(tempData)
   }
   else{
    setSearchItems([])
   }
  },[query])
  useEffect(()=>{
    if(selected==='all'){
      let tempItems=[...datas];
      tempItems.forEach((item)=>{
        item.checked=true;
        dispatch({
          type:'selectAll',
          data:item.items
        })
        item.items.forEach((item)=>{
          item.checked=true
        })
      })
      console.log(tempItems)
      setDatas(tempItems)

    }
    else{
     
    }
  },[selected])
  const formik=useFormik({
    enableReinitialze: true,
    initialValues:{
      applicableitems:[...applicable_items],
      applied_to:applied_to,
      name:'',
      rate:5,
    },
    
    validationSchema:Yup.object({
      name:Yup.string().required('Required')

    }),
    onSubmit:async (values) => {
      values.rate=values.rate/100
      values.applicableitems=[...applicable_items]
      console.log(values)
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
      values.rate=values.rate*100
      console.log(values.rate)
    },
   
  })
  console.log(applicable_items)
  console.log(datas)
  return (
    <StyledHome>
      <form onSubmit={formik.handleSubmit}>
        <StyledHeader>

        <h2>Add Tax</h2>
         <StyledAddTaxForm> 
            <FormItem 
            
            type='text' 
            placeholder='tax name'
            width={355}
            mobile={170} 
            onChange={formik.handleChange}
            name='name'
            value={formik.values.name}
            error={formik.errors.name?true:false} 
            />
            <FormItem 
            type='number' 
            label='%'
            placeholder={5}
            width={90}
            mobile={80}
            onChange={formik.handleChange}
            name='rate'
            value={formik.values.rate} 
            />
        </StyledAddTaxForm>
        <StyledAOptions>
        {
          options.map((option)=>{
            return <AddTaxOptions
             label={option.label}
             selected={option.value===selected}
             onClick={()=>{
              setSelected(option.value)
              dispatch({
                type:option.value,
                data:option.value
              })
              setSelected(option.value)
            }}
           
             />
          })
        }

        </StyledAOptions>
          
        </StyledHeader>
        <StyledMain>

        <FormItem  
            type='text'
            value={query}
            setQuery={setQuery}
            query={true}
            placeholder='search items '
            width={260}
            icon={<Icon icon="ei:search" color="#d6d6d6" width="20" height="20" />}
            />
        <StyledApplicableItemCategory>
      
      {
       
        searchItems.length>0?searchItems.map((item)=>{
          return <ItemOptions item={item}  setSelected={setSelected}/>
        }):
       datas.map((item)=>{
         return <ItemOptions item={item}  setSelected={setSelected}/>
       })
      }
     </StyledApplicableItemCategory>
        <Button label={`Apply tax to ${applicable_items.length>0?applicable_items.length:0} item(s)`}/>

        </StyledMain>
        
          
    </form>
    </StyledHome>
  )
}

export default Home