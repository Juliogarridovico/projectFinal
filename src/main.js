import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(router).mount("#app");

