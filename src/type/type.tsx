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
