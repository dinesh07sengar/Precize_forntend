import React, { useEffect, useState } from 'react'
import axios from "axios"

export const View = () => {
    const[state,setstate]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5200/user/")
        .then((d)=>{
            let data = d.data?.sort((a,b)=>(a.sat_score>b.sat_score)?-1:1)
            setstate(data)
        })
        .catch((er)=>console.log(er))


    },[])
  return (
    <div>
        <h1>All Data Rank vise</h1>
                <hr/><table>
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
                    {state?.map((ele,i)=>{
                        return <tr key={i+1} >
                        <td>{i+1} </td>
                        <td>{ele.name} </td>
                        <td>{ele.city}</td>
                        <td>{ele.country}</td>
                        <td>{ele.pincode}</td>
                        <td>{ele.sat_score} %</td>
                        <td>{ele.passed} </td>

                    </tr>
                    
                    

                    })}
                    </tbody>
                    
                    

                </table>
    </div>
  )
}
