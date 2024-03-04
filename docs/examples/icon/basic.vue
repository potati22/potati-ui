<template>
  <div class="icon-box">
    <PotIcon icon-class="play"></PotIcon>
    <PotIcon icon-class="pause"></PotIcon>
    <PotIcon icon-class="add-btn"></PotIcon>
    <PotIcon icon-class="reduce-btn"></PotIcon>
  </div>
</template>

<script setup>
import 'virtual:svg-icons-register'
</script>

<style lang="scss">
.icon-box {
  font-size: 30px;
  color: var(--vp-c-brand-1);
  display: flex;
  .pot-icon {
    margin-right: 20px;
  }
}
</style>
