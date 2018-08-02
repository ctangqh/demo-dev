FROM node
WORKDIR /home/node/app
COPY src /home/node/app
ENV MEMCACHED_SERVER 192.168.1.109:11211
ENV PORT 3000
RUN npm install uuid --save
CMD ["node", "app.js"]
