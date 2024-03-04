import gulp from 'gulp'
import {
  removeDist,
  buildRootStyle,
  buildComponentStyle,
  buildComponent,
} from './index.js'

const { series } = gulp

export default series(
  removeDist,
  buildComponent,
  buildComponentStyle,
  buildRootStyle,
)
