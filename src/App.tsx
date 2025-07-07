import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import './styles/style.scss'
import type { FieldValues } from './type/type'
import { validate } from './assets/validate'

function App() {
	const [passwords, setPasswords] = useState<FieldValues[]>([])
	const [form, setForm] = useState<FieldValues>({
		email: '',
		website: '',
		password: '',
	})

	const [errors, setErrors] = useState<FieldValues>({
		email: '',
		website: '',
		password: '',
	})

const handleDelete = (id: string) => {
	setPasswords(prev => prev.filter(p => p.id !== id))
}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setForm(prev => ({ ...prev, [name]: value }))
		setErrors(prev => ({ ...prev, [name]: validate(name, value) }))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newErrors: FieldValues = {
			email: validate('email', form.email),
			website: validate('website', form.website),
			password: validate('password', form.password),
		}
		setErrors(newErrors)

		const hasErrors = Object.values(newErrors).some(err => err !== '')
		if (!hasErrors) {
			const newEntry = {
				...form,
				id: crypto.randomUUID(), 
			}
			setPasswords(prev => [...prev, newEntry])
			setForm({ email: '', website: '', password: '' })
		}
	}

	return (
		<>
			<Header />
			<Form form={form} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
			<Dashboard passwords={passwords} handleDelete={handleDelete} />
		</>
	)
}

export default App
