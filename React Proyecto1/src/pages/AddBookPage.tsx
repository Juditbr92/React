import Input from "../components/ui/Input"
import Button from "../components/ui/Button"


function AddBookPage() {
    return (
        <div className="flex flex-col items-center mt-2 w-full">
            <div>
                <div className="flex flex-col gap-2 mt-8 items-center">
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans'>Add a new book!</h1>
                    <span className='text-sm text-gray-700 font-extralight font'>Keep track of all your readings</span>
                </div>
            </div>

            <div className='flex gap-64 items-center'>
                <div>
                    <img src="public\img\addBook page.jpg" alt="Picture with lots of books" className='w-[500px] h-[300px] rounded'/>
                </div>

                <div>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <Input label="Title:" placeholder= "Title" type="string" />
                        <Input label="Author:" type="string" placeholder= "Author"/>
                        <Input label="Type:" type="string" placeholder= "Type"/>
                        <Input label="Photo:" type="string" error="URL not valid" placeholder= "Photo URL"/>
                        <Input label="Rating:" type="string" placeholder= "Rating "/>
                        <Input label="Add a note:" type="text" placeholder= "What did you think?"/>
                    <Button>Add book</Button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddBookPage
