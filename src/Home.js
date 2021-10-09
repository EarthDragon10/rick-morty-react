import {useState, useEffect} from "react";

import Characters from "./Characters";
import Navigation from "./Navigation";




function Home() {

  const [page, setPage] = useState(1);

  return (
    <div>
  
      <Navigation page={page} setPage={setPage} />

      <Characters page={page} />
      
    </div>
  );
}

export default Home;