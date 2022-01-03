import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';


export const config: Config = {
  namespace: 'sl-components',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    // { type: 'dist-custom-elements' },
    { type: 'docs-readme', dependencies: false, footer: '' },
    {
      type: 'www',
      indexHtml: 'index.html',
      copy: [{ src: 'index.html' }],
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      includePaths: [
        './node_modules/'
      ],
      // injectGlobalPaths: [
      //   'src/globals/variables.scss'
      // ]
    }),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 3 versions, not ie < 11, not dead'],
          grid: 'autoplace',
          cascade: false
        })
      ]
    })
  ]
};
