import React, {useState, useEffect} from 'react'
import { searchCharacters } from '../api/index'
import { errorHandler } from '../services/functions'
import useDebounce from './hooks/useDebounce.js'

export default function Search(props) {
  const {setProducts, setLoading, setError} = props;
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounce(term, 400);

  useEffect( () => {
      if (debouncedTerm) {
        getProductsByTerm()
      } else {
        setProducts([]);
      }
    },
    [debouncedTerm] 
  );

  async function getProductsByTerm() {
    setError('');
    setLoading(true);
    try {
      const data = await searchCharacters(debouncedTerm);
      setProducts(data);
    } catch(err) {
      const errorMessage = errorHandler(err);
      setError(errorMessage);
    }
    setLoading(false);
  }

  return (
    <input type="text" onChange={e => setTerm(e.target.value)} />
  )
}
