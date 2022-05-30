import { app } from "../../app/app";
import { createApp } from "vue";
import Internal from "./Internal.vue";


app.directive("internal", () => ({
  template: '<internal-vue></internal-vue>',
  controller: ($element) => {
    createApp(Internal).mount($element.find("internal-vue")[0])
  }
}))

