# Stage 1: Build the site
FROM node:lts AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy the built assets from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy a custom nginx config if you have one (optional), otherwise use default
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]