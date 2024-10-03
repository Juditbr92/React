import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { useForm } from 'react-hook-form'


type FormValues = {
    username: string,
    email: string, 
    photo: string
}
function ProfilePage() {

    const { register, handleSubmit, formState} = useForm<FormValues>();
    const { errors } = formState

    function onSubmit (data: FormValues) {
        console.log(data)
    }

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
                    <form onSubmit = {handleSubmit(onSubmit)} className='h-auto flex flex-col w-auto gap-4 p-8 text-center border-2 border-custom-bg rounded'>
                        <div>
                            <Input 
                            label="Username:" 
                            placeholder= "Username" 
                            type="text" 
                            {...register('username', {
                                required:"Username required",
                                minLength: {
                                    value: 4,
                                    message: 'Username has to be longer than 3 characters'
                                }
                            })}
                            />
                            {errors.username && <span className="text-red-500 text-xs" >{errors.username.message}</span>}
                        </div>
                        <div>
                            <Input 
                                label="Email:" 
                                type="email" 
                                placeholder="Email"
                                {...register('email', {
                                    required: "Email required",
                                    pattern: {
                                    value: /^.+@[^.].*\.[a-z]{2,}$/, 
                                    message: "Email not valid"
                                }
                                })}
                            />  
                            {errors.email && <span className="text-red-500 text-xs" >{errors.email.message}</span>}
                        </div>

                        <div>
                            <Input 
                            label="Photo:" 
                            type="text" 
                            placeholder= "Photo URL"
                            {...register('photo', {
                                required: "Photo required"
                            })}
                            />
                            {errors.photo && <span className="text-red-500 text-xs" >{errors.photo.message}</span>}
                        </div>
                        
                    <Button>Update Profile</Button>
                    </form>
                </div>
                
            </div>
        
    </div>
    )
}

export default ProfilePage
