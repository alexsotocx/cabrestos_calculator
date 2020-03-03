import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  es: {
    supportLength: "Largo de la antena(m)",
    centerLineLength: "Largo del cabresto central(m)",
    separation: "Separación entre cabrestos(cm)",
    length: "Longitud(m)"
  },
  pt: {
    supportLength: "Largura da antena(m)",
    centerLineLength: "Longitude do cabresto central(m)",
    separation: "Separação de cabresto(cm)",
    length: "Longitude(m)"
  }
};
const i18n = new VueI18n({
  messages,
  locale: "es",
  fallbackLocale: "es"
});

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
