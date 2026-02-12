import Fastify from 'fastify'
import fastifyStatic from '@fastify/static';
import path from 'node:path'
import fastifyPostgres from '@fastify/postgres';
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');

const __dirname = import.meta.dirname;

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyPostgres, {
  connectionString: process.env.CONNECTION_STRING
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
});

fastify.get('/', (request, reply) => {
  reply.sendFile('index.html');
});

fastify.get('/apiv1/teachers', (req, reply) => {
  fastify.pg.query(
    'SELECT * from teachers',
    (err, result) => reply.send(err || result.rows))
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}