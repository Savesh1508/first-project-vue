import { computed } from 'vue'
import { useStore } from "vuex";

export function useHome(){
  const store = useStore();
  const loading = computed(() => store.state.loading);
  const books = computed(() => store.getters.books);

  return {
    books,
    loading
  }
}