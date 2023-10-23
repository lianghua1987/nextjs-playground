/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol:'http',
                port: '1337',
                hostname: '127.0.0.1',
                pathname: '/uploads/**'
            }
        ]
    }
}