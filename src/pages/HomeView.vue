<script setup>
import Navbar from '../components/Navbar.vue';

import Input from '../components/base/base-input.vue';
import Button from '../components/base/base-button.vue';

import { useHome } from "../composables/home"
import { ref, computed } from "vue";

import Loading from '../components/Loading.vue';

const { loading, books } = useHome()
const selectedCategory = ref('')
const searchText = ref('');

const filteredBooks = computed(() => {
  const search = searchText.value.toLowerCase();
  return books.value.filter((book) =>
    book.name.toLowerCase().includes(search) ||
    book.author.name.toLowerCase().includes(search) ||
    book.category.name.toLowerCase().includes(search)
  );
});

</script>

<template>
  <Navbar />
  <div class="max-w-[1400px] container px-[25px] h-fit">
    <section class="relative z-0">
      <div>
        <img class="w-full pt-[55px]" src="../assets/images/home_header.png">
      </div>

      <div class="shadow-2xl relative mt-[-65px] bg-[#191919] mx-[55px] rounded-[16px] py-[50px] px-[30px] mb-[30px]">
        <div class="flex-col">
          <h2 class="main_font_style mb-[18px] text-center text-[31px]">Qidirish</h2>
          <form @submit.prevent="" class="flex justify-center">
            <input
              v-model="searchText"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              class="w-[65%] bg-[#404040] px-[29px] py-[17px] placeholder-[#FFFFFF4D] outline-0 rounded-[15px] mr-[15px] text-white"
            />
            <Button
              class="btn-secondary rounded-[15px] flex items-center justify-center hover:text-white"
            >
              <i class='bx bx-search-alt mr-1 mt-1 text-[28px]'></i>
              Izlash
            </Button>
          </form>
        </div>
      </div>
    </section>
    <section class="mb-10">
      <h2 class="main_font_style text-center mb-[10px] text-[31px]">Asosiy kategoriyalar</h2>
      <div class="gap-[25px] text-basic leading-[20px] text-[20px] flex items-center justify-center">
        <div @click="selectedCategory = $event.target.innerHTML" class="category_link">Temuriylar davri</div>
        <div @click="selectedCategory = $event.target.innerHTML" class="category_link">Jadid adabiyoti</div>
        <div @click="selectedCategory = $event.target.innerHTML" class="category_link">Sovet davri</div>
        <div @click="selectedCategory = $event.target.innerHTML" class="category_link">Mustaqillik davri</div>
      </div>
    </section>
    <section>
      <div class="text-white">
        <div v-if="loading" class="flex justify-center items-center">
          <Loading />
        </div>
        <div v-else class=" flex justify-center flex-wrap">
            <div v-for="book of filteredBooks" :key="book.id" class="h-[400px]">
              <router-link :to="{ name: 'BookDetails', params: { id: book.id } }">
                <div v-if="!selectedCategory.length || selectedCategory == book.category.name" class="w-[190px] cursor-pointer mx-[15px] mb-[30px]">
                  <img :src="book.image" class="w-full h-[280px] rounded-[15px] mb-3">
                  <h2 class="main_font_style leading-[28px] mb-[2px]">{{ book.name }}</h2>
                  <a class="text-basic text-[15px] mb-[2px] hover:text-white">{{ book.author.name }}</a>
                  <div class="text-[15px] flex items-center hover:text-white">
                    <i class='bx bxs-star  mr-2'></i>
                    <div class="text-basic">{{ book.rating }}</div>
                  </div>
                </div>
              </router-link>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>


