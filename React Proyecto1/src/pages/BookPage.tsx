import BookList from "../components/BookList"


function BookPage() {
    
    return (
        <div className="ml-4 mt-4">
            <h1 className="flex border-b-2 border-custom-bg text-xl mb-2 justify-center mx-4">Mis lecturas</h1>
            {/* <BookItem book={book}/> */}
            <BookList/>
        </div>
    )
}

export default BookPage
