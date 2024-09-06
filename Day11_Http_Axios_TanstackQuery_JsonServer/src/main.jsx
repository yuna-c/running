import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// yarn add axios

// yarn add json-server
// yarn add json-server -D # 개발 환경인 경우, -D 옵션을 함께 입력합니다.

// yarn json-server db.json --port 4000
// https://github.com/typicode/json-server

// 확장 : thunder client
// yarn list

// yarn add @tanstack/react-query (QUERY CLIENT)
// https://tanstack.com/query/latest/docs/framework/react/installation#requirements

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  // <StrictMode></StrictMode>

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
