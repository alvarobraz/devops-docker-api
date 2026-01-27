# 🚀 Projeto DevOps Docker API

Este projeto mostra como buildar, rodar e testar uma aplicação Node.js usando Docker.

---

## 📦 Pré-requisitos

- Docker instalado
- Docker Compose (opcional)
- Permissão para usar `sudo` (ou Docker configurado sem sudo)

---

## 🛠️ Passo a passo

No terminal, execute os comandos abaixo na ordem:

```bash
sudo docker build -t devops-docker-api:v1 -f DockerFile .

sudo docker image ls devops-docker-api:v1

sudo docker run -p 3000:3000 devops-docker-api:v1

http://localhost:3000

curl http://localhost:3000

sudo docker ps

sudo docker stop <CONTAINER_ID>
```
