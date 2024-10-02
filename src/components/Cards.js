import React from 'react'
import '../css/Card.css'

const Cards = (curElem) => {
    const randomNo = Math.floor(Math.random() * 100);


    const { title, id, tag, status } = curElem

    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative" style={{ width: "30px", height: "30px", float: "right" }}>
                    <img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={"https://picsum.photos/50/" + randomNo} alt="UserImage" />
                    {status ? <div className='showStatusOnline'></div> : <div className='showStatusOffline'></div>}
                </div>
            </div>
            <div className="cardTitle" style={{ fontWeight: 200 }} >
                <p>{title}</p>
            </div>
            <div className="cardTags">
                <div className="tags color-grey"> ··· </div>
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"> <span className='circlee'>⬤</span> {elem}</div>
                    })
                }
            </div>
        </div>

    )
}

export default Cards
