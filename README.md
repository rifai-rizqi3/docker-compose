===================================
syntax docker
===================================
FROM node:18-alpine

WORKDIR /app

COPY package\* .
RUN npm install

COPY . .

# CMD ["npm", "run", "build"]

.dockerignore
node_modules
\*.log
===================================
- docker build -t nextjs/web . (untuk build image, docker images)
- docker run -d -p 3008:3008 reactjs/webdna (untuk menjalankan, docker ps -a)
- docker container stop 07209b5a43d8
- docker-compose -f docker-compose.staging.yaml up -d --build --force-recreate
- docker-compose -f docker-compose.staging.yaml down
- docker-compose -f docker-compose.staging.yaml exec -it nginx-1 /bin/sh
- docker exec -it mysql-ku mysql -u root -p
