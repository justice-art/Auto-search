import React, {useState, useEffect} from 'react'
import Search from './search'
import Loader from 'react-loader-spinner'
import ProductList from './productList'
import { LABELS, LIMIT_OF_PRODUCTS as limitOfProducts } from '../services/constants'

export default function SearchContent(props) {
  const [products, setProducts] = useState([]);
  const [presentedProducts, setPresentedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const showAllProducts = () => {
    setPresentedProducts(products)
  }

  useEffect( () => {
    setPresentedProducts(products.slice(0, limitOfProducts)) 
  }, [products])

  return (
    <div className="search-content">
      <Search setProducts={setProducts} setLoading={setLoading} setError={setError} />
      <a href="#" onClick={(e) => props.toggleSearch(e)}>
          <i className="material-icons close">close</i>
      </a>
      { !loading ? 
        <ProductList products={presentedProducts} /> : 
        <Loader
          type="TailSpin"
          color="#343434"
          height={50}
          width={50}
        /> }
      { products.length > limitOfProducts &&
        <div className="search-see-results">
          <span className="title">
            {`Displaying ${presentedProducts.length} of ${products.length} results`}
          </span>
          {presentedProducts.length !== products.length && 
            <button className="show-all-button" onClick={showAllProducts}>{LABELS.showAllButton}</button>
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