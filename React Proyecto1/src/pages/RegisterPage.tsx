import { useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"


function RegisterPage() {

    const [registerValues, setRegisterValues] = useState({username: '', email: '', photo: '', password: '', repeatPassword: ''})
    const [errors, setErrors] = useState({username: '', email:'', photo:'', password:'', repeatPassword:''})
    const [touchedInputs, setTouchedInputs] = useState({username: false, email: false, photo: false, password: false, repeatPassword: false})

    function handleRegisterForm (event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target

        const checkErrors = { username: '', email:' ', photo: '', password: '', repeatPassword: ''};

        const emailRegex = /^.+@[^\.].*\.[a-z]{2,}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/

        if(name === 'username' && !value) checkErrors.username = 'Username required'
        if(name === 'username' && value.length < 4 ) checkErrors.username = 'Username has to be longer than 3 characters'
        if(name === 'email' && !emailRegex.test(value)) checkErrors.email = 'Email not valid'
        if(name === 'photo' && !value) checkErrors.photo = 'URL needed'
        if(name === 'password' && !value) checkErrors.password = 'Password required'
        if(name === 'password' && !passwordRegex.test(value)) checkErrors.password = 'Password requires 6-13 characters, one lower case, one upper case and one digit'
        if(name === 'repeatPassword' && value != registerValues.password) checkErrors.repeatPassword = 'Passwords are not the same'

        setRegisterValues({...registerValues, [name]: value})
        setErrors({...errors, ...checkErrors})
    }

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
                    <div>
                        <Input 
                        label="Username:" 
                        placeholder= "Username" 
                        type="text" 
                        value={registerValues.username}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, username: true})}
                        name ="username"
                        />
                        {errors.username && touchedInputs.username && <span className="text-red-500 text-xs">{errors.username}</span>}
                    </div>
                    <div>
                        <Input 
                        label="Email:" 
                        type="email" 
                        placeholder= "Email"
                        value={registerValues.email}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, email: true})}
                        name ="email"
                        />
                        {errors.email && touchedInputs.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                    <div>
                        <Input 
                        label="Photo:" 
                        type="text" 
                        placeholder= "Photo URL"
                        value={registerValues.photo}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, photo: true})}
                        name ="photo"
                        />
                        {errors.photo && touchedInputs.photo && <span className="text-red-500 text-xs">{errors.photo}</span>}
                    </div>
                    <div>
                        <Input 
                        label="Password:" 
                        type="password" 
                        placeholder= "Password"
                        value={registerValues.password}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, password: true})}
                        name ="password"
                        />
                        {errors.password && touchedInputs.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                    </div>
                    <div>
                        <Input 
                        label="Repeat password:" 
                        type="password" 
                        placeholder= "Repeat password"
                        value={registerValues.repeatPassword}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, repeatPassword: true})}
                        name ="repeatPassword"
                        />
                        {errors.repeatPassword && touchedInputs.repeatPassword && <span className="text-red-500 text-xs">{errors.repeatPassword}</span>}
                    </div>
                    <Button>Register</Button>
                </form>
            </div>      
    </div>
    )
}

export default RegisterPage
