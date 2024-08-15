import { AiTwotoneEdit } from "react-icons/ai"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import { Book } from "../config/types"

type BookItemProps = {
    book: Book
}

function BookItem (props: BookItemProps) {

    const { book } = props; 

    return (
        <article className="border-2 border-custom-bg my-3 w-[300px] rounded-md bg-emerald-100">
            <img className= "mb-3 w-45 h-[350px] flex m-auto my-2" src= {book.photo} alt= {`Portada del libro ${book.title}`}/>

            <div className="flex flex-col gap-2 p-2 w-45">
                <span className="font-serif text-black text-xl">{book.title}</span>
                <div className="flex justify-between items-center gap-2">
                    <span className="font- text-gray-600">{book.author}</span>
                    <span className="bg-custom-bg text-sm py-1 px-4 rounded-full text-white">{book.type}</span>
                </div> 
                <div className="flex items-center">
                    <span className="m-1">{book.rating}</span>
                    <button className="ml-auto text-xl mr-2"> <AiTwotoneEdit /></button>
                    <button className="text-xl"><AiOutlineDelete className="text-red-700"/></button>
                </div>
                
            </div>
        </article>
    )
}

export default BookItem