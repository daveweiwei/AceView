import Alert from './alert/index';

const components = [
  Alert
];

const install = function (Vue, opts = {}) {
  console.log(opts)
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // Vue.prototype.$loading = Loading.service;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.1',
  install,
  Alert
}