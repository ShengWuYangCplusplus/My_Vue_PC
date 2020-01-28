const MenuRoute = [
  {
    name: '综合大屏',
    value: 'screen',
    path: '/screen',
    needCheck: ['home']
  },
  {
    name: '综合首页',
    value: 'home',
    path: '/home',
    bindedCheck: ['screen']
  },
  {
    name: '综合登记',
    value: 'approve',
    path: '/approve',
    bindedCheck: ['serviceApprove', 'projectApprove'],
    children: [
      {
        name: '养老服务申请登记',
        value: 'serviceApprove',
        path: '/approve/serviceopenindex/serviceopenlist',
        needCheck: ['approve', 'olders']
      },
      {
        name: '服务项目申请登记',
        value: 'projectApprove',
        path: '/approve/serviceprojectindex/serviceprojectlist',
        needCheck: ['approve', 'provider']
      },
    ]
  },
  {
    name: '财务管理',
    value: 'finacial',
    path: '/finacial'
  },
  {
    name: '服务对象管理',
    value: 'olders',
    path: '/olders',
    bindedCheck: ['serviceApprove']
  },
  {
    name: '工单管理',
    value: 'worksheet',
    path: '/worksheet'
  },
  {
    name: '时间银行',
    value: 'timebank',
    path: '/timebank'
  },
  {
    name: '服务商管理',
    value: 'provider',
    path: '/serviceproviderindex',
    bindedCheck: ['projectApprove']
  },
  {
    name: '社区管理',
    value: 'community',
    path: '/communityindex'
  },
  {
    name: '评估管理',
    value: 'assess',
    path: '/assess'
  },
  {
    name: '养老机构管理',
    value: 'retireOrg',
    path: '/olderorgindex'
  },
  {
    name: '设备管理',
    value: 'device',
    path: '/device'
  },
  {
    name: '消息公告',
    value: 'message',
    path: '/messageindex'
  },
  {
    name: '系统管理',
    value: 'empower',
    path: '/system'
  },
]

export default MenuRoute