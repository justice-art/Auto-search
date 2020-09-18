import React from 'react'
import { LABELS } from '../services/constants'

export default function ProductList(props) {

  const getTags = (tags) => {
    return tags.join(', ');
  }
  
  return (
    <div className="product-list-container">
      {props.products.map(productItem => (
          <div key={productItem._id} className="item-preview">
            <div className="image-wrapper">
              <img src={productItem.picture} />
            </div>
            <div className="product-description">
              <h4 className="name">{productItem.name}</h4>
              <p className="about">{productItem.about}</p>
              <div className="price">
                <span>${productItem.price}</span>
              </div>
              <div className="tags">
                <span>{getTags(productItem.tags)}</span>
              </div>
              <button 
                onClick={(e)=> e.preventDefault()} 
                className={`add-to-bag-button ${productItem.isActive === 'true' ? 'active' : 'inactive'}`}>
                {LABELS.addToBagButton}
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}