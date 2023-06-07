import React, { useState } from 'react'
import "./Home.css"
import { Insert } from './Insert'
import { Update } from './Update'
import { Rank } from './Rank'
import { Delete } from './Delete'
import { View } from './View'

export const Home = () => {


    const [select, setselect] = useState({ insert: true, view: false, rank: false, update: false, delete: false, })


    const handleselect = (e) => {
        let obj = { ...select, [e.target.value]: true }
        console.log(obj)
        for (const key in obj) {
            if (key !== e.target.value) {
                obj[key] = false
            }
        }
        setselect(obj);
        console.log(obj)

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
            {select.insert ? <Insert /> : null}

            {/* update container */}
            {select.update ? <Update /> : null}

            {/* GEt rank container */}
            {select.rank ? <Rank /> : null}

            {/* Delete container */}
            {select.delete ? <Delete /> : null}

            {/* View all container */}
            {select.view ? <View /> : null}
        </div>

    )
}
