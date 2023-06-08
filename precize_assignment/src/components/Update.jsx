import React, { useState } from 'react'
import axios from "axios"
import {useToast} from '@chakra-ui/react'

export const Update = () => {
    const [update, setupdate] = useState({ name: "", sat_score: 0 })
    const toast = useToast()
    const handleupdate = (e) => {
        let { name, value } = e.target
        setupdate({ ...update, [name]: value })

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        let data ={...update}
        axios.patch("https://precizebackend.onrender.com/user",data)
        .then((d)=>{
            console.log(d)
            setupdate({ name: "", sat_score: "" })
            toast({
                title: d.data.msg,
                description: "We've Successfully logged your account.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })

        }).catch((err)=>{
            console.log(err)
            toast({
                title: 'update Failed.',
                description: err,
                status: 'fail',
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
                            <h2>update Data</h2>
                            <form onSubmit={handlesubmit}>
                                <input type="text" className="field" placeholder="Your Name" value={update.name} name='name' onChange={handleupdate} />
                                <input type="number" className="field" placeholder="your SAT Score" value={update.sat_score} name='sat_score' onChange={handleupdate} />

                                <input className="btn" type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
