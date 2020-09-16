import React, {useState, useEffect} from 'react'
import Search from './search'
import Spinner from './spinner'
import ProductList from './productList'

export default function SearchContent(props) {
  const [products, setProducts] = useState([]);
  const [presentedProducts, setPresentedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const showAllProducts = () => {
    setPresentedProducts(products)
  }

  useEffect( () => {
    setPresentedProducts(products.slice(0, 2)) 
  }, [products])

  return (
    <div className="search-content">
      <Search setProducts={setProducts} setLoading={setLoading} setError={setError} />
      <a href="#" onClick={(e) => props.toggleSearch(e)}>
          <i className="material-icons close">close</i>
      </a>
      { !loading ? <ProductList products={presentedProducts} /> : <Spinner color='black' isDefault={true} /> }
      { products.length > 2 &&
        <div className="search-see-results">
          <span className="title">
            {`Displaying ${presentedProducts.length} of ${products.length} results`}
          </span>
          {presentedProducts.length !== products.length && 
            <button className="show-all-button" onClick={showAllProducts}>Display all results</button>
          }
        </div>
       }
      { error && 
        <div className="search-content-error">
          <span>{error}</span>
        </div>
      }
    </div>
  )
}