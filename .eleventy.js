const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copy for favicons
  eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "favicon.png": "favicon.png" });

  // Passthrough copy for simple.min.css
  eleventyConfig.addPassthroughCopy({ "assets/css/simple.min.css": "assets/css/simple.min.css" });

  // Collection: all short links
  eleventyConfig.addCollection("shortlinks", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./urls/*.md");
  });

  // Generate SVG QR inside each shortlink folder
  eleventyConfig.addNunjucksAsyncShortcode("qrCodeImg", async function(shortUrl, slug) {
    const outputDir = path.join("_site", slug);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const filename = `qr.svg`;
    const filePath = path.join(outputDir, filename);
    // Create SVG string
    const svg = await QRCode.toString(shortUrl, { type: "svg" });
    fs.writeFileSync(filePath, svg, "utf8");
    // Return the correct <img> reference
    return `<img src="/${slug}/qr.svg" alt="QR code for ${slug}" loading="lazy" width="150" height="150" />`;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};
