import _ from 'lodash';
import Vue from 'vue';

const breakpoints = Vue.observable({
  screen: {},
});

function onResize() {
  const style = getComputedStyle(document.body);
  const xs = style.getPropertyValue('--bs-breakpoint-xs').replace('px', '');
  const sm = style.getPropertyValue('--bs-breakpoint-sm').replace('px', '');
  const md = style.getPropertyValue('--bs-breakpoint-md').replace('px', '');
  const lg = style.getPropertyValue('--bs-breakpoint-lg').replace('px', '');
  const xl = style.getPropertyValue('--bs-breakpoint-xl').replace('px', '');
  const xxl = 1600;
  const width = window.innerWidth;

  breakpoints.screen = {
    xs: width >= xs && width < sm,
    sm: width >= sm && width < md,
    md: width >= md && width < lg,
    lg: width >= lg && width < xl,
    xl: width >= xl && width < xxl,
    xxl: width >= xxl,
    up: {
      xs: width >= xs,
      sm: width >= sm,
      md: width >= md,
      lg: width >= lg,
      xl: width >= xl,
    },
    down: {
      xs: width <= xs,
      sm: width <= sm,
      md: width <= md,
      lg: width <= lg,
      xl: width <= xl,
      xxl: width <= xxl,
    },
  };
}

window.onresize = _.debounce(onResize, 100);

export { breakpoints, onResize };
