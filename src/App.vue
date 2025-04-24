<script setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref(null)
let ctx = null

const rect = { x: 100, y: 100, width: 200, height: 60, color: '#67c23a' }
let dragging = false
let offsetX = 0
let offsetY = 0

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  draw()
})

function draw() {
  ctx.clearRect(0, 0, 800, 400)
  ctx.fillStyle = rect.color
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
}

function getMouse(e) {
  const box = canvasRef.value.getBoundingClientRect()
  return {
    x: e.clientX - box.left,
    y: e.clientY - box.top,
  }
}

function onMouseDown(e) {
  const { x, y } = getMouse(e)
  if (isPointInRect(x, y, rect)) {
    dragging = true
    offsetX = x - rect.x
    offsetY = y - rect.y
  }
}

function onMouseMove(e) {
  if (!dragging) return
  const { x, y } = getMouse(e)
  rect.x = x - offsetX
  rect.y = y - offsetY
  draw()
}

function onMouseUp() {
  dragging = false
}

function isPointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.width && py >= r.y && py <= r.y + r.height
}
</script>

<template>
  <canvas
    ref="canvasRef"
    width="800"
    height="400"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
  />
</template>
