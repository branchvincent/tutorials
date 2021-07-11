FROM golang:1.16-alpine AS build
WORKDIR /src
COPY . .
RUN CGO_ENABLED=0 go build -o bin/direnv main.go

FROM scratch
COPY --from=build /src/bin/direnv /
ENTRYPOINT ["/direnv"]
CMD ["--help"]
