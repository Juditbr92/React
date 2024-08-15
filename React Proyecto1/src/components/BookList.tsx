import  BookItem  from "./BookItem"
import bookArray from "./bookArray"

function BookList (){

    return(
        <div className="flex gap-5 ml-2 flex-wrap">
            {/* Aquí hacemos un map de Book Item para que me saque todos los libros del array */}
            {
                bookArray.map(book => {
                    return <BookItem book= {book} />
                })
            }
        </div>
    )
}

export default BookList