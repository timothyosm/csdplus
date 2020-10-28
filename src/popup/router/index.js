import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);
Vue.use(VueQuillEditor);
locale.use(lang);

Vue.use(ElementUI);
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueRouter);

export default new VueRouter({
    routes,
});

Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    },
    update: function(el) {
        Vue.nextTick(function() {
            el.focus();
        })
    }
})