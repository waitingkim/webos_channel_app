# pull the base image
FROM node:16-alpine as builder
RUN apk add --no-cache libc6-compat
# install webos cli ares
RUN npm install -g @webos-tools/cli
# set the working direction
WORKDIR /app
# Copy and install the dependencies for the project
COPY . .
#install app dependencies
RUN npm i --package-lock-only --legacy-peer-deps
RUN npm ci  --legacy-peer-deps
# Run the next build process and generate the artifacts
RUN npm run build
#make ipk file
RUN ares-package build/
#build zip file
RUN apk --no-cache add zip
RUN cd build; zip -r mashup.zip .
#nginx server
FROM nginx:1.21.0-alpine as runner
COPY --from=builder /app/*.ipk /usr/share/nginx/html/mashup.ipk
COPY --from=builder /app/build/mashup.zip /usr/share/nginx/html/procentric/application/mashup.zip
COPY xait.xml /usr/share/nginx/html/procentric/application/xait.xml
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
