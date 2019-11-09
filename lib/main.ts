import * as components from './components';
import { Vue as _Vue } from 'vue/types/vue'

let installed = false;
function install(Vue: typeof _Vue) {
  if (installed) return;
  installed = true;
  Object.keys(components).forEach((componentName) => {
    // @ts-ignore
    Vue.component(componentName, components[componentName]);
  });
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // @ts-ignore
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
export * from './components';
