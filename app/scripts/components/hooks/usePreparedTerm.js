import { useState, useEffect } from 'react'

export default function usePreparedTerm(term, count) {
  const [preparedTerm, setPreparedTerm] = useState(null);
  useEffect(() => {
      const trimmedTerm = term.trim();
      if (trimmedTerm.length > count) {
        setPreparedTerm(trimmedTerm);
      }
    },
    [term, count]
  );

  return preparedTerm;
}