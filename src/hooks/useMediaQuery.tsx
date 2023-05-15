import { useEffect, useMemo, useState } from "react";

function useMediaQuery() {
  const query = 1100;
  const mediaQuery = useMemo(() => window.innerWidth, [query]);
  const [match, setMatch] = useState(mediaQuery > query);

  useEffect(() => {
    function onChange() { 
        setMatch(mediaQuery > query); 
    }
    window.addEventListener("resize", onChange); 

    return () => window.removeEventListener("resize", onChange);
  }, [mediaQuery]);

  return match;
}

export default useMediaQuery;
