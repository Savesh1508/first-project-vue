import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export function useBookDetails(store) {
  const bookId = ref(null);
  const route = useRoute();

  onMounted(() => {
    bookId.value = route.params.id;

    if (bookId.value) {
      store.dispatch('fetchBookById', bookId.value);
    }
  });

  return {
    bookId,
  };
}
