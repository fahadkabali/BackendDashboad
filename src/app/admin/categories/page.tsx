import React from 'react'
import { getCategoriesWithProducts } from '@/actions/categories'

export const Categories = async () => {
    const categories = await getCategoriesWithProducts();
    console.log(categories);
  return (
    <div>Categories</div>
  )
}
