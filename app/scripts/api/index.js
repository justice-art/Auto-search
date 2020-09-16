import { errorHandler } from '../services/functions'
import "regenerator-runtime/runtime.js"
const env = 'http://localhost:3035';

export const searchCharacters = async (str) => {
  try {
    const response = await fetch(`${env}/search?term=${str}`, { method: 'GET' } );
    const result = await response.json();
    return result;
  } catch(err) {
    errorHandler(err);
  }
}