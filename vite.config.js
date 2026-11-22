import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        productDetail: resolve(__dirname, 'product-detail.html'),
        services: resolve(__dirname, 'services.html'),
        serviceDetail: resolve(__dirname, 'service-detail.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
});
