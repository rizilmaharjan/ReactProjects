import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note';

function App() {
  const  [addItem,setItem] = useState([]); 
  const addNote = (note)=>{
    setItem((prevData)=>{
      return [...prevData, note]

    })
   
  }
  const onDelete = (id)=>{
    setItem((prevData)=>{
      return prevData.filter((curElem, indx)=>{

        return indx !== id;


      })
    })

  }
  return (
    <>
    <Header />
    <CreateNote passNote = {addNote} />
    

   {addItem.map((val,index)=>{
      return (<Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem = {onDelete}
      />)

    })}
    <Footer />
    

      
    </>
  )
}

export default App
