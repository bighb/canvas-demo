<template>
  <div style="position: relative">
    <canvas ref="canvasRef" width="800" height="400" @click="handleCanvasClick" />

    <!-- 真正的文字输入框 -->
    <input
      v-if="editing"
      v-model="text"
      ref="inputRef"
      :style="inputStyle"
      @blur="commitText"
      @keydown.enter.prevent="commitText"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const canvasRef = ref(null)
const inputRef = ref(null)
let ctx = null

const editing = ref(false)
const text = ref('')
const inputStyle = ref({
  position: 'absolute',
  top: '0px',
  left: '0px',
  fontSize: '16px',
  border: '1px solid #ccc',
  padding: '2px',
  outline: 'none',
})

const pos = ref({ x: 0, y: 0 })

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
})

function handleCanvasClick(e) {
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // 记录坐标，用于绘制
  pos.value = { x, y }

  // 设置 input 位置 + 显示
  inputStyle.value.left = `${x}px`
  inputStyle.value.top = `${y}px`
  text.value = ''
  editing.value = true

  nextTick(() => {
    inputRef.value.focus()
  })
}

function commitText() {
  if (text.value.trim()) {
    ctx.font = '16px sans-serif'
    ctx.fillStyle = '#333'
    ctx.fillText(text.value, pos.value.x, pos.value.y)
  }
  editing.value = false
}
</script>
