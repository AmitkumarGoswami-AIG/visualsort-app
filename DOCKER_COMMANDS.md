# 🐳 Docker Management with Makefile

## 🚀 Quick Start Commands

### **Development (Hot Reload)**
```bash
make dev-setup    # Complete dev setup (install + build + run)
make run-dev      # Just run development container
make logs-dev     # View development logs
make stop-dev     # Stop development container
```
**Access**: http://localhost:5173

### **Production**
```bash
make prod-setup   # Complete prod setup (build + run)
make run          # Just run production container
make logs         # View production logs
make stop         # Stop production container
```
**Access**: http://localhost:3000

## 📋 All Available Commands

### **Essential Commands**
```bash
make help         # Show all available commands
make status       # Show running containers
make health       # Check container health
make monitor      # Monitor logs in real-time
```

### **Build Commands**
```bash
make build        # Build production image
make build-dev    # Build development image
make install      # Install dependencies locally
```

### **Run Commands**
```bash
make run          # Start production container
make run-dev      # Start development container
make restart      # Restart production
make restart-dev  # Restart development
```

### **Management Commands**
```bash
make logs         # View production logs
make logs-dev     # View development logs
make shell        # Access production container shell
make shell-dev    # Access development container shell
make stats        # Show resource usage
```

### **Cleanup Commands**
```bash
make clean        # Stop containers & clean networks
make clean-all    # Remove everything (images, volumes)
make prune        # Remove unused Docker resources
```

### **Code Quality**
```bash
make lint         # Run ESLint
make format       # Format code with Prettier
make test         # Run tests
make update       # Update dependencies
```

### **Deployment**
```bash
make deploy       # Deploy to production
make backup       # Backup application data
make export       # Export Docker image
make load         # Load Docker image
```

## 🎯 Common Workflows

### **First Time Setup**
```bash
# Development
make dev-setup

# Or Production
make prod-setup
```

### **Daily Development**
```bash
make run-dev      # Start development
make logs-dev     # Check logs
make stop-dev     # Stop when done
```

### **Production Deployment**
```bash
make build        # Build latest
make deploy       # Deploy to production
make health       # Verify deployment
```

### **Troubleshooting**
```bash
make status       # Check what's running
make health       # Check health status
make logs         # View logs
make shell        # Access container
```

### **Cleanup**
```bash
make clean        # Quick cleanup
make prune        # Deep cleanup
make clean-all    # Nuclear option (removes everything)
```

## 📊 Container Ports

| Service | Port | URL | Purpose |
|---------|------|-----|---------|
| Production | 3000 | http://localhost:3000 | Main app |
| Development | 5173 | http://localhost:5173 | Dev server |
| Health Check | 3000/health | http://localhost:3000/health | Health status |

## 🔧 Useful Tips

### **Multiple Commands**
```bash
# Chain commands
make clean build run

# Background monitoring
make run && make logs
```

### **Environment Variables**
```bash
# Override ports
PROD_PORT=8080 make run
DEV_PORT=3000 make run-dev
```

### **Debugging**
```bash
# Check container details
make shell
ps aux              # Inside container
cat /var/log/nginx/error.log  # Nginx logs

# Check from host
docker inspect visualsort-app
docker exec visualsort-app nginx -t  # Test config
```

### **Performance Monitoring**
```bash
make stats          # Resource usage
make health         # Health status
curl http://localhost:3000/health  # Direct health check
```

## 🚨 Emergency Commands

```bash
make stop           # Stop everything
make clean-all      # Nuclear cleanup
docker kill $(docker ps -q)  # Stop all containers
```

This Makefile provides a complete toolkit for managing your VisualSort.app Docker deployment! 🎉