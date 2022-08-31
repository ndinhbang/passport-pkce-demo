import { makeUseAxios } from 'axios-hooks'
import apiClient from "@/admin/helpers/apiClient";

const useApi = makeUseAxios({
    axios: apiClient
})

export default useApi
