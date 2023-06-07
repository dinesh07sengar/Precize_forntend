import React, { useState } from 'react'

export const Update = () => {
    const [update, setupdate] = useState({ name: "", sat_score: "" })
    const handleupdate = () => {
        let { name, value } = e.target
        setupdate({ ...update, [name]: value })

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
         <div className="container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="right">
                            <h2>update Data</h2>
                            <form onSubmit={handlesubmit}>
                                <input type="text" className="field" placeholder="Your Name" name='name' onChange={handleupdate} />
                                <input type="number" className="field" placeholder="your SAT Score" name='set_score' onChange={handleupdate} />

                                <input className="btn" type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
