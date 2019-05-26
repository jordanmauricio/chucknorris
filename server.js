const Hapi = require('@hapi/hapi')
const Path = require('path')
const fetch = require('node-fetch')

const plugins = [
    require('@hapi/inert'),
]

const init = async () => {
    // TODO(adjust cors for specific routes)
    const server = Hapi.server({
        port: 9001,
        host: 'localhost',
        routes: {
            cors: true,
        }
    });

    await server.register(plugins);

    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'build'),
                listing: false,
                index: true,
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, h) => {
            return 'hello world';
        },
    });

    server.route({
        method: 'GET',
        path: '/chuck',
        handler: async (req, h) => {

            let jokes = await fetch('http://api.icndb.com/jokes/random/10?escape=javascript')
                .then(res => res.json())
                .catch(err => console.log('Fetch error', err));
            
            if( jokes.type !== 'success') return 'Something went wrong.';

            return { jokes: jokes.value };
        },
    });

    await server.start();
    console.log("Magic happens on %s", server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log("Server rejection error:", err);
    process.exit(1);
});

init();
