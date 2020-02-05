// module.exports = ctx => {
//   ctx.state.data = {
//        msg: 'Hello World'
//   }
// }
const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql.select('caseid', 'sex').from('case')
   ctx.state.data = {
    msg: result
  }
}