FROM node:14-buster

RUN sed -i 's#http://deb.debian.org#http://mirrors.aliyun.com#g' /etc/apt/sources.list
RUN sed -i 's#http://security.debian.org#http://mirrors.aliyun.com#g' /etc/apt/sources.list

RUN apt update
RUN apt-get update \
    && apt-get install -qq build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

ADD . /workspace
RUN cd /workspace && yarn config set registry https://registry.npmmirror.com && yarn install


CMD [ "yarn", "serve" ]
EXPOSE 8080
