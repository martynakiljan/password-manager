import { useState } from 'react'
import { Copy, RefreshCw } from 'lucide-react'

const generatePassword = (length = 12) => {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	const digits = '0123456789'
	const specials = '!@#$%^&*()_-+=<>?{}[]'

	const required = [
		letters[Math.floor(Math.random() * letters.length)],
		letters[Math.floor(Math.random() * letters.length)],
		letters[Math.floor(Math.random() * letters.length)],
		digits[Math.floor(Math.random() * digits.length)],
		specials[Math.floor(Math.random() * specials.length)],
	]

	const allChars = letters + digits + specials

	for (let i = required.length; i < length; i++) {
		required.push(allChars[Math.floor(Math.random() * allChars.length)])
	}

	for (let i = required.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[required[i], required[j]] = [required[j], required[i]]
	}

	return required.join('')
}

const PasswordGenerator = () => {
	const [password, setPassword] = useState(generatePassword())
	const [copied, setCopied] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
		setCopied(true)
		setTimeout(() => setCopied(false), 1500)
	}

	const handleRefresh = () => {
		setPassword(generatePassword())
	}

	return (
		<div className='bg-white rounded-2xl shadow-md p-2 w-full max-w-xl'>
			<div className='flex items-center justify-between mb-2'>
				<span className='text-lg font-mono break-all'>{password}</span>
				<div className='flex items-center gap-3'>
					<button type='button' onClick={handleCopy} className='text-slate-600 hover:text-slate-800'>
						<Copy size={20} />
					</button>
					<button type='button' onClick={handleRefresh} className='text-slate-600 hover:text-slate-800'>
						<RefreshCw size={20} />
					</button>
				</div>
			</div>
			<div className='h-1 rounded-b-xl bg-green-700' />
			{copied && <p className='text-sm text-green-700 mt-2'>Password copied!</p>}
		</div>
	)
}

export default PasswordGenerator
