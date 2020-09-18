import React, {useState, useEffect} from 'react'
import { searchCharacters } from '../api/index'
import { errorHandler } from '../services/functions'
import useDebounce from './hooks/useDebounce'
import usePreparedTerm from './hooks/usePreparedTerm'

export default function Search(props) {
  const {setProducts, setLoading, setError} = props;
  const [term, setTerm] = useState('');
  const preparedTerm = usePreparedTerm(term, 2);
  const debouncedTerm = useDebounce(preparedTerm, 400);

  const getProductsByTerm = async () => {
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

  useEffect( () => {
    if (debouncedTerm) {
      getProductsByTerm()
    } else {
      setProducts([]);
    }
  }, [debouncedTerm]);

  return (
    <input type="text" onChange={e => setTerm(e.target.value)} />
  )
}
