const fs = require("fs");

// get all the files in the directory ../app/components

const targetPath = "../app/components";
const distPath = "../src/config/sidebar.ts";
const files = fs.readdirSync(targetPath);

const sidebar = {
  introduction: {
    title: "Getting Started",
    navigator: [
      {
        title: "Introduction",
        path: "components",
      },
    ],
  },
  components: {
    title: "Components",
    navigator: [],
  },
};
sidebar.components.navigator = []; // Initialize navigator as an empty array
files.forEach((file) => {
  const filePath = `${targetPath}/${file}`;
  const stat = fs.statSync(filePath);

  if (stat.isDirectory()) {
    sidebar.components.navigator.push({
      title: `${file.split("-").join(" ")}`,
      path: `components/${file}`,
    });
  }
});

fs.writeFileSync(
  distPath,
  `const sidebar = ${JSON.stringify(
    sidebar,
    null,
    2
  )};\n\nexport default sidebar;`
);

console.log(sidebar.components.navigator);
