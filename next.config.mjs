/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
         remotePatterns: [{hostname:"i.ytimg.com"},{hostname:"www.freepik.com"},{hostname:"img.freepik.com"}]
    },
    webpack: (config, { isServer }) => {
        // Modify the webpack config here
    
        return config;
      },
};

export default nextConfig;
