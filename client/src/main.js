import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import "./style.css";
import App from "./App.vue";

// --- COMPONENT
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import AddContact from "./components/AddContact.vue";
import EditContact from "./components/EditContact.vue";
import NotFound from "./layout/NotFound.vue";

const routes = [
  { path: "/", component: Contact },
  { path: "/add", component: AddContact },
  { path: `/edit/:id`, component: EditContact },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
