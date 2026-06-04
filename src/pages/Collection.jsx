import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {

    const { products } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            {/* Filter Options */}
            Filter Options */}

div className="min-w-60'>

<p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

1/ Category Filter */}

drv classMane border border-gray-300 p1-5 py-3 wt-6 $(showfilter? s'hidden'

cpiclassiiam'mb-3 text-se font-medium CATEGORIES/

<div classlane'flex flex-col gap-2 text-se font-light text-gray-700

op classlamoflex gap-2'>

input classianew-3' type="checkbox" value="Men"> Men

</p>

<p classliamflex gap-2">

Input className - 3 type = "checkbox" value = "lomon Women

</p >

    <p classlamoflex gap-2">

        < input classe'-3' type = "checkbox" values Kids kids

</div >

    {/* SubCategory Filter *

        </div>
    )
}

export default Collection