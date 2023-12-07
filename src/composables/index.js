import { onMounted, ref, reactive } from 'vue';

const url = import.meta.env.VITE_BASE_URL;

export function useBooks() {
  const books = ref([]);

  function fetchBooks() {
    fetch(`${url}book`)
      .then(res => res.json())
      .then(json => books.value = json)
  }

  onMounted(() => {
    fetchBooks()
  })

  return {
    books,
  }
}