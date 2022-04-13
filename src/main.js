import { createApp } from "vue";
import App from "./App.vue";
import appRouter from "./app.router.ts";
import appStore from "./app.store";
/**
 * 创建应用
 */
const app = createApp(App);

app.use(appRouter);
app.use(appStore);

/**
 * 卸载应用
 */
app.mount("#app");
