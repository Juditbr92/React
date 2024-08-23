import { AiTwotoneEdit } from "react-icons/ai"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import { Book } from "../config/types"

type BookItemProps = {
    book: Book
}

function BookItem (props: BookItemProps) {

    const { book } = props; 

    function handleEditBook(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log('Libro editado correctamente')
    }

    function handleDeleteBook(event: React.MouseEvent<SVGElement, MouseEvent>) {
        console.log('Libro borrado correctamente')
    }

    return (
        <article className="border-2 border-custom-bg my-3 w-[300px] md:w-45 h-[400px] md:h-[550px] rounded-md bg-emerald-50 flex flex-col ">
            <img className= "mb-3 w-25 md:w-45 h-[200px] md:h-[350px] flex m-auto my-2" src= {book.photo} alt= {`Portada del libro ${book.title}`}/>

            <div className="flex flex-col gap-2 p-2 flex-grow">
                <span className="font-serif text-black text-xl truncate">{book.title}</span>
                <div className="flex justify-between items-center gap-2">
                    <span className="font- text-gray-600 truncate">{book.author}</span>
                    <span className="bg-custom-bg text-sm py-1 px-4 rounded-full text-white">{book.type}</span>
                </div> 
                <div className="flex items-center">
                    <span className="m-1">{book.rating}</span>
                    <button className="ml-auto text-xl mr-2"  onClick={handleEditBook}> <AiTwotoneEdit /></button>
                    <button className="text-xl"><AiOutlineDelete className="text-red-700"  onClick={handleDeleteBook}/></button>
                </div>
                <button>Mis notas</button>
            </div>
        </article>
    )
}

export default BookItem