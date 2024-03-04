import gulp from 'gulp'
import ts from 'gulp-typescript'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import shell from 'shelljs'

// __dirname是CJS的变量
const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../')

// src读取 dest创建
const { src, dest } = gulp

// 删除打包产物 针对上一次的打包产物
export const removeDist = async () => {
  shell.rm('-rf', `${componentPath}/es`)
  shell.rm('-rf', `${componentPath}/types`)
}

// 构建css
export const buildRootStyle = () => {
  return src(`${componentPath}/src/style.ts`)
    .pipe(
      ts({
        module: 'ESNext',
        moduleResolution: 'node',
      }),
    )
    .pipe(dest(`${componentPath}/es`))
}

// 构建每个组件下单独的css
export const buildComponentStyle = () => {
  return src(`${componentPath}/src/**/style/**.ts`)
    .pipe(
      ts({
        module: 'ESNext',
        moduleResolution: 'node',
      }),
    )
    .pipe(dest(`${componentPath}/es`))
}

// 打包组件
export const buildComponent = async () => {
  shell.cd(componentPath)
  shell.exec('vite build')
}
