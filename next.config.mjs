/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent stale webpack chunks on Windows after hot reload (common crash cause)
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
