<template>
  <div
    v-if="label"
    class="mb-2"
  >
    <label :for="id">
      {{ label }}
    </label>
  </div>
  <div>
    <input
      class="w-full px-[29px] py-[17px] placeholder-placeholders outline-0 rounded-xl border-main border-[1px]"
      :id="id"
      :required="required"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    required: true,
  },
});
</script>
