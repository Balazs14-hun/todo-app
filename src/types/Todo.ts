export default interface Todo {
  id: number
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  done: boolean
}
