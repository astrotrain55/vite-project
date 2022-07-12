import SmoothScroll from 'smooth-scroll';
import Ajax from './axios';
import * as jq from './dom.ts';

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

export { Ajax, jq };
