FROM node
WORKDIR /home/node/app
COPY memcached-demo /home/node/app
ENV MEMCACHED-SERVER 192.168.1.109:11211
ENV PORT 3000
CMD ["node", "app.js"]
