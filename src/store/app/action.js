/**
 * Created by my9074 on 2017/4/8.
 */
import * as type from './mutations_types'
import * as api from '../../api/app'

export default {
  [type.FETCH_APPS] (context, playload) {
    let {curGroupId} = playload
    return api.listApps(curGroupId)
      .then(data => {
        context.commit(type.FETCH_APPS, data.data)
        return data
      })
  }
}
