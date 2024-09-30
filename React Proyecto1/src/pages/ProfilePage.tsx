import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

function ProfilePage() {
    return (
        <div className="flex flex-col items-center mt-2 w-full gap-4">
            <div className="flex flex-col gap-2 mt-8 items-center">         
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans border-b-2 border-black mb-4'>Your profile</h1>
            </div>

            <div className='flex gap-64 items-center'>

                <div>
                    {/* Aquí poner que me venga la imagen perfil*/}
                    <img src="public\img\editBook.jpg" alt="Photo of the book being modified" className='w-[200px] h-[200px] rounded-full'/>
                </div>

                <div>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 text-center border-2 border-custom-bg rounded'>
                        <Input label="Username:" placeholder= "Username" type="text" />
                        <Input label="Email:" type="email" placeholder= "Email"/>
                        <Input label="Photo:" type="text" placeholder= "Photo URL"/>
                    <Button>Update Profile</Button>
                    </form>
                </div>



            </div>
        
    </div>
    )
}

export default ProfilePage
