import React, { useState } from 'react'
import "./Home.css"

export const Home = () => {
    const[state,setstate]=useState({name:"",address:"",city:"",country:"",pincode:"",sat_score:""})
    const[select,setselect]=useState({insert:true,view:false,rank:false,update:false,delete:false,})

    const handlechange=(e)=>{
        let{name,value}=e.target
        setstate({...state,[name]:value})
    

    }
    const handleselect=(e)=>{
        let obj = {...select,[e.target.value]:true}
        console.log(obj)
        for (const key in obj) {
            if (key !== e.target.value) {
                obj[key]= false
            }
        }
        setselect(obj);
          console.log(obj)

    }
    const handlesubmit = (e) => {
        e.preventDefault()


    }
    
    return (
        <div>
            <div>
                <select className='select' onChange={handleselect}>
                    <option value="insert"> Insert data</option>
                    <option value="view"> View all data</option>
                    <option value="rank"> Get rank</option>
                    <option value="update"> Update score</option>
                    <option value="delete">  Delete one record</option>
                </select>
            </div>

            {/* form component */}

            <div className="container">
                <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                        <h2>Insert Data</h2>
                        <form onSubmit={handlesubmit}>
                            <input type="text" className="field" placeholder="Your Name" name='name' onChange={handlechange}/>
                            <input type="text" className="field" placeholder="Your address" name='address' onChange={handlechange}/>
                            <input type="text" className="field" placeholder="your city" name='city' onChange={handlechange}/>
                            <input type="text" className="field" placeholder="your county" name='country' onChange={handlechange}/>
                            <input type="number" className="field" placeholder="your pincode" name='pincode' onChange={handlechange}/>
                            <input type="number" className="field" placeholder="your SAT Score" name='set_score' onChange={handlechange}/>

                            <input className="btn" type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
