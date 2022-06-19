import type { Handler } from '@netlify/functions'
import { Client } from 'pg'

const client = new Client(process.env.DATABASE_URL)

const handler: Handler = async (event, context) => {
  (async () => {
    await client.connect()
    try {
      const results = await client.query('SELECT NOW()')
      console.log(results)
    }
    catch (err) {
      console.error('error executing query:', err)
    }
    finally {
      client.end()
    }
  })()
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}

export { handler }
