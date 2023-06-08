import axios from 'axios'
import React, { useState } from 'react'
import {useToast} from '@chakra-ui/react'

export const Delete = () => {
    const[name,setname]=useState("")
    const toast = useToast()

    const handlechange=(e)=>{
      setname(e.target.value)

    }
    const handleclick=()=>{
        axios.delete("https://precizebackend.onrender.com/user",name)
        .then((d)=>{
            console.log(d)
            setname("")
            toast({
                title: d.data.msg,
                description: "Your data succesfully deleted.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        })
        .catch((err)=>{
            console.log(err)
            toast({
                title: 'Delete fail.',
                description: "Please check all the details or data is not present ",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        })
    }
  return (
    <div>
         <div className="container">
                <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                        <h2>Delete Data</h2>

                        <input type="text" className="field" placeholder="Your Name"  value={name} onChange={handlechange} />

                        <button className="btn" onClick={handleclick} >Delete</button>

                    </div>
                </div>
            </div> 
    </div>
  )
}
