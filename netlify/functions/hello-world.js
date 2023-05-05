exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from AnhDV',
            data: 'THIS IS SOME DATA TO TEST CD/CI'
        })
    }
}