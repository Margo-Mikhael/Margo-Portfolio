import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  // Uncomment (and add the R2 binding in wrangler.jsonc) to persist ISR output:
  // incrementalCache: r2IncrementalCache,
});
