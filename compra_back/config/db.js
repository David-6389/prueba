const config = {
    //user: 'sa',
   // password: 'sa2K17docker',
    server: 'localhost',
    database: 'examen',
    connectionTimeout: 30000,
    requestTimeout: 20000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

exports.config = config 