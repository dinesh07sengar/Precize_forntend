import axios from 'axios'
import React, { useState } from 'react'
import {useToast} from '@chakra-ui/react'

export const Delete = () => {
    const{name,setname}=useState("")
    const toast = useToast()
    const handleclick=()=>{
        axios.delete("http://localhost:5200/user/",name)
        .then((d)=>{
            console.log(d)
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

                        <input type="text" className="field" placeholder="Your Name" name='name' onChange={()=>setname(e.target.value)} />

                        <button className="btn" onClick={handleclick} >Delete</button>

                    </div>
                </div>
            </div> 
    </div>
  )
}
