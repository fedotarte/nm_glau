# Glau — лендинг (Next.js)

Сайт на [Next.js](https://nextjs.org) с standalone-сборкой в Docker.

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте в браузере [http://localhost:3000](http://localhost:3000).

---

## Продакшен: сборка на сервере + nginx

Схема: **nginx** (80/443) → **контейнер Next.js** на `127.0.0.1:3000`.

Образ **не тянется из registry** — на сервер передаётся **архив с исходниками**, образ собирается локально через `docker compose build`. Git на сервере не нужен.

### 1. Установка Docker (Ubuntu)

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker "$USER"
# Перелогиньтесь в SSH, затем:

sudo systemctl enable --now docker
docker compose version
```

### 2. Размещение архива на сервере

Передайте на сервер архив проекта (`.tar.gz` или `.zip`) любым удобным способом (SFTP, scp и т.п.).

Первичная установка:

```bash
sudo mkdir -p /opt/glau
sudo chown "$USER":"$USER" /opt/glau

# Пример: архив уже загружен в /tmp/glau.tar.gz
tar -xzf /tmp/glau.tar.gz -C /opt/glau --strip-components=1
# Если в архиве одна вложенная папка — уберите --strip-components=1
# или распакуйте в /tmp и перенесите содержимое в /opt/glau вручную

cd /opt/glau
```

Создайте `.env` из шаблона и отредактируйте под сервер:

```bash
cp .env.example .env
```
# НЕ ЗАБУДЬТЕ УСТАНОВИТЬ PHARM_VISION_SECRET в `.env` ФАЙЛЕ!
Пример `.env` (файл только на сервере):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://glau.pharm-vision.ru
# PHARM_VISION_SECRET=...
# PHARM_VISION_FROM=glau.pharm-vision.ru
```

Полный список переменных — в [.env.example](./.env.example).

`NEXT_PUBLIC_SITE_URL` из `.env` подставляется **при сборке** (см. `build.args` в [docker-compose.yml](./docker-compose.yml)). После изменения `.env` пересоберите образ:

```bash
docker compose build
docker compose up -d
```

### 3. Сборка и запуск контейнера

Первый запуск:

```bash
cd /opt/glau
docker compose build
docker compose up -d
docker compose ps
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000
```

При Обновлении (новый архив от команды разработки):

```bash
cd /opt/glau
docker compose down

# Сохраните текущий .env — в новом архиве его обычно нет
cp .env /tmp/glau.env.bak

# Распакуйте новый архив поверх каталога (пример)
tar -xzf /tmp/glau.tar.gz -C /opt/glau --strip-components=1

cp /tmp/glau.env.bak .env

docker compose build
docker compose up -d --remove-orphans
docker image prune -f
```

Просмотр логов:

```bash
docker compose logs -f glau-app
```

### 4. nginx как reverse proxy

```bash
sudo apt install -y nginx
```

```bash
sudo nano /etc/nginx/sites-available/glau.pharm-vision.ru
```

```nginx
server {
    listen 80;
    server_name glau.pharm-vision.ru;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -sf /etc/nginx/sites-available/glau.pharm-vision.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

DNS домена должен указывать на IP сервера.

### 5. HTTPS (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d glau.pharm-vision.ru
sudo certbot renew --dry-run
```

Обновите `NEXT_PUBLIC_SITE_URL` на `https://…`, пересоберите и перезапустите контейнер.

---

## Чеклист

| Шаг | Проверка |
|-----|----------|
| Docker | `docker compose version` |
| Каталог `/opt/glau` | распакован архив: `Dockerfile`, `docker-compose.yml`, `.env` |
| Образ собран | `docker images glau-app` |
| Приложение | `curl http://127.0.0.1:3000` → 200 |
| nginx + TLS | сайт открывается по `https://glau.pharm-vision.ru` |

## Частые проблемы

- **502 Bad Gateway** — контейнер не запущен: `docker compose ps`, `docker compose logs -f`.
- **Старый контент после обновления** — не распаковали новый архив или не выполнили `docker compose build`.
- **Неверные URL / auth** — проверьте `NEXT_PUBLIC_SITE_URL` в `.env` и пересоберите образ.
- **Порт 3000 снаружи** — в compose должен быть `127.0.0.1:3000:3000`.

## Проверка сборки на любой машине

```bash
docker compose build
docker compose up
# http://localhost:3000
```

---

## Подготовка архива (для команды разработки)

Перед передачей на сервер соберите архив **без** зависимостей и артефактов сборки:

```bash
tar -czf glau-release.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude='.env' \
  -C . .
```

Передайте `glau-release.tar.gz` администратору сервера вместе с актуальным `.env` (или пусть он создаст его из `.env.example`).

---

- [Документация Next.js](https://nextjs.org/docs)
