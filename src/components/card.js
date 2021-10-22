import React from 'react'
import "../App.css"

const card = (props) => {

    let { title, img, description } = props

    return (
        <div className="card" >
            <div className="card-image">
                <img src={img} alt="card-img" />
                <button className="btn-floating halfway-fab btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default card
