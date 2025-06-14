import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/madar/', // <--- تأكد أن هذا يطابق اسم مستودعك في GitHub
});