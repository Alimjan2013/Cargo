import { createApp } from "vue";
import App from "./App.vue";
import appRouter from "./app.router.ts";
const app = createApp(App);

app.mount("#app");

app.use(appRouter);
