FROM google/nodejs

WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD []
EXPOSE 7000
ENTRYPOINT ["/nodejs/bin/node", "web-server.js"]