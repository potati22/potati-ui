<script setup>
import basic from '../examples/message/basic.vue'
</script>

# Message 消息提示

常用于主动操作后的反馈提示，一共有四种状态「消息、成功、错误、警告」

## 基础用法

从顶部出现，默认只显示3秒（当参数`duration`设置为0时，提示框需要调用返回的`close`方法，才会消失）

<basic></basic>

::: details 显示代码

```vue
<script lang="ts" setup>
function info() {
  PotMessage({
    type: 'info',
    message: '这是一条Info类型的消息',
  })
}

function success() {
  PotMessage({
    type: 'success',
    message: '这是一条Success类型的消息',
  })
}

function error() {
  PotMessage({
    type: 'error',
    message: '这是一条Error类型的消息',
  })
}

function warning() {
  PotMessage({
    type: 'warning',
    message: '这是一条Warning类型的消息',
  })
}
</script>
```

:::

## API

### 属性

| 属性名   | 说明                 | 类型     | 默认值 |
| -------- | -------------------- | -------- | ------ |
| type     | 提示类型，非必选     | `string` | `info` |
| message  | 消息内容，必选       | `string` | -      |
| duration | 消息停留时间，非必选 | `number` | `3000` |

### 方法

调用`PotMessage`或者`getCurrentInstance().appContext.config.globalProperties.$message`（完整导入可用）会返回当前 Message 的实例

如果需要手动关闭实例，可以调用它的 close 方法

| 名称  | 说明            | 类型       |
| ----- | --------------- | ---------- |
| close | 关闭当前Message | `Function` |
