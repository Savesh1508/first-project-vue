<template>
  <Navbar />
  <div class="max-w-[1400px] container px-[25px] text-white">
    <!-- <section class="mt-[50px] flex gap-[35px]">
      <img :src="currentBook.image" class="w-2/5 h-fit">
      <div class="w-3/5">
        <h2 class="main_font_style text-[48px] leading-[52px] mb-[3px]">{{ currentBook.name }}</h2>
        <div class="flex items-center mb-[20px]">
          <div class="main_font_style text-[16px] border-r-[1px] w-fit pr-3 border-main mr-3">
            {{ currentBook.author.name }}
          </div>
          <i class='bx bxs-star  mr-2 text-white hover:text-yellow-500'></i>
          <div class="text-basic">{{ currentBook.rating }}</div>
        </div>
        <div class="mb-[30px]">
          <div class="h-[40px] flex text-[20px] text-basic">Sahifalar soni: <div class="ml-4 text-white">{{ currentBook.pages }}</div></div>
          <div class="h-[40px] flex text-[20px] text-basic">Chop etilgan: <div class="ml-4 text-white">{{ currentBook.year }}</div></div>
          <div class="h-[40px] flex text-[20px] text-basic">Janri: <div class="ml-4 text-white">{{ currentBook.category.name }}</div></div>
        </div>
        <div class="flex text-[16px] items-center mb-[28px]">
          <div class="main_font_style w-[300px] pr-2">
            To'liq ma'lumot
          </div>
          <i class='bx bx-down-arrow-alt text-white text-[28px] mr-5'></i>
          <div class="h-[2px] w-full bg-[#C9AC8C99]"></div>
        </div>
        <div class="text-[#FFFFFFCC]">
          {{ currentBook.description }}
        </div>
      </div>
    </section> -->
    DETAILS
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue';
  import { useStore } from 'vuex'
  import { computed } from "vue";
  import { useBookDetails } from "../composables/book"

  const store = useStore()
  const { bookId } = useBookDetails(store);
  const currentBook = computed(() => store.getters.currentBook)
</script>

<style scoped></style>
