package main

import (
	"embed"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed all:dist
var embeddedFrontend embed.FS

func NewSPAHandler() http.Handler {
	sub, err := fs.Sub(embeddedFrontend, "dist")
	if err != nil {
		return http.NotFoundHandler()
	}
	fileServer := http.FileServer(http.FS(sub))

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Jangan layani rute API di SPA handler
		if strings.HasPrefix(r.URL.Path, "/api/") {
			http.NotFound(w, r)
			return
		}

		path := strings.TrimPrefix(r.URL.Path, "/")
		if path == "" {
			fileServer.ServeHTTP(w, r)
			return
		}

		// Cek apakah file aset statis ada di embedded filesystem
		f, err := sub.Open(path)
		if err != nil {
			// Review Focus 5: SPA fallback ke index.html untuk rute client-side (misal /chat, /docs)
			r.URL.Path = "/"
		} else {
			_ = f.Close()
		}

		fileServer.ServeHTTP(w, r)
	})
}
