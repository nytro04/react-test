import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<div className='mb-2'>
			<input
				className={`px-3 border border-gray-300 rounded w-full pl-6 ${
					meta.touched && meta.error && 'text-red-500'
				}`}
				{...field}
				{...props}
				autoComplete='off'
			/>
			<ErrorMessage
				component='div'
				name={field.name}
				className='text-red-500'
			/>
		</div>
	)
}
