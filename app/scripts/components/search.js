import React, {useState, useEffect} from 'react'
import useDebounce from './hooks/useDebounce.js'

export default function Search(props) {
  const {setProducts, setLoading, setError} = props;
  const [term, setTerm] = useState('');
  const debouncedTerm = useDebounce(term, 400);
  const env = 'http://localhost:3035';

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
      const response = await searchCharacters(debouncedTerm);
      const data = await response.json();
      setProducts(data);
    } catch(err) {
      const errorMessage = getErrorMessage(err);
      setError(errorMessage);
    }
    setLoading(false);
  }

  function searchCharacters(str) {
    return fetch(`${env}/search?term=${str}`,
      {
        method: 'GET'
      }
    )
  }

  function getErrorMessage(err) {
    return err.message ? err.message : "Check your Internet connection!";
  }

  return (
    <input type="text" onChange={e => setTerm(e.target.value)} />
  )
}
