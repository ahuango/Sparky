import actions from './action'
import mutations from './mutations'

const state = {
  graphInfo: {
    platformResource: {
      appGroupNum: 0,
      appNum: 0,
      clusterNum: 0,
      containerNum: 0,
      hostNum: 0,
      cpuTotal: 0,
      cpuUsed: 0,
      diskTotal: 0,
      diskUsed: 0,
      diskUtilizationRate: 0,
      cpuUtilizationRate: 0,
      memTotal: 0,
      memUsed: 0,
      memUtilizationRate: 0
    }
  }
}

export default {
  state,
  actions,
  mutations
}
