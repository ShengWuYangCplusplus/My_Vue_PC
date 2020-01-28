export default class searchNameList {
    //服务对象检索
    static getOlderSearch() {
        return [{
                cnName: "姓名",
                engName: "name"
            },
            {
                cnName: "身份证",
                engName: "idcard"
            },
            {
                cnName: "手机号",
                engName: "phone"
            },
            {
                cnName: "老人类型",
                engName: "type"
            },
            {
                cnName: "所属社区",
                engName: "district"
            },
            {
                cnName: "老人标签",
                engName: "tagNames"
            },
            {
                cnName: "一键通号码",
                engName: "pushToTalk"
            },
            {
                cnName: "老人状态",
                engName: "status"
            },
            {
                cnName: "是否可升级",
                engName: "onlyUpdate"
            },

        ]
    }
    static getSameOldSearch() {
        return [{
                cnName: "老人姓名",
                engName: "theOldName"
            },
            {
                cnName: "时间范围",
                engName: "timeRange"
            },
        ]
    }
    static getProviderSearch() {
        return [{
            cnName: "名称",
            engName: "providerName"
        }]
    }
    static getOrderSearch() {
        return [{
                cnName: "下单时间",
                engName: "timeRange"
            },
            {
                cnName: "账单类型",
                engName: "type"
            }
        ]
    }
    static getEvalSearch() {
        return [{
            cnName: "评价时间",
            engName: "timeRange"
        }]
    }
    static getBillSearch() {
        return [{
                cnName: "账单时间",
                engName: "timeRange"
            },
            {
                cnName: "账单类型",
                engName: "type"
            }
        ]
    }
    static getTimeRange() {
            return [{
                    cnName: "时间范围",
                    engName: "timeRange"
                },
                {
                    cnName: "姓名",
                    engName: "theOldName"
                },
                {
                    cnName: "身份证号",
                    engName: "ID"
                }
            ]
        }
        //登记服务项目查询
    static getProjectApproveSearch() {
        return [{
                cnName: "时间范围",
                engName: "timeRange"
            },
            {
                cnName: "服务项名称",
                engName: "serviceItemName"
            },
            {
                cnName: "服务商名称",
                engName: "providerName"
            }
        ]
    }
    static getCommonName() {
        return [{
                cnName: "账单类型",
                engName: "type"
            },
            {
                cnName: "时间范围",
                engName: "timeRange"
            }
        ]
    }
    static getStaffSearch() {
            return [{
                    cnName: "姓名",
                    engName: "name"
                },
                {
                    cnName: "身份证",
                    engName: "idcard"
                },
                {
                    cnName: "手机号",
                    engName: "phone"
                },
            ]
        }
        //时间商城
    static getTimeBankSearch() {
        return [{
                cnName: '时间范围',
                engName: 'timeRange'
            },
            {
                cnName: '名称',
                engName: 'title'
            },
            {
                cnName: '地点',
                engName: 'place'
            },
            {
                cnName: '服务对象',
                engName: 'theOldName'
            }
        ]
    }

    //服务订单
    static getServiceOrder() {
        return [{
            cnName: "订单状态",
            engName: "orderStatus"
        }, {
            cnName: "服务商名称",
            engName: "providerName"
        }, {
            cnName: "老人姓名",
            engName: "theOldName"
        }, {
            cnName: "开始时间",
            engName: "startTime"
        }, {
            cnName: "结束时间",
            engName: "endTime"
        }]
    }

    //财务管理
    static getFinacialSearch() {
        return [{
            cnName: "服务商名称",
            engName: "providerName"
        }, {
            cnName: "老人姓名",
            engName: "theOldName"
        }, {
            cnName: "开始时间",
            engName: "startTime"
        }, {
            cnName: "结束时间",
            engName: "endTime"
        }]
    }

}