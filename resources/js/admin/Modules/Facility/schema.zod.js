import { z } from 'zod';

const NewFacilitySchema = z.object({
    name: z.string()
        .min(1, { message: 'Tên cơ sở là bắt buộc' })
        .max(255, { message: 'Tối đa 255 kí tự' }),
    code: z.string()
        .min(1, { message: 'Mã cơ sở là bắt buộc' })
        .max(15, { message: 'Tối đa 15 kí tự' }),
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
