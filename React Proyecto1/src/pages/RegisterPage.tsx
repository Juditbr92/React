import Button from "../components/ui/Button"
import Input from "../components/ui/Input"


function RegisterPage() {

    return (
        <div className="flex items-center gap-12 mt-2 w-full">
        <div>
            <div className="flex flex-col gap-2 ml-8 items-center">
                <h1 className='text-4xl text-emerald-700 font-bold font-sans'>Join the biggest reading community!</h1>
                <span className='text-sm text-gray-700 font-extralight'>Keep track of all your readings and enjoy</span>
            </div>
        </div>

            <div>
                <form className='h-auto flex flex-col w-auto gap-4 p-8 m-8 text-center border-2 border-custom-bg rounded'>
                    <Input label="Username:" placeholder= "Username" type="text" />
                    <Input label="Email:" type="email" placeholder= "Email"/>
                    <Input label="Photo:" type="text" placeholder= "Photo URL"/>
                    <Input label="Password:" type="password" placeholder= "Password"/>
                    <Input label="Repeat password:" type="password" placeholder= "Repeat password"/>
                    <Button>Register</Button>
                </form>
            </div>      
    </div>
    )
}

export default RegisterPage
