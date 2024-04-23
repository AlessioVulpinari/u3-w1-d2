import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav.jsx"
import MyFooter from "./components/MyFooter.jsx"
import Welcome from "./components/Welcome.jsx"
import AllTheBooks from "./components/AllTheBooks.jsx"

function App() {
  return (
    <div className='App'>
      <MyNav />
      <main className='container'>
        <Welcome />
        <AllTheBooks />
      </main>

      <MyFooter />
    </div>
  )
}

export default App
