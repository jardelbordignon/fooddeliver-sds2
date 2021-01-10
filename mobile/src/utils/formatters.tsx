// import dayjs from 'dayjs'
// import 'dayjs/locale/pt-br'
// import relativeTime from 'dayjs/plugin/relativeTime'
// dayjs.locale('pt-br')
// dayjs.extend(relativeTime)
import 'intl'
import 'intl/locale-data/jsonp/pt'

// formatPrice('15.30', 'DB') => 1530
// formatPrice('15.30') => R$ 15,30
export const formatPrice = (value: number, currency = 'BRL') => {
  switch (currency) {
    case 'toI':
      return Number(value.toFixed(2).replace('.', ''))
    case 'toF':
      return Number(value.toFixed(2))
    default:
      return new Intl.NumberFormat('pt-br', { style: 'currency', currency })
        .format(value).replace(/^(\D+)/, '$1 ') // add space
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
export const formatDate = (date:any, dateTextFormat = false, language = 'pt-BR') => {
  const newDate = new Date(date)
  const options = !dateTextFormat ? {} :
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } 
  return newDate.toLocaleDateString(language, options)
}

/**
 * Dependencia de dayjs
 * {dateFromNow(order.createdAt.toString())} -> há 2 dias
 */
// function dateFromNow(date: string) {
//   return dayjs(date).fromNow()
// }
