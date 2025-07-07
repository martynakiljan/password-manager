import { useState } from 'react'
import type { FieldValues } from '../type/type'
import Passwords from './Passwords'

interface DashboardProps {
	passwords: FieldValues[]
	handleDelete: (website: string) => void
}

const Dashboard = ({ passwords, handleDelete }: DashboardProps) => {
	const [searchTerm, setSearchTerm] = useState('')

	const filteredPasswords = passwords.filter(p =>
		p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
		p.website.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className='py-4 px-4 mt-4'>
			<div className='max-w-7xl mx-auto space-y-6'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
					<h1 className='text-xl font-semibold text-dark-blue mb-10'>
						Your passwords ({filteredPasswords.length}):
					</h1>
					<div className='w-full max-w-xs sm:max-w-sm md:max-w-md mb-10'>
						<input
							type='search'
							id='search'
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							className='w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:border-blue-500'
							placeholder='Search by website or email...'
						/>
					</div>
				</div>
				<Passwords passwords={filteredPasswords} handleDelete={handleDelete} />
			</div>
		</div>
	)
}

export default Dashboard
