const svgSpriteLoader = require('../svgSpriteLoader');

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    },
    svgSpriteLoader,
  );

  const fileLoader = config.module.rules.find(r => r.loader && r.loader.includes('file-loader'));
  fileLoader.exclude = /src\/img\/icons/;

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
