import { createApp } from 'vue';
import { setup } from 'twind/shim';
import { tw } from 'twind';
import config from '../tailwind.config';
import App from './app.vue';

setup(config);

const app = createApp(App);

app.directive('tw', {
  beforeMount(el, binding) {
    el.classList.add(tw(binding.value))
  },
  beforeUpdate(el, binding) {
    el.classList.remove(tw(binding.oldValue))
    el.classList.add(tw(binding.value))
  },
});

app.mount('#app');
