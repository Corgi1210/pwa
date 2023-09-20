import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/serviceWorker.js",
        {
          scope: "/",
        }
      );
      if (registration.installing) {
        console.log("Service worker installing"); // 安裝中！
      } else if (registration.waiting) {
        console.log("Service worker installed"); // 安裝成功！
      } else if (registration.active) {
        console.log("Service worker active"); // SW 啟動！
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`); // 註冊失敗
    }
  }
};
registerServiceWorker();
