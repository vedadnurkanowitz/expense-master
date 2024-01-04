import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(Toast, {
  transition: "Vue-Toastification__fade",
});
app.mount("#app");
