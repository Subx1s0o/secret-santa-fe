'use client'

import { useState, useRef, useCallback } from 'react'

export function useRandomIndex() {
  const [randomIndex, setRandomIndex] = useState<number | null>(null)
  const [selectedUser, setSelectedUser] = useState<any | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const randomize = useCallback((indices: number[], delay: number, users: any[]) => {
    if (intervalRef.current || timeoutRef.current) return // Запобігаємо повторному запуску

    // Обнуляємо вибраного користувача перед початком
    setSelectedUser(null)

    let availableIndices = [...indices] // Копія для роботи
    let lastSelectedIndex: number | null = null

    // Починаємо інтервал для вибору випадкових індексів
    intervalRef.current = setInterval(() => {
      if (availableIndices.length === 0) {
        clearInterval(intervalRef.current!) // Зупиняємо, якщо всі індекси використані
        intervalRef.current = null
        return
      }

      const randomIdx = Math.floor(Math.random() * availableIndices.length)
      const selectedIndex = availableIndices[randomIdx]

      setRandomIndex(selectedIndex) // Оновлюємо індекс випадкового користувача
      lastSelectedIndex = selectedIndex // Зберігаємо останній вибраний індекс
    }, delay)

    // Автоматичний стоп через 5 секунд
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      timeoutRef.current = null

      // Після завершення інтервалу, обираємо останнього користувача
      if (lastSelectedIndex !== null && lastSelectedIndex >= 0 && lastSelectedIndex < users.length) {
        const user = users[lastSelectedIndex] // Вибираємо користувача за останнім індексом
        setSelectedUser(user) // Оновлюємо selectedUser
      }
    }, 5000)
  }, [])

  return {
    randomIndex,
    selectedUser,
    randomize
  }
}
