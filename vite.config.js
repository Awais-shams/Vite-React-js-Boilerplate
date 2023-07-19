import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
    },
    resolve: {
      alias: {
        '@components': '/src/components',
        '@assets': '/src/assets',
        '@hooks': '/src/hooks',
        '@layout': '/src/layout',
        '@modules': '/src/modules',
        '@pages': '/src/pages',
        '@routes': '/src/routes',
        '@services': '/src/services',
        '@utils': '/src/utils',
        '@redux': '/src/redux',
      },
    },
  };
});
