FROM openjdk:8-jre-alpine

ARG SERVICE_NAME=service
ENV NAME ${SERVICE_NAME}

ENV LANG en_US.UTF-8

RUN echo "http://mirrors.aliyun.com/alpine/v3.6/main" > /etc/apk/repositories \
    && echo "http://mirrors.aliyun.com/alpine/v3.6/community" >> /etc/apk/repositories \
    && apk add --no-cache tzdata ttf-dejavu fontconfig \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

ENV JAVA_OPTS='-Xms512m -Xmx512m -Xss512k'

COPY ${NAME} /${NAME}
CMD java $JAVA_OPTS -jar $NAME