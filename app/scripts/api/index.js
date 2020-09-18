import { errorHandler } from '../services/functions'
import "regenerator-runtime/runtime.js"
import { ENV as environment } from '../services/constants'

export const searchCharacters = async (str) => {
  try {
    const response = await fetch(`${environment}/search?term=${str}`, { method: 'GET' } );
    const result = await response.json();
    return result;
  } catch(err) {
    errorHandler(err);
  }
}