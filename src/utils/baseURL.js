const getBaseUrl = () => {
    if(import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL  
    }
    return "http://localhost:5000"
}

export default getBaseUrl;