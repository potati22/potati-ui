<template>
  <svg class="pot-icon">
    <!--use元素在 SVG 文档内取得目标节点，并在别的地方复制它们-->
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { IconProps } from './icon'
import { computed } from 'vue'

defineOptions({
  name: 'PotIcon',
})

const props = withDefaults(defineProps<IconProps>(), {
  iconClass: '',
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
</script>
