import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
//
import { Home } from "@/pages/Home";
import { ProductDetail } from '@/pages/Product';
import { Login } from "@/pages/Login";

//
import { Layout } from "@/components/Layout";


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={ <ProductDetail /> } />
            <Route path="/login" element={<Login />}/>
          </Routes>
        </Layout>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
