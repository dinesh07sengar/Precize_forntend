import React, { useState } from 'react'
import axios from "axios"
import {useToast} from '@chakra-ui/react'


export const Insert = () => {
    const [state, setstate] = useState({ name: "", address: "", city: "", country: "", pincode: 0, sat_score: 0 })
    const toast = useToast()
    const handlechange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })


    }
    const handlesubmit = (e) => {
        let data = {...state}
        e.preventDefault()
        axios.post("http://localhost:5200/user/",data)
        .then((d)=>{
            console.log(d)
            toast({
                title: d.data.msg,
                description: "Your data succesfully added.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })

        })
        .catch((er)=>{
            console.log(er)

            toast({
                title: 'Insertion fail.',
                description: "Please check all the details and name should be unique",
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
                            <h2>Insert Data</h2>
                            <form onSubmit={handlesubmit}>
                                <input type="text" className="field" placeholder="Your Name" name='name' onChange={handlechange} />
                                <input type="text" className="field" placeholder="Your address" name='address' onChange={handlechange} />
                                <input type="text" className="field" placeholder="your city" name='city' onChange={handlechange} />
                                <input type="text" className="field" placeholder="your county" name='country' onChange={handlechange} />
                                <input type="number" className="field" placeholder="your pincode" name='pincode' onChange={handlechange} />
                                <input type="number" className="field" placeholder="your SAT Score" name='sat_score' onChange={handlechange} />

                                <input className="btn" type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
