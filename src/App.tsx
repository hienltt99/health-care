import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RouterUrl } from "./constants";
import Home from "./views/home";
import MyRecord from "./views/my-record";
import ColumnPage from "./views/column";
import ButtonBackToTop from "./components/back-to-top";
import Layout from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={"...Loading"}>
        <Layout>
          <Routes>
            <Route path={RouterUrl.HOME} element={<Home/>}/>
            <Route path={RouterUrl.RECORDS} element={<MyRecord/>}/>
            <Route path={RouterUrl.COLUMN} element={<ColumnPage/>}/>
            <Route path="*" element={<Navigate to={RouterUrl.NOT_FOUND}/>}/>
          </Routes>
          <ButtonBackToTop/>
        </Layout>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
