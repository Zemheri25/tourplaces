

import React from 'react'
import "./Card.css"
import {data} from "../../helper/data.jsx"
console.log(data);

function Cards() {

  return (

    <div className='container2'>
      <div className='d-flex justify-content-center mx-4'>
        <div className='row cols-xs-1 cols-sm-1 cols-md-2 cols-lg-3 justify-content-center'>
          {data.map(element => (
            <div className='col-lg-4 col-md-6 col-sm-8 col-xs-8' key={element.id}>
              <div className="card bg-dark text-white p-3">
                <h2 className="card-title">{element.title}</h2>
                <div className="card_hover">
                  <img src={element.image} alt="newyork" className="card-image" />
                </div>
                <div className="description">
                  <p className="card-description">{element.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards