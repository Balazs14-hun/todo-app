export default interface Todo {
  id: number
  title: string
  description: string
  priority: 'Low' | 'Medium' | 'High'
  done: boolean
}
