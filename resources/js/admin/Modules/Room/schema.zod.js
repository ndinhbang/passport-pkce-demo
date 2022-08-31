import { z } from 'zod';

const NewFacilitySchema = z.object({
    name: z.string().max(255, { message: 'Tối đa 255 kí tự' }),
    code: z.string().max(15, { message: 'Tối đa 15 kí tự' }),
})

const FacilitySchema = NewFacilitySchema.merge(
    z.object({
        id: z.number().positive(),
        uuid: z.string().length(21),
    })
);

export {
    FacilitySchema,
    NewFacilitySchema
}
