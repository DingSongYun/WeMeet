#!/bin/bash

WORKSPACE_DIR=$(cd ..; pwd)
IMAGE_NAME="we-meet"
CONTAINER_NAME="we-meet"

function clean_containers() {
  docker rm $(docker ps -a -q)
}

function clean_images() {
  docker rmi $(docker images -a |grep -v centos |awk 'NR>1{print $3}')
}

case "$1" in
"build")
  docker build -t ${IMAGE_NAME} .
  ;;
"start")
  docker run -d -it -v ${WORKSPACE_DIR}:/data/WeMeet -p 8001:8001 -p 20022:22 --name ${CONTAINER_NAME} ${IMAGE_NAME} /bin/bash

  docker start ${CONTAINER_NAME}
  ;;
"attach")
  docker attach ${CONTAINER_NAME}
  ;;
"stop")
  if [ $# -ge 3 ];
  then
    docker stop $2
  else
    docker stop $(docker ps -a -q)
  fi
  ;;
"clean_containers")
    clean_containers
  ;;
"clean_images")
    clean_images
  ;;
"clean_all")
    clean_containers
    clean_images
  ;;
esac
