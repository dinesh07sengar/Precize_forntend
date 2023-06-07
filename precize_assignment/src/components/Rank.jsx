import React from 'react'
import axios from 'axios'
import React, { useState } from 'react'
import {useToast} from '@chakra-ui/react'

export const Rank = () => {
    const{name,setname}=useState("")
  return (
    <div>
         <div className="container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="right">
                            <h2>Get Rank</h2>

                            <input type="text" className="field" placeholder="Your Name" name='name' />

                            <button className="btn"  >Seach</button>

                        </div>
                    </div>
                </div>
    </div>
  )
}
