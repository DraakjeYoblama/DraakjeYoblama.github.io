const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // call functions on eleventyConfig here

  // add support for yaml data files
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // these files and folders will not be processed by 11ty
  // more info: https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/scripts");

  // order the navbar 
  eleventyConfig.addCollection("NavbarSorted", collection => {
    const NavbarSorted = collection.getFilteredByTag("navbar")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return NavbarSorted;
  });

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