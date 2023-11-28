'use strict'

// import { consoleInfo, isWebp() } from './config/functions.js';
// import { hasErrors } from './modules/forms.js';
// import { initSpoiler, initDdropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
// import { initSliders } from './modules/sliders.js';
// import { initHeader } from './modules/header.js';
// import { initModals, openModalIf } from './modules/modals.js';
// import { useDynamicAdapt } from './modules/dynamicAdapt.js';

import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import Ellipsis from 'ellipsis.js';
// import Choices from 'choices.js';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import noUiSlider from 'nouislider';
// import MicroModal from 'micromodal';
import "./modules/topTopTrigger.js";
import "./modules/header.js";
import "./modules/spoilers.js";
import "./modules/sliders.js";
import "./modules/gsap.js";

function app() {
  AOS.init({
    once: true, 
  });
}

document.addEventListener('DOMContentLoaded', app);
