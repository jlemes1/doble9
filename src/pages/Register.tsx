import { Link } from 'react-router';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const userRegisterSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  fullName: z.string().min(3, 'El nombre completo es requerido'),
  phone: z.string().optional(),
});

type UserRegisterFormValues = z.infer<typeof userRegisterSchema>;

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phone: '',
    },
    resolver: zodResolver(userRegisterSchema),
  });

  const onRegister = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='h-full flex flex-col items-center mt-12 gap-5'>
      <h1 className='text-4xl font-bold capitalize'>Crear cuenta</h1>

      <p className='text-sm font-medium'>Ingresá tus datos para registrarte</p>
      <>
        <form
          className='flex flex-col items-center gap-4 w-full mt-10 sm:w-100 lg:w-125'
          onSubmit={onRegister}
        >
          <input
            type='text'
            placeholder='Nombre Completo'
            className='border border-slate-200 text-black px-5 py-4 placeholder:text-gray text-sm rounded-full w-full'
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className='text-red-500'>{errors.fullName.message}</p>
          )}

          <input
            type='text'
            placeholder='Celular'
            className='border border-slate-200 text-black px-5 py-4 placeholder:text-gray text-sm rounded-full w-full'
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-red-500'>{errors.phone.message}</p>
          )}

          <input
            type='email'
            placeholder='Ingresa tu correo electrónico'
            className='border border-slate-200 text-black px-5 py-4 placeholder:text-gray text-sm rounded-full w-full'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}

          <input
            type='password'
            placeholder='Ingresa tu contraseña'
            className='border border-slate-200 text-black px-5 py-4 placeholder:text-gray text-sm rounded-full w-full'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
          <button className='bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full mt-5 w-full'>
            Crear cuenta
          </button>
        </form>

        <p className='text-sm text-stone-800'>
          ¿Ya tienes una cuenta?
          <Link to='/login' className='underline ml-2'>
            Inicia sesión
          </Link>
        </p>
      </>
    </div>
  );
};
