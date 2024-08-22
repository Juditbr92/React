import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import BookPage from './pages/BookPage'
// import BookPage from './pages/BookPage'

function App() {

  return (
    <div className="bg-emerald-100 min-h-screen flex-col">
      <Header/>
      
      <main className='flex flex-grow'>
        <BookPage/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
