# Pug
Чтобы использовать шаблоны Pug в Vite, выполните следующие шаги.

Установите необходимые зависимости. Запустите команду для установки зависимостей:

    npm install pug --save-dev
    npm install vite-plugin-pug --save-dev

Настройте Vite для использования плагина Pug. В файле `vite.config.js` импортируйте плагин Pug и добавьте его в массив `plugins`:

    import { defineConfig } from 'vite';
    import pugPlugin from 'vite-plugin-pug';

    export default defineConfig({
      plugins: [pugPlugin()],
    });

Создайте файл шаблона Pug. Создайте новый файл с расширением `.pug`, например `index.pug`.  
Напишите шаблон Pug. В вашем шаблоне Pug вы можете писать код Pug, как обычно. Например:

    doctype html
    html(lang="en")
      head
        meta(charset="UTF-8")
        meta(name="viewport" content="width=device-width, initial-scale=1.0")
        title My Pug Template
    body
      h1 Welcome to my Pug template!

Импортируйте и используйте шаблон Pug. В вашем файле JavaScript или TypeScript импортируйте шаблон Pug, используя его относительный путь, и добавьте его в DOM. Например:

    import template from './index.pug';
    document.body.innerHTML = template();

Запустите сервер разработки Vite: Запустите команду для запуска сервера разработки Vite: `npm run dev`.

Теперь, когда вы обращаетесь к вашему приложению по указанному URL, Vite обработает шаблон Pug и отобразит его в браузере.
