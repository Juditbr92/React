import BookItem from "../components/BookItem"
import BookList from "../components/BookList"
import { Book } from "../config/types"

function BookPage() {

    const book: Book  = {
        id_book: 1, 
        id_user: 1,
        title: 'Dime quien soy',
        author: 'Julia Navarro', 
        photo: 'https://http2.mlstatic.com/D_NQ_NP_707573-MLM49187855321_022022-O.webp',
        type: 'Histórica',
        rating: 5, 
    }

    return (
        <div className="ml-4 mt-4">
            <h1>Mis libros</h1>
            {/* <BookItem book={book}/> */}
            <BookList/>
        </div>
    )
}

export default BookPage
