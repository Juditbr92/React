import './App.css'
import Header from './components/Header';
import Footer from './components/footer';
import BookPage from './pages/BookPage';
import  {Routes, Route}  from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoutes from './components/PrivateRoutes';
import EditBookPage from './pages/EditBookPage'
import PublicRoutes from './components/PublicRoutes'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-custom-bg via-emerald-300 to-emerald-100">
      <Header/>
      
      <main className='flex-grow'>

        <Routes>
          <Route path='/' element={<HomePage />}/>

{/* Esto tiene que borrarse y quedar lo de las Private Routes, pero como no hay nadie logueado no funciona */}
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/books' element={<BookPage/>} />
            <Route path='/addBook' element={<AddBookPage />} />
            <Route path='/editBook' element = {<EditBookPage />} />


          <Route element={<PublicRoutes />}>
            <Route path='/login' element= {<LogInPage/>}/>
            <Route path='/register' element={<RegisterPage />} />
            
          </Route>
          
          {/* <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/books' element={<BookPage/>} />
            <Route path='/addBook' element={<AddBookPage />} />
            <Route path='/editBook' element = {<EditBookPage />} />
          </Route> */}

        </Routes>
        

      </main>

      <Footer/>
    </div>
  )
}

export default App
