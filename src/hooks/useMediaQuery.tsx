import { useEffect, useMemo, useState } from "react";

function useMediaQuery() {
  const query = 1100; 
  const [match, setMatch] = useState(window.innerWidth > query);

  useEffect(() => {
    function onChange() { 
        setMatch(window.innerWidth > query); 
    }
    window.addEventListener("resize", onChange); 

    return () => window.removeEventListener("resize", onChange);
  }, []);

  return match;
}

export default useMediaQuery;
