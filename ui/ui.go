package ui

import (
	"bytes"
	"embed"
	"net/http"
	"time"
)

//go:embed assets/*
//go:embed dist/*
//go:embed index.html
var Content embed.FS

//go:embed index.html
var Index []byte

func Handle() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.ServeContent(w, r, "index.html", time.Now(), bytes.NewReader(Index))
	}
}
