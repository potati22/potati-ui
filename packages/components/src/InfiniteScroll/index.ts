import InfiniteScroll from './src'

import type { App } from 'vue'
import type { SFCWithInstall } from '../utils/install'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export const PotInfiniteScroll = _InfiniteScroll
export default PotInfiniteScroll
