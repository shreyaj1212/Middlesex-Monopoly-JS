const ASSET_NAMES = [
  'bap.jpg',
  'batemans.jpg',
  'chapel.jpg',
  'eliot.jpg',
  'hat.svg',
  'rcc.jpg',
];

const assets = {};

const downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

function downloadAsset(assetName) {
  return new Promise(resolve => {
    const asset = new Image();
    asset.onload = () => {
      console.log(`Downloaded ${assetName}`);
      assets[assetName] = asset;
      resolve();
    };
    asset.src = `/assets/${assetName}`;
  });
}

const downloadAssets = () => downloadPromise;

module.exports = downloadAssets;

const getAsset = assetName => assets[assetName];

module.exports = getAsset;
