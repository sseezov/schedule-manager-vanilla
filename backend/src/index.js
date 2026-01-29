import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'node:path'

const __dirname = import.meta.dirname;

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
});

fastify.get('/', (request, reply) => {
  reply.sendFile('index.html');
});
fastify.get('/shedule', async function handler (request, reply) {
  return { shedule: 'hehe' }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}