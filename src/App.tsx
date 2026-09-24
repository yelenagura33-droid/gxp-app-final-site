import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import FloatingButtons from './components/FloatingButtons' // 1. Импортируем кнопки

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      {/* 2. Размещаем плавающие кнопки вне Routes, 
          чтобы они были видны на всех страницах */}
      <FloatingButtons />
    </>
  )
}