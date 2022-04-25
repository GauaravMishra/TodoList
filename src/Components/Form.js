import React, { useState } from "react";
import ListItem from "./ListItem";


export default function Form() {
  
  const [item, setItem] = useState([]);
  const [lastCount, setLastCount] = useState(1);

  const listOfItems = (e) => {
    e.preventDefault();
    let value = document.getElementById("ak").value;
    let newData = {id:lastCount, value:value, isDone:false}
    
    // console.log(newData)

    setItem((oldItems) => {
      return [...oldItems, newData];
    });

    setLastCount( ()=> lastCount+1)
    document.getElementById("ak").value = "";

  };

  const itemDelete = (id) => {
    setItem(() => {
      return item.filter((i)=>i.id!=id);
    });
    setLastCount( ()=> lastCount-1)
  };

  const completeTask = (id)=>{
    item.forEach((el)=>{
      if (el.id==id){
        el.isDone = !el.isDone
      }
    })
    setItem(() => {
      return [...item]
    });
    
  }

  return (
    <div>
      <>
        <input
          id="ak"
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
        />
        <button className="button-add" onClick={listOfItems}>
          {" "}
          Add{" "}
        </button>

        <ul>
        <ListItem item={item} itemDelete={itemDelete} complete={completeTask} />  
        </ul>
      </>
    </div>
  );
}
