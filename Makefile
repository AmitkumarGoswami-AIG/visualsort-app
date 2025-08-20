# VisualSort.app - Makefile for Container Management
# Usage: make <target>

# Variables
DOCKER_IMAGE_NAME = visualsort-app
DOCKER_IMAGE_TAG = latest
DOCKER_DEV_TAG = dev
CONTAINER_NAME = visualsort-app
DEV_CONTAINER_NAME = visualsort-dev
PROD_PORT = 3000
DEV_PORT = 5173
DOCKER_COMPOSE = docker-compose
DOCKER_COMPOSE_DEV = docker-compose -f docker-compose.dev.yml

# Colors for output
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

.PHONY: help build build-dev run run-dev stop stop-dev clean clean-all logs logs-dev shell health test install lint format deploy

# Default target
.DEFAULT_GOAL := help

## Display this help message
help:
	@echo "$(GREEN)VisualSort.app - Docker Management Commands$(NC)"
	@echo ""
	@echo "$(YELLOW)Production Commands:$(NC)"
	@echo "  build         Build production Docker image"
	@echo "  run           Run production container (builds if needed)"
	@echo "  stop          Stop production container"
	@echo "  logs          View production container logs"
	@echo "  restart       Restart production container"
	@echo ""
	@echo "$(YELLOW)Development Commands:$(NC)"
	@echo "  build-dev     Build development Docker image"
	@echo "  run-dev       Run development container with hot reload"
	@echo "  stop-dev      Stop development container"
	@echo "  logs-dev      View development container logs"
	@echo "  restart-dev   Restart development container"
	@echo ""
	@echo "$(YELLOW)Management Commands:$(NC)"
	@echo "  shell         Access production container shell"
	@echo "  shell-dev     Access development container shell"
	@echo "  health        Check container health status"
	@echo "  status        Show running containers"
	@echo ""
	@echo "$(YELLOW)Maintenance Commands:$(NC)"
	@echo "  clean         Clean up containers and networks"
	@echo "  clean-all     Clean everything (containers, images, volumes)"
	@echo "  prune         Remove unused Docker resources"
	@echo ""
	@echo "$(YELLOW)Code Quality Commands:$(NC)"
	@echo "  install       Install dependencies locally"
	@echo "  lint          Run ESLint"
	@echo "  format        Format code with Prettier"
	@echo "  test          Run tests (if available)"
	@echo ""
	@echo "$(YELLOW)Deployment Commands:$(NC)"
	@echo "  deploy        Deploy to production"
	@echo "  backup        Backup application data"
	@echo ""
	@echo "$(YELLOW)URLs:$(NC)"
	@echo "  Production:   http://localhost:$(PROD_PORT)"
	@echo "  Development:  http://localhost:$(DEV_PORT)"
	@echo "  Health Check: http://localhost:$(PROD_PORT)/health"

## Build production Docker image
build:
	@echo "$(GREEN)Building production Docker image...$(NC)"
	$(DOCKER_COMPOSE) build --no-cache
	@echo "$(GREEN)✓ Production image built successfully$(NC)"

## Build development Docker image
build-dev:
	@echo "$(GREEN)Building development Docker image...$(NC)"
	$(DOCKER_COMPOSE_DEV) build --no-cache
	@echo "$(GREEN)✓ Development image built successfully$(NC)"

## Run production container
run:
	@echo "$(GREEN)Starting production container...$(NC)"
	$(DOCKER_COMPOSE) up -d --build
	@echo "$(GREEN)✓ Production container started$(NC)"
	@echo "$(YELLOW)Access your app at: http://localhost:$(PROD_PORT)$(NC)"
	@echo "$(YELLOW)Health check at: http://localhost:$(PROD_PORT)/health$(NC)"

## Run development container
run-dev:
	@echo "$(GREEN)Starting development container with hot reload...$(NC)"
	$(DOCKER_COMPOSE_DEV) up -d --build
	@echo "$(GREEN)✓ Development container started$(NC)"
	@echo "$(YELLOW)Access dev server at: http://localhost:$(DEV_PORT)$(NC)"

## Stop production container
stop:
	@echo "$(YELLOW)Stopping production container...$(NC)"
	$(DOCKER_COMPOSE) down
	@echo "$(GREEN)✓ Production container stopped$(NC)"

## Stop development container
stop-dev:
	@echo "$(YELLOW)Stopping development container...$(NC)"
	$(DOCKER_COMPOSE_DEV) down
	@echo "$(GREEN)✓ Development container stopped$(NC)"

## Restart production container
restart: stop run

## Restart development container
restart-dev: stop-dev run-dev

## View production container logs
logs:
	@echo "$(GREEN)Viewing production container logs...$(NC)"
	$(DOCKER_COMPOSE) logs -f

## View development container logs
logs-dev:
	@echo "$(GREEN)Viewing development container logs...$(NC)"
	$(DOCKER_COMPOSE_DEV) logs -f

## Access production container shell
shell:
	@echo "$(GREEN)Accessing production container shell...$(NC)"
	docker exec -it $(CONTAINER_NAME) sh

## Access development container shell
shell-dev:
	@echo "$(GREEN)Accessing development container shell...$(NC)"
	docker exec -it $(DEV_CONTAINER_NAME) sh

## Check container health
health:
	@echo "$(GREEN)Checking container health...$(NC)"
	@if docker ps --filter "name=$(CONTAINER_NAME)" --filter "status=running" | grep -q $(CONTAINER_NAME); then \
		echo "$(GREEN)✓ Production container is running$(NC)"; \
		docker inspect $(CONTAINER_NAME) | grep -A 5 '"Health"' || echo "No health check configured"; \
		curl -f http://localhost:$(PROD_PORT)/health 2>/dev/null && echo "$(GREEN)✓ Health endpoint responding$(NC)" || echo "$(RED)✗ Health endpoint not responding$(NC)"; \
	else \
		echo "$(RED)✗ Production container is not running$(NC)"; \
	fi

## Show container status
status:
	@echo "$(GREEN)Container Status:$(NC)"
	@docker ps --filter "name=visualsort" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

## Clean up containers and networks
clean:
	@echo "$(YELLOW)Cleaning up containers and networks...$(NC)"
	$(DOCKER_COMPOSE) down --remove-orphans
	$(DOCKER_COMPOSE_DEV) down --remove-orphans
	@echo "$(GREEN)✓ Cleanup completed$(NC)"

## Clean everything (containers, images, volumes)
clean-all: clean
	@echo "$(RED)Removing all Docker images and volumes...$(NC)"
	@read -p "Are you sure? This will remove all images and volumes [y/N]: " confirm && \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		docker rmi $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) 2>/dev/null || true; \
		docker rmi $(DOCKER_IMAGE_NAME):$(DOCKER_DEV_TAG) 2>/dev/null || true; \
		docker volume prune -f; \
		echo "$(GREEN)✓ All images and volumes removed$(NC)"; \
	else \
		echo "$(YELLOW)Operation cancelled$(NC)"; \
	fi

## Remove unused Docker resources
prune:
	@echo "$(YELLOW)Removing unused Docker resources...$(NC)"
	docker system prune -f
	docker image prune -f
	@echo "$(GREEN)✓ Docker cleanup completed$(NC)"

## Install dependencies locally
install:
	@echo "$(GREEN)Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)✓ Dependencies installed$(NC)"

## Run ESLint
lint:
	@echo "$(GREEN)Running ESLint...$(NC)"
	npm run lint

## Format code with Prettier
format:
	@echo "$(GREEN)Formatting code...$(NC)"
	npx prettier --write "src/**/*.{ts,tsx,js,jsx,css,md}"
	@echo "$(GREEN)✓ Code formatted$(NC)"

## Run tests
test:
	@echo "$(GREEN)Running tests...$(NC)"
	@if [ -f "package.json" ] && grep -q '"test"' package.json; then \
		npm test; \
	else \
		echo "$(YELLOW)No tests configured$(NC)"; \
	fi

## Deploy to production
deploy: build
	@echo "$(GREEN)Deploying to production...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)✓ Deployed successfully$(NC)"
	@echo "$(YELLOW)Production URL: http://localhost:$(PROD_PORT)$(NC)"

## Backup application data
backup:
	@echo "$(GREEN)Creating backup...$(NC)"
	@mkdir -p backups
	@BACKUP_NAME="visualsort-backup-$$(date +%Y%m%d_%H%M%S)"; \
	docker run --rm -v visualsort-app_visualsort-network:/data -v $$(pwd)/backups:/backup alpine tar czf /backup/$$BACKUP_NAME.tar.gz -C /data .; \
	echo "$(GREEN)✓ Backup created: backups/$$BACKUP_NAME.tar.gz$(NC)"

## Show container resource usage
stats:
	@echo "$(GREEN)Container Resource Usage:$(NC)"
	docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}" $$(docker ps --filter "name=visualsort" --format "{{.Names}}")

## Update dependencies
update:
	@echo "$(GREEN)Updating dependencies...$(NC)"
	npm update
	@echo "$(GREEN)✓ Dependencies updated$(NC)"

## Quick development setup
dev-setup: install build-dev run-dev
	@echo "$(GREEN)✓ Development environment ready!$(NC)"
	@echo "$(YELLOW)Access at: http://localhost:$(DEV_PORT)$(NC)"

## Quick production setup
prod-setup: build run
	@echo "$(GREEN)✓ Production environment ready!$(NC)"
	@echo "$(YELLOW)Access at: http://localhost:$(PROD_PORT)$(NC)"

## Monitor logs in real-time
monitor:
	@echo "$(GREEN)Monitoring all VisualSort containers...$(NC)"
	docker logs -f $(CONTAINER_NAME) 2>/dev/null || \
	docker logs -f $(DEV_CONTAINER_NAME) 2>/dev/null || \
	echo "$(RED)No VisualSort containers running$(NC)"

## Export Docker image
export:
	@echo "$(GREEN)Exporting Docker image...$(NC)"
	@mkdir -p exports
	docker save $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) | gzip > exports/$(DOCKER_IMAGE_NAME)-$(DOCKER_IMAGE_TAG).tar.gz
	@echo "$(GREEN)✓ Image exported to exports/$(DOCKER_IMAGE_NAME)-$(DOCKER_IMAGE_TAG).tar.gz$(NC)"

## Load Docker image
load:
	@echo "$(GREEN)Loading Docker image...$(NC)"
	@if [ -f "exports/$(DOCKER_IMAGE_NAME)-$(DOCKER_IMAGE_TAG).tar.gz" ]; then \
		gunzip -c exports/$(DOCKER_IMAGE_NAME)-$(DOCKER_IMAGE_TAG).tar.gz | docker load; \
		echo "$(GREEN)✓ Image loaded successfully$(NC)"; \
	else \
		echo "$(RED)✗ Export file not found$(NC)"; \
	fi