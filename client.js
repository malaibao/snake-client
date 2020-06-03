const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
    const conn = net.createConnection({
        host: '135.23.222.148',
        port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8');

    conn.on('connect', () => {
        conn.write('Name: Wow');
        conn.write('Move: left');
        let testing = setInterval(() => {
            conn.write('Move: left');
        }, 500)

        clearTimeout(testing);
        // setTimeout(() => {
        // }, 500);
        // conn.write('Move: up');
        // conn.write('Move: up');
        // conn.write('Move: up');

        // console.log('Successfully connected to game server');
    })

    return conn;
}

module.exports = {
    connect: connect
}