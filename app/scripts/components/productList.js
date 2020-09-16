import React from 'react'

export default function ProductList(props) {

  const getTags = (arrayWithTags) => {
    return arrayWithTags.join(', ');
  }
  
  return (
    <div className="previews-result">
      {props.products.map(productItem => (
          <div key={productItem._id} className="item-preview">
            <div className="item-preview__image">
              <img
                src={productItem.picture}
              />
            </div>
            <div className="item-preview__description">
              <h4 className="item-preview__name">{productItem.name}</h4>
              <div className="item-preview__about">{productItem.about}</div>
              <div className="item-preview__price">${productItem.price}</div>
              <div className="item-preview__tags">{getTags(productItem.tags)}</div>
              <button 
                onClick={(e)=> e.preventDefault()} 
                className={`item-preview__add-to-bag item-preview__add-to-bag_is-active-${productItem.isActive}`}>
                Add
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}