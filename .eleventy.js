module.exports = function(eleventyConfig) {
    // This tells Eleventy to copy the assets folder to the output folder
    eleventyConfig.addPassthroughCopy("assets");
};