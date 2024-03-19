import React from "react";
import { Route, Routes } from "react-router-dom";
import { applicationRoutes } from "../constants/RouteConstants";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ListPage from "../Pages/ListPage/ListPage";
import Layout from "../common/components/Layout/Layout";

function ApplicationRouting() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={applicationRoutes.dashboad} element={<Dashboard />} />
				<Route path={applicationRoutes.list} element={<ListPage />} />
			</Route>
		</Routes>
	);
}

export default ApplicationRouting;
