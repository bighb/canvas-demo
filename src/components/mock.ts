// 从editor.js导入需要的枚举和常量
import {
  ControlType,
  ElementType,
  ListType,
  TitleLevel
} from '../editor'

const text = `主诉：\n发热三天，咳嗽五天。\n现病史：\n患者于三天前无明显诱因，感冒后发现面部水肿，无皮疹，尿量减少，出现乏力，在外治疗无好转，现来我院就诊。\n既往史：\n有糖尿病10年，有高血压2年，有传染性疾病1年。报告其他既往疾病。\n流行病史：\n否认14天内接触过确诊患者、疑似患者、无症状感染者及其密切接触者；否认14天内去过以下场所：水产、肉类批发市场，农贸市场，集市，大型超市，夜市；否认14天内与以下场所工作人员密切接触：水产、肉类批发市场，农贸市场，集市，大型超市；否认14天内周围（如家庭、办公室）有2例以上聚集性发病；否认14天内接触过有发热或呼吸道症状的人员；否认14天内自身有发热或呼吸道症状；否认14天内接触过纳入隔离观察的人员及其他可能与新冠肺炎关联的情形；陪同家属无以上情况。\n体格检查：\nT：39.5℃，P：80bpm，R：20次/分，BP：120/80mmHg；\n辅助检查：\n2020年6月10日，普放：血细胞比容36.50%（偏低）40～50；单核细胞绝对值0.75*10/L（偏高）参考值：0.1～0.6；\n门诊诊断：处置治疗：电子签名：【】\n其他记录：`

// 模拟标题
const titleText = [
  '主诉：',
  '现病史：',
  '既往史：',
  '流行病史：',
  '体格检查：',
  '辅助检查：',
  '门诊诊断：',
  '处置治疗：',
  '电子签名：',
  '其他记录：'
]
const titleMap = new Map()
for (let t = 0; t < titleText.length; t++) {
  const value = titleText[t]
  const i = text.indexOf(value)
  if (~i) {
    titleMap.set(i, value)
  }
}

// 模拟颜色字
const colorText = ['传染性疾病']
const colorIndex = colorText
  .map(b => {
    const i = text.indexOf(b)
    return ~i
      ? Array(b.length)
          .fill(i)
          .map((_, j) => i + j)
      : []
  })
  .flat()

// 模拟高亮字
const highlightText = ['血细胞比容']
const highlightIndex = highlightText
  .map(b => {
    const i = text.indexOf(b)
    return ~i
      ? Array(b.length)
          .fill(i)
          .map((_, j) => i + j)
      : []
  })
  .flat()

const elementList = []
// 组合纯文本数据
const textList = text.split('')
let index = 0
while (index < textList.length) {
  const value = textList[index]
  const title = titleMap.get(index)
  if (title) {
    elementList.push({
      value: '',
      type: ElementType.TITLE,
      level: TitleLevel.FIRST,
      valueList: [
        {
          value: title,
          size: 18
        }
      ]
    })
    index += title.length - 1
  } else if (colorIndex.includes(index)) {
    elementList.push({
      value,
      color: '#FF0000',
      size: 16
    })
  } else if (highlightIndex.includes(index)) {
    elementList.push({
      value,
      highlight: '#F2F27F',
      groupIds: ['1'] // 模拟批注
    })
  } else {
    elementList.push({
      value,
      size: 16
    })
  }
  index++
}

// 模拟文本控件
elementList.splice(12, 0, {
  type: ElementType.CONTROL,
  value: '',
  control: {
    conceptId: '1',
    type: ControlType.TEXT,
    value: null,
    placeholder: '其他补充',
    prefix: '{',
    postfix: '}'
  }
})

// 模拟下拉控件
elementList.splice(94, 0, {
  type: ElementType.CONTROL,
  value: '',
  control: {
    conceptId: '2',
    type: ControlType.SELECT,
    value: null,
    code: null,
    placeholder: '有无',
    prefix: '{',
    postfix: '}',
    valueSets: [
      {
        value: '有',
        code: '98175'
      },
      {
        value: '无',
        code: '98176'
      },
      {
        value: '不详',
        code: '98177'
      }
    ]
  }
})

// 模拟超链接
elementList.splice(116, 0, {
  type: ElementType.HYPERLINK,
  value: '',
  valueList: [
    {
      value: '新',
      size: 16
    },
    {
      value: '冠',
      size: 16
    },
    {
      value: '肺',
      size: 16
    },
    {
      value: '炎',
      size: 16
    }
  ],
  url: 'https://hufe.club/canvas-editor'
})

// 模拟文本控件（前后文本）
elementList.splice(335, 0, {
  type: ElementType.CONTROL,
  value: '',
  control: {
    conceptId: '6',
    type: ControlType.TEXT,
    value: null,
    placeholder: '内容',
    preText: '其他：',
    postText: '。'
  }
})

// 模拟下标
elementList.splice(346, 0, {
  value: '∆',
  color: '#FF0000',
  type: ElementType.SUBSCRIPT
})

// 模拟上标
elementList.splice(430, 0, {
  value: '9',
  type: ElementType.SUPERSCRIPT
})

// 模拟列表
elementList.splice(451, 0, {
  value: '',
  type: ElementType.LIST,
  listType: ListType.OL,
  valueList: [
    {
      value: '高血压\n糖尿病\n病毒性感冒\n过敏性鼻炎\n过敏性鼻息肉'
    }
  ]
})

elementList.splice(453, 0, {
  value: '',
  type: ElementType.LIST,
  listType: ListType.OL,
  valueList: [
    {
      value:
        '超声引导下甲状腺细针穿刺术；\n乙型肝炎表面抗体测定；\n膜式病变细胞采集术、后颈皮下肤层；'