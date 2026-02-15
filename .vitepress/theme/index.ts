import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import ComingSoon from "./components/ComingSoon.vue";
import LinkCard from "./components/LinkCard.vue";
import PdfDoc from "./components/PdfDoc.vue";
import VideoCard from "./components/VideoCard.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // This specifically overrides the 404 page content
      "not-found": () => h(ComingSoon),
    });
  },
  enhanceApp({ app }) {
    app.component("LinkCard", LinkCard);
    app.component("PdfDoc", PdfDoc);
    app.component("VideoCard", VideoCard);
  },
};
