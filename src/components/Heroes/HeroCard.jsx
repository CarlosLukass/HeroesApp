import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero:name, publisher }) => {


  return (
    <>

    <div className="card ms-3" style={{ maxWidth: 530 }}>
      <div className="row mb-3">
        
        <div className="col-md-4">
          <img src={`assets/heroes/${id}.jpg`} alt={name} className="card-img" />
        </div>
        <div className="col-md-8" >
         <div className="card-body">
          <h4 className="mb-0">{ name }</h4>
          <p  className="text-muted"> {publisher} </p>
          <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur iure tempore! Voluptates tempora ipsa aliquam, distinctio magnam voluptate sequi...
          </small>
         
          <Link className="btn btn-outline-primary mt-3" to={`./hero/${id}`}>
            ver mas...
          </Link>


         </div>
        </div>

      </div>
    </div>

    </>
  )
}
