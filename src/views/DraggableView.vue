<template>
  <div style="display: flex">
    <!-- 左侧字段列表 -->
    <ul style="width: 200px; list-style: none; padding: 0">
      <li
        v-for="f in fields"
        :key="f"
        draggable="true"
        @dragstart="
          (e) => {
            e.dataTransfer.setData('text/plain', f)
            e.dataTransfer.effectAllowed = 'copyMove'
          }
        "
        style="padding: 8px; border: 1px solid #ddd; cursor: grab; margin-bottom: 4px"
      >
        {{ f }}
      </li>
    </ul>

    <!-- Canvas 区域 -->
    <div style="position: relative">
      <canvas
        ref="canvasRef"
        width="800"
        height="400"
        style="border: 1px solid #ccc"
        @dragover.prevent="onDragOver"
        @dragleave="onDragLeave"
        @drop="onDrop"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fields = ['价格', '颜色', '产品名称', '数量']
const canvasRef = ref(null)
let ctx = null

// 初始化时就有的一大段文字，模拟已有文档内容
const items = ref([
  { text: '这个商品 ', x: 10, y: 20 },
  { text: ' 是一个非常优秀的产品，', x: 10, y: 50 },
  { text: '它具有高品质和可靠性，', x: 10, y: 80 },
  { text: '现在的市场价格是 ', x: 10, y: 110 },
])

// 用于提示线的坐标
const hint = ref({ x: 0, y: 0, visible: false })

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')

  // 先测量每行的宽度/高度
  ctx.font = '18px sans-serif'
  ctx.textBaseline = 'top'
  items.value = items.value.map((item) => {
    const width = ctx.measureText(item.text).width
    const height = 18
    return { ...item, width, height }
  })

  // 初始绘制
  redraw()
})

// 重绘：清空 + 所有 items + 可选提示线
function redraw() {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  // 画已有文本
  for (const it of items.value) {
    ctx.fillStyle = '#333'
    ctx.fillText(it.text, it.x, it.y)
  }

  // 画提示竖线
  if (hint.value.visible) {
    ctx.save()
    ctx.strokeStyle = 'red'
    ctx.setLineDash([4, 2])
    ctx.beginPath()
    ctx.moveTo(hint.value.x, hint.value.y - 5)
    ctx.lineTo(hint.value.x, hint.value.y + 25)
    ctx.stroke()
    ctx.restore()
  }
}

// 拖拽过程中：计算提示线位置
function onDragOver(e) {
  console.log('onDragOver', e)

  const rect = canvasRef.value.getBoundingClientRect()
  // const mx = e.clientX - rect.left
  const my = e.clientY - rect.top

  // 找到在同一行或最近的一行
  let target = items.value.find((it) => my >= it.y && my <= it.y + it.height)
  if (!target) {
    target = items.value.reduce((prev, curr) =>
      Math.abs(curr.y - my) < Math.abs(prev.y - my) ? curr : prev,
    )
  }

  // 计算提示位置：行尾 + 小间距
  if (target) {
    hint.value.x = target.x + target.width + 5
    hint.value.y = target.y
  } else {
    hint.value.x = 10
    hint.value.y = my
  }
  hint.value.visible = true
  redraw()
}

// 拖离：隐藏提示线
function onDragLeave() {
  hint.value.visible = false
  redraw()
}

// 放下时：正式插入占位符
function onDrop(e) {
  const field = e.dataTransfer.getData('text/plain')
  console.log('e.dataTransfer: ', e.dataTransfer)
  const x = hint.value.x
  const y = hint.value.y
  const text = `{${field}}`

  ctx.fillStyle = '#d9534f'
  ctx.fillText(text, x, y)
  const width = ctx.measureText(text).width
  const height = 18

  items.value.push({ text, x, y, width, height })
  hint.value.visible = false
  redraw()

  console.log(
    '当前占位符:',
    items.value.filter((it) => it.text.startsWith('{')),
  )
}
</script>
