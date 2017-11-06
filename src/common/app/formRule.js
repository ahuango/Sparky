function baseFormRule () {
  return {
    name: [
      {required: true, message: '请输入名称', trigger: 'blur'},
      { max: 25, message: '长度不能超过25个字符', trigger: 'blur' },
      {pattern: /^[a-z0-9]+$/, message: '名称只能包含小写字母和数字', trigger: 'blur'}
    ],
    image: [
      {required: true, message: '请输入镜像地址', trigger: 'blur'}
    ],
    vcluster: [
      {required: true, message: '请选择集群', trigger: 'change'}
    ],
    group: [
      {required: true, message: '请选择应用组', trigger: 'change'}
    ],
    network: [
      {required: true, message: '请选择网络模式 ', trigger: 'change'}
    ],
    dockerNum: [
      {required: true, message: '容器个数不能为空'},
      {type: 'number', message: '容器个数必须为数字值'}
    ]
  }
}

const appendRule = {
  procedureMount: [
    {required: true, message: '请输入程序包挂载点', trigger: 'blur'}
  ]
}
function modelFormRule () {
  return Object.assign({}, baseFormRule(), appendRule)
}

export default {
  baseFormRule,
  modelFormRule
}
