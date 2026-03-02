import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/apiv1': {
        target: 'http://localhost:3000', // The address of your backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Set to true if the backend uses HTTPS with a valid certificate
      },
    },
  },
});
