import { mapState } from 'vuex'
const mxin = {
  filters: {
    trueFalseFilter(val) {
      switch (val.toString()) {
        case 'true':
          return '是'
        case 'false':
          return '否'
      }
    },
    /**账单类型 */
    billTypeFilter(val) {
      switch (parseInt(val)) {
        case 0:
          return '消费'
        case 1:
          return '补助发放'
        case 2:
          return '结算'
        case 3:
          return '充值'
        case 4:
          return '清算'
        case 5:
          return '退款'
        default:
          return '--'
      }
    },
    /**订单状态 */
    orderStatusFilter(val) {
      switch (parseInt(val)) {
        case 0:
          return '待支付'
        case 1:
          return '已支付'
        case 2:
          return '待派单'
        case 3:
          return '已派单'
        case 3:
          return '服务中'
        case 5:
          return '服务完成'
        case 6:
          return '待评价'
        case 7:
          return '已评价'
        case 8:
          return '已关闭'
        case 9:
          return '已取消'
      }
    },
    timebankRecordType(val) {
      switch (val) {
        case 0:
          return '收入';
          break
        case 1:
          return '支出'
          break
      }
    },
    timeOrderType(val) {
      switch (val) {
        case 0:
          return '活动'
          break
        case 1:
          return '需求'
          break
        case 2:
          return '商品'
      }
    },
    timeOrderStatus(val) {
      switch (val) {
        case 0:
          return '草稿'
          break
        case 1:
          return '正常'
          break
        case 2:
          return '完成'
          break
        case 3:
          return '已取消'
          break
      }
    },
    chargeTypeFilter(val) {
      switch (val) {
        case 'AliPay':
          return '支付宝'
        case 'CCB':
          return '建行'
        case 'WxPay':
          return '微信支付'
        default:
          return '--'
      }
    },
    productStatus(val) {
      switch (val) {
        case 0:
          return '未校验'
          break
        case 1:
          return '已校验'
          break
        case 2:
          return '已取消'
          break
      }
    },
    //健康数据是否正常
    healthDataStatus(val) {
      switch (val) {
        case 0:
          return '正常'
          break
        case 1:
          return '偏高'
          break
        case 2:
          return '偏低'
          break
      }
    },
    //健康数据来源
    healthSoucreFilter(val) {
      switch (val) {
        case 0:
          return '腕表'
          break
        case 1:
          return '一体机'
          break
        case 2:
          return '手动录入'
          break
      }
    },
    nullFilter(val) {
      if (val === undefined || val === null || val === '' || val === 'undefined' || val === 'null' || val === 0) {
        return '--'
      } else {
        return val
      }
    },
    nullTimeToDate(val) {
      if (val.split(' ')[1] === '00:00:00') {
        return val.split(' ')[0]
      } else {
        return val
      }
    },
    //血糖录入数据的状态
    bloodSugarStatus(val) {
      switch (val) {
        case 0:
          return '空腹'
          break
        case 1:
          return '餐后一小时'
          break
        case 2:
          return '餐后两小时'
          break
        case 3:
          return '其它'
          break
      }
    },
    evalRoleFilter(val) {
      switch (val) {
        case 0:
          return '组员'
          break
        case 1:
          return '组长'
          break
      }
    }
  },
  computed: {
    ...mapState(['currentSearchForm', 'systemTitle', 'userRole']),
    isCenterRole() {
      return this.userRole === 128 || this.userRole === '128'
    }
  },
  data() {
    return {
      ueConfig: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      //图片上传地址
      picUrl: "/api/picture",
      currentJob: "use tell me",
      communityGid: "",
      chartColorArr: ["#FF8127", "#4ED77E", "#27E1FF", "#3327FF"],
      callCenterColor: ['#6FAC48', '#5B9AD7', '#FF5B5A'],
      centerRoles: [32, 64, 128],
      //当天及之前的日期选择 不带快捷选项
      beforeTimeOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        }
      },
      //通知 选择今天之后的日期
      afterTodayOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e6
        }
      },
      noticeRules: {
        title: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        userRoles: [
          {
            required: true, message: '选择角色', trigger: 'blur'
          }
        ],
        content: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        sendTime: [
          { required: true, message: '选择日期', trigger: 'blur' }
        ]
      },
      userRoleList: [
        { value: 1, label: "老人" },
        { value: 128, label: "服务中心管理员" },
        { value: 64, label: "社区管理员" },
        { value: 2, label: "家政服务商管理员" },
        { value: 256, label: "餐厅管理员" },
      ],
      /**评定人员表单验证 */
      evalUserRules: {
        name: [
          { required: true, message: '输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: this.$filter.isPhone, trigger: 'blur' }
        ],
        idNumber: [
          { required: true, validator: this.$filter.isIDCard, trigger: 'blur' }
        ],
        appraiserGroupGid: [
          { required: true, message: '选择小组', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '选择角色', trigger: 'blur' }
        ]
      },
      adminRules: {
        name: [
          { required: true, message: '输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: this.$filter.isPhone, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    getArr(str) {
      return str.join(',')
    },
    //过滤空,null, undefined值
    filterRes(obj) {
      if (typeof obj === 'object') {
        for (var i in obj) {
          if (obj[i] === undefined || obj[i] === "null" || obj[i] === "" || obj[i] === "undefined" || obj[i] === null) {
            obj[i] = '-'
          }
        }
      }
      return obj
    },
    getSortReq(obj) {
      return { orderby: obj.prop, isasc: obj.order === "ascending" ? true : false }
    },
    hasAuthRole(userRole, roleArr) {
      for (let i of roleArr) {
        if (i && (userRole & i)) {
          return i
        }
      }
    }
  }
}
export default mxin