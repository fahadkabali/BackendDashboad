import {z} from 'zod'

export const createCategorySchema = z.object({
    image: z.any().refine(file => file.length > 0, 'Image is required'),
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    imageUrl: z.string(),
})

export type CreateCategorySchema = z.infer<typeof createCategorySchema>