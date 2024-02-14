
export const BACK_URL = (isProd)=>{
    const DEV_SERVER_PORT = 5001;
    return(
        isProd ? 'https://stuniverse-back.vercel.app/' :  `http://localhost:${DEV_SERVER_PORT}/`
    )
}
