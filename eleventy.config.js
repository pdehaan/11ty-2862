const EleventyFetch = require("@11ty/eleventy-fetch");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {

  eleventyConfig.addAsyncShortcode("remote_include", async function (uriPath) {
    const DOMAIN = "https://raw.githubusercontent.com/stride3d/stride/"
    if (uriPath.startsWith("/")) {
      // Make sure the `uriPath` doesn't start with `/` otherwise it will remove the GitHub repo org/name from the path.
      uriPath = uriPath.slice(1);
    }
    const sampleUrl = new URL(uriPath, DOMAIN).href;
    const sample = await EleventyFetch(sampleUrl, {
      duration: "1d",
      type: "cs"
    });

    return sample;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
