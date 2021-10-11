
import Characters from "./Characters";
import Navigation from "./Navigation";




function Home({page, setPage}) {


  return (
    <div>
  
      <Navigation page={page} setPage={setPage} />

      <Characters page={page} />
      
    </div>
  );
}

export default Home;