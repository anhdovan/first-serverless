import fetch from 'node-fetch';

exports.handler = async function () {
    const POKE_API = 'https://jsonplaceholder.typicode.com/posts'

    const response = await fetch(POKE_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
//export { handler };