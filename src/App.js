import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
function App() {
  return (
    <>
    <Navbar/>
    <div className="d-flex gap-4 justify-content-center m-4 shadow-lg p-3 mb-5 bg-body rounded p-3 mb-2 bg-warning text-dark border border-secondary">
    <Cards 
    title={"Javascript"} 
    src={"https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    description={"This image tell you about something about javascript which we use"}
    btn={"JavaScript"}
    />
    <Cards 
    title={"HTML"} 
    src={"https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    description={"This image tell you about something about anything which we use"}
    btn={"HTML"}/>
    
    <Cards 
    title={"Node JS"} 
    src={"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    description={"This image tell you about something about anything which we use"}
    btn={"Node JS"}/>

    <Cards 
    title={"C++"} 
    src={"https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    description={"This image tell you about something about anything which we use"}
    btn={"C++"}/>
    
    </div>
    </>
  );
}

export default App;
