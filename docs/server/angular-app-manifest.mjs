
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7375, hash: '2e4afcb1cb95143f70a63d586b29b37baed5de040ebb34b5d59d5c5902de4c3c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2316, hash: '508a04174daee9c5a04728ee0eb7e5ce1aa55a88601681a571017d5bc70c08d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CPZ2QVF3.css': {size: 304671, hash: 'jf5rou96KF8', text: () => import('./assets-chunks/styles-CPZ2QVF3_css.mjs').then(m => m.default)}
  },
};
