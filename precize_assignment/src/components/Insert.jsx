import React, { useState } from 'react'

export const Insert = () => {
    const [state, setstate] = useState({ name: "", address: "", city: "", country: "", pincode: "", sat_score: "" })

    const handlechange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })


    }
    const handlesubmit = (e) => {
        e.preventDefault()


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
                                <input type="number" className="field" placeholder="your SAT Score" name='set_score' onChange={handlechange} />

                                <input className="btn" type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
