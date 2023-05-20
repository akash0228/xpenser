import { Route, BrowserRouter,Routes} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/add-expense" exact element={<AddExpense/>}/>
        </Routes>
        {/* <Home/> */}
        <div>Footer</div>
    </BrowserRouter>  
  );
}

export default App;
