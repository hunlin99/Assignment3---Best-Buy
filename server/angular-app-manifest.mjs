
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/all-products"
  },
  {
    "renderMode": 2,
    "route": "/category/electronics"
  },
  {
    "renderMode": 2,
    "route": "/category/appliances"
  },
  {
    "renderMode": 2,
    "route": "/category/computers"
  },
  {
    "renderMode": 0,
    "route": "/category/*"
  },
  {
    "renderMode": 2,
    "route": "/product/1"
  },
  {
    "renderMode": 2,
    "route": "/product/2"
  },
  {
    "renderMode": 2,
    "route": "/product/3"
  },
  {
    "renderMode": 0,
    "route": "/product/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5032, hash: 'f1e602890641ee19e526cb187ba4d5d04cd33d7c139d2f14a44090d48bf80620', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '3266c36fad2ee00f3014a9dac690406637188aad0be937c7ce354defad3a0855', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18876, hash: '07a1b14aef09da38f73deb2935770b6ba75bea0e1396155c8e4082155017ca66', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'all-products/index.html': {size: 20192, hash: 'da2b35b022e5bd3b1d11a59ff4ab3f9d16438ad43861411c4b9a0dde848a6ee7', text: () => import('./assets-chunks/all-products_index_html.mjs').then(m => m.default)},
    'category/electronics/index.html': {size: 12930, hash: 'f9efb212680e9f8a50f3a939e78b65577a04e8adc3966db7b15ce8cee89ca8b2', text: () => import('./assets-chunks/category_electronics_index_html.mjs').then(m => m.default)},
    'category/appliances/index.html': {size: 12930, hash: 'f9efb212680e9f8a50f3a939e78b65577a04e8adc3966db7b15ce8cee89ca8b2', text: () => import('./assets-chunks/category_appliances_index_html.mjs').then(m => m.default)},
    'category/computers/index.html': {size: 12930, hash: 'f9efb212680e9f8a50f3a939e78b65577a04e8adc3966db7b15ce8cee89ca8b2', text: () => import('./assets-chunks/category_computers_index_html.mjs').then(m => m.default)},
    'product/1/index.html': {size: 16039, hash: 'd76e3b911e2bb6d92418a13d643885088acb816ecfcf877a6c2e42edb669161c', text: () => import('./assets-chunks/product_1_index_html.mjs').then(m => m.default)},
    'product/2/index.html': {size: 16029, hash: '272285268a0c754413b01fc04f86d095c9db7bf6d356a162b0adee3712f05309', text: () => import('./assets-chunks/product_2_index_html.mjs').then(m => m.default)},
    'product/3/index.html': {size: 16020, hash: '19ba76846fea03d3bb9c867f444e4e516c1c5222ae2fc7b94178123db047b02a', text: () => import('./assets-chunks/product_3_index_html.mjs').then(m => m.default)},
    'styles-DPQ53L3S.css': {size: 230768, hash: 'eeRGZBkJAUs', text: () => import('./assets-chunks/styles-DPQ53L3S_css.mjs').then(m => m.default)}
  },
};
