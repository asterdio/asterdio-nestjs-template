FROM docker_image
# provide docker image name to be used as the base image for the repository
# use minimal image
WORKDIR /app
# working directory of the docker

COPY . .
#copies the content to the docker image

RUN echo "test docker image"
#provide build commands

CMD ["echo", "docker build completed"]



