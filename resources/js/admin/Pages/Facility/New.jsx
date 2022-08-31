import React, { useEffect } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { NewFacilitySchema } from "@/admin/Modules/Facility/schema.zod";
import { defaultValues, formSetting } from "@/admin/Modules/Facility/form.setting";
import SmartForm from "@/admin/Components/Form/SmartForm";
import useAxios from "axios-hooks";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";
import { Button, Group, Overlay, Box } from "@mantine/core";

const New = () => {
    const form = useForm({
        validate: zodResolver(NewFacilitySchema),
        initialValues: defaultValues,
    });

    const [{data, loading, error}, execute, cancel] = useAxios({url: '/api/facilities', method: 'POST'}, {manual: true})

    useEffect(() => {
        if (error) {
            const {message} = error
            if (message) {
                showNotification({
                    id: 'new-facility-error',
                    title: 'Có lỗi xảy ra',
                    message: message,
                    color: 'red',
                    icon: <IconX/>,
                    autoClose: 3000,
                })
            }
        }
    }, [error])

    const handleSubmit = () => {
        const {hasErrors} = form.validate()
        // console.log(form.validate())
        if (!hasErrors) {
            execute({
                data: {
                    ...form.values,
                }
            })
        }
    }

    return (
        <>
            <SmartForm form={form} setting={formSetting}>
                <Group position="right" mt="xl">
                    <Button type="button" onClick={handleSubmit} loading={loading}>Lưu</Button>
                </Group>
            </SmartForm>
        </>
    )
}

export default New
