# Docker Commands for VisualSort.app

## 🚀 Production Deployment

### Build and Run Production Container
```bash
# Build and start the production container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Access the Application
- **App URL**: http://localhost:3000
- **Health Check**: http://localhost:3000/health

## 🛠️ Development Environment

### Run Development Container
```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up -d --build

# View development logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

### Access Development Server
- **Dev URL**: http://localhost:5173

## 🐳 Individual Docker Commands

### Build Production Image
```bash
docker build -t visualsort-app:latest .
```

### Run Production Container
```bash
docker run -d \
  --name visualsort-app \
  -p 3000:80 \
  --restart unless-stopped \
  visualsort-app:latest
```

### Build Development Image
```bash
docker build -f Dockerfile.dev -t visualsort-app:dev .
```

### Run Development Container
```bash
docker run -d \
  --name visualsort-dev \
  -p 5173:5173 \
  -v $(pwd):/app \
  -v /app/node_modules \
  visualsort-app:dev
```

## 📊 Container Management

### View Running Containers
```bash
docker ps
```

### View Container Logs
```bash
docker logs visualsort-app
```

### Access Container Shell
```bash
docker exec -it visualsort-app sh
```

### Remove Containers and Images
```bash
# Remove containers
docker-compose down --volumes --remove-orphans

# Remove images
docker rmi visualsort-app:latest visualsort-app:dev

# Clean up everything
docker system prune -a
```

## 🔧 Troubleshooting

### Check Container Health
```bash
docker inspect visualsort-app | grep Health -A 10
```

### Rebuild Without Cache
```bash
docker-compose build --no-cache
```

### View Nginx Logs Inside Container
```bash
docker exec visualsort-app tail -f /var/log/nginx/access.log
docker exec visualsort-app tail -f /var/log/nginx/error.log
```