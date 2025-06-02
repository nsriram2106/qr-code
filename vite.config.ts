import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/qr-code-element.ts',
      name: 'QRCodeElement',
      fileName: () => 'qr-lib.js',
      formats: ['es'],
    }
  }
});


