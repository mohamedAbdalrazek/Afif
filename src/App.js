import "./App.css";
import Landing from "./components/Lading";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Nav />
            <Landing />
            <Services />
            <About />
            <Footer />
        </div>
    );
}

export default App;
