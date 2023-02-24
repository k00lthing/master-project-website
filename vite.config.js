import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about/index.html'),
          ocr: resolve(__dirname, 'ocr/index.html'),
          resolution: resolve(__dirname, 'resolution/index.html'),
          disruption: resolve(__dirname, 'disruption/index.html'),
          disorientation: resolve(__dirname, 'disorientation/index.html'),
        },
      },
    },
  })

  