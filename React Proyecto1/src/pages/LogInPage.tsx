import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

function LogInPage() {

    const [logInValues, setLogInValues] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({email: '', password:''})
    const [touchedInputs, setTouchedInputs] = useState({email: false, password: false})

    function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target

        const checkErrors = {email: '', password:''};
        if (name === 'email' && !value) checkErrors.email = 'Email or password incorrect'
        if (name === 'password' && !value) checkErrors.password = 'Email or password incorrect'

        setLogInValues({...logInValues, [name] : value})
        setErrors({...errors, ...checkErrors})
    }

    return (
        <div className="flex flex-col items-center mt-2 w-full">
            <div>
                <div className="flex flex-col gap-2 mt-8 items-center">
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans mb-10'>Log In</h1>
                </div>
            </div>

                <div>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <Input 
                        label="Email:" 
                        placeholder= "Email" 
                        type="email" 
                        name = "email"
                        value={logInValues.email}
                        onChange={handleLoginChange}
                        onBlur = {() => setTouchedInputs({...touchedInputs, email: true})}
                        />
                        <Input 
                        label="Password:" 
                        type="password" 
                        placeholder= "Password" 
                        name = "password"
                        value={logInValues.password}
                        onChange={handleLoginChange}
                        onBlur = {() => setTouchedInputs({...touchedInputs, password: true})}
                        />
                        {(errors.email || errors.password) && (touchedInputs.email || touchedInputs.password) && <span className="text-red-500 text-xs">{errors.email}</span>}
                    <Button>Log In</Button>
                    </form>
                </div>
        </div> 
    )
}

export default LogInPage