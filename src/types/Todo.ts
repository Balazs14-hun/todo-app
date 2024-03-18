export type Priority = 'Low' | 'Medium' | 'High'

export interface Todo {
  id: number
  title: string
  description: string
  priority: Priority
  isChecked: boolean
  createdAt: string
}
