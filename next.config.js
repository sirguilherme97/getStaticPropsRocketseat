/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://get-static-props-rocketseat.vercel.app/members/',
  },

} 

module.exports = nextConfig
