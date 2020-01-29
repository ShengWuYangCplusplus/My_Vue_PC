/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/residence',
    redirect: '/residence/register/live/list',
    component: () => import('@/views/residence/index.vue'),
    name: 'residence',
    meta: {
      name: "入住办理",
      icon: 'icon-zhuangxiugongsi',
      isSub: true,
      menKey: 'residence'
    },
    children: [
      {
        path: 'register',
        redirect: '/residence/register/live/list',
        component: () => import('@/views/residence/register/index.vue'),
        name: 'residence-register',
        meta: {
          name: '登记管理',
          icon: 'icon-dengji-',
          isSub: true,
          menuKey: 'residence-register',
        },
        children: [
          {
            path: 'live',
            redirect: '/residence/register/live/list',
            name: 'residence-register-live',
            menuKey: 'register-live',
            component: () => import('@/views/residence/register/live/index.vue'),
            meta: {
              name: '入住登记',
              icon: 'icon-youjiantou',
              menuKey: 'residence-register-live',
            },
            children: [
              {
                path: 'list',
                name: 'residence-register-live-list',
                menuKey: 'residence-register-live',
                component: () => import('@/views/residence/register/live/list.vue'),
                meta: {
                  required: false,
                  name: '入住登记列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-live',
                }
              },
              {
                path: 'add',
                name: 'residence-register-live-add',
                component: () => import('@/views/residence/register/live/add/add.vue'),
                meta: {
                  required: false,
                  name: '添加入住登记',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-live',
                },
                children: [
                  {
                    path: 'base',
                    name: 'residence-register-live-add-base',
                    component: () => import('@/views/residence/register/live/add/base.vue'),
                    meta: {
                      required: false,
                      name: '基本信息登记',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  },
                  {
                    path: 'family',
                    name: 'residence-register-live-add-family',
                    component: () => import('@/views/residence/register/live/add/family.vue'),
                    meta: {
                      required: false,
                      name: '家属信息登记',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  },
                  {
                    path: 'health',
                    name: 'residence-register-live-add-health',
                    component: () => import('@/views/residence/register/live/add/health.vue'),
                    meta: {
                      required: false,
                      name: '健康信息登记',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  },
                  {
                    path: 'nurse',
                    name: 'residence-register-live-add-nurse',
                    component: () => import('@/views/residence/register/live/add/nurse.vue'),
                    meta: {
                      required: false,
                      name: '护理任务设置',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  },
                  {
                    path: 'beds',
                    name: 'residence-register-live-add-beds',
                    component: () => import('@/views/residence/register/live/add/beds.vue'),
                    meta: {
                      required: false,
                      name: '餐饮床位选择',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  },
                  {
                    path: 'fee',
                    name: 'residence-register-live-add-fee',
                    component: () => import('@/views/residence/register/live/add/fee.vue'),
                    meta: {
                      required: false,
                      name: '入院缴费',
                      keepAlive: true,
                      menuKey: 'residence-register-live',
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'consult',
            name: 'residence-register-consult',
            redirect: {
              name: 'residence-register-consult-list'
            },
            component: () => import('@/views/residence/register/consult/index.vue'),
            meta: {
              name: '咨询登记',
              icon: 'icon-youjiantou',
              menuKey: 'residence-register-consult'
            },
            children: [
              {
                path: 'list',
                name: 'residence-register-consult-list',
                component: () => import('@/views/residence/register/consult/list.vue'),
                meta: {
                  required: false,
                  name: '咨询登记列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-consult'
                }
              },
              {
                path: 'add',
                name: 'residence-register-consult-add',
                component: () => import('@/views/residence/register/consult/add.vue'),
                meta: {
                  required: false,
                  name: '添加咨询登记',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-consult'
                }
              },

            ]
          },
          {
            path: 'try',
            name: 'residence-register-try',
            redirect: {
              name: 'residence-register-try-list'
            },
            component: () => import('@/views/residence/register/try/index.vue'),
            meta: {
              name: '试住登记',
              icon: 'icon-youjiantou',
              menuKey: 'residence-register-try'
            },
            children: [
              {
                path: 'list',
                name: 'residence-register-try-list',
                component: () => import('@/views/residence/register/try/list.vue'),
                meta: {
                  required: false,
                  name: '试住登记列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-try'
                }
              },
              {
                path: 'add',
                name: 'residence-register-try-add',
                component: () => import('@/views/residence/register/try/add.vue'),
                meta: {
                  required: false,
                  name: '添加试住登记',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-register-try'
                }
              }
            ]
          },
          // {
          //   path: 'base',
          //   name: 'residence-register-base',
          //   component: () => import('@/views/residence/register/base/index.vue'),
          //   meta: {
          //     name: '基础信息登记',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'residence-register-base'
          //   }
          // },
          // {
          //   path: 'health',
          //   redirect: '/residence/register/health/list',
          //   name: 'residence-register-health',
          //   menuKey: 'register-health',
          //   component: () => import('@/views/residence/register/health/index.vue'),
          //   meta: {
          //     name: '健康评估登记',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'residence-register-health',
          //   },
          //   children: [
          //     {
          //       path: 'list',
          //       name: 'residence-register-health-list',
          //       menuKey: 'residence-register-health',
          //       component: () => import('@/views/residence/register/health/list.vue'),
          //       meta: {
          //         required: false,
          //         name: '评估登记列表',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-health',
          //       }
          //     },
          //     {
          //       path: 'add',
          //       name: 'residence-register-health-add',
          //       component: () => import('@/views/residence/register/health/add/index.vue'),
          //       meta: {
          //         required: false,
          //         name: '添加健康评估登记',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-health',
          //       },
          //       children: [
          //         {
          //           path: 'base',
          //           name: 'residence-register-health-add-base',
          //           component: () => import('@/views/residence/register/health/add/base.vue'),
          //           meta: {
          //             required: false,
          //             name: '基本信息登记',
          //             keepAlive: true
          //           }
          //         },
          //         {
          //           path: 'family',
          //           name: 'residence-register-health-add-health',
          //           component: () => import('@/views/residence/register/health/add/health.vue'),
          //           meta: {
          //             required: false,
          //             name: '健康信息登记',
          //             keepAlive: true
          //           }
          //         },
          //       ]
          //     }
          //   ]
          // },
          // {
          //   path: 'beds',
          //   name: 'residence-register-beds',
          //   component: () => import('@/views/residence/register/beds/index.vue'),
          //   meta: {
          //     name: '护理床位登记',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'residence-register-beds'
          //   },
          //   children: [
          //     {
          //       path: 'list',
          //       name: 'residence-register-beds-list',
          //       component: () => import('@/views/residence/register/beds/list.vue'),
          //       meta: {
          //         required: false,
          //         name: '床位登记列表',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-beds'
          //       }
          //     },
          //     {
          //       path: 'add',
          //       name: 'residence-register-beds-add',
          //       component: () => import('@/views/residence/register/beds/add.vue'),
          //       meta: {
          //         required: false,
          //         name: '添加护理床位登记',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-beds'
          //       }
          //     }
          //   ]
          // },
          // {
          //   path: 'fee',
          //   name: 'residence-register-fee',
          //   redirect: {
          //     name: 'residence-register-fee-list'
          //   },
          //   component: () => import('@/views/residence/register/fee/index.vue'),
          //   meta: {
          //     name: '入住缴费登记',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'residence-register-fee'
          //   },
          //   children: [
          //     {
          //       path: 'list',
          //       name: 'residence-register-fee-list',
          //       component: () => import('@/views/residence/register/fee/list.vue'),
          //       meta: {
          //         required: false,
          //         name: '缴费登记列表',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-fee'
          //       }
          //     },
          //     {
          //       path: 'add',
          //       name: 'residence-register-fee-add',
          //       component: () => import('@/views/residence/register/fee/add.vue'),
          //       meta: {
          //         required: false,
          //         name: '添加入住缴费登记',
          //         icon: 'icon-youjiantou',
          //         menuKey: 'residence-register-fee'
          //       }
          //     }
          //   ]
          // }
        ]
      },
      {
        path: '/stay',
        redirect: '/stay/olders/list',
        component: () => import('@/views/residence/stay/index.vue'),
        name: 'residence-stay',
        meta: {
          name: '住院管理',
          icon: 'icon-rijianzhaoliao',
          isSub: true,
          menuKey: 'stay',
        },
        children: [
          {
            path: 'olders',
            redirect: '/stay/olders/list',
            name: 'residence-stay-olders',
            component: () => import('@/views/residence/stay/olders/index.vue'),
            meta: {
              name: '老人管理',
              icon: 'icon-youjiantou',
              menuKey: 'residence-stay-olders',
            },
            children: [
              {
                path: 'list',
                name: 'residence-stay-olders-list',
                menuKey: 'stay-olders',
                component: () => import('@/views/residence/stay/olders/list.vue'),
                meta: {
                  required: false,
                  name: '老人列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-stay-olders',
                }
              }
            ]
          }
        ]
      },
      {
        path: '/residence/checkout',
        redirect: '/residence/checkout/settle/list',
        name: 'residence-checkout',
        component: () => import('@/views/residence/stay/index.vue'),
        name: 'residence-checkout',
        meta: {
          name: '退住管理',
          icon: 'icon-tuihuoguanli',
          isSub: true,
          menuKey: 'residence-checkout',
        },
        children: [
          {
            path: 'settle',
            redirect: '/residence/checkout/settle/list',
            name: 'residence-checkout-settle',
            menuKey: 'checkout-settle',
            component: () => import('@/views/residence/checkout/settle/index.vue'),
            meta: {
              name: '出院结算',
              icon: 'icon-youjiantou',
              menuKey: 'residence-checkout-settle',
            },
            children: [
              {
                path: 'list',
                name: 'residence-checkout-settle-list',
                menuKey: 'residence-checkout-settle',
                component: () => import('@/views/residence/checkout/settle/list.vue'),
                meta: {
                  required: false,
                  name: '结算列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-checkout-settle',
                }
              },
              {
                path: 'add',
                name: 'residence-checkout-settle-add',
                menuKey: 'residence-checkout-settle',
                component: () => import('@/views/residence/checkout/settle/add.vue'),
                meta: {
                  required: false,
                  name: '添加出院结算',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-checkout-settle',
                }
              }
            ]
          },
          {
            path: 'write',
            redirect: '/residence/checkout/write/list',
            name: 'residence-checkout-write',
            menuKey: 'residence-checkout-write',
            component: () => import('@/views/residence/checkout/write/index.vue'),
            meta: {
              name: '出院登记',
              icon: 'icon-youjiantou',
              menuKey: 'residence-checkout-write',
            },
            children: [
              {
                path: 'list',
                name: 'residence-checkout-write-list',
                menuKey: 'residence-checkout-write',
                component: () => import('@/views/residence/checkout/write/list.vue'),
                meta: {
                  required: false,
                  name: '登记列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-checkout-write',
                }
              },
              {
                path: 'add',
                name: 'residence-checkout-write-add',
                menuKey: 'residence-checkout-write',
                component: () => import('@/views/residence/checkout/write/add.vue'),
                meta: {
                  required: false,
                  name: '登记列表',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-checkout-write',
                }
              }
            ]
          },
          {
            path: 'search',
            redirect: '/residence/checkout/search/list',
            name: 'residence-checkout-search',
            menuKey: 'residence-checkout-search',
            component: () => import('@/views/residence/checkout/search/index.vue'),
            meta: {
              name: '出院查询',
              icon: 'icon-youjiantou',
              menuKey: 'residence-checkout-search',
            },
            children: [
              {
                path: 'list',
                name: 'residence-checkout-search-list',
                menuKey: 'residence-checkout-search',
                component: () => import('@/views/residence/checkout/search/list.vue'),
                meta: {
                  required: false,
                  name: '出院记录',
                  icon: 'icon-youjiantou',
                  menuKey: 'residence-checkout-search'
                }
              }
            ]
          },
        ]
      }
    ]
  },
  {
    path: '/daily',
    redirect: {
      name: 'daily-visit-out'
    },
    name: 'daily',
    component: () => import('@/views/daily/index.vue'),
    meta: {
      name: '日常服务',
      icon: 'icon-zhiyuanzhe',
      isSub: true,
      menuKey: 'daily'
    },
    children: [
      {
        path: 'visit',
        name: 'daily-visit',
        redirect: {
          name: 'daily-visit-out'
        },
        component: () => import('@/views/daily/visit/index.vue'),
        meta: {
          name: '外出/探视',
          icon: 'icon-waichuchucha',
          isSub: true,
          menuKey: 'daily-visit'
        },
        children: [
          {
            path: 'out',
            name: 'daily-visit-out',
            component: () => import('@/views/daily/visit/out/index.vue'),
            meta: {
              name: '外出',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-visit-out'
            }
          },
          {
            path: 'in',
            name: 'daily-visit-in',
            component: () => import('@/views/daily/visit/in/index.vue'),
            meta: {
              name: '探视',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-visit-in'
            }
          }
        ]
      },
      {
        path: 'money',
        name: 'daily-money',
        redirect: {
          name: 'daily-money-type'
        },
        component: () => import('@/views/daily/money/index.vue'),
        meta: {
          name: '费用管理',
          icon: 'icon-price',
          isSub: true,
          menuKey: 'daily-money'
        },
        children: [
          {
            path: 'type',
            name: 'daily-money-type',
            component: () => import('@/views/daily/money/type/index.vue'),
            meta: {
              name: '费用类别',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-money-type'
            }
          },
          {
            path: 'in',
            name: 'daily-money-olders',
            component: () => import('@/views/daily/money/olders/index.vue'),
            meta: {
              name: '老人费用管理',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-money-olders'
            }
          },
          {
            path: 'bill',
            name: 'daily-money-bill',
            component: () => import('@/views/daily/money/bill/index.vue'),
            meta: {
              name: '费用账单',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-money-bill'
            }
          },
          {
            path: 'consume',
            name: 'daily-money-consume',
            component: () => import('@/views/daily/money/consume/index.vue'),
            meta: {
              name: '消费登记',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-money-consume'
            }
          },
          {
            path: 'adjust',
            name: 'daily-money-adjust',
            component: () => import('@/views/daily/money/adjust/index.vue'),
            meta: {
              name: '费用调整',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-money-adjust'
            }
          },
        ]
      },
      // {
      //   path: 'health',
      //   name: 'daily-health',
      //   redirect: {
      //     name: 'daily-health-exam'
      //   },
      //   component: () => import('@/views/daily/health/index.vue'),
      //   meta: {
      //     name: '健康管理',
      //     icon: 'icon-jiankang',
      //     isSub: true,
      //     menuKey: 'daily-health'
      //   },
      //   children: [
      //     {
      //       path: 'exam',
      //       name: 'daily-health-exam',
      //       component: () => import('@/views/daily/health/exam/index.vue'),
      //       meta: {
      //         name: '体检登记',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-health-exam'
      //       }
      //     },
      //     {
      //       path: 'doctor',
      //       name: 'daily-health-doctor',
      //       component: () => import('@/views/daily/health/doctor/index.vue'),
      //       meta: {
      //         name: '就医登记',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-health-doctor'
      //       }
      //     },
      //     {
      //       path: 'look',
      //       name: 'daily-health-look',
      //       component: () => import('@/views/daily/health/look/index.vue'),
      //       meta: {
      //         name: '健康查看',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-health-look'
      //       }
      //     },
      //     {
      //       path: 'body',
      //       name: 'daily-health-body',
      //       component: () => import('@/views/daily/health/body/index.vue'),
      //       meta: {
      //         name: '生命体征监测',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-health-body'
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'medicine',
      //   name: 'daily-medicine',
      //   redirect: {
      //     name: 'daily-medicine-dictionary'
      //   },
      //   component: () => import('@/views/daily/medicine/index.vue'),
      //   meta: {
      //     name: '用药管理',
      //     icon: 'icon-jiankang',
      //     isSub: true,
      //     menuKey: 'daily-medicine'
      //   },
      //   children: [
      //     {
      //       path: 'dictionary',
      //       name: 'daily-medicine-dictionary',
      //       component: () => import('@/views/daily/medicine/dictionary/index.vue'),
      //       meta: {
      //         name: '药品字典',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-medicine-dictionary'
      //       }
      //     },
      //     {
      //       path: 'deposite',
      //       name: 'daily-medicine-deposite',
      //       component: () => import('@/views/daily/medicine/deposite/index.vue'),
      //       meta: {
      //         name: '药品缴存',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-medicine-deposite'
      //       }
      //     },
      //     {
      //       path: 'config',
      //       name: 'daily-medicine-config',
      //       component: () => import('@/views/daily/medicine/config/index.vue'),
      //       meta: {
      //         name: '用药设置',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-medicine-config'
      //       }
      //     },
      //     {
      //       path: 'history',
      //       name: 'daily-medicine-history',
      //       component: () => import('@/views/daily/medicine/history/index.vue'),
      //       meta: {
      //         name: '用药记录',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-medicine-history'
      //       }
      //     },
      //     {
      //       path: 'remain',
      //       name: 'daily-medicine-remain',
      //       component: () => import('@/views/daily/medicine/remain/index.vue'),
      //       meta: {
      //         name: '剩余用药',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-medicine-remain'
      //       }
      //     }
      //   ]
      // },
      {
        path: 'dining',
        name: 'daily-dining',
        redirect: {
          name: 'daily-dining-food'
        },
        component: () => import('@/views/daily/dining/index.vue'),
        meta: {
          name: '餐饮管理',
          icon: 'icon-canyin',
          isSub: true,
          menuKey: 'daily-dining'
        },
        children: [
          {
            path: 'food',
            name: 'daily-dining-food',
            component: () => import('@/views/daily/dining/food/index.vue'),
            meta: {
              name: '食物管理',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-dining-food'
            }
          },
          {
            path: 'recipe',
            name: 'daily-dining-recipe',
            component: () => import('@/views/daily/dining/recipe/index.vue'),
            meta: {
              name: '食谱管理',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-dining-recipe'
            }
          },
          {
            path: 'area',
            name: 'daily-dining-area',
            component: () => import('@/views/daily/dining/area/index.vue'),
            meta: {
              name: '送餐区域',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-dining-area'
            }
          },
          // {
          //   path: 'part',
          //   name: 'daily-dining-part',
          //   component: () => import('@/views/daily/dining/part/index.vue'),
          //   meta: {
          //     name: '分区备餐',
          //     icon: 'icon-youjiantou',
          //     isSub: false,
          //     menuKey: 'daily-dining-part'
          //   }
          // },
          {
            path: 'record',
            name: 'daily-dining-record',
            component: () => import('@/views/daily/dining/record/index.vue'),
            meta: {
              name: '送餐记录',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-dining-record'
            }
          }
        ]
      },
      {
        path: 'nurse',
        name: 'daily-nurse',
        redirect: {
          name: 'daily-nurse-fall'
        },
        component: () => import('@/views/daily/nurse/index.vue'),
        meta: {
          name: '安全看护',
          icon: 'icon-anquan',
          isSub: true,
          menuKey: 'daily-nurse'
        },
        children: [
          {
            path: 'fall',
            name: 'daily-nurse-fall',
            component: () => import('@/views/daily/nurse/fall/index.vue'),
            meta: {
              name: '跌倒报警',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-fall'
            }
          },
          {
            path: 'area',
            name: 'daily-nurse-area',
            component: () => import('@/views/daily/nurse/area/index.vue'),
            meta: {
              name: '报警区域',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-area'
            }
          },
          {
            path: 'device',
            name: 'daily-nurse-device',
            component: () => import('@/views/daily/nurse/device/index.vue'),
            meta: {
              name: '智能设备',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-device'
            }
          },
          {
            path: 'alarm',
            name: 'daily-nurse-alarm',
            component: () => import('@/views/daily/nurse/alarm/index.vue'),
            meta: {
              name: '报警查询',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-alarm'
            }
          },
          {
            path: 'record',
            name: 'daily-nurse-position',
            component: () => import('@/views/daily/nurse/position/index.vue'),
            meta: {
              name: '定位信息',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-position'
            }
          },
          {
            path: 'mattress',
            name: 'daily-nurse-mattress',
            component: () => import('@/views/daily/nurse/mattress/index.vue'),
            meta: {
              name: '床垫管理',
              icon: 'icon-youjiantou',
              isSub: false,
              menuKey: 'daily-nurse-mattress'
            }
          },
          // {
          //   path: 'page',
          //   name: 'daily-nurse-page',
          //   component: () => import('@/views/daily/nurse/page/index.vue'),
          //   meta: {
          //     name: '报警页面',
          //     icon: 'icon-youjiantou',
          //     isSub: false,
          //     menuKey: 'daily-nurse-page'
          //   }
          // },
        ]
      },
      // {
      //   path: 'assess',
      //   name: 'daily-assess',
      //   redirect: {
      //     name: 'daily-assess-write'
      //   },
      //   component: () => import('@/views/daily/assess/index.vue'),
      //   meta: {
      //     name: '评估管理',
      //     icon: 'icon-jiankang',
      //     isSub: true,
      //     menuKey: 'daily-assess'
      //   },
      //   children: [
      //     {
      //       path: 'write',
      //       name: 'daily-assess-write',
      //       component: () => import('@/views/daily/assess/write/index.vue'),
      //       meta: {
      //         name: '评估登记',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-assess-write'
      //       }
      //     },
      //     {
      //       path: 'ability',
      //       name: 'daily-assess-ability',
      //       component: () => import('@/views/daily/assess/ability/index.vue'),
      //       meta: {
      //         name: '能力评估',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-assess-ability'
      //       }
      //     },
      //     {
      //       path: 'apply',
      //       name: 'daily-assess-apply',
      //       component: () => import('@/views/daily/assess/apply/index.vue'),
      //       meta: {
      //         name: '评估申请',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-assess-apply'
      //       }
      //     },
      //     {
      //       path: 'search',
      //       name: 'daily-assess-search',
      //       component: () => import('@/views/daily/assess/search/index.vue'),
      //       meta: {
      //         name: '评估查询',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-assess-search'
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'family',
      //   name: 'daily-family',
      //   redirect: {
      //     name: 'daily-family-audit'
      //   },
      //   component: () => import('@/views/daily/family/index.vue'),
      //   meta: {
      //     name: '亲情关爱',
      //     icon: 'icon-jiankang',
      //     isSub: true,
      //     menuKey: 'daily-family'
      //   },
      //   children: [
      //     {
      //       path: 'audit',
      //       name: 'daily-family-audit',
      //       component: () => import('@/views/daily/family/audit/index.vue'),
      //       meta: {
      //         name: '图片审核',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-assess-write'
      //       }
      //     },
      //     {
      //       path: 'manage',
      //       name: 'daily-family-manage',
      //       component: () => import('@/views/daily/family/manage/index.vue'),
      //       meta: {
      //         name: '图片管理',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-family-manage'
      //       }
      //     },
      //     {
      //       path: 'apply',
      //       name: 'daily-family-reply',
      //       component: () => import('@/views/daily/family/reply/index.vue'),
      //       meta: {
      //         name: '咨询回复',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-family-reply'
      //       }
      //     },
      //     {
      //       path: 'birthday',
      //       name: 'daily-family-birthday',
      //       component: () => import('@/views/daily/family/birthday/index.vue'),
      //       meta: {
      //         name: '老人生日',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-family-birthday'
      //       }
      //     },
      //     {
      //       path: 'activity',
      //       name: 'daily-family-activity',
      //       component: () => import('@/views/daily/family/activity/index.vue'),
      //       meta: {
      //         name: '活动记录',
      //         icon: 'icon-youjiantou',
      //         isSub: false,
      //         menuKey: 'daily-family-activity'
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'config',
      //   name: 'daily-config',
      //   component: () => import('@/views/daily/config/index.vue'),
      //   meta: {
      //     name: '基础配置',
      //     icon: 'icon-jiankang',
      //     isSub: true,
      //     menuKey: 'daily-config'
      //   }
      // }
    ]

  },
  {
    path: '/institution',
    redirect: {
      name: 'daily-auth'
    },
    name: 'institution',
    component: () => import('@/views/institution/index.vue'),
    meta: {
      name: '机构事务',
      icon: 'icon-shequ',
      isSub: true,
      menuKey: 'institution'
    },
    children: [
      // {
      //   path: 'auth',
      //   name: 'institution-auth',
      //   component: () => import('@/views/institution/auth/index.vue'),
      //   meta: {
      //     name: '权限设置',
      //     icon: 'icon-shouye',
      //     menuKey: 'institution-auth'
      //   }
      // },
      {
        path: 'staff',
        name: 'institution-staff',
        redirect: {
          name: 'institution-staff-list'
        },
        component: () => import('@/views/institution/staff/index.vue'),
        meta: {
          name: '员工管理',
          icon: 'icon-user-refresh',
          menuKey: 'institution-staff',
        },
        children: [
          {
            path: 'list',
            name: 'institution-staff-list',
            component: () => import('@/views/institution/staff/list.vue'),
            meta: {
              name: '员工列表',
              required: false,
              menuKey: 'institution-staff'
            }
          },
          {
            path: 'add',
            name: 'institution-staff-add',
            component: () => import('@/views/institution/staff/add.vue'),
            meta: {
              name: '添加员工',
              required: false,
              menuKey: 'institution-staff'
            }
          }
        ]
      },
      {
        path: 'beds',
        name: 'institution-beds',
        component: () => import('@/views/institution/beds/index.vue'),
        meta: {
          name: '床位管理',
          icon: 'icon-chuang',
          menuKey: 'institution-beds',
          isSub: true
        },
        children: [
          {
            path: 'type',
            name: 'institution-beds-type',
            redirect: {
              name: "institution-beds-type-list"
            },
            component: () => import('@/views/institution/beds/type/index.vue'),
            meta: {
              name: '床位类型',
              icon: 'icon-youjiantou',
              menuKey: 'institution-beds-type'
            },
            children: [
              {
                path: 'list',
                name: "institution-beds-type-list",
                component: () => import('@/views/institution/beds/type/list.vue'),
                meta: {
                  required: false,
                  name: '类型列表',
                  menuKey: 'institution-beds-type'
                }
              },
              {
                path: 'add',
                name: "institution-beds-type-add",
                component: () => import('@/views/institution/beds/type/add.vue'),
                meta: {
                  required: false,
                  name: '类型列表',
                  menuKey: 'institution-beds-type'
                }
              }
            ]
          },
          {
            path: 'manage',
            name: 'institution-beds-manage',
            redirect: {
              name: "institution-beds-manage-add"
            },
            component: () => import('@/views/institution/beds/manage/index.vue'),
            meta: {
              name: '床位设置',
              icon: 'icon-youjiantou',
              menuKey: 'institution-beds-manage'
            },
            children: [
              {
                path: 'list',
                name: 'institution-beds-manage-list',
                component: () => import('@/views/institution/beds/manage/list.vue'),
                meta: {
                  required: false,
                  name: '床位列表',
                  menuKey: 'institution-beds-manage'
                }
              },
              {
                path: 'add',
                name: 'institution-beds-manage-add',
                component: () => import('@/views/institution/beds/manage/add.vue'),
                meta: {
                  required: false,
                  name: '添加床位',
                  menuKey: 'institution-beds-manage'
                }
              },
            ]
          }
        ]
      },
      // {
      //   path: 'finacial',
      //   name: 'institution-finacial',
      //   component: () => import('@/views/institution/finacial/index.vue'),
      //   meta: {
      //     name: '财务管理',
      //     icon: 'icon-jiankang',
      //     menuKey: 'institution-finacial'
      //   }
      // },
      // {
      //   path: 'property',
      //   name: 'institution-property',
      //   component: () => import('@/views/institution/property/index.vue'),
      //   meta: {
      //     name: '资产管理',
      //     icon: 'icon-jiankang',
      //     menuKey: 'institution-property'
      //   }
      // },
      // {
      //   path: 'storage',
      //   name: 'institution-storage',
      //   redirect: {
      //     name: 'institution-storage-goods'
      //   },
      //   component: () => import('@/views/institution/storage/index.vue'),
      //   meta: {
      //     name: '仓库管理',
      //     icon: 'icon-jiankang',
      //     menuKey: 'institution-storage',
      //     isSub: true
      //   },
      //   children: [
      //     {
      //       path: 'goods',
      //       name: 'institution-storage-goods',
      //       component: () => import('@/views/institution/storage/goods/index.vue'),
      //       meta: {
      //         name: '物资设置',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-goods'
      //       }
      //     },
      //     {
      //       path: 'config',
      //       name: 'institution-storage-config',
      //       component: () => import('@/views/institution/storage/config/index.vue'),
      //       meta: {
      //         name: '仓库设置',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-config'
      //       }
      //     },
      //     {
      //       path: 'in',
      //       name: 'institution-storage-in',
      //       component: () => import('@/views/institution/storage/in/index.vue'),
      //       meta: {
      //         name: '入库管理',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-in'
      //       }
      //     },
      //     {
      //       path: 'out',
      //       name: 'institution-storage-out',
      //       component: () => import('@/views/institution/storage/out/index.vue'),
      //       meta: {
      //         name: '出库管理',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-out'
      //       }
      //     },
      //     {
      //       path: 'search',
      //       name: 'institution-storage-search',
      //       component: () => import('@/views/institution/storage/search/index.vue'),
      //       meta: {
      //         name: '库存查询',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-search'
      //       }
      //     },
      //     {
      //       path: 'month',
      //       name: 'institution-storage-month',
      //       component: () => import('@/views/institution/storage/month/index.vue'),
      //       meta: {
      //         name: '月度盘存',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-month'
      //       }
      //     },
      //     {
      //       path: 'transfer',
      //       name: 'institution-storage-transfer',
      //       component: () => import('@/views/institution/storage/transfer/index.vue'),
      //       meta: {
      //         name: '物资调拨',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-transfer'
      //       }
      //     },
      //     {
      //       path: 'account',
      //       name: 'institution-storage-account',
      //       component: () => import('@/views/institution/storage/account/index.vue'),
      //       meta: {
      //         name: '库存盘点',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-config'
      //       }
      //     },
      //     {
      //       path: 'money',
      //       name: 'institution-storage-money',
      //       component: () => import('@/views/institution/storage/money/index.vue'),
      //       meta: {
      //         name: '库存金额',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-storage-money'
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'emergency',
      //   name: 'institution-emergency',
      //   component: () => import("@/views/institution/emergency/index.vue"),
      //   meta: {
      //     name: '突发事件管理',
      //     icon: 'icon-shouye',
      //     menuKey: 'institution-emergency',
      //     isSub: true
      //   },
      //   children: [
      //     {
      //       path: 'write',
      //       name: 'institution-emergency-write',
      //       component: () => import('@/views/institution/emergency/write/index.vue'),
      //       meta: {
      //         name: '事件登记',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-emergency-write'
      //       }
      //     },
      //     {
      //       path: 'search',
      //       name: 'institution-emergency-search',
      //       component: () => import('@/views/institution/emergency/search/index.vue'),
      //       meta: {
      //         name: '事件查询',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'institution-emergency-search'
      //       }
      //     },

      //   ]
      // },
      // {
      //   path: 'info',
      //   name: 'institution-info',
      //   component: () => import('@/views/institution/info/index.vue'),
      //   meta: {
      //     name: '机构信息',
      //     icon: 'icon-shouye',
      //     menuKey: 'institution-info'
      //   }
      // }
    ]
  },
  {
    path: '/nurse',
    redirect: {
      name: 'nurse-staff'
    },
    name: 'nurse',
    component: () => import('@/views/nurse/index.vue'),
    meta: {
      name: '护理管理',
      icon: 'icon-shebeileixing',
      isSub: true,
      menuKey: 'nurse'
    },
    children: [
      {
        path: 'staff',
        name: 'nurse-staff',
        redirect: { name: 'nurse-staff-list' },
        component: () => import('@/views/nurse/staff/index.vue'),
        meta: {
          name: '护理员管理',
          icon: 'icon-hushi-',
          menuKey: 'nurse-staff'
        },
        children: [
          {
            path: 'list',
            name: 'nurse-staff-list',
            component: () => import('@/views/nurse/staff/list.vue'),
            meta: {
              required: false,
              name: '护理员列表',
              menuKey: 'nurse-staff'
            }
          },
          {
            path: 'add',
            name: 'nurse-staff-add',
            component: () => import('@/views/nurse/staff/add.vue'),
            meta: {
              required: false,
              name: '添加护理员',
              menuKey: 'nurse-staff'
            }
          }
        ]

      },
      {
        path: 'config',
        name: 'nurse-config',
        component: () => import('@/views/nurse/config/index.vue'),
        meta: {
          name: '护理设置',
          icon: 'icon-shezhi',
          menuKey: 'nurse-config',
          isSub: true
        },
        children: [
          {
            path: 'project',
            name: 'nurse-config-project',
            redirect: {
              name: 'nurse-config-project-list'
            },
            component: () => import('@/views/nurse/config/project/index.vue'),
            meta: {
              name: '项目管理',
              icon: 'icon-youjiantou',
              menuKey: 'nurse-config-project'
            },
            children: [
              {
                path: 'list',
                name: 'nurse-config-project-list',
                component: () => import('@/views/nurse/config/project/list.vue'),
                meta: {
                  required: false,
                  name: '项目列表',
                  menuKey: 'nurse-config-project'
                }
              },
              {
                path: 'add',
                name: 'nurse-config-project-add',
                component: () => import('@/views/nurse/config/project/add.vue'),
                meta: {
                  required: false,
                  name: '添加项目',
                  menuKey: 'nurse-config-project'
                }
              },
            ]
          },
          {
            path: 'level',
            name: 'nurse-config-level',
            component: () => import('@/views/nurse/config/level/index.vue'),
            meta: {
              name: '级别设置',
              icon: 'icon-youjiantou',
              menuKey: 'nurse-config-level'
            }
          },
          {
            path: 'area',
            name: 'nurse-config-area',
            component: () => import('@/views/nurse/config/area/index.vue'),
            meta: {
              name: '区域设置',
              icon: 'icon-youjiantou',
              menuKey: 'nurse-config-area'
            }
          }
        ]
      },
      // {
      //   path: 'verify',
      //   name: 'nurse-verify',
      //   redirect: {
      //     name: 'nurse-verify-project'
      //   },
      //   component: () => import('@/views/nurse/verify/index.vue'),
      //   meta: {
      //     name: '检查设置',
      //     icon: 'icon-jiankang',
      //     menuKey: 'nurse-verify',
      //     isSub: true
      //   },
      //   children: [
      //     {
      //       path: 'project',
      //       name: 'nurse-verify-project',
      //       component: () => import('@/views/nurse/verify/project/index.vue'),
      //       meta: {
      //         name: '检查项目设置',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-verify-project'
      //       }
      //     },
      //     {
      //       path: 'list',
      //       name: 'nurse-verify-list',
      //       component: () => import('@/views/nurse/verify/list/index.vue'),
      //       meta: {
      //         name: '检查单设置',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-verify-list'
      //       }
      //     },
      //     {
      //       path: 'inspection',
      //       name: 'nurse-verify-inspection',
      //       component: () => import('@/views/nurse/verify/inspection/index.vue'),
      //       meta: {
      //         name: '巡检设置',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-verify-inspection'
      //       }
      //     },
      //   ]
      // },
      {
        path: 'inspection',
        name: 'nurse-inspection',
        redirect: {
          name: 'nurse-inspection-plan'
        },
        component: () => import("@/views/nurse/inspection/index.vue"),
        meta: {
          name: '巡检管理',
          icon: 'icon-luxian',
          menuKey: 'nurse-inspection',
          isSub: true
        },
        children: [
          {
            path: 'plan',
            name: 'nurse-inspection-plan',
            redirect: {
              name: 'nurse-inspection-plan-list'
            },
            component: () => import('@/views/nurse/inspection/plan/index.vue'),
            meta: {
              name: '巡检计划设置',
              icon: 'icon-youjiantou',
              menuKey: 'nurse-inspection-plan'
            },
            children: [
              {
                path: 'list',
                name: 'nurse-inspection-plan-list',
                component: () => import('@/views/nurse/inspection/plan/list.vue'),
                meta: {
                  required: false,
                  name: '巡检计划列表',
                  menuKey: 'nurse-inspection-plan'
                }
              },
              // {
              //   path: 'add',
              //   name: 'nurse-inspection-plan-add',
              //   component: () => import('@/views/nurse/inspection/plan/add.vue'),
              //   meta: {
              //     required: false,
              //     name: '添加巡检计划',
              //     menuKey: 'nurse-inspection-plan'
              //   }
              // }
            ]
          },
          // {
          //   path: 'stastistics',
          //   name: 'nurse-inspection-stastistics',
          //   component: () => import('@/views/nurse/inspection/plan/index.vue'),
          //   meta: {
          //     name: '护理员巡检统计',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'nurse-inspection-stastistics'
          //   }
          // },
          // {
          //   path: 'search',
          //   name: 'nurse-inspection-search',
          //   component: () => import('@/views/nurse/inspection/search/index.vue'),
          //   meta: {
          //     name: '护理员巡检查询',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'nurse-inspection-search'
          //   }
          // },
          // {
          //   path: 'room',
          //   name: 'nurse-inspection-room',
          //   component: () => import('@/views/nurse/inspection/room/index.vue'),
          //   meta: {
          //     name: '巡检房间统计',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'nurse-inspection-room'
          //   }
          // },
        ]
      },
      // {
      //   path: 'work',
      //   name: 'nurse-work',
      //   redirect: {
      //     name: 'nurse-work-time'
      //   },
      //   component: () => import('@/views/nurse/work/index.vue'),
      //   meta: {
      //     name: '工作监管',
      //     icon: 'icon-jiankang',
      //     menuKey: 'nurse-work',
      //     isSub: true
      //   },
      //   children: [
      //     {
      //       path: 'time',
      //       name: 'nurse-work-time',
      //       component: () => import('@/views/nurse/work/time/index.vue'),
      //       meta: {
      //         name: '服务时间统计',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-time'
      //       }
      //     },
      //     {
      //       path: 'jobsearch',
      //       name: 'nurse-work-jobsearch',
      //       component: () => import('@/views/nurse/work/jobsearch/index.vue'),
      //       meta: {
      //         name: '护理工作查询',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-jobsearch'
      //       }
      //     },
      //     {
      //       path: 'jobcount',
      //       name: 'nurse-work-jobcount',
      //       component: () => import('@/views/nurse/work/jobcount/index.vue'),
      //       meta: {
      //         name: '护理工作统计',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-jobcount'
      //       }
      //     },
      //     {
      //       path: 'nursesearch',
      //       name: 'nurse-work-nursesearch',
      //       component: () => import('@/views/nurse/work/nursesearch/index.vue'),
      //       meta: {
      //         name: '护理员考核查询',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-nursesearch'
      //       }
      //     },
      //     {
      //       path: 'nursecount',
      //       name: 'nurse-work-nursecount',
      //       component: () => import('@/views/nurse/work/nursecount/index.vue'),
      //       meta: {
      //         name: '护理员考核统计',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-nursecount'
      //       }
      //     },
      //     {
      //       path: 'oldercount',
      //       name: 'nurse-work-oldercount',
      //       component: () => import('@/views/nurse/work/oldercount/index.vue'),
      //       meta: {
      //         name: '老人护理情况统计',
      //         icon: 'icon-youjiantou',
      //         menuKey: 'nurse-work-oldercount'
      //       }
      //     },
      //   ]
      // }
    ]
  },
  {
    path: '/count',
    redirect: {
      name: 'count-operate-month'
    },
    name: 'count',
    component: () => import('@/views/count/index.vue'),
    meta: {
      name: '统计分析',
      icon: 'icon-tubiaozhexiantu',
      isSub: true,
      menuKey: 'count'
    },
    children: [
      {
        path: 'operate',
        name: 'count-operate',
        component: () => import('@/views/count/operate/index.vue'),
        meta: {
          name: '机构运营',
          icon: 'icon-yunying',
          menuKey: 'count-config',
          isSub: true
        },
        children: [
          // {
          //   path: 'month',
          //   name: 'count-operate-month',
          //   component: () => import('@/views/count/operate/month/index.vue'),
          //   meta: {
          //     name: '机构运营月报',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'count-operate-month'
          //   }
          // },
          // {
          //   path: 'excel',
          //   name: 'count-operate-excel',
          //   component: () => import('@/views/count/operate/excel/index.vue'),
          //   meta: {
          //     name: '老人出入报表',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'count-operate-excel'
          //   }
          // },
          {
            path: 'inout',
            name: 'count-operate-inout',
            component: () => import('@/views/count/operate/inout/index.vue'),
            meta: {
              name: '老人出入分析',
              icon: 'icon-youjiantou',
              menuKey: 'count-operate-inout'
            }
          },
          {
            path: 'beds',
            name: 'count-operate-beds',
            component: () => import('@/views/count/operate/beds/index.vue'),
            meta: {
              name: '床位使用分析',
              icon: 'icon-youjiantou',
              menuKey: 'count-operate-beds'
            }
          },
          // {
          //   path: 'status',
          //   name: 'count-operate-status',
          //   component: () => import('@/views/count/operate/status/index.vue'),
          //   meta: {
          //     name: '床位状态统计',
          //     icon: 'icon-youjiantou',
          //     menuKey: 'count-operate-status'
          //   }
          // },
          {
            path: 'percent',
            name: 'count-operate-percent',
            component: () => import('@/views/count/operate/percent/index.vue'),
            meta: {
              name: '入住率分析',
              icon: 'icon-youjiantou',
              menuKey: 'count-operate-percent'
            }
          }
        ]
      },
      // {
      //   path: 'grant',
      //   name: 'count-grant',
      //   component: () => import('@/views/count/grant/index.vue'),
      //   meta: {
      //     name: '补贴统计',
      //     icon: 'icon-jiankang',
      //     menuKey: 'count-grant',
      //   },
      // }
    ]
  },
  {
    path: '/business',
    redirect: {
      name: 'business-apply'
    },
    name: 'business',
    component: () => import('@/views/business/index.vue'),
    meta: {
      name: '业务系统',
      icon: 'icon-renwufankui',
      isSub: true,
      menuKey: 'business'
    },
    children: [
      {
        path: 'apply',
        name: 'business-apply',
        redirect: {
          name: 'business-apply-list'
        },
        component: () => import('@/views/business/apply/index.vue'),
        meta: {
          name: '补贴申报',
          icon: 'icon-jiankang',
          menuKey: 'business-apply'
        },
        children: [
          {
            path: 'list',
            name: 'business-apply-list',
            component: () => import('@/views/business/apply/list.vue'),
            meta: {
              required: false,
              name: '补贴申报列表',
              menuKey: 'business-apply'
            }
          },
          {
            path: 'add',
            name: 'business-apply-add',
            component: () => import('@/views/business/apply/add.vue'),
            meta: {
              required: false,
              name: '发起补贴申报',
              menuKey: 'business-apply'
            }
          },
        ]
      },
      // {
      //   path: 'operate',
      //   name: 'business-operate',
      //   redirect: { name: "business-operate-list" },
      //   component: () => import('@/views/business/operate/index.vue'),
      //   meta: {
      //     name: '运营补贴',
      //     icon: 'icon-fankui3',
      //     menuKey: 'business-operate'
      //   },
      //   children: [
      //     {
      //       path: 'list',
      //       name: 'business-operate-list',
      //       component: () => import('@/views/business/operate/list.vue'),
      //       meta: {
      //         required: false,
      //         name: '运营补贴列表',
      //         menuKey: 'business-operate'
      //       }
      //     },
      //     {
      //       path: 'add',
      //       name: 'business-operate-add',
      //       component: () => import('@/views/business/operate/add.vue'),
      //       meta: {
      //         required: false,
      //         name: '申请运营补贴',
      //         menuKey: 'business-operate'
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'age',
      //   name: 'business-age',
      //   redirect: {
      //     name: 'business-age-list'
      //   },
      //   component: () => import('@/views/business/age/index.vue'),
      //   meta: {
      //     name: '高龄补贴',
      //     icon: 'icon-edit',
      //     menuKey: 'business-age'
      //   },
      //   children: [
      //     {
      //       path: 'list',
      //       name: 'business-age-list',
      //       component: () => import('@/views/business/age/list.vue'),
      //       meta: {
      //         required: false,
      //         name: '高龄补贴列表',
      //         menuKey: 'business-age'
      //       }
      //     },
      //     {
      //       path: 'add',
      //       name: 'business-age-add',
      //       component: () => import('@/views/business/age/add.vue'),
      //       meta: {
      //         required: false,
      //         name: '申请高龄补贴',
      //         menuKey: 'business-age'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  {
    path: '/system',
    redirect: 'system-users',
    name: 'system',
    component: () => import('@/views/system/index.vue'),
    meta: {
      name: '系统管理',
      icon: 'icon-shezhi',
      isSub: true,
      menuKey: 'system'
    },
    children: [
      {
        path: 'users',
        name: 'system-users',
        redirect: {
          name: 'system-users-list'
        },
        component: () => import('@/views/system/users/index.vue'),
        meta: {
          name: '用户管理',
          icon: 'icon-my',
          menuKey: 'system-users'
        },
        children: [
          {
            path: 'list',
            name: 'system-users-list',
            component: () => import('@/views/system/users/list.vue'),
            meta: {
              required: false,
              name: '用户列表',
              menuKey: 'system-users'
            }
          },
          {
            path: 'add',
            name: 'system-users-add',
            component: () => import('@/views/system/users/add.vue'),
            meta: {
              required: false,
              name: '添加用户',
              menuKey: 'system-users'
            }
          },
          {
            path: 'edit',
            name: 'system-users-edit',
            component: () => import('@/views/system/users/edit.vue'),
            meta: {
              required: false,
              name: '编辑用户',
              menuKey: 'system-users'
            }
          },
        ]
      },
      {
        path: 'roles',
        name: 'system-roles',
        redirect: {
          name: 'system-roles-list'
        },
        component: () => import('@/views/system/roles/index.vue'),
        meta: {
          name: '角色管理',
          icon: 'icon-i',
          menuKey: 'system-roles'
        },
        children: [
          {
            path: 'list',
            name: 'system-roles-list',
            component: () => import('@/views/system/roles/list.vue'),
            meta: {
              required: false,
              name: '角色列表',
              menuKey: 'system-roles'
            }
          },
          {
            path: 'add',
            name: 'system-roles-add',
            component: () => import('@/views/system/roles/add.vue'),
            meta: {
              required: false,
              name: '添加角色',
              menuKey: 'system-roles'
            }
          },
        ]
      },
    ]
  }

]
export default dynamicRoutes
