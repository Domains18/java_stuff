FROM ubuntu:latest
LABEL authors="alpha"

ENTRYPOINT ["top", "-b"]