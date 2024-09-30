import BookList from "../components/BookList"


function BookPage() {
    
    return (
        <div className="ml-4 mt-4">
            <h1 className="flex border-b-2 border-custom-bg mb-2 justify-center mx-4 text-4xl text-emerald-700 font-bold font-sans">Mis lecturas</h1>
            {/* <BookItem book={book}/> */}
            <BookList/>
        </div>
    )
}

export default BookPage
