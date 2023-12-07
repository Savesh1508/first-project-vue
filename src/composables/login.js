import { ref } from "vue";
import { useStore } from "vuex";
import { errorToast } from "../utils/toast"

export function useLogin() {
  const store = useStore();
  const email = ref("");
  const password = ref("");

  async function onLogin() {
    if (!email.value.length && !password.value.length) {
      errorToast('Please enter corrent values', { hideProgressBar: true })
      return;
    }
    await store.dispatch("login", {
      email: email.value,
      password: password.value,
    });
  }

  return {
    onLogin,
    email,
    password
  }
}
