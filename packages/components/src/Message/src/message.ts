export interface MessageOptions {
  type: 'info' | 'success' | 'error' | 'warning'
  message: string
  duration?: number
}

export interface MessageProps extends MessageOptions {
  id: string
}
