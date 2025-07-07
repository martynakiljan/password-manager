import type { FormProps } from '../type/type'
import GeneratePass from './GeneratePass'

const Form = ({ form, errors, onChange, onSubmit }: FormProps) => {
	const isDisabled = Object.values(form).some(val => val === '') || Object.values(errors).some(err => err !== '')
	return (
		<div className='bg-white rounded-[6px] w-full px-6 py-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
				<div className='flex justify-center'>
					<img src='src/images/pass.svg' alt='Illustration' className='w-auto h-auto' />
				</div>
				<div>
					<h2 className='text-2xl font-semibold mb-6 text-gray-800'>Add new password</h2>
					<form className='space-y-5' onSubmit={onSubmit}>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={form.email}
								onChange={onChange}
								className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
								placeholder='you@example.com'
							/>
							{errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
						</div>

						<div>
							<label htmlFor='website' className='block text-sm font-medium text-gray-700 mb-1'>
								Enter website
							</label>
							<input
								type='text'
								id='website'
								name='website'
								value={form.website}
								onChange={onChange}
								className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
								placeholder='website'
							/>
							{errors.website && <p className='text-red-500 text-sm mt-1'>{errors.website}</p>}
						</div>

						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
								Enter password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								value={form.password}
								onChange={onChange}
								className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
								placeholder='••••••••'
							/>
							{errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
						</div>

						<label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
							Generate strong Pass:
						</label>
						<GeneratePass />

						<button
							type='submit'
							disabled={isDisabled}
							className={`mt-4 w-full font-semibold py-2 px-4 rounded transition 
		${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-dark-blue text-white hover:bg-blue-700'}`}>
							Add Password
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Form
