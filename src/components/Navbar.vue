<template>
    <div class="border-b bg-[#191919] border-[#FFFFFF19]">
      <nav
        class="overflow-hidden py-4 mx-auto max-w-[1400px] flex items-center text-white justify-between h-[80px] max-h-[80px] px-[15px]"
      >
        <router-link to="/" class="logo main_font_style mx-4">BADIIY</router-link>
        <div class="w-[60%] flex items-center justify-between">
          <router-link to="/" class="navbar_item">Home</router-link>
          <router-link to="/nasr" class="navbar_item">Nasr</router-link>
          <router-link to="/nazm" class="navbar_item">Nazm</router-link>
          <router-link to="/posts" class="navbar_item">Maqolalar</router-link>
          <router-link to="/forum" class="navbar_item">Forum</router-link>
          <Button
            class="btn-secondary rounded-[15px] ml-[10%] hover:text-white"
            @click="logout"
            >Logout</Button
          >
        </div>
      </nav>
    </div>
</template>

<script setup>
import Button from "./base/base-button.vue";
import { useStore } from "vuex";

const store = useStore();

function logout() {
  store.commit("LOGOUT");
}
</script>

<style scoped>
  .router-link-active {
    border-bottom: 3px solid #c9ac8c;
    transition: all 0.4s;
    color: #c9ac8c;
  }

  .logo {
    border: none;
  }
</style>
