FROM node:20-alpine
ARG project="libruch"
EXPOSE 3000

WORKDIR /app
ADD . .
RUN npm i
RUN npm run build -w app/${project}
RUN npm prune --production
CMD npm run start -w app/${project}

