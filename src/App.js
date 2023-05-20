import { Route, BrowserRouter,Routes} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/add-expense" exact element={<AddExpense/>}/>
        </Routes>
        <Footer/> 
    </BrowserRouter>  
  );
}

export default App;
