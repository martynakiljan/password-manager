export type FieldValues = {
	[key: string]: string
}

export type FormProps = {
	id: string
	form: FieldValues
	errors: FieldValues
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export type DashboardProps = {
	passwords: FieldValues[]
	handleDelete: (website: string) => void
}

export type PassProps = {
	email: string
	website: string
	password: string
	onDelete: () => void
}
