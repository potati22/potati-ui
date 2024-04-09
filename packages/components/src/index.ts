import { makeInstaller } from './utils/install'
import installs from './installs'

export * from './components'

export default makeInstaller(installs) // 用于整体导入
