#!/bin/bash

WORKSPACE_DIR=$(cd ..; pwd)
IMAGE_NAME="we-meet"
CONTAINER_NAME="we-meet"

case "$1" in
"build")
  docker build -t ${IMAGE_NAME} .
  ;;
"start")
  docker run -d -it -v ${WORKSPACE_DIR}:/data/WeMeet -p 8001:8001 --name ${CONTAINER_NAME} ${IMAGE_NAME} /bin/bash

  docker start ${CONTAINER_NAME}
  ;;
"attach")
  docker attach ${CONTAINER_NAME}
  ;;
"stop")
  docker stop $2
  ;;
"stop_all")
  docker stop $(docker ps -a -q)
  ;;
"clean_containers")
  docker rm $(docker ps -a -q)
  ;;
"clean_images")
  docker rmi $(docker images -a |grep -v centos |awk 'NR>1{print $3}')
  ;;
"clean_all")
  echo "clean all"
  ;;
esac
