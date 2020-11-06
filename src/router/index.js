import Vue from 'vue';
import Router from 'vue-router';
import form1 from '@/components/form1/form1';
import form2 from '@/components/form2/form2';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/form1',
}, {
  path: '/form1',
  component: form1,
}, {
  path: '/form2',
  component: form2,
},
];

export default new Router({
  linkActiveClass: 'active',
  routes,
});
