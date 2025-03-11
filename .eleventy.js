module.exports = function (eleventyConfig) {
  // call functions on eleventyConfig here

  // these files and folders will not be processed by 11ty
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/scripts");

  // return object options in the object starting on the line below
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_dist"
    }
  };
};