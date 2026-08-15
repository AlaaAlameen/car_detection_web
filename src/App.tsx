import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage, AuthRoutes } from "./features/auth";
import { DashboardPage, DashboardRoutes } from "./features/dashboard";
import { VehiclesPage, VehiclesRoutes } from "./features/vehicles";
import { VideoUploadPage, VideoRoutes } from "./features/video";
import {
  AnalysisResultsPage,
  AnalysisRoutes,
  VehicleDetailsPage,
} from "./features/analysis";
import { BlacklistPage, BlacklistRoutes } from "./features/blacklist";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={DashboardRoutes.home} replace />}
          />
          <Route path={AuthRoutes.login} element={<LoginPage />} />
          <Route path={DashboardRoutes.home} element={<DashboardPage />} />
          <Route path={VehiclesRoutes.list} element={<VehiclesPage />} />
          <Route path={BlacklistRoutes.list} element={<BlacklistPage />} />
          <Route path={VideoRoutes.upload} element={<VideoUploadPage />} />
          <Route
            path={VideoRoutes.list}
            element={<Navigate to={VideoRoutes.upload} replace />}
          />
          <Route
            path={AnalysisRoutes.results}
            element={<AnalysisResultsPage />}
          />
          <Route
            path={AnalysisRoutes.details}
            element={<VehicleDetailsPage />}
          />
          <Route
            path="*"
            element={<Navigate to={DashboardRoutes.home} replace />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
