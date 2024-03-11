import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

router.get('/discord/callback', async (req, res) => {
    const { code } = req.query;
    if ( ! code ) return res.redirect('https://discord.com/oauth2/authorize?client_id=1125638027100831754&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fapi%2Fdiscord%2Fcallback&scope=identify+guilds');
    if ( code ) {
        const params = new URLSearchParams({
            "client_id": '1125638027100831754',
            "client_secret": 'r_k905RHlwHgaA5CXr9R8k46pLd-wj3n',
            "grant_type": "authorization_code",
            "code": code as string,
            "redirect_uri": 'http://localhost:5173/api/discord/callback'
        });

        const response = await fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": 'application/x-www-form-urlencded'
            },
            body: params
        })
        const data: {access_token: string, token_type: string, expires_in: number, refresh_token: string, scope: string} = await response.json()
        fetch('https://discord.com/api/users/@me', {
            headers: {
                "Authorization": `${data.token_type} ${data.access_token}`,
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "application/x-www-form-urlencoded"
            }
        }).then(d => d.json()).then((userData: any) => {
            res.cookie('userData', userData).redirect('/')
            
        })

    }
})

export default router