import React, {useEffect, useState} from "react";
import { Button } from '@mantine/core';
import {nanoid} from "nanoid";
import {generateCodeChallenge} from "@/admin/helpers/crypto";
import {encode} from "qss";

const LoginButton = (props) => {

    const [href, setHref] = useState('#')

    const generateHref = async () => {
        const state = nanoid(40);
        const code_verifier = nanoid(128);

        sessionStorage.setItem('state', state);
        sessionStorage.setItem('code_verifier', code_verifier);

        const code_challenge = await generateCodeChallenge(code_verifier)

        const params = {
            client_id: import.meta.env.VITE_PASSPORT_AUTHORIZATION_CODE_CLIENT_ID,
            redirect_uri: import.meta.env.VITE_CALLBACK_URL,
            response_type: 'code',
            scope: '',
            state: state,
            code_challenge: code_challenge,
            code_challenge_method: 'S256',
        }

        setHref(`${import.meta.env.VITE_PASSPORT_AUTHORIZATION_ENDPOINT}?${encode(params)}`)
    }

    useEffect(() => {
        generateHref()
    }, []);

    return (
        <Button
            component="a"
            rel="noopener noreferrer"
            href={href}
        >
            Login
        </Button>
    )
}

export default LoginButton
