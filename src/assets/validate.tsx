export const validate = (name: string, value: string): string => {
	switch (name) {
		case 'email': {
			return /\S+@\S+\.\S+/.test(value) ? '' : 'Enter a valid email'
		}
		case 'website': {
			try {
				const prefixedValue = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`

				const url = new URL(prefixedValue)
				if (!url.hostname.includes('.')) {
					return 'Please enter a valid website domain (e.g., example.com)'
				}

				return ''
			} catch {
				return 'Please enter a valid website URL'
			}
		}
		case 'password': {
			return /^(?=.*[A-Za-z]{3,})(?=.*\d)(?=.*[^A-Za-z\d]).*$/.test(value)
				? ''
				: 'Min. 3 letters, 1 number, 1 special character'
		}

		default:
			return ''
	}
}
