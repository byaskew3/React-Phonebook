let token = '82e79c13c0885ff3a5514a80bd88724a97f0fb270ed86a4b'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://ct-flask-phone-book.herokuapp.com/api/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if(!response.ok){
            throw new Error('Failed to fetch data from servers')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch('https://ct-flask-phone-book.herokuapp.com/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://ct-flask-phone-book.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    },
    delete: async(id:string) => {
        const response = await fetch(`https://my-phonebook-ct-main.herokuapp.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        })
    }
}