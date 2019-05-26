const Hapi = require('@hapi/hapi')
const fetch = require('node-fetch')

const init = async () => {
    const server = Hapi.server({
        port: 9001,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req, h) => {
            return 'hello world';
        }
    });

    await server.start();
    console.log("Magic happens on %s", server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log("Server rejection error:", err);
    process.exit(1);
});

init();
