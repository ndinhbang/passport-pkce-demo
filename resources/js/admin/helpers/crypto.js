import {encodeURLSafe} from '@stablelib/base64'
const crypto = self.crypto || self.msCrypto;
const cryptoSubtle = crypto.subtle || crypto.webkitSubtle;

export const getRandomValues = ( size = 32) => {
    return crypto.getRandomValues( new Uint8Array( Number( size ) ) );
}

export const generateCodeChallenge = async (message) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await cryptoSubtle.digest('SHA-256', data);

    const encoded = encodeURLSafe(new Uint8Array(hashBuffer));
    return encoded.replace(/=+$/, '');
}
