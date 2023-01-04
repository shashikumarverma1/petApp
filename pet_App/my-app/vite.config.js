// / <reference types="vitest" />
import { defineConfig } from 'vite'
import react from "vitejs/plugin-react"
export default defineConfig({
  test: {
    plugins:[react()] ,
    root:"src" ,
    test :{
        environment :"happy-dom" ,
    }
  },
})
