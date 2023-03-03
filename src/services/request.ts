async function request(url: string, method: string = "GET", data: any = false) {
    const options: any = {
        method,
        headers: {"Content-Type": "application/json"},
    }
    
    if (data && method === "POST") {
        options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)
    const result = await response.json()
    return result
}

export const get = (url: string) => request(url)
export const post = (url: string, data = false) => request(url, "POST", data)
