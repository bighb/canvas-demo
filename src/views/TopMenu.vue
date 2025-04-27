<template>
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
</template>

<script setup></script>

<style scoped>
@import '/src/style.css';
</style>
