<template>
  <div class="container">
    <!-- 工具栏 -->
    <div class="menu" editor-component="menu">
      <div class="menu-item">
        <div class="menu-item__undo">
          <i></i>
        </div>
        <div class="menu-item__redo">
          <i></i>
        </div>
        <div class="menu-item__painter" title="格式刷(双击可连续使用)">
          <i></i>
        </div>
        <div class="menu-item__format" title="清除格式">
          <i></i>
        </div>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item">
        <div class="menu-item__font">
          <span class="select" title="字体">微软雅黑</span>
          <div class="options">
            <ul>
              <li data-family="Microsoft YaHei" style="font-family: 'Microsoft YaHei'">微软雅黑</li>
              <li data-family="华文宋体" style="font-family: '华文宋体'">华文宋体</li>
              <li data-family="华文黑体" style="font-family: '华文黑体'">华文黑体</li>
              <li data-family="华文仿宋" style="font-family: '华文仿宋'">华文仿宋</li>
              <li data-family="华文楷体" style="font-family: '华文楷体'">华文楷体</li>
              <li data-family="华文琥珀" style="font-family: '华文琥珀'">华文琥珀</li>
              <li data-family="华文楷体" style="font-family: '华文楷体'">华文楷体</li>
              <li data-family="华文隶书" style="font-family: '华文隶书'">华文隶书</li>
              <li data-family="华文新魏" style="font-family: '华文新魏'">华文新魏</li>
              <li data-family="华文行楷" style="font-family: '华文行楷'">华文行楷</li>
              <li data-family="华文中宋" style="font-family: '华文中宋'">华文中宋</li>
              <li data-family="华文彩云" style="font-family: '华文彩云'">华文彩云</li>
              <li data-family="Arial" style="font-family: 'Arial'">Arial</li>
              <li data-family="Segoe UI" style="font-family: 'Segoe UI'">Segoe UI</li>
              <li data-family="Ink Free" style="font-family: 'Ink Free'">Ink Free</li>
              <li data-family="Fantasy" style="font-family: 'Fantasy'">Fantasy</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__size">
          <span class="select" title="字体">小四</span>
          <div class="options">
            <ul>
              <li data-size="56">初号</li>
              <li data-size="48">小初</li>
              <li data-size="34">一号</li>
              <li data-size="32">小一</li>
              <li data-size="29">二号</li>
              <li data-size="24">小二</li>
              <li data-size="21">三号</li>
              <li data-size="20">小三</li>
              <li data-size="18">四号</li>
              <li data-size="16">小四</li>
              <li data-size="14">五号</li>
              <li data-size="12">小五</li>
              <li data-size="10">六号</li>
              <li data-size="8">小六</li>
              <li data-size="7">七号</li>
              <li data-size="6">八号</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__size-add">
          <i></i>
        </div>
        <div class="menu-item__size-minus">
          <i></i>
        </div>
        <div class="menu-item__bold">
          <i></i>
        </div>
        <div class="menu-item__italic">
          <i></i>
        </div>
        <div class="menu-item__underline">
          <i></i>
          <span class="select"></span>
          <div class="options">
            <ul>
              <li data-decoration-style="solid">
                <i></i>
              </li>
              <li data-decoration-style="double">
                <i></i>
              </li>
              <li data-decoration-style="dashed">
                <i></i>
              </li>
              <li data-decoration-style="dotted">
                <i></i>
              </li>
              <li data-decoration-style="wavy">
                <i></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-item__strikeout" title="删除线(Ctrl+Shift+X)">
          <i></i>
        </div>
        <div class="menu-item__superscript">
          <i></i>
        </div>
        <div class="menu-item__subscript">
          <i></i>
        </div>
        <div class="menu-item__color" title="字体颜色">
          <i></i>
          <span></span>
          <input type="color" id="color" />
        </div>
        <div class="menu-item__highlight" title="高亮">
          <i></i>
          <span></span>
          <input type="color" id="highlight" />
        </div>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item">
        <div class="menu-item__title">
          <i></i>
          <span class="select" title="切换标题">正文</span>
          <div class="options">
            <ul>
              <li style="font-size: 16px">正文</li>
              <li data-level="first" style="font-size: 26px">标题1</li>
              <li data-level="second" style="font-size: 24px">标题2</li>
              <li data-level="third" style="font-size: 22px">标题3</li>
              <li data-level="fourth" style="font-size: 20px">标题4</li>
              <li data-level="fifth" style="font-size: 18px">标题5</li>
              <li data-level="sixth" style="font-size: 16px">标题6</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__left">
          <i></i>
        </div>
        <div class="menu-item__center">
          <i></i>
        </div>
        <div class="menu-item__right">
          <i></i>
        </div>
        <div class="menu-item__alignment">
          <i></i>
        </div>
        <div class="menu-item__justify">
          <i></i>
        </div>
        <div class="menu-item__row-margin">
          <i title="行间距"></i>
          <div class="options">
            <ul>
              <li data-rowmargin="1">1</li>
              <li data-rowmargin="1.25">1.25</li>
              <li data-rowmargin="1.5">1.5</li>
              <li data-rowmargin="1.75">1.75</li>
              <li data-rowmargin="2">2</li>
              <li data-rowmargin="2.5">2.5</li>
              <li data-rowmargin="3">3</li>
            </ul>
          </div>
        </div>
        <div class="menu-item__list">
          <i></i>
          <div class="options">
            <ul>
              <li>
                <label>取消列表</label>
              </li>
              <li data-list-type="ol" data-list-style="decimal">
                <label>有序列表：</label>
                <ol>
                  <li>________</li>
                </ol>
              </li>
              <li data-list-type="ul" data-list-style="checkbox">
                <label>复选框列表：</label>
                <ul style="list-style-type: '☑️ '">
                  <li>________</li>
                </ul>
              </li>
              <li data-list-type="ul" data-list-style="disc">
                <label>实心圆点列表：</label>
                <ul style="list-style-type: disc">
                  <li>________</li>
                </ul>
              </li>
              <li data-list-type="ul" data-list-style="circle">
                <label>空心圆点列表：</label>
                <ul style="list-style-type: circle">
                  <li>________</li>
                </ul>
              </li>
              <li data-list-type="ul" data-list-style="square">
                <label>空心方块列表：</label>
                <ul style="list-style-type: '☐ '">
                  <li>________</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item">
        <div class="menu-item__search" data-menu="search">
          <i></i>
        </div>
        <div class="menu-item__search__collapse" data-menu="search">
          <div class="menu-item__search__collapse__search">
            <input type="text" />
            <label class="search-result"></label>
            <div class="arrow-left">
              <i></i>
            </div>
            <div class="arrow-right">
              <i></i>
            </div>
            <span>×</span>
          </div>
          <div class="menu-item__search__collapse__replace">
            <input type="text" />
            <button>替换</button>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog" editor-component="catalog">
      <div class="catalog__header">
        <span>目录</span>
        <div class="catalog__header__close">
          <i></i>
        </div>
      </div>
      <div class="catalog__main"></div>
    </div>
    <main class="main">
      <div class="editor"></div>
      <input type="file" name="file-docx" id="file-docx" accept=".docx" />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Editor } from '@hufe921/canvas-editor'
import docxPlugin from '@hufe921/canvas-editor-plugin-docx'

onMounted(() => {
  const instance = new Editor(document.querySelector('.editor'), {
    main: [
      {
        value:
          '右键插入条形码、二维码、代码块、导出右键插入条形码、二维码、代码块、导出右键插入条形码、二维码、代码块、导出右键插入条形码、二维码、代码块、导出/导出word文档、导入excel、绘制流程图、转换大/小写；选择文本查看悬浮工具栏',
      },
    ],
  })

  instance.use(docxPlugin)
  const docxFileInput = document.querySelector('#file-docx')
  instance.register.contextMenuList([
    {
      name: '导出文档',
      when: () => true,
      callback: (command) => {
        command.executeExportDocx({
          fileName: 'canvas-editor',
        })
      },
    },
    {
      name: '导入文档',
      when: () => true,
      callback: () => {
        docxFileInput.click()
      },
    },
  ])
  docxFileInput.onchange = () => {
    const file = docxFileInput?.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const buffer = event?.target?.result
      if (buffer instanceof ArrayBuffer) {
        instance.command.executeImportDocx({
          arrayBuffer: buffer,
        })
      }
      docxFileInput.value = ''
    }
    reader.readAsArrayBuffer(file)
  }

  // 检测是否是 Apple 设备，用于设置快捷键提示
  const isApple = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent)

  // 1. 撤销功能
  const undoDom = document.querySelector('.menu-item__undo')
  undoDom.title = `撤销(${isApple ? '⌘' : 'Ctrl'}+Z)`
  undoDom.onclick = function () {
    console.log('undo')
    instance.command.executeUndo()
  }

  // 2. 重做功能
  const redoDom = document.querySelector('.menu-item__redo')
  redoDom.title = `重做(${isApple ? '⌘' : 'Ctrl'}+Y)`
  redoDom.onclick = function () {
    console.log('redo')
    instance.command.executeRedo()
  }

  // 3. 格式刷功能
  const painterDom = document.querySelector('.menu-item__painter')
  let isFirstClick = true
  let painterTimeout
  painterDom.onclick = function () {
    if (isFirstClick) {
      isFirstClick = false
      painterTimeout = window.setTimeout(() => {
        console.log('painter-click')
        isFirstClick = true
        instance.command.executePainter({
          isDblclick: false,
        })
      }, 200)
    } else {
      window.clearTimeout(painterTimeout)
    }
  }

  painterDom.ondblclick = function () {
    console.log('painter-dblclick')
    isFirstClick = true
    window.clearTimeout(painterTimeout)
    instance.command.executePainter({
      isDblclick: true,
    })
  }

  // 4. 清除格式功能
  document.querySelector('.menu-item__format').onclick = function () {
    console.log('format')
    instance.command.executeFormat()
  }

  // 3. | 字体 | 字体变大 | 字体变小 | 加粗 | 斜体 | 下划线 | 删除线 | 上标 | 下标 | 字体颜色 | 背景色 |
  // 字体功能
  const fontDom = document.querySelector('.menu-item__font')
  const fontSelectDom = fontDom.querySelector('.select')
  const fontOptionDom = fontDom.querySelector('.options')
  fontDom.onclick = function () {
    console.log('font')
    fontOptionDom.classList.toggle('visible')
  }
  fontOptionDom.onclick = function (evt) {
    const li = evt.target
    instance.command.executeFont(li.dataset.family)
  }

  // 字号设置功能
  const sizeSetDom = document.querySelector('.menu-item__size')
  const sizeSelectDom = sizeSetDom.querySelector('.select')
  console.log('sizeSelectDom: ', sizeSelectDom)
  const sizeOptionDom = sizeSetDom.querySelector('.options')
  sizeSetDom.title = `设置字号`
  sizeSetDom.onclick = function () {
    console.log('size')
    sizeOptionDom.classList.toggle('visible')
  }
  sizeOptionDom.onclick = function (evt) {
    const li = evt.target
    instance.command.executeSize(Number(li.dataset.size))
  }

  // 增大字号功能
  const sizeAddDom = document.querySelector('.menu-item__size-add')
  sizeAddDom.title = `增大字号(${isApple ? '⌘' : 'Ctrl'}+[)`
  sizeAddDom.onclick = function () {
    console.log('size-add')
    instance.command.executeSizeAdd()
  }

  // 减小字号功能
  const sizeMinusDom = document.querySelector('.menu-item__size-minus')
  sizeMinusDom.title = `减小字号(${isApple ? '⌘' : 'Ctrl'}+])`
  sizeMinusDom.onclick = function () {
    console.log('size-minus')
    instance.command.executeSizeMinus()
  }

  // 加粗功能
  const boldDom = document.querySelector('.menu-item__bold')
  boldDom.title = `加粗(${isApple ? '⌘' : 'Ctrl'}+B)`
  boldDom.onclick = function () {
    console.log('bold')
    instance.command.executeBold()
  }

  // 斜体功能
  const italicDom = document.querySelector('.menu-item__italic')
  italicDom.title = `斜体(${isApple ? '⌘' : 'Ctrl'}+I)`
  italicDom.onclick = function () {
    console.log('italic')
    instance.command.executeItalic()
  }

  // 下划线功能
  const underlineDom = document.querySelector('.menu-item__underline')
  underlineDom.title = `下划线(${isApple ? '⌘' : 'Ctrl'}+U)`
  const underlineOptionDom = underlineDom.querySelector('.options')
  underlineDom.querySelector('.select').onclick = function () {
    underlineOptionDom.classList.toggle('visible')
  }
  underlineDom.querySelector('i').onclick = function () {
    console.log('underline')
    instance.command.executeUnderline()
    underlineOptionDom.classList.remove('visible')
  }
  underlineOptionDom.querySelector('ul').onmousedown = function (evt) {
    const li = evt.target
    const decorationStyle = li.dataset.decorationStyle
    instance.command.executeUnderline({
      style: decorationStyle,
    })
    underlineOptionDom.classList.remove('visible')
  }

  // 删除线功能
  const strikeoutDom = document.querySelector('.menu-item__strikeout')
  strikeoutDom.onclick = function () {
    console.log('strikeout')
    instance.command.executeStrikeout()
  }

  // 上标功能
  const superscriptDom = document.querySelector('.menu-item__superscript')
  superscriptDom.title = `上标(${isApple ? '⌘' : 'Ctrl'}+Shift+,)`
  superscriptDom.onclick = function () {
    console.log('superscript')
    instance.command.executeSuperscript()
  }

  // 下标功能
  const subscriptDom = document.querySelector('.menu-item__subscript')
  subscriptDom.title = `下标(${isApple ? '⌘' : 'Ctrl'}+Shift+.)`
  subscriptDom.onclick = function () {
    console.log('subscript')
    instance.command.executeSubscript()
  }

  // 字体颜色功能
  const colorControlDom = document.querySelector('#color')
  colorControlDom.oninput = function () {
    instance.command.executeColor(colorControlDom.value)
  }
  const colorDom = document.querySelector('.menu-item__color')
  const colorSpanDom = colorDom.querySelector('span')
  colorDom.onclick = function () {
    console.log('color')
    colorControlDom.click()
  }

  // 背景色功能
  const highlightControlDom = document.querySelector('#highlight')
  highlightControlDom.oninput = function () {
    instance.command.executeHighlight(highlightControlDom.value)
  }
  const highlightDom = document.querySelector('.menu-item__highlight')
  const highlightSpanDom = highlightDom.querySelector('span')
  highlightDom.onclick = function () {
    console.log('highlight')
    highlightControlDom?.click()
  }

  // 添加编辑器与工具栏的同步机制
  instance.listener.rangeStyleChange = function (payload) {
    // 富文本状态同步
    // 字体同步
    fontOptionDom.querySelectorAll('li').forEach((li) => li.classList.remove('active'))
    const curFontDom = fontOptionDom.querySelector(`li[data-family='${payload.font}']`)
    if (curFontDom) {
      fontSelectDom.innerText = curFontDom.innerText
      fontSelectDom.style.fontFamily = payload.font
      curFontDom.classList.add('active')
    }

    // 字号同步
    sizeOptionDom.querySelectorAll('li').forEach((li) => li.classList.remove('active'))
    const curSizeDom = sizeOptionDom.querySelector(`li[data-size='${payload.size}']`)
    if (curSizeDom) {
      sizeSelectDom.innerText = curSizeDom.innerText
      curSizeDom.classList.add('active')
    } else {
      sizeSelectDom.innerText = `${payload.size}`
    }

    // 文本样式状态同步
    payload.bold ? boldDom.classList.add('active') : boldDom.classList.remove('active')
    payload.italic ? italicDom.classList.add('active') : italicDom.classList.remove('active')
    payload.underline
      ? underlineDom.classList.add('active')
      : underlineDom.classList.remove('active')
    payload.strikeout
      ? strikeoutDom.classList.add('active')
      : strikeoutDom.classList.remove('active')

    // 字体颜色同步
    if (payload.color) {
      colorDom.classList.add('active')
      colorControlDom.value = payload.color
      colorSpanDom.style.backgroundColor = payload.color
    } else {
      colorDom.classList.remove('active')
      colorControlDom.value = '#000000'
      colorSpanDom.style.backgroundColor = '#000000'
    }

    // 背景色同步
    if (payload.highlight) {
      highlightDom.classList.add('active')
      highlightControlDom.value = payload.highlight
      highlightSpanDom.style.backgroundColor = payload.highlight
    } else {
      highlightDom.classList.remove('active')
      highlightControlDom.value = '#ffff00'
      highlightSpanDom.style.backgroundColor = '#ffff00'
    }

    // 上下标状态同步
    if (payload.type === 'subscript') {
      subscriptDom.classList.add('active')
      superscriptDom.classList.remove('active')
    } else if (payload.type === 'superscript') {
      superscriptDom.classList.add('active')
      subscriptDom.classList.remove('active')
    } else {
      subscriptDom.classList.remove('active')
      superscriptDom.classList.remove('active')
    }

    // 功能按钮状态
    payload.undo ? undoDom.classList.remove('no-allow') : undoDom.classList.add('no-allow')
    payload.redo ? redoDom.classList.remove('no-allow') : redoDom.classList.add('no-allow')
    payload.painter ? painterDom.classList.add('active') : painterDom.classList.remove('active')
  }

  // 初始化一些视觉状态（CSS类）
  document.addEventListener(
    'click',
    (evt) => {
      const visibleDom = document.querySelector('.visible')
      if (!visibleDom || visibleDom.contains(evt.target)) return
      visibleDom.classList.remove('visible')
    },
    { capture: true },
  )
})
</script>

<style scoped>
@import '/src/style.css';
.container {
  margin: 0 auto;
  background: rgb(135, 132, 139);
}
.main {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.editor > div {
  margin: 80px auto;
}

input[type='file'] {
  display: none;
}
</style>
