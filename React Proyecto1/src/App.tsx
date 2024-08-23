import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import BookPage from './pages/BookPage'
// import BookPage from './pages/BookPage'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-emerald-100">
      <Header/>
      
      <main className='flex-grow'>
        <BookPage/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
