<template>
  <div class="flex items-center justify-center h-screen bg-white">
    <div class="bg-[#C9AC8C] h-screen w-1/2 flex justify-center items-center">
      <img src="../assets/images/login.png">
    </div>

    <form class="w-1/2 p-4 flex flex-col items-center" @submit.prevent="onLogin">
      <div class="w-[60%]">
        <h2 class="text-[36px] mb-5 font-sans font-bold">Sign in</h2>
        <!-- <p>Do not you have an account? <div>Sign up</div></p> -->
        <div class="mb-[17px]">
          <Input id="email" placeholder="Email" v-model="email" />
        </div>
        <div class="mb-[34px]">
          <Input id="password" placeholder="Password" type="password" v-model="password" />
        </div>
        <div class="text-center">
          <Button type="submit" class="btn-primary">
            Next step
          </Button>
        </div>
      </div>
    </form>
  </div>

</template>

<script setup>
  import { useLogin } from "../composables/login"
  const { onLogin, email, password } = useLogin()
  import Button from "../components/base/base-button.vue";
  import Input from "../components/base/base-input.vue";
</script>

<style scoped></style>
