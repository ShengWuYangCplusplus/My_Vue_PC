# jygtwo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###
出了问题 首先去检查 单词拼写是否错误   被这个坑好多回了

###整体规范
js文件名  文件夹名 统一用小写英文单词  中间 用  -   隔开
类名 函数名 方法名  用小驼峰 写法
尽量少用var   用let 和const

vue文件  template里面的  组件 顺序  要和  script里data的 数据顺序 由上到下对应 方便阅读
服务商(养老机构  服务商  餐厅  社区 ) 和 服务老人 都是 抽离出来可以看成各自的对象的




###目录说明 

views  放页面文件   每个页面里的components文件夹 放该页面的共用组件 或者可以抽离出来看起来简洁的组件部分

###css部分


elment-ui
表单size   统一用medium   表格size统一用mini

表单  labelWidth  120px

表格 序号 宽度 100px


###js部分  
每个组件里面的方法时独立的  调用也是独立的  所以可以统一命名的  所有接口方法其实也是可以统一封装 统一管理 的  暂时先不做
es6语法 对象结构   func({...obj})  对应的方法里 todo({item1,item2,item3})  

###http请求
httpconfig里面的  !!!  delone 命名  删除方法



导航路由跳转

返回用  res   错误 用error

变量防护替换 res.data.map()方法  在 具体的页面里面实现 因为字段翻译值可以对照着 表格的columns来看 方便对照着值  
主要为了避免每次 在每个组件里面引入http方法  用全局$apis  然后再在各个页面里面写具体的get post等方法



表格点击跳转  
goService 跳到服务商列表
goOlder  跳掉老人列表相关


######命名单词部分
命名不用复数  不需要加s  older默认就是olders   单个的话会加 oneOlder
ID不采用驼峰写法  用全大写

###分页命名
currentPage 当前页  pageSize   分页大小  

###el-tab命名
all  表示所有  search 表示搜索结果   wati表示待结算 待评估等  done表示已评估 已结算等等
首次进入加载所有数据 然后请求 所有tab标签页的数据的第一页数据加载出来即可

###element-ui这个UI框架相关
 el-dialog  append-to-body设置为true

###
养老机构 olderorg
序号  num
老人身份证号  olderID
性别 sex   后端是gender
老人手机号 olderPhone
老人特长 specialty
服务商 serviceProvider
服务商名称 providerName
服务商资讯   providerInfo
服务商结算  servicesettle
结算方式 payMethod  
dealNum  交易号
bussinessOrderNum  商户订单号
grantTargetAccount  发放至
subsidy 补贴
grant  发放
fund 基金
dining  餐厅 
homemake  家政
speciality   特长
profession   职业
serviceAim  服务意向

staff   服务商服务人员

olderorg   养老机构 
evaluation  评价
complain  投诉
check  考核
accountcheck对账
postman  送餐员
            
联系电话    13522565502
联系人   张孙梅

###路由命名规范


先是   serviceindex  
再是   homemakemanage>homemakelist || homemakedetailindex
homemakedetailindex>homemakebaseinfo||homemakeserviceproject

家政服务商详情  里面的  服务项目的详情

详情里面的服务项目 有个列表 但是 增删改 就不需要路由跳转了  用dialog即可  不用四级路由

路由路径  第一级菜单 和第一级菜单的子路由  写redirect  和写 path  写成 和 列表管理  其实是一样的


服务商管理 家政服务商管理里面   的  服务人员管理  有四级路由    服务项目添加啥的用dialog做不用子路由


