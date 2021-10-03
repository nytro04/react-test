import React from 'react'
import { Percentage, Search } from './components/svgs'
// import { FiSearch } from 'react-icons/lib/fa'

export const Addtax = () => {
	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='text-3xl '>Add Tax</h2>
				<button className='text-2xl'>&times;</button>
			</div>
			<div className='grid grid-cols-6 gap-4 mt-5 '>
				<input
					type='text'
					name='tax'
					id='tax'
					className='col-span-3 px-3 border border-gray-300 rounded'
				/>
				<div className='relative'>
					<input
						type='number'
						name='tax'
						id='tax'
						className='col-span-1 px-3 border border-gray-300 rounded'
					/>
					<span className=''>
						<Percentage className='absolute h-3 top-3 -right-1' />
					</span>
				</div>
			</div>
			<div className='mt-6 ml-2'>
				<input
					type='radio'
					name='items'
					id='items'
					className='block mb-3 text-yellow-500 bg-orange-600 rounded-full focus:ring-0'
				/>
				<input
					type='radio'
					name='items'
					id='items'
					className='block mb-3 text-yellow-500 bg-orange-600 rounded-full focus:ring-0'
				/>
			</div>

			<hr className='my-4' />
			<div className=''>
				<div className='relative'>
					<input
						type='text'
						name='tax'
						id='tax'
						placeholder='Search items'
						className='w-1/3 col-span-3 px-3 pl-6 border border-gray-300 rounded'
					/>
					<span className=''>
						<Search className='absolute h-3 top-4 left-2 ' />
					</span>
				</div>

				<div className='mt-5'></div>

				<input
					type='checkbox'
					name='items'
					id='items'
					className='block text-blue-700 border border-gray-300 rounded-sm focus:ring-0'
				/>
			</div>
		</div>
	)
}
