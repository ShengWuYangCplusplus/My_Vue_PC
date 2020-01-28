import moment from "moment"
export default {
  getCurrentDate() {
    return moment().format('YYYY-MM-DD')
  },
  getSevenDate() {
    return moment().subtract(6, 'days').format('YYYY-MM-DD')
  },
  getThirty() {
    return moment().subtract(29, 'days').format('YYYY-MM-DD hh:mm:ss')
  },
  getNextDate() {
    return moment(new Date()).add(1, 'days').format('YYYY-MM-DD')
  }
}
