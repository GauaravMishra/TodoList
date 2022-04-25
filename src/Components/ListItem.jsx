import React, { useState } from 'react'

export default function ListItem(props) {

  // const[myStyle, setStyle]=useState({ boxShadow : '2px 2px 17px 1px red' })
  const checkedState = (e,id)=>{
      console.log(e)
      props.complete(id)
  }

return (
    props.item.map((list) => {
        return (
          <li
            key={list.id}
            className="list-items"
            style={list.isDone ? { boxShadow : '2px 2px 17px 1px green' } : { boxShadow : '2px 2px 17px 1px red' }}
            // style={()=>{getStyle()}}
          >
            <div>{list.value}</div>
           {!list.isDone ?  <button className="button-complete" onClick={()=>{
                props.complete(list.id)}}>
                Done
              </button>: ''}

              
           <input type="checkbox" name="" id="" checked={list.isDone} onChange={(e)=>{
             checkedState(e,list.id)
           }}/>

            <div className="btnSet">
          
              {/*  Closure Property of Javascript  */}
              <button className="button-delete" onClick={()=>{props.itemDelete(list.id)}}>
                x
              </button>

             
            </div>
          </li>
        );
      })
  )
}
