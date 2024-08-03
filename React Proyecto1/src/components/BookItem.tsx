import React from 'react'

function BookItem () {

    return (
        <div className="border-2 border-custom-bg p-2 m-3 w-60 rounded-md bg-emerald-100">
            <img className= "mb-3 w-50" src="https://http2.mlstatic.com/D_NQ_NP_707573-MLM49187855321_022022-O.webp" alt="Image of book" />
            <h2 className="font-serif text-black text-xl m-1">Dime quién soy</h2>
            <div className="flex justify-between place-items-center">
                <h3 className="font-serif text-lg m-1 ">Julia Navarro</h3>
                <h4 className="font-serif text-sm m-1">Histórica</h4>
            </div>
            <span className="m-1">Rating *****</span>
            <div>
                <button className="m-1">Ver notas</button>
                <button className="m-1">Delete</button>
                <button className="m-1">Edit</button>
            </div>
            
        </div>
    )
        


}

export default BookItem