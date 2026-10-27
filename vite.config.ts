// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static builds emit a serverless-free site (prerendered HTML + assets in dist/client)
// for GitHub Pages. Default builds are unchanged: nitro still targets Cloudflare.
//
//   STATIC_BUILD=true npm run build                              → served from /
//   STATIC_BUILD=true BASE_PATH=/silvanus-portfolio/ npm run build → served from a subpath
const isStaticBuild = process.env["STATIC_BUILD"] === "true";
const basePath = process.env["BASE_PATH"];

function hasFileExtension(path: string): boolean {
  return /\.[a-z0-9]+$/i.test(path);
}

export default defineConfig({
  ...(isStaticBuild ? { nitro: false as const } : {}),
  ...(basePath ? { vite: { base: basePath } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender "/" into dist/client/index.html so the site needs no server at runtime.
    // The link crawler also picks up asset hrefs (resume.pdf, project videos) — those are
    // static files, not routes, so they are never prerendered.
    ...(isStaticBuild
      ? {
          prerender: {
            enabled: true,
            filter: (page: { path: string }) => !hasFileExtension(page.path),
          },
        }
      : {}),
  },
});
