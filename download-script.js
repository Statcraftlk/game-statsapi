const fs = require("fs");
const axios = require("axios");
const brawlers = require("./brawl-stars/brawl_stars_brawlers.json");
async function downloadImages(baseUrl, outputFolder) {
  // Create the output folder if it doesn't exist
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  // Iterate through the image names
  for (const brawler of brawlers.items) {
    try {
      // Construct the image URL
      const imageUrl = `${baseUrl}/${brawler.name
        .charAt(0)
        .toUpperCase()}${brawler.name.slice(1).toLowerCase()}.png`;

      // Send a GET request to download the image
      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });

      // Save the image to the output folder
      fs.writeFileSync(
        `${outputFolder}/${brawler.name.charAt(0).toUpperCase()}${brawler.name
          .slice(1)
          .toLowerCase()}.png`,
        response.data
      );
      console.log(
        `Downloaded ${brawler.name.charAt(0).toUpperCase()}${brawler.name
          .slice(1)
          .toLowerCase()}.png`
      ); // Log the success
    } catch (error) {
      console.error(
        `Failed to download ${brawler.name
          .charAt(0)
          .toUpperCase()}${brawler.name.slice(1).toLowerCase()}.png: ${
          error.message
        }`
      ); // Log the error
    }
  }
}

const baseUrl = ""; // Base URL (e.g. https://example.com/images)
const outputFolder = "./brawl-stars/brawler-images"; // Output folder to save the images

downloadImages(baseUrl, outputFolder); // Call the function to download the images
