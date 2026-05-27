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

Образ **не тянется из registry** — на сервере лежит клон репозитория, образ собирается локально через `docker compose build`.

При пуше в `main` GitHub Actions по SSH выполняет на сервере: `git pull`, `docker compose build`, `docker compose up -d` (см. [.github/workflows/main.yml](./.github/workflows/main.yml)).

### 1. Установка Docker (Ubuntu)

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg git

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

### 2. Клон репозитория на сервер

```bash
sudo mkdir -p /opt/glau
sudo chown "$USER":"$USER" /opt/glau
git clone https://github.com/fedotarte/nm_glau.git /opt/glau
cd /opt/glau
```

Скопируйте шаблон переменных и отредактируйте под сервер:

```bash
cp .env.example .env
```

Пример `.env` (файл не в git, только на сервере):

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

Обновление после изменений в коде:

```bash
cd /opt/glau
git pull
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
| Репозиторий в `/opt/glau` | есть `Dockerfile`, `docker-compose.yml`, `.env` |
| Образ собран | `docker images glau-app` |
| Приложение | `curl http://127.0.0.1:3000` → 200 |
| nginx + TLS | сайт открывается по `https://glau.pharm-vision.ru` |

## Частые проблемы

- **502 Bad Gateway** — контейнер не запущен: `docker compose ps`, `docker compose logs -f`.
- **Старый контент после деплоя** — не хватило `docker compose build` после `git pull`.
- **Неверные URL / auth** — проверьте `NEXT_PUBLIC_SITE_URL` в `.env` и пересоберите образ.
- **Порт 3000 снаружи** — в compose должен быть `127.0.0.1:3000:3000`.

## Проверка сборки на любой машине

```bash
docker compose build
docker compose up
# http://localhost:3000
```

---

- [Документация Next.js](https://nextjs.org/docs)
- CI/CD: [.github/workflows/main.yml](./.github/workflows/main.yml)
