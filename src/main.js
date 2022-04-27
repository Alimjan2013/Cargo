import { createApp } from "vue";
import App from "./App.vue";
import appRouter from "./app.router.ts";
import appStore from "./app.store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
/**
 * 创建应用
 */
const app = createApp(App);

app.use(appRouter);
app.use(appStore);
app.use(ElementPlus);

/**
 * 卸载应用
 */
app.mount("#app");
