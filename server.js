const Hapi = require('@hapi/hapi')
const Path = require('path')
const fetch = require('node-fetch')

const plugins = [
    require('@hapi/inert'),
]

const init = async () => {
    const server = Hapi.server({
        port: 9001,
        host: 'localhost',
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

    await server.start();
    console.log("Magic happens on %s", server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log("Server rejection error:", err);
    process.exit(1);
});

init();