package main

import (
	"fmt"
	"log/slog"
	"net/http"
	"os"

	"github.com/VGC-Gemeinde/vgcgemein.de/ui"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	mux := http.NewServeMux()
	port := 8080
	addr := fmt.Sprintf(":%d", port)

	mux.Handle("GET /", http.FileServerFS(ui.Content))
	mux.Handle("GET /{any}", ui.Handle())

	logger.Info("starting server...", "addr", addr)
	err := http.ListenAndServe(addr, mux)
	if err != nil {
		logger.Error("failed to start server", "error", err)
		os.Exit(1)
	}
}
