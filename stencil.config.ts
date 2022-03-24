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
    {
      type: 'custom',
      name: 'custom output target',
      async generator() {
        console.log('-----> Running custom output target <----- ');
      },
    },
    {
      type: 'docs-custom',
      async generator() {
        console.log('-----> Running docs custom output target <----- ');
      },
    },
  ],
};
