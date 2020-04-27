import Vue from 'vue'

const months = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
]

const dateFilter = (value) => {
  return formatDate(value)
}

function formatDate (input) {
  const date = new Date(input)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formattedDate = months[month] + day + '日' + year + '年'
  return formattedDate
}

Vue.filter('date', dateFilter)
