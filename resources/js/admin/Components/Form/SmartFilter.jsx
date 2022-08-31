import React from 'react'
import SmartForm from "@/admin/Components/Form/SmartForm";

const SmartFilter = (props) => {
    const {form, setting, onSubmit} = props
    return (
        <SmartForm form={form} setting={setting} onSubmit={onSubmit} />
    )
}

export default SmartFilter
