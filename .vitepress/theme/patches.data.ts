import { defineLoader } from "vitepress";

export default defineLoader({
  async load() {
    try {
      // The official PoE2 Patch Notes forum ID
      const forumId = "2212";
      const rssUrl = `https://www.pathofexile.com/forum/view-forum/${forumId}/rss`;

      // We use 'allorigins' - a common, free proxy that helps with CORS and 403s
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Proxy unreachable");

      const json = await response.json();
      const rawXml = json.contents; // The proxy wraps the XML in a 'contents' string

      // Since we don't want to bring back the 'jsdom' error,
      // we'll use a simple Regex to grab Titles and Links from the XML string.
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
      const linkRegex = /<link>(.*?)<\/link>/;

      const patches: any[] = [];
      let match;
      let count = 0;

      while ((match = itemRegex.exec(rawXml)) !== null && count < 5) {
        const itemContent = match[1];
        const title = itemContent.match(titleRegex)?.[1] || "Unknown Patch";
        const link = itemContent.match(linkRegex)?.[1] || "#";

        patches.push({
          title: title.replace("Patch Notes - ", ""), // Clean up the title
          link: link,
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        });
        count++;
      }

      return { patches };
    } catch (e) {
      console.error("PoE2 Stealth Fetch Failed:", e);
      return { patches: [] };
    }
  },
});
