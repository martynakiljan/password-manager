import { useState } from 'react'
import type { PassProps } from '../type/type'

const Password = ({ email, website, password, onDelete }: PassProps) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword(prev => !prev)
	}

	return (
		<div className='password-item'>
			<div className='password-icon'>
				<svg width='32' height='32' viewBox='0 0 24 24' fill='none'>
					<path
						d='M14 6V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V6M9 11H15C15.5523 11 16 10.5523 16 10V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V10C8 10.5523 8.44772 11 9 11ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z'
						stroke='#003566'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<circle cx='7.5' cy='17.5' r='1.5' fill='#ffffff' />
					<circle cx='12' cy='17.5' r='1.5' fill='#ffffff' />
					<circle cx='16.5' cy='17.5' r='1.5' fill='#ffffff' />
				</svg>
			</div>

			<div className='password-data'>
				<span>{website}</span>
				<span>{email}</span>
				<span>{showPassword ? password : '••••••••'}</span>
			</div>

			<button className='password-btn' aria-label='Delete' onClick={onDelete}>
				<svg width='20' height='20' viewBox='0 0 15 15' fill='#001d3d'>
					<path
						d='M12.41,5.58l-1.34,8c-0.0433,0.2368-0.2493,0.4091-0.49,0.41H4.42c-0.2407-0.0009-0.4467-0.1732-0.49-0.41l-1.34-8
			C2.5458,5.3074,2.731,5.0506,3.0035,5.0064C3.0288,5.0023,3.0544,5.0002,3.08,5h8.83c0.2761-0.0036,0.5028,0.2174,0.5064,0.4935
			C12.4168,5.5225,12.4146,5.5514,12.41,5.58z M13,3.5C13,3.7761,12.7761,4,12.5,4h-10C2.2239,4,2,3.7761,2,3.5S2.2239,3,2.5,3H5V1.5
			C5,1.2239,5.2239,1,5.5,1h4C9.7761,1,10,1.2239,10,1.5V3h2.5C12.7761,3,13,3.2239,13,3.5z M9,3V2H6v1H9z'
					/>
				</svg>
			</button>

			<div className='password-show-wrapper'>
				<button className='password-btn' aria-label='Show password' onClick={toggleShowPassword}>
					<svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
						<path
							d='M3.5868 13.7788C5.36623 15.5478 8.46953 17.9999 12.0002 17.9999C15.5308 17.9999 18.6335 15.5478 20.413 13.7788C20.8823 13.3123 21.1177 13.0782 21.2671 12.6201C21.3738 12.2933 21.3738 11.7067 21.2671 11.3799C21.1177 10.9218 20.8823 10.6877 20.413 10.2211C18.6335 8.45208 15.5308 6 12.0002 6C8.46953 6 5.36623 8.45208 3.5868 10.2211C3.11714 10.688 2.88229 10.9216 2.7328 11.3799C2.62618 11.7067 2.62618 12.2933 2.7328 12.6201C2.88229 13.0784 3.11714 13.3119 3.5868 13.7788Z'
							stroke='#000000'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z'
							stroke='#000000'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<span className='tooltip'>{showPassword ? 'Hide password' : 'Show password'}</span>
			</div>
		</div>
	)
}

export default Password
