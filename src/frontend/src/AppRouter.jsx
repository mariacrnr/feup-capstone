import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/Layout/PageLayout";
import VariablesPage from "./pages/VariablesPage";


const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                exact
                path="/"
                key="/"
                element={
                    <PageLayout key="/">
                        <VariablesPage/>
                    </PageLayout>
                }
            />

        </Routes>
    </BrowserRouter>
);

export default AppRouter;