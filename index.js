import StyleDictionary from "style-dictionary-utils";

// Define configuration
const config = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      buildPath: 'build/',
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'dimension/pixelToRem'],
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true, // Enable alias functionality
          },
        },{
          destination: '_colors.css',
          format: 'css/variables',
          filter: {
            attributes:{
              category: 'Colors'
            }
          },
          options: {
            outputReferences: true, // Enable alias functionality
          },
        },{
          destination: '_spacing.css',
          format: 'css/variables',
          filter: {
            attributes:{
              category: 'Spacing'
            }
          },
          options: {
            outputReferences: true, // Enable alias functionality
          },
        },
      ],
    },
  }
}

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();