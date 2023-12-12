/*** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "t4.ftcdn.net",
            },
        ],
    },
    // images: {
    //     domains: ["plus.unsplash.com", "t4.ftcdn.net"]
    // },
    // api: {
    //     bodyParser: false,
    // },

    env: {
        db_user: 'LaurenTest',
        db_pass: 'LaurenTestPassword'
    },

};

module.exports = nextConfig
