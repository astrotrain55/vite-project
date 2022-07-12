import devPaginator from './components/dev-paginator/dev-paginator.js';
import youtube from './components/youtube/youtube.js';
import { BlockController } from './BlockController.js';
import './assets/styles/style.styl';

const app = document.querySelector<HTMLDivElement>('#app')!;
console.log(app);

BlockController.add(youtube, '.js-youtube');
BlockController.add(devPaginator, '[data-widget="pagination"]');
BlockController.initAll();
