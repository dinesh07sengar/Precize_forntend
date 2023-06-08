
import axios from 'axios'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'

export const Rank = () => {
    const [name, setname] = useState("")
    const toast = useToast()
    const [state, setstate] = useState(null)
    const [rank, setrank] = useState(null)

    const handleclick = () => {
        axios.get("https://precizebackend.onrender.com/user")
            .then((d) => {
                console.log(d)
                let data1 = d.data?.sort((a, b) => (a.sat > b.sat_score) ? -1 : 1)
                data1?.map((ele, i) => {
                    if (ele.name == name) {
                        setstate(ele)
                        setrank(i + 1)

                    }
                })
                toast({
                    title: d.data.msg,
                    description: "Your data succesfully getiing.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: 'Something wrong .',
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
                        <h2>Get Rank</h2>

                        <input type="text" className="field" placeholder="Your Name" name='name' onChange={(e) => setname(e.target.value)} />

                        <button className="btn" onClick={handleclick}>Seach</button>

                    </div>
                </div>
            </div>
            {rank?<h1> Rank {rank}</h1>:null}
            <hr/><br />
            {state?<table>
                
                    <thead>
                    <tr id="header">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>pincode</th>
                        <th>Sat Score</th>
                        <th>Passed</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                         <tr >
                        <td>{rank} </td>
                        <td>{state.name} </td>
                        <td>{state.city}</td>
                        <td>{state.country}</td>
                        <td>{state.pincode}</td>
                        <td>{state.sat_score} %</td>
                        <td>{state.passed} </td>

                    </tr>
                    
                    

                    
                    </tbody>
                    
                    

                </table>:null}
        </div>
    )
}
