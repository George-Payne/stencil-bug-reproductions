import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'custom-target-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    reloadStrategy: 'pageReload',
    openBrowser: false,
  },
};
