require('./index.html');

import isolatedScroll from '../src';

const el = document.getElementById('always-isolated-scroll');
isolatedScroll(el, false);

const el2 = document.getElementById('isolated-scroll');
isolatedScroll(el2, true);
