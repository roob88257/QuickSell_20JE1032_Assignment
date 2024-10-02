import React from 'react'
import "../css/Dashview.css"


const Dashview = ({ selectedData, length }) => {



    const randomm = Math.floor(Math.random() * 10);

    return (
        <div className='top'>
            <div className='image-select'>
                <img src={"https://randomuser.me/api/portraits/men/" + randomm + ".jpg"}
                    alt="UserImage" />
                <div>{selectedData}</div>
                <div>{length}</div>
            </div>
            <div className='elem'>
                <span> ➕ </span>
                <span>•••</span>

            </div>
        </div>
    )
}

export default Dashview
