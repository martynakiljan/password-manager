import Password from './Password'
import type { DashboardProps } from '../type/type'

const Passwords = ({ passwords, handleDelete }: DashboardProps) => {
	if (passwords.length === 0) {
		return <p className='text-center text-gray-500 mt-6'>you have no passwords! 😢</p>
	}
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-6'>
			{passwords.map((item, index) => (
				<Password
					key={index}
					email={item.email}
					website={item.website}
					password={item.password}
					onDelete={() => handleDelete(item.id)}
				/>
			))}
		</div>
	)
}

export default Passwords
