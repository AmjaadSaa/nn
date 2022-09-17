// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const host = process.env.NODE_ENV ==='production' ? '0.0.0.0' : '127.0.0.1';
const port = process.env.$PORT || process.env.PORT || 3000;

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: port, host: host })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()