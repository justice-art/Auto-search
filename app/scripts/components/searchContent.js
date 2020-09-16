import React, {useState, useEffect} from 'react'
import Search from './search'
import Spinner from './spinner'

export default function SearchContent(props) {
  const [products, setProducts] = useState([]);
  const [presentedProducts, setPresentedProducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect( () => {
    setPresentedProducts(products.slice(0, 2)) 
  }, [products])

  function showAllProducts() {
    setPresentedProducts(products)
  }

  const getTags = (arrayWithTags) => {
    return arrayWithTags.join(', ');
  }

  return (
    <div className="search-content">
      <Search setProducts={setProducts} setLoading={setLoading} setError={setError} />
      <a href="#" onClick={(e) => props.toggleSearch(e)}>
          <i className="material-icons close">close</i>
      </a>
      {!loading ? 
      <div className="previews-result">
        {presentedProducts.map(productItem => (
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
                <a onClick={(e)=> e.preventDefault()} 
                   className={`item-preview__add-to-bag item-preview__add-to-bag_is-active-${productItem.isActive}`}>
                  Add
                </a>
              </div>
            </div>
          ))}
      </div>
        :
      <Spinner
          color='black'
          style={{ 
              width: '30px',
              height: '30px',
              position: 'relative',
              top: '10px'
          }}
      />
      }
      { products.length > 2 ?
        <div className="search-content__all-products all-products">
          <span className="all-products__title">
            {`Displaying ${presentedProducts.length} of ${products.length} results`}
          </span>
          {presentedProducts.length === products.length || <a className="all-products__button" onClick={showAllProducts}>Display all results</a>}
        </div> : null }
        { error && 
        <div className="search-content__err">
          {error}
        </div>
      }
    </div>
  )
}