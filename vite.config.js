import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Levi-Programmer.github.io/Rick-and-morty/",
  plugins: [react()]
})
