import React from 'react'
import { TextField } from '../form/TextField'
import { Percentage, Search } from '../svgs'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// import { FiSearch } from 'react-icons/lib/fa'

export const Addtax = () => {
	const validate = Yup.object({
		name: Yup.string()
			.required('Name field is required')
			.min(3, 'Name must be at least 3 characters'),
		rate: Yup.number().required('Rate field is required'),
	})
	return (
		<Formik
			initialValues={{
				name: '',
				rate: '',
			}}
			validationSchema={validate}
			onSubmit={async (values, { resetForm }) => {
				console.log(values, 'values')
				resetForm()
			}}
		>
			{(props) => {
				const { isSubmitting, handleSubmit } = props
				return (
					<form onSubmit={handleSubmit}>
						<div>
							<div className='flex justify-between'>
								<h2 className='text-3xl '>Add Tax</h2>
								<button className='text-4xl'>&times;</button>
							</div>
							<div className='grid grid-cols-6 gap-4 mt-5 '>
								<div className='w-full col-span-3'>
									<TextField type='text' name='name' id='name' />
								</div>
								<div className='relative col-span-1'>
									<TextField type='text' name='rate' id='rate' />
									<span className=''>
										<Percentage className='absolute h-3 right-2 top-3' />
									</span>
								</div>
							</div>
							<div className='mt-6 ml-2'>
								<div className='mt-6 ml-2'>
									<div className='flex items-center mb-2'>
										<input
											type='radio'
											name='items'
											id='items'
											className='mr-5 text-yellow-500 bg-orange-600 rounded-full focus:ring-0'
										/>
										<label htmlFor='items'>
											Apply to all items in the collection
										</label>
									</div>

									<div className='flex items-center'>
										<input
											type='radio'
											name='items'
											id='items'
											className='mr-5 text-yellow-500 bg-orange-600 rounded-full focus:ring-0'
										/>
										<label htmlFor='items'>Apply to specific items</label>
									</div>
								</div>
							</div>

							<hr className='my-4' />

							<div className=''>
								<div className='relative w-1/3'>
									<TextField
										type='text'
										name='search'
										id='search'
										placeholder='Search Items'
									/>
									<span className=''>
										<Search className='absolute h-3 top-4 left-2 ' />
									</span>
								</div>
							</div>

							<button type='submit' disabled={isSubmitting}>
								click
							</button>
						</div>
					</form>
				)
			}}
		</Formik>
	)
}
