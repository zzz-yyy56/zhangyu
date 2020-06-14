import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/layout/index',
      routes:[
        {
          path:'/',
          redirect:'/course'
        },
        {
          path:'/about',
          component:'./About'
        },
        {
          path:'/course',
          component:'./Course'
        }
      ]
    },
  ],
  sass:{
    implementation: require('node-sass'),
  },
  cssModulesTypescriptLoader:{}
});
