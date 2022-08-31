// import { IconAt } from "@tabler/icons";
// import InputMask from "@/admin/libs/react-input-mask";

const defaultValues = {
    name: '',
    code: '',
}

const formSetting = {
    code: {
        type: 'text',
        props: {
            label: `Mã cơ sở`,
            placeholder: `AAA-11`,
            mb: 5,
            // icon: <IconAt />,
            // component: InputMask,
            // mask: "+7 (999) 999-99-99",
            // id: 'abc'
            // withAsterisk: true,
        }
    },
    name: {
        type: 'text',
        props: {
            label: `Tên cơ sở`,
            placeholder: `Tên cơ sở`,
            mb: 5,
            // icon: <IconAt />,
            // component: InputMask,
            // mask: "+7 (999) 999-99-99",
            // id: 'abc'
            // withAsterisk: true,
        }
    }
}

export {
    formSetting,
    defaultValues,
}
