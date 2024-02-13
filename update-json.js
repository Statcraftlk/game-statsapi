const fs = require("fs");
const path = require("path");

function updateJsonWithImageUrls(
  inputJsonPath,
  imageDir,
  baseUrl,
  outputJsonPath
) {
  // Read the JSON file
  const data = fs.readFileSync(inputJsonPath);
  const items = JSON.parse(data);

  // Get a list of image files in the image directory
  const imageFiles = fs.readdirSync(imageDir);

  // Iterate through the items
  for (const item of items.items) {
    // Check if an image file with the same name exists
    const imageName = `${item.name.charAt(0).toUpperCase()}${item.name
      .slice(1)
      .toLowerCase()}.png`;
    if (imageFiles.includes(imageName)) {
      // Construct the image URL
      const imageUrl = `${baseUrl}/${imageName}`;

      // Add the imageUrl to the item object
      item.imageUrl = imageUrl;
    }
  }

  // Write the updated items array back to the JSON file
  fs.writeFileSync(outputJsonPath, JSON.stringify(items, null, 2));
}

// Usage
updateJsonWithImageUrls(
  "./brawl-stars/brawl_stars_brawlers.json",
  "./brawl-stars/brawler-images",
  "https://pixelcrux.com/Brawl_Stars/Images/Brawlers/Med",
  "brawlers.json"
);
