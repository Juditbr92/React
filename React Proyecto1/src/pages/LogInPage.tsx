import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

function LogInPage() {
    return (
        <div className="flex flex-col items-center mt-2 w-full">
            <div>
                <div className="flex flex-col gap-2 mt-8 items-center">
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans mb-10'>Log In</h1>
                </div>
            </div>

                <div>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <Input label="Email:" placeholder= "Email" type="email" error = "Wrong email"/>
                        <Input label="Password:" type="password" placeholder= "Password" error = "Wrong password"/>
                    <Button>Log In</Button>
                    </form>
                </div>
        </div> 
    )
}

export default LogInPage