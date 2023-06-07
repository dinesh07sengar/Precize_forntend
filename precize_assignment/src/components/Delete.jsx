import React from 'react'

export const Delete = () => {
  return (
    <div>
         <div className="container">
                <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                        <h2>Delete Data</h2>

                        <input type="text" className="field" placeholder="Your Name" name='name' />

                        <button className="btn"  >Delete</button>

                    </div>
                </div>
            </div> 
    </div>
  )
}
