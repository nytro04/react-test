import React from 'react'

export const Addtax = () => {
	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='text-3xl '>Add Tax</h2>
				<button className>&times;</button>
			</div>
			<div className='grid grid-cols-6 gap-4 mt-5'>
				<input
					type='text'
					name='tax'
					id='tax'
					className='col-span-3 px-3 border border-gray-300 rounded'
				/>
				<input
					type='number'
					name='tax'
					id='tax'
					className='col-span-1 px-3 border border-gray-300 rounded'
				/>
			</div>
			<div className='mt-4'>
				<input type='radio' name='items' id='items' />
				<input type='radio' name='items' id='items' />
			</div>

			<hr className='my-4' />
			<div className=''>
				<input
					type='text'
					name='tax'
					id='tax'
					placeholder='Search items'
					className='w-1/3 col-span-3 px-3 border border-gray-300 rounded '
				/>

				<input type='checkbox' name='items' id='items' />
			</div>
		</div>
	)
}
