import { defineConfig } from "vite";

export default defineConfig({
  // Прописываем настройки проекта
  root: './src', // Объявляем корень проекта
  build: {
    outDir: './../dist', // Указываем где должна быть папка dir относительно root (на один уровень вверх, имя можно выбрать любое)
    emptyOutDir: true // Разрешаем очищать папку /dist при сборке проекта
  }
});
