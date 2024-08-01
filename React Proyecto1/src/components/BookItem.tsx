import React from 'react'

function BookItem () {

    return (
        <div className="border-2 border-custom-bg p-2 m-2 w-60 rounded-md">
            <img src="https://http2.mlstatic.com/D_NQ_NP_707573-MLM49187855321_022022-O.webp" alt="Image of book" />
            <h2 className="font-bold font-mono text-xl">Dime quién soy</h2>
            <div className="flex justify-between place-items-center">
                <h3 className="text-lg">Julia Navarro</h3>
                <h4 className="text-sm">Histórica</h4>
            </div>
            <span>Rating *****</span>
            <div>
                <button>Ver notas</button>
                <p>Delete</p>
                <p>Edit</p>
            </div>
            
        </div>
    )
        


}

export default BookItem