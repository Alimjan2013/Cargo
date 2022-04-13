import { createApp } from "vue";
import App from "./App.vue";
import appRouter from "./app.router.ts";
const app = createApp(App);
app.use(appRouter);
app.mount("#app");
