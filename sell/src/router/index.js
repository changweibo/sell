import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import header from '@/components/header/header';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

import '@/common/stylus/index.styl';

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  // 改变路由激活是的class名称
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});



