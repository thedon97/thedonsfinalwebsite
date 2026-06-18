const http = require("http");
const fs = require("fs");
const path = require("path");
const apiRouter = require("./api/index");

const root = path.resolve(__dirname);
const preferredPort = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });
  res.end(body);
}

function resolveFile(req) {
  let pathname = decodeURIComponent(req.url.split("?")[0]);
  if (pathname === "/") pathname = "/index.html";
  const file = path.resolve(path.join(root, pathname));
  if (!file.startsWith(root + path.sep) && file !== root) return { forbidden: true };
  return { file };
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) {
    apiRouter(req, res);
    return;
  }
  const resolved = resolveFile(req);
  if (resolved.forbidden) return send(res, 403, "Forbidden");
  fs.readFile(resolved.file, (error, data) => {
    if (!error) return send(res, 200, data, types[path.extname(resolved.file).toLowerCase()] || "application/octet-stream");
    fs.readFile(path.join(root, "index.html"), (indexError, indexData) => {
      if (indexError) return send(res, 404, "Not found");
      send(res, 200, indexData, types[".html"]);
    });
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && preferredPort !== 0) {
    server.listen(0, "127.0.0.1");
    return;
  }
  throw error;
});

server.listen(preferredPort, "127.0.0.1", () => {
  const address = server.address();
  console.log(`Preview server running at http://127.0.0.1:${address.port}`);
});
