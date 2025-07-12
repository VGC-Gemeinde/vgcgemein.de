build:
	@cd ui && npm install && npm run build
	@go build -o build/vgcgemein.de-server main.go

watch:
	@gow -e=go,html,js,css,svg run main.go

run:
	@go run main.go

.PHONY: build \
				watch