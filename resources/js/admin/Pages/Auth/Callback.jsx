import React, {useEffect} from 'react'
import {Navigate, useNavigate, useSearchParams} from "react-router-dom";
import SplashScreen from "@/admin/Components/App/SplashScreen";
import useAxios from "axios-hooks";
// import useApi from "@/admin/hooks/useApi";

const Callback = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [{data: tokenData, error}, getToken, cancelTokenRequest] = useAxios(
        {url: `${import.meta.env.VITE_PASSPORT_TOKEN_ENDPOINT}`, method: 'POST'},
        {manual: true, autoCancel: true}
    )
    // const [, getUser, cancelUserRequest] = useApi(`user-info`, {manual: true})
    const navigate = useNavigate();

    useEffect(() => {
        const state = sessionStorage.getItem('state');
        if (!state.length || state !== searchParams.get('state')) {
            navigate('/admin', {
                state: {
                    error: {
                        message: 'Unauthorized',
                    }
                }
            })
        }
        getToken({
            data: {
                grant_type: 'authorization_code',
                client_id: import.meta.env.VITE_PASSPORT_AUTHORIZATION_CODE_CLIENT_ID,
                redirect_uri: import.meta.env.VITE_CALLBACK_URL,
                code_verifier: sessionStorage.getItem('code_verifier'),
                code: searchParams.get('code'),
            }
        })
    }, [])

    useEffect(() => {
        if (tokenData) {
            sessionStorage.setItem('access_token', tokenData.access_token)
            sessionStorage.setItem('refresh_token', tokenData.refresh_token)
            navigate('/admin/manage/dashboard')
        }
    }, [tokenData]);


    if (error) {
        return <Navigate to={`/admin`} state={{error: { message: 'Unauthorized' }}} />
    }

    return (
        <SplashScreen />
    )
}

export default Callback
