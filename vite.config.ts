import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/mate-inteligente-app/',

  plugins: [
    react(),
    babel({
      presets: ['@babel/preset-typescript', reactCompilerPreset()]
    })
  ],
})