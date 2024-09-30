import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function EditBookPage() {
    return (
        <div className="flex flex-col items-center mt-2 w-full">
            <div className="flex flex-col gap-2 mt-8 items-center">         
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans'>Edit a book</h1>
            </div>

            <div className='flex gap-64 items-center'>

                <div>
                    {/* Aquí poner que me venga la imagen de portada del libro que quiero modificar o todo el cuadradito del libro */}
                    <img src="public\img\editBook.jpg" alt="Photo of the book being modified" className='w-[500px] h-[300px] rounded-lg'/>
                </div>

                <div>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <Input label="Title:" placeholder= "Title" type="string" />
                        <Input label="Author:" type="string" placeholder= "Author"/>
                        <Input label="Type:" type="string" placeholder= "Type"/>
                        <Input label="Photo:" type="string" error="URL not valid" placeholder= "Photo URL"/>
                        <Input label="Rating:" type="string" placeholder= "Rating "/>
                        <Input label="Add a note:" type="text" placeholder= "What did you think?"/>
                        <Button>Edit book</Button>
                    </form>
                </div>

                

            </div>
            
        </div>
    )
}

export default EditBookPage
