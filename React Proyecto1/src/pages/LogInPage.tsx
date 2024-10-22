import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

function LogInPage() {

    const [logInValues, setLogInValues] = useState({email: '', password: ''})
    const [errors, setErrors] = useState({email: '', password:''})
    const [touchedInputs, setTouchedInputs] = useState({email: false, password: false})

    function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        const emailRegex = /^.+@[^.].*\.[a-z]{2,}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/

        const checkErrors = {email: '', password:''};
        if (name === 'email'){
            if(!value){
                checkErrors.email = 'Email is required'
            } else if(!emailRegex.test(value)){
                checkErrors.email = 'Email or password not valid'
            }
        }
        if (name === 'password'){
            if(!value){
                checkErrors.email = 'Password is required'
            } else if(!passwordRegex.test(value)){
                checkErrors.password = 'Email or password not valid'
            }
        }

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

                <div className="flex justify-center items-center gap-0 xl:gap-24 space-x-12 xl:space-x-24 w-full">
                    <img src="img\chicoLeyendo-removebg-preview.png" alt="Figura de un hombre leyendo" className="ml-8 h-32 xl:h-52 sm: hidden md:flex"/>
                    <form className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Email:" 
                        placeholder= "Email" 
                        type="email" 
                        name = "email"
                        value={logInValues.email}
                        onChange={handleLoginChange}
                        onBlur = {() => setTouchedInputs({...touchedInputs, email: true})}
                        />
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Password:" 
                        type="password" 
                        placeholder= "Password" 
                        name = "password"
                        value={logInValues.password}
                        onChange={handleLoginChange}
                        onBlur = {() => setTouchedInputs({...touchedInputs, password: true})}
                        />
                        {(errors.email || errors.password) && (touchedInputs.email || touchedInputs.password) && <span className="text-red-500 text-xs">{errors.email}</span>}
                    <Button type="submit">Log In</Button>
                    </form>
                    <img src="img\logIn-removebg-preview.png" alt="Figura de una mujer leyendo" className="h-32 xl:h-52 sm: hidden md:flex"/>
                </div>
        </div> 
    )
}

export default LogInPage