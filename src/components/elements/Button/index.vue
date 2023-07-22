<script setup lang="ts">
interface Props {
  label?: string
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  primary: true,
  size: 'medium',
  backgroundColor: undefined,
})
const { label, primary, size, backgroundColor } = toRefs(props)

const classes = computed(() => {
  return {
    'px-4 py-2 rounded-lg': true,
    'text-white bg-blue-500': primary.value,
    'text-white bg-gray-500': !primary.value,
    'px-2.5 py-1.5 text-xs font-medium': size.value === 'small',
    'px-4 py-2 text-sm font-medium': size.value === 'medium',
    'px-6 py-3 text-base font-medium': size.value === 'large',
  }
})

const onClick = (): void => {
}

const style = computed(() => {
  return {
    backgroundColor: backgroundColor.value,
  }
})
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">{{ label }}</button>
</template>
