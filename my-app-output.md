# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `my-app`
- **Generated On**: 2026-08-17 11:58:52 (Europe/Istanbul / GMT+03:00)
- **Total Files Processed**: 170
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📁 public/
│   ├── 📄 favicon.svg (9.3 KB)
│   └── 📄 icons.svg (4.91 KB)
├── 📁 src/
│   ├── 📁 api/
│   │   └── 📄 axios.ts (527 B)
│   ├── 📁 assets/
│   │   ├── 📄 hero.png (12.75 KB)
│   │   ├── 📄 react.svg (4.03 KB)
│   │   └── 📄 vite.svg (8.5 KB)
│   ├── 📁 features/
│   │   ├── 📁 analysis/
│   │   │   ├── 📁 api/
│   │   │   │   ├── 📄 detectionDetails.types.ts (582 B)
│   │   │   │   ├── 📄 detections.endpoints.ts (226 B)
│   │   │   │   └── 📄 detections.types.ts (240 B)
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📄 AnalysisAlertsTable.tsx (6.16 KB)
│   │   │   │   ├── 📄 AnalysisFilterBar.tsx (2.27 KB)
│   │   │   │   ├── 📄 AnalysisResultsHeader.tsx (979 B)
│   │   │   │   ├── 📄 AnalysisStatsGrid.tsx (939 B)
│   │   │   │   ├── 📄 ConfidenceBar.tsx (768 B)
│   │   │   │   ├── 📄 index.ts (705 B)
│   │   │   │   ├── 📄 SeverityBadge.tsx (872 B)
│   │   │   │   ├── 📄 VehicleComparisonTable.tsx (2.85 KB)
│   │   │   │   ├── 📄 VehicleDetailsHeader.tsx (2.07 KB)
│   │   │   │   ├── 📄 VehicleDetailsSummaryCards.tsx (760 B)
│   │   │   │   ├── 📄 VehicleInfoCard.tsx (2.32 KB)
│   │   │   │   ├── 📄 VideoPlayerModal.tsx (3.42 KB)
│   │   │   │   └── 📄 VideoSummaryCard.tsx (2.58 KB)
│   │   │   ├── 📁 constants/
│   │   │   │   └── 📄 analysis.constants.ts (626 B)
│   │   │   ├── 📁 data/
│   │   │   │   ├── 📄 mockAnalysisData.ts (760 B)
│   │   │   │   └── 📄 mockVehicleDetailsData.ts (3.71 KB)
│   │   │   ├── 📁 hooks/
│   │   │   │   ├── 📄 useAnalysisResultsViewModel.ts (8.22 KB)
│   │   │   │   └── 📄 useVehicleDetailsViewModel.ts (3.16 KB)
│   │   │   ├── 📁 models/
│   │   │   │   ├── 📄 analysis.types.ts (1.1 KB)
│   │   │   │   └── 📄 vehicleDetails.types.ts (709 B)
│   │   │   ├── 📁 pages/
│   │   │   │   ├── 📄 AnalysisResultsPage.tsx (3.72 KB)
│   │   │   │   └── 📄 VehicleDetailsPage.tsx (1.66 KB)
│   │   │   ├── 📁 routes/
│   │   │   │   └── 📄 analysisRoutes.ts (485 B)
│   │   │   ├── 📁 services/
│   │   │   │   └── 📄 AnalysisService.ts (1.44 KB)
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📄 buildAnalysisStats.ts (2.21 KB)
│   │   │   │   ├── 📄 confidence.utils.ts (155 B)
│   │   │   │   ├── 📄 mapDetectionApiToUi.ts (855 B)
│   │   │   │   ├── 📄 mapDetectionDetailsToVehicleDetails.ts (2 KB)
│   │   │   │   ├── 📄 mapVideoToAnalysisSummary.ts (798 B)
│   │   │   │   ├── 📄 severity.utils.ts (784 B)
│   │   │   │   └── 📄 violationType.utils.ts (659 B)
│   │   │   └── 📄 index.ts (534 B)
│   │   ├── 📁 auth/
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📁 feature/
│   │   │   │   │   ├── 📄 index.ts (42 B)
│   │   │   │   │   └── 📄 LoginForm.tsx (1.95 KB)
│   │   │   │   ├── 📁 shared/
│   │   │   │   │   ├── 📄 AuthBrandPanel.tsx (5.25 KB)
│   │   │   │   │   ├── 📄 AuthSplitLayout.tsx (832 B)
│   │   │   │   │   ├── 📄 index.ts (156 B)
│   │   │   │   │   └── 📄 PasswordInput.tsx (1.93 KB)
│   │   │   │   └── 📁 ui/
│   │   │   │       ├── 📄 Button.tsx (1.22 KB)
│   │   │   │       ├── 📄 Checkbox.tsx (780 B)
│   │   │   │       ├── 📄 index.ts (110 B)
│   │   │   │       └── 📄 Input.tsx (1.27 KB)
│   │   │   ├── 📁 hooks/
│   │   │   │   └── 📄 useLoginViewModel.ts (638 B)
│   │   │   ├── 📁 models/
│   │   │   │   └── 📄 auth.types.ts (474 B)
│   │   │   ├── 📁 pages/
│   │   │   │   └── 📄 LoginPage.tsx (471 B)
│   │   │   ├── 📁 routes/
│   │   │   │   └── 📄 authRoutes.ts (135 B)
│   │   │   ├── 📁 services/
│   │   │   │   └── 📄 AuthService.ts (481 B)
│   │   │   ├── 📁 store/
│   │   │   │   └── 📄 authStore.ts (623 B)
│   │   │   ├── 📁 validators/
│   │   │   │   └── 📄 loginSchema.ts (604 B)
│   │   │   └── 📄 index.ts (329 B)
│   │   ├── 📁 blacklist/
│   │   │   ├── 📁 api/
│   │   │   │   ├── 📄 blacklist.endpoints.ts (152 B)
│   │   │   │   └── 📄 blacklist.types.ts (1023 B)
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📄 BlacklistFilters.tsx (3.42 KB)
│   │   │   │   ├── 📄 BlacklistHeader.tsx (969 B)
│   │   │   │   ├── 📄 BlacklistStats.tsx (957 B)
│   │   │   │   ├── 📄 BlacklistTable.tsx (5.78 KB)
│   │   │   │   ├── 📄 DeleteConfirmModal.tsx (2.75 KB)
│   │   │   │   ├── 📄 EditBlacklistModal.tsx (4.54 KB)
│   │   │   │   └── 📄 index.ts (335 B)
│   │   │   ├── 📁 data/
│   │   │   ├── 📁 hooks/
│   │   │   │   └── 📄 useBlacklistViewModel.ts (10.2 KB)
│   │   │   ├── 📁 models/
│   │   │   │   └── 📄 blacklist.types.ts (1.3 KB)
│   │   │   ├── 📁 pages/
│   │   │   │   └── 📄 BlacklistPage.tsx (3.53 KB)
│   │   │   ├── 📁 routes/
│   │   │   │   └── 📄 blacklistRoutes.ts (161 B)
│   │   │   ├── 📁 services/
│   │   │   │   └── 📄 BlacklistService.ts (1.32 KB)
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📄 mapBlacklistApiToUi.ts (942 B)
│   │   │   │   └── 📄 priority.utils.ts (1.62 KB)
│   │   │   └── 📄 index.ts (517 B)
│   │   ├── 📁 dashboard/
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📁 feature/
│   │   │   │   │   ├── 📄 AlertsSection.tsx (996 B)
│   │   │   │   │   ├── 📄 AnalyticsSection.tsx (1.09 KB)
│   │   │   │   │   ├── 📄 index.ts (212 B)
│   │   │   │   │   ├── 📄 ScansChartSection.tsx (409 B)
│   │   │   │   │   └── 📄 StatsSection.tsx (1.09 KB)
│   │   │   │   ├── 📁 shared/
│   │   │   │   │   ├── 📄 DashboardLayout.tsx (1.32 KB)
│   │   │   │   │   ├── 📄 icons.tsx (7.47 KB)
│   │   │   │   │   ├── 📄 index.ts (166 B)
│   │   │   │   │   ├── 📄 Sidebar.tsx (3.22 KB)
│   │   │   │   │   └── 📄 Topbar.tsx (2.87 KB)
│   │   │   │   └── 📁 ui/
│   │   │   │       ├── 📄 AlertItem.tsx (1.31 KB)
│   │   │   │       ├── 📄 BarChart.tsx (1.47 KB)
│   │   │   │       ├── 📄 CardContainer.tsx (796 B)
│   │   │   │       ├── 📄 index.ts (306 B)
│   │   │   │       ├── 📄 LineChart.tsx (2.95 KB)
│   │   │   │       ├── 📄 PieChart.tsx (2.86 KB)
│   │   │   │       ├── 📄 ProgressCircle.tsx (1.81 KB)
│   │   │   │       └── 📄 StatCard.tsx (1.64 KB)
│   │   │   ├── 📁 data/
│   │   │   │   └── 📄 mockDashboardData.ts (4.67 KB)
│   │   │   ├── 📁 hooks/
│   │   │   │   └── 📄 useDashboardViewModel.ts (1.77 KB)
│   │   │   ├── 📁 models/
│   │   │   │   └── 📄 dashboard.types.ts (1.28 KB)
│   │   │   ├── 📁 pages/
│   │   │   │   └── 📄 DashboardPage.tsx (1.54 KB)
│   │   │   ├── 📁 routes/
│   │   │   │   └── 📄 dashboardRoutes.ts (161 B)
│   │   │   ├── 📁 services/
│   │   │   │   └── 📄 DashboardService.ts (438 B)
│   │   │   ├── 📁 store/
│   │   │   │   └── 📄 dashboardStore.ts (679 B)
│   │   │   └── 📄 index.ts (550 B)
│   │   ├── 📁 vehicles/
│   │   │   ├── 📁 api/
│   │   │   │   ├── 📄 vehicles.endpoints.ts (147 B)
│   │   │   │   └── 📄 vehicles.types.ts (530 B)
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📄 AddToBlacklistModal.tsx (4.56 KB)
│   │   │   │   ├── 📄 DeleteVehicleModal.tsx (2.74 KB)
│   │   │   │   ├── 📄 index.ts (622 B)
│   │   │   │   ├── 📄 VehicleFormModal.tsx (6.23 KB)
│   │   │   │   ├── 📄 VehiclesEmptyState.tsx (347 B)
│   │   │   │   ├── 📄 VehiclesErrorState.tsx (722 B)
│   │   │   │   ├── 📄 VehiclesFilterBar.tsx (2.83 KB)
│   │   │   │   ├── 📄 VehiclesHeader.tsx (914 B)
│   │   │   │   ├── 📄 VehiclesPagination.tsx (4.27 KB)
│   │   │   │   ├── 📄 VehiclesStats.tsx (917 B)
│   │   │   │   ├── 📄 VehiclesTable.tsx (8.18 KB)
│   │   │   │   └── 📄 VehiclesTableSkeleton.tsx (595 B)
│   │   │   ├── 📁 data/
│   │   │   ├── 📁 hooks/
│   │   │   │   └── 📄 useVehiclesViewModel.ts (10.38 KB)
│   │   │   ├── 📁 models/
│   │   │   │   └── 📄 vehicle.types.ts (885 B)
│   │   │   ├── 📁 pages/
│   │   │   │   └── 📄 VehiclesPage.tsx (4.49 KB)
│   │   │   ├── 📁 routes/
│   │   │   │   └── 📄 vehiclesRoutes.ts (156 B)
│   │   │   ├── 📁 services/
│   │   │   │   └── 📄 VehiclesService.ts (1.03 KB)
│   │   │   ├── 📁 store/
│   │   │   │   └── 📄 vehiclesStore.ts (967 B)
│   │   │   ├── 📁 utils/
│   │   │   │   ├── 📄 color.utils.ts (470 B)
│   │   │   │   ├── 📄 country.utils.ts (955 B)
│   │   │   │   └── 📄 mapVehicleApiToUi.ts (686 B)
│   │   │   └── 📄 index.ts (586 B)
│   │   └── 📁 video/
│   │       ├── 📁 api/
│   │       │   ├── 📄 videos.endpoints.ts (169 B)
│   │       │   └── 📄 videos.types.ts (703 B)
│   │       ├── 📁 components/
│   │       │   ├── 📄 index.ts (468 B)
│   │       │   ├── 📄 RecentVideosTable.tsx (3.17 KB)
│   │       │   ├── 📄 SelectedVideoCard.tsx (3.58 KB)
│   │       │   ├── 📄 VideosFilterBar.tsx (2.2 KB)
│   │       │   ├── 📄 VideosHeader.tsx (978 B)
│   │       │   ├── 📄 VideosStats.tsx (934 B)
│   │       │   ├── 📄 VideosTable.tsx (3.01 KB)
│   │       │   ├── 📄 VideoStatusBadge.tsx (859 B)
│   │       │   ├── 📄 VideoUploadHeader.tsx (975 B)
│   │       │   └── 📄 VideoUploadZone.tsx (4.29 KB)
│   │       ├── 📁 constants/
│   │       │   └── 📄 videos.constants.ts (671 B)
│   │       ├── 📁 data/
│   │       │   └── 📄 mockVideoData.ts (1.08 KB)
│   │       ├── 📁 hooks/
│   │       │   ├── 📄 useProcessedVideosViewModel.ts (5.21 KB)
│   │       │   └── 📄 useVideoUploadViewModel.ts (7.68 KB)
│   │       ├── 📁 models/
│   │       │   └── 📄 video.types.ts (744 B)
│   │       ├── 📁 pages/
│   │       │   ├── 📄 ProcessedVideosPage.tsx (2.32 KB)
│   │       │   └── 📄 VideoUploadPage.tsx (2.95 KB)
│   │       ├── 📁 routes/
│   │       │   └── 📄 videoRoutes.ts (160 B)
│   │       ├── 📁 services/
│   │       │   └── 📄 VideoService.ts (1.36 KB)
│   │       ├── 📁 utils/
│   │       │   ├── 📄 buildOriginalPath.ts (499 B)
│   │       │   ├── 📄 formatDuration.ts (578 B)
│   │       │   ├── 📄 mapVideoApiToUi.ts (725 B)
│   │       │   └── 📄 readVideoDuration.ts (871 B)
│   │       ├── 📁 validators/
│   │       │   ├── 📄 videoUpload.constants.ts (238 B)
│   │       │   └── 📄 videoUploadSchema.ts (1.1 KB)
│   │       └── 📄 index.ts (522 B)
│   ├── 📄 App.css (2.82 KB)
│   ├── 📄 App.tsx (1.96 KB)
│   ├── 📄 index.css (167 B)
│   ├── 📄 main.tsx (230 B)
│   └── 📄 vite-env.d.ts (166 B)
├── 📄 eslint.config.js (771 B)
├── 📄 index.html (679 B)
├── 📄 package-lock.json (121.98 KB)
├── 📄 package.json (1.03 KB)
├── 📄 postcss.config.js (75 B)
├── 📄 README.md (2.37 KB)
├── 📄 tailwind.config.ts (203 B)
├── 📄 tsconfig.app.json (617 B)
├── 📄 tsconfig.json (119 B)
├── 📄 tsconfig.node.json (591 B)
└── 📄 vite.config.ts (161 B)
```

## 📑 Table of Contents

**Project Files:**

- [📄 src/api/axios.ts](#📄-src-api-axios-ts)
- [📄 src/features/analysis/api/detectionDetails.types.ts](#📄-src-features-analysis-api-detectiondetails-types-ts)
- [📄 src/features/analysis/api/detections.endpoints.ts](#📄-src-features-analysis-api-detections-endpoints-ts)
- [📄 src/features/analysis/api/detections.types.ts](#📄-src-features-analysis-api-detections-types-ts)
- [📄 src/features/analysis/components/AnalysisAlertsTable.tsx](#📄-src-features-analysis-components-analysisalertstable-tsx)
- [📄 src/features/analysis/components/AnalysisFilterBar.tsx](#📄-src-features-analysis-components-analysisfilterbar-tsx)
- [📄 src/features/analysis/components/AnalysisResultsHeader.tsx](#📄-src-features-analysis-components-analysisresultsheader-tsx)
- [📄 src/features/analysis/components/AnalysisStatsGrid.tsx](#📄-src-features-analysis-components-analysisstatsgrid-tsx)
- [📄 src/features/analysis/components/ConfidenceBar.tsx](#📄-src-features-analysis-components-confidencebar-tsx)
- [📄 src/features/analysis/components/index.ts](#📄-src-features-analysis-components-index-ts)
- [📄 src/features/analysis/components/SeverityBadge.tsx](#📄-src-features-analysis-components-severitybadge-tsx)
- [📄 src/features/analysis/components/VehicleComparisonTable.tsx](#📄-src-features-analysis-components-vehiclecomparisontable-tsx)
- [📄 src/features/analysis/components/VehicleDetailsHeader.tsx](#📄-src-features-analysis-components-vehicledetailsheader-tsx)
- [📄 src/features/analysis/components/VehicleDetailsSummaryCards.tsx](#📄-src-features-analysis-components-vehicledetailssummarycards-tsx)
- [📄 src/features/analysis/components/VehicleInfoCard.tsx](#📄-src-features-analysis-components-vehicleinfocard-tsx)
- [📄 src/features/analysis/components/VideoPlayerModal.tsx](#📄-src-features-analysis-components-videoplayermodal-tsx)
- [📄 src/features/analysis/components/VideoSummaryCard.tsx](#📄-src-features-analysis-components-videosummarycard-tsx)
- [📄 src/features/analysis/constants/analysis.constants.ts](#📄-src-features-analysis-constants-analysis-constants-ts)
- [📄 src/features/analysis/data/mockAnalysisData.ts](#📄-src-features-analysis-data-mockanalysisdata-ts)
- [📄 src/features/analysis/data/mockVehicleDetailsData.ts](#📄-src-features-analysis-data-mockvehicledetailsdata-ts)
- [📄 src/features/analysis/hooks/useAnalysisResultsViewModel.ts](#📄-src-features-analysis-hooks-useanalysisresultsviewmodel-ts)
- [📄 src/features/analysis/hooks/useVehicleDetailsViewModel.ts](#📄-src-features-analysis-hooks-usevehicledetailsviewmodel-ts)
- [📄 src/features/analysis/models/analysis.types.ts](#📄-src-features-analysis-models-analysis-types-ts)
- [📄 src/features/analysis/models/vehicleDetails.types.ts](#📄-src-features-analysis-models-vehicledetails-types-ts)
- [📄 src/features/analysis/pages/AnalysisResultsPage.tsx](#📄-src-features-analysis-pages-analysisresultspage-tsx)
- [📄 src/features/analysis/pages/VehicleDetailsPage.tsx](#📄-src-features-analysis-pages-vehicledetailspage-tsx)
- [📄 src/features/analysis/routes/analysisRoutes.ts](#📄-src-features-analysis-routes-analysisroutes-ts)
- [📄 src/features/analysis/services/AnalysisService.ts](#📄-src-features-analysis-services-analysisservice-ts)
- [📄 src/features/analysis/utils/buildAnalysisStats.ts](#📄-src-features-analysis-utils-buildanalysisstats-ts)
- [📄 src/features/analysis/utils/confidence.utils.ts](#📄-src-features-analysis-utils-confidence-utils-ts)
- [📄 src/features/analysis/utils/mapDetectionApiToUi.ts](#📄-src-features-analysis-utils-mapdetectionapitoui-ts)
- [📄 src/features/analysis/utils/mapDetectionDetailsToVehicleDetails.ts](#📄-src-features-analysis-utils-mapdetectiondetailstovehicledetails-ts)
- [📄 src/features/analysis/utils/mapVideoToAnalysisSummary.ts](#📄-src-features-analysis-utils-mapvideotoanalysissummary-ts)
- [📄 src/features/analysis/utils/severity.utils.ts](#📄-src-features-analysis-utils-severity-utils-ts)
- [📄 src/features/analysis/utils/violationType.utils.ts](#📄-src-features-analysis-utils-violationtype-utils-ts)
- [📄 src/features/analysis/index.ts](#📄-src-features-analysis-index-ts)
- [📄 src/features/auth/components/feature/index.ts](#📄-src-features-auth-components-feature-index-ts)
- [📄 src/features/auth/components/feature/LoginForm.tsx](#📄-src-features-auth-components-feature-loginform-tsx)
- [📄 src/features/auth/components/shared/AuthBrandPanel.tsx](#📄-src-features-auth-components-shared-authbrandpanel-tsx)
- [📄 src/features/auth/components/shared/AuthSplitLayout.tsx](#📄-src-features-auth-components-shared-authsplitlayout-tsx)
- [📄 src/features/auth/components/shared/index.ts](#📄-src-features-auth-components-shared-index-ts)
- [📄 src/features/auth/components/shared/PasswordInput.tsx](#📄-src-features-auth-components-shared-passwordinput-tsx)
- [📄 src/features/auth/components/ui/Button.tsx](#📄-src-features-auth-components-ui-button-tsx)
- [📄 src/features/auth/components/ui/Checkbox.tsx](#📄-src-features-auth-components-ui-checkbox-tsx)
- [📄 src/features/auth/components/ui/index.ts](#📄-src-features-auth-components-ui-index-ts)
- [📄 src/features/auth/components/ui/Input.tsx](#📄-src-features-auth-components-ui-input-tsx)
- [📄 src/features/auth/hooks/useLoginViewModel.ts](#📄-src-features-auth-hooks-useloginviewmodel-ts)
- [📄 src/features/auth/models/auth.types.ts](#📄-src-features-auth-models-auth-types-ts)
- [📄 src/features/auth/pages/LoginPage.tsx](#📄-src-features-auth-pages-loginpage-tsx)
- [📄 src/features/auth/routes/authRoutes.ts](#📄-src-features-auth-routes-authroutes-ts)
- [📄 src/features/auth/services/AuthService.ts](#📄-src-features-auth-services-authservice-ts)
- [📄 src/features/auth/store/authStore.ts](#📄-src-features-auth-store-authstore-ts)
- [📄 src/features/auth/validators/loginSchema.ts](#📄-src-features-auth-validators-loginschema-ts)
- [📄 src/features/auth/index.ts](#📄-src-features-auth-index-ts)
- [📄 src/features/blacklist/api/blacklist.endpoints.ts](#📄-src-features-blacklist-api-blacklist-endpoints-ts)
- [📄 src/features/blacklist/api/blacklist.types.ts](#📄-src-features-blacklist-api-blacklist-types-ts)
- [📄 src/features/blacklist/components/BlacklistFilters.tsx](#📄-src-features-blacklist-components-blacklistfilters-tsx)
- [📄 src/features/blacklist/components/BlacklistHeader.tsx](#📄-src-features-blacklist-components-blacklistheader-tsx)
- [📄 src/features/blacklist/components/BlacklistStats.tsx](#📄-src-features-blacklist-components-blackliststats-tsx)
- [📄 src/features/blacklist/components/BlacklistTable.tsx](#📄-src-features-blacklist-components-blacklisttable-tsx)
- [📄 src/features/blacklist/components/DeleteConfirmModal.tsx](#📄-src-features-blacklist-components-deleteconfirmmodal-tsx)
- [📄 src/features/blacklist/components/EditBlacklistModal.tsx](#📄-src-features-blacklist-components-editblacklistmodal-tsx)
- [📄 src/features/blacklist/components/index.ts](#📄-src-features-blacklist-components-index-ts)
- [📄 src/features/blacklist/hooks/useBlacklistViewModel.ts](#📄-src-features-blacklist-hooks-useblacklistviewmodel-ts)
- [📄 src/features/blacklist/models/blacklist.types.ts](#📄-src-features-blacklist-models-blacklist-types-ts)
- [📄 src/features/blacklist/pages/BlacklistPage.tsx](#📄-src-features-blacklist-pages-blacklistpage-tsx)
- [📄 src/features/blacklist/routes/blacklistRoutes.ts](#📄-src-features-blacklist-routes-blacklistroutes-ts)
- [📄 src/features/blacklist/services/BlacklistService.ts](#📄-src-features-blacklist-services-blacklistservice-ts)
- [📄 src/features/blacklist/utils/mapBlacklistApiToUi.ts](#📄-src-features-blacklist-utils-mapblacklistapitoui-ts)
- [📄 src/features/blacklist/utils/priority.utils.ts](#📄-src-features-blacklist-utils-priority-utils-ts)
- [📄 src/features/blacklist/index.ts](#📄-src-features-blacklist-index-ts)
- [📄 src/features/dashboard/components/feature/AlertsSection.tsx](#📄-src-features-dashboard-components-feature-alertssection-tsx)
- [📄 src/features/dashboard/components/feature/AnalyticsSection.tsx](#📄-src-features-dashboard-components-feature-analyticssection-tsx)
- [📄 src/features/dashboard/components/feature/index.ts](#📄-src-features-dashboard-components-feature-index-ts)
- [📄 src/features/dashboard/components/feature/ScansChartSection.tsx](#📄-src-features-dashboard-components-feature-scanschartsection-tsx)
- [📄 src/features/dashboard/components/feature/StatsSection.tsx](#📄-src-features-dashboard-components-feature-statssection-tsx)
- [📄 src/features/dashboard/components/shared/DashboardLayout.tsx](#📄-src-features-dashboard-components-shared-dashboardlayout-tsx)
- [📄 src/features/dashboard/components/shared/icons.tsx](#📄-src-features-dashboard-components-shared-icons-tsx)
- [📄 src/features/dashboard/components/shared/index.ts](#📄-src-features-dashboard-components-shared-index-ts)
- [📄 src/features/dashboard/components/shared/Sidebar.tsx](#📄-src-features-dashboard-components-shared-sidebar-tsx)
- [📄 src/features/dashboard/components/shared/Topbar.tsx](#📄-src-features-dashboard-components-shared-topbar-tsx)
- [📄 src/features/dashboard/components/ui/AlertItem.tsx](#📄-src-features-dashboard-components-ui-alertitem-tsx)
- [📄 src/features/dashboard/components/ui/BarChart.tsx](#📄-src-features-dashboard-components-ui-barchart-tsx)
- [📄 src/features/dashboard/components/ui/CardContainer.tsx](#📄-src-features-dashboard-components-ui-cardcontainer-tsx)
- [📄 src/features/dashboard/components/ui/index.ts](#📄-src-features-dashboard-components-ui-index-ts)
- [📄 src/features/dashboard/components/ui/LineChart.tsx](#📄-src-features-dashboard-components-ui-linechart-tsx)
- [📄 src/features/dashboard/components/ui/PieChart.tsx](#📄-src-features-dashboard-components-ui-piechart-tsx)
- [📄 src/features/dashboard/components/ui/ProgressCircle.tsx](#📄-src-features-dashboard-components-ui-progresscircle-tsx)
- [📄 src/features/dashboard/components/ui/StatCard.tsx](#📄-src-features-dashboard-components-ui-statcard-tsx)
- [📄 src/features/dashboard/data/mockDashboardData.ts](#📄-src-features-dashboard-data-mockdashboarddata-ts)
- [📄 src/features/dashboard/hooks/useDashboardViewModel.ts](#📄-src-features-dashboard-hooks-usedashboardviewmodel-ts)
- [📄 src/features/dashboard/models/dashboard.types.ts](#📄-src-features-dashboard-models-dashboard-types-ts)
- [📄 src/features/dashboard/pages/DashboardPage.tsx](#📄-src-features-dashboard-pages-dashboardpage-tsx)
- [📄 src/features/dashboard/routes/dashboardRoutes.ts](#📄-src-features-dashboard-routes-dashboardroutes-ts)
- [📄 src/features/dashboard/services/DashboardService.ts](#📄-src-features-dashboard-services-dashboardservice-ts)
- [📄 src/features/dashboard/store/dashboardStore.ts](#📄-src-features-dashboard-store-dashboardstore-ts)
- [📄 src/features/dashboard/index.ts](#📄-src-features-dashboard-index-ts)
- [📄 src/features/vehicles/api/vehicles.endpoints.ts](#📄-src-features-vehicles-api-vehicles-endpoints-ts)
- [📄 src/features/vehicles/api/vehicles.types.ts](#📄-src-features-vehicles-api-vehicles-types-ts)
- [📄 src/features/vehicles/components/AddToBlacklistModal.tsx](#📄-src-features-vehicles-components-addtoblacklistmodal-tsx)
- [📄 src/features/vehicles/components/DeleteVehicleModal.tsx](#📄-src-features-vehicles-components-deletevehiclemodal-tsx)
- [📄 src/features/vehicles/components/index.ts](#📄-src-features-vehicles-components-index-ts)
- [📄 src/features/vehicles/components/VehicleFormModal.tsx](#📄-src-features-vehicles-components-vehicleformmodal-tsx)
- [📄 src/features/vehicles/components/VehiclesEmptyState.tsx](#📄-src-features-vehicles-components-vehiclesemptystate-tsx)
- [📄 src/features/vehicles/components/VehiclesErrorState.tsx](#📄-src-features-vehicles-components-vehicleserrorstate-tsx)
- [📄 src/features/vehicles/components/VehiclesFilterBar.tsx](#📄-src-features-vehicles-components-vehiclesfilterbar-tsx)
- [📄 src/features/vehicles/components/VehiclesHeader.tsx](#📄-src-features-vehicles-components-vehiclesheader-tsx)
- [📄 src/features/vehicles/components/VehiclesPagination.tsx](#📄-src-features-vehicles-components-vehiclespagination-tsx)
- [📄 src/features/vehicles/components/VehiclesStats.tsx](#📄-src-features-vehicles-components-vehiclesstats-tsx)
- [📄 src/features/vehicles/components/VehiclesTable.tsx](#📄-src-features-vehicles-components-vehiclestable-tsx)
- [📄 src/features/vehicles/components/VehiclesTableSkeleton.tsx](#📄-src-features-vehicles-components-vehiclestableskeleton-tsx)
- [📄 src/features/vehicles/hooks/useVehiclesViewModel.ts](#📄-src-features-vehicles-hooks-usevehiclesviewmodel-ts)
- [📄 src/features/vehicles/models/vehicle.types.ts](#📄-src-features-vehicles-models-vehicle-types-ts)
- [📄 src/features/vehicles/pages/VehiclesPage.tsx](#📄-src-features-vehicles-pages-vehiclespage-tsx)
- [📄 src/features/vehicles/routes/vehiclesRoutes.ts](#📄-src-features-vehicles-routes-vehiclesroutes-ts)
- [📄 src/features/vehicles/services/VehiclesService.ts](#📄-src-features-vehicles-services-vehiclesservice-ts)
- [📄 src/features/vehicles/store/vehiclesStore.ts](#📄-src-features-vehicles-store-vehiclesstore-ts)
- [📄 src/features/vehicles/utils/color.utils.ts](#📄-src-features-vehicles-utils-color-utils-ts)
- [📄 src/features/vehicles/utils/country.utils.ts](#📄-src-features-vehicles-utils-country-utils-ts)
- [📄 src/features/vehicles/utils/mapVehicleApiToUi.ts](#📄-src-features-vehicles-utils-mapvehicleapitoui-ts)
- [📄 src/features/vehicles/index.ts](#📄-src-features-vehicles-index-ts)
- [📄 src/features/video/api/videos.endpoints.ts](#📄-src-features-video-api-videos-endpoints-ts)
- [📄 src/features/video/api/videos.types.ts](#📄-src-features-video-api-videos-types-ts)
- [📄 src/features/video/components/index.ts](#📄-src-features-video-components-index-ts)
- [📄 src/features/video/components/RecentVideosTable.tsx](#📄-src-features-video-components-recentvideostable-tsx)
- [📄 src/features/video/components/SelectedVideoCard.tsx](#📄-src-features-video-components-selectedvideocard-tsx)
- [📄 src/features/video/components/VideosFilterBar.tsx](#📄-src-features-video-components-videosfilterbar-tsx)
- [📄 src/features/video/components/VideosHeader.tsx](#📄-src-features-video-components-videosheader-tsx)
- [📄 src/features/video/components/VideosStats.tsx](#📄-src-features-video-components-videosstats-tsx)
- [📄 src/features/video/components/VideosTable.tsx](#📄-src-features-video-components-videostable-tsx)
- [📄 src/features/video/components/VideoStatusBadge.tsx](#📄-src-features-video-components-videostatusbadge-tsx)
- [📄 src/features/video/components/VideoUploadHeader.tsx](#📄-src-features-video-components-videouploadheader-tsx)
- [📄 src/features/video/components/VideoUploadZone.tsx](#📄-src-features-video-components-videouploadzone-tsx)
- [📄 src/features/video/constants/videos.constants.ts](#📄-src-features-video-constants-videos-constants-ts)
- [📄 src/features/video/data/mockVideoData.ts](#📄-src-features-video-data-mockvideodata-ts)
- [📄 src/features/video/hooks/useProcessedVideosViewModel.ts](#📄-src-features-video-hooks-useprocessedvideosviewmodel-ts)
- [📄 src/features/video/hooks/useVideoUploadViewModel.ts](#📄-src-features-video-hooks-usevideouploadviewmodel-ts)
- [📄 src/features/video/models/video.types.ts](#📄-src-features-video-models-video-types-ts)
- [📄 src/features/video/pages/ProcessedVideosPage.tsx](#📄-src-features-video-pages-processedvideospage-tsx)
- [📄 src/features/video/pages/VideoUploadPage.tsx](#📄-src-features-video-pages-videouploadpage-tsx)
- [📄 src/features/video/routes/videoRoutes.ts](#📄-src-features-video-routes-videoroutes-ts)
- [📄 src/features/video/services/VideoService.ts](#📄-src-features-video-services-videoservice-ts)
- [📄 src/features/video/utils/buildOriginalPath.ts](#📄-src-features-video-utils-buildoriginalpath-ts)
- [📄 src/features/video/utils/formatDuration.ts](#📄-src-features-video-utils-formatduration-ts)
- [📄 src/features/video/utils/mapVideoApiToUi.ts](#📄-src-features-video-utils-mapvideoapitoui-ts)
- [📄 src/features/video/utils/readVideoDuration.ts](#📄-src-features-video-utils-readvideoduration-ts)
- [📄 src/features/video/validators/videoUpload.constants.ts](#📄-src-features-video-validators-videoupload-constants-ts)
- [📄 src/features/video/validators/videoUploadSchema.ts](#📄-src-features-video-validators-videouploadschema-ts)
- [📄 src/features/video/index.ts](#📄-src-features-video-index-ts)
- [📄 src/App.css](#📄-src-app-css)
- [📄 src/App.tsx](#📄-src-app-tsx)
- [📄 src/index.css](#📄-src-index-css)
- [📄 src/main.tsx](#📄-src-main-tsx)
- [📄 src/vite-env.d.ts](#📄-src-vite-env-d-ts)
- [📄 eslint.config.js](#📄-eslint-config-js)
- [📄 index.html](#📄-index-html)
- [📄 package-lock.json](#📄-package-lock-json)
- [📄 package.json](#📄-package-json)
- [📄 postcss.config.js](#📄-postcss-config-js)
- [📄 README.md](#📄-readme-md)
- [📄 tailwind.config.ts](#📄-tailwind-config-ts)
- [📄 tsconfig.app.json](#📄-tsconfig-app-json)
- [📄 tsconfig.json](#📄-tsconfig-json)
- [📄 tsconfig.node.json](#📄-tsconfig-node-json)
- [📄 vite.config.ts](#📄-vite-config-ts)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 170 |
| Total Directories | 73 |
| Text Files | 165 |
| Binary Files | 5 |
| Total Size | 436.23 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.ts` | 84 |
| `.tsx` | 70 |
| `.json` | 5 |
| `.svg` | 4 |
| `.css` | 2 |
| `.js` | 2 |
| `.png` | 1 |
| `.html` | 1 |
| `.md` | 1 |

## 💻 File Code Contents

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `public/favicon.svg`
- `public/icons.svg`

### <a id="📄-src-api-axios-ts"></a>📄 `src/api/axios.ts`

**File Info:**
- **Size**: 527 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/api/axios.ts`
- **Relative Path**: `src/api`
- **Created**: 2026-08-15 21:27:09 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `17bba1ed9ac391ed81955c210168868d`
- **SHA256**: `b4ba70ce3edc57654ecf3b41d8f21211f969c6c3fbebd9b6059d711ac50d5432`
- **Encoding**: ASCII

**File code content:**

```typescript
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL is not defined in environment configuration");
}


export const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(error),
);

```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `src/assets/hero.png`
- `src/assets/react.svg`
- `src/assets/vite.svg`

### <a id="📄-src-features-analysis-api-detectiondetails-types-ts"></a>📄 `src/features/analysis/api/detectionDetails.types.ts`

**File Info:**
- **Size**: 582 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/api/detectionDetails.types.ts`
- **Relative Path**: `src/features/analysis/api`
- **Created**: 2026-08-16 20:19:24 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `0bc81fc3bc0412492557d5879285f2e9`
- **SHA256**: `80e5d16c06e318e93fd74ea337cff0a29b23b8019e336c92c364ff8e3e126262`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface DetectionComparisonField {
  ai: string;
  confidence: number;
  actual: string;
  mismatch: boolean;
}

export interface DetectionDetails {
  id: number;
  vehicle_image_url: string;
  comparison: {
    plate: DetectionComparisonField;
    model: DetectionComparisonField;
    type: DetectionComparisonField;
    color: DetectionComparisonField;
  };
  risk_score: number;
  severity: string | null;
  violation_type: string | null;
  message: string | null;
}

export interface DetectionDetailsResponse {
  detection: DetectionDetails;
}

```

---

### <a id="📄-src-features-analysis-api-detections-endpoints-ts"></a>📄 `src/features/analysis/api/detections.endpoints.ts`

**File Info:**
- **Size**: 226 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/api/detections.endpoints.ts`
- **Relative Path**: `src/features/analysis/api`
- **Created**: 2026-08-16 19:08:31 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e367aac5714800d23d46a20b7e7f517e`
- **SHA256**: `b1d207d83f646b05b9f46f1e13f609db3415ed3face797cb182c96e43eb2f4ff`
- **Encoding**: ASCII

**File code content:**

```typescript
export const DetectionsApiEndpoints = {
  byVideo: (videoId: number | string) =>
    `/api/admin/videos/${videoId}/detections`,
  byId: (detectionId: number | string) =>
    `/api/admin/detections/${detectionId}`,
} as const;

```

---

### <a id="📄-src-features-analysis-api-detections-types-ts"></a>📄 `src/features/analysis/api/detections.types.ts`

**File Info:**
- **Size**: 240 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/api/detections.types.ts`
- **Relative Path**: `src/features/analysis/api`
- **Created**: 2026-08-16 19:08:31 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:31 (Europe/Istanbul / GMT+03:00)
- **MD5**: `65b2df2e4fc9b000d7745fd0e361e7df`
- **SHA256**: `d305e85003cfddd166676e9feb52bf729d3d1ac4cb126aed8e418f19392871ee`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface DetectionApiItem {
  id: number;
  plate_number: string;
  violation_type: string | null;
  severity: string | null;
  message: string | null;
}

export interface DetectionsApiResponse {
  detections: DetectionApiItem[];
}

```

---

### <a id="📄-src-features-analysis-components-analysisalertstable-tsx"></a>📄 `src/features/analysis/components/AnalysisAlertsTable.tsx`

**File Info:**
- **Size**: 6.16 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/AnalysisAlertsTable.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:57 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:36:39 (Europe/Istanbul / GMT+03:00)
- **MD5**: `242547dbd35fe9bc05a511353130d561`
- **SHA256**: `e002f034edb90c5007f513c6b41ed57b8815bc4282ebd12a9f301a1426920335`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { AnalysisAlert } from "../models/analysis.types";
import { SeverityBadge } from "./SeverityBadge";

interface AnalysisAlertsTableProps {
  alerts: AnalysisAlert[];
  pageStartIndex: number;
  onRowClick: (id: string) => void;
  onView: (id: string) => void;
  onPlay: (id: string) => void;
  onMore: (id: string) => void;
}

export function AnalysisAlertsTable({
  alerts,
  pageStartIndex,
  onRowClick,
  // onView,
  // onPlay,
  // onMore,
}: AnalysisAlertsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">#</th>
              <th className="px-4 py-3.5 text-start font-medium">رقم اللوحة</th>
              <th className="px-4 py-3.5 text-start font-medium">نوع التنبيه</th>
              <th className="px-4 py-3.5 text-start font-medium">درجة الخطورة</th>
              <th className="px-4 py-3.5 text-start font-medium">الرسالة</th>
              {/* <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th> */}
            </tr>
          </thead>
          <tbody>
            {alerts.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد تنبيهات مطابقة للبحث
                </td>
              </tr>
            ) : (
              alerts.map((alert, index) => {
                const isClickable = Boolean(alert.violationType);
                return (
                  <tr
                    key={alert.id}
                    role={isClickable ? "button" : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    onClick={isClickable ? () => onRowClick(alert.id) : undefined}
                    onKeyDown={
                      isClickable
                        ? (event: React.KeyboardEvent<HTMLTableRowElement>) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              onRowClick(alert.id);
                            }
                          }
                        : undefined
                    }
                    className={`${isClickable ? "cursor-pointer hover:bg-white/[0.04]" : "cursor-default"} border-b border-white/5 transition`}
                  >
                    <td className="px-4 py-3.5 text-white/45">
                      {pageStartIndex + index}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
                        {alert.plateNumber}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-white/75">
                      {alert.alertType}
                    </td>
                    <td className="px-4 py-3.5">
                      <SeverityBadge severity={alert.severity} />
                    </td>
                    <td className="max-w-xs px-4 py-3.5 text-white/60">
                      <span className="line-clamp-2">{alert.message}</span>
                    </td>
                    {/* <td className="px-4 py-3.5">
                      <div
                        className="flex items-center gap-1.5"
                        onClick={(event) => event.stopPropagation()}
                        onKeyDown={(event) => event.stopPropagation()}
                      >
                        <ActionButton
                          label="عرض"
                          onClick={() => onView(alert.id)}
                        >
                          <EyeIcon />
                        </ActionButton>
                        <ActionButton
                          label="تشغيل المقطع"
                          onClick={() => onPlay(alert.id)}
                        >
                          <PlayIcon />
                        </ActionButton>
                        <ActionButton
                          label="المزيد"
                          onClick={() => onMore(alert.id)}
                        >
                          <MoreIcon />
                        </ActionButton>
                      </div>
                    </td> */}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// function ActionButton({
//   children,
//   label,
//   onClick,
// }: {
//   children: ReactNode;
//   label: string;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       aria-label={label}
//       onClick={onClick}
//       className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/55 transition hover:bg-white/10 hover:text-white"
//     >
//       {children}
//     </button>
//   );
// }

// function EyeIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       aria-hidden
//     >
//       <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   );
// }

// function PlayIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="currentColor"
//       aria-hidden
//     >
//       <path d="M8 5v14l11-7L8 5Z" />
//     </svg>
//   );
// }

// function MoreIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="currentColor"
//       aria-hidden
//     >
//       <circle cx="12" cy="5" r="1.6" />
//       <circle cx="12" cy="12" r="1.6" />
//       <circle cx="12" cy="19" r="1.6" />
//     </svg>
//   );
// }

```

---

### <a id="📄-src-features-analysis-components-analysisfilterbar-tsx"></a>📄 `src/features/analysis/components/AnalysisFilterBar.tsx`

**File Info:**
- **Size**: 2.27 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/AnalysisFilterBar.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:43 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:54 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f6a9d6de513e1fe94061db9c8af01729`
- **SHA256**: `498b983db6699305487e6f001083add3b20c0414811c5d1a62dd5453c7ad81c7`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Input } from "../../auth";
import {
  alertTypeOptions,
  severityOptions,
} from "../constants/analysis.constants";
import type { AnalysisFilters } from "../models/analysis.types";

interface AnalysisFilterBarProps {
  filters: AnalysisFilters;
  onSearchChange: (value: string) => void;
  onAlertTypeChange: (value: string) => void;
  onSeverityChange: (value: string) => void;
}

export function AnalysisFilterBar({
  filters,
  onSearchChange,
  onAlertTypeChange,
  onSeverityChange,
}: AnalysisFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1 sm:max-w-sm">
        <Input
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="بحث برقم اللوحة..."
          className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <FilterSelect
        label="أنواع التنبيهات"
        value={filters.alertType}
        options={[...alertTypeOptions]}
        onChange={onAlertTypeChange}
      />

      <FilterSelect
        label="كل درجات الخطورة"
        value={filters.severity}
        options={[...severityOptions]}
        onChange={onSeverityChange}
      />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-[160px]">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0f172a] text-white"
          >
            {option === "الكل" ? label : option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
        ▾
      </span>
    </div>
  );
}

```

---

### <a id="📄-src-features-analysis-components-analysisresultsheader-tsx"></a>📄 `src/features/analysis/components/AnalysisResultsHeader.tsx`

**File Info:**
- **Size**: 979 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/AnalysisResultsHeader.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:31 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 17:22:31 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b90bc09835e86dda173074af5848aa84`
- **SHA256**: `97b00895f5d6d864b0c0f1fc657b32a4da0987a11dcd8ab2cf49b187571058e3`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { VideoRoutes } from "../../video";

interface AnalysisResultsHeaderProps {
  title?: string;
  subtitle?: string;
}

export function AnalysisResultsHeader({
  title = "نتائج تحليل الفيديو",
  subtitle = "عرض ملخص نتائج التحليل والفحص باستخدام الذكاء الاصطناعي",
}: AnalysisResultsHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={VideoRoutes.upload}
          className="transition hover:text-white/70"
        >
          تحليل الفيديو
        </Link>
        <span>/</span>
        <span className="text-white/70">نتائج التحليل</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-analysis-components-analysisstatsgrid-tsx"></a>📄 `src/features/analysis/components/AnalysisStatsGrid.tsx`

**File Info:**
- **Size**: 939 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/AnalysisStatsGrid.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:40 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 17:22:40 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6850ec05939895a13e70c0d6ac263338`
- **SHA256**: `a5e3f4de976565ca2e7f86f5551e2928ebc327779d02c1bca57099211f4cf40d`
- **Encoding**: ASCII

**File code content:**

```typescript
import { StatCard, MenuGlyph } from "../../dashboard";

interface FormattedAnalysisStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "vehicles" | "alerts" | "wanted" | "scans" | "units";
}

interface AnalysisStatsGridProps {
  stats: FormattedAnalysisStat[];
}

export function AnalysisStatsGrid({ stats }: AnalysisStatsGridProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<MenuGlyph name={stat.icon} className="h-5 w-5" />}
        />
      ))}
    </section>
  );
}

```

---

### <a id="📄-src-features-analysis-components-confidencebar-tsx"></a>📄 `src/features/analysis/components/ConfidenceBar.tsx`

**File Info:**
- **Size**: 768 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/ConfidenceBar.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-14 14:51:13 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-14 23:36:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `059bbb23322fb85db25064f9e39a4dc6`
- **SHA256**: `8a80b07aedf4d7224b1d401501fa148cc553999da12ca1c0b5a4f11bbfc85034`
- **Encoding**: ASCII

**File code content:**

```typescript
interface ConfidenceBarProps {
  value: number;
  label: string;
}

export function ConfidenceBar({ value, label }: ConfidenceBarProps) {
  return (
    <div className="flex min-w-[120px] items-center gap-2">
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-l from-blue-600 to-violet-500 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-10 shrink-0 text-xs font-semibold text-white/70">
        {label}
      </span>
    </div>
  );
}

```

---

### <a id="📄-src-features-analysis-components-index-ts"></a>📄 `src/features/analysis/components/index.ts`

**File Info:**
- **Size**: 705 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/index.ts`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:23:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 11:12:04 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e6dc1b2c58917a4fe9dc8814df34a1b6`
- **SHA256**: `fe4a8c862207e707db3c81da58351468f544647e3118522afc6eff10ef4748d0`
- **Encoding**: ASCII

**File code content:**

```typescript
export { AnalysisResultsHeader } from "./AnalysisResultsHeader";
export { VideoSummaryCard } from "./VideoSummaryCard";
export { AnalysisStatsGrid } from "./AnalysisStatsGrid";
export { AnalysisFilterBar } from "./AnalysisFilterBar";
export { AnalysisAlertsTable } from "./AnalysisAlertsTable";
export { SeverityBadge } from "./SeverityBadge";
export { VehicleDetailsHeader } from "./VehicleDetailsHeader";
export { VehicleInfoCard } from "./VehicleInfoCard";
export { VehicleComparisonTable } from "./VehicleComparisonTable";
export { VehicleDetailsSummaryCards } from "./VehicleDetailsSummaryCards";
export { ConfidenceBar } from "./ConfidenceBar";
export { VideoPlayerModal } from "./VideoPlayerModal";
```

---

### <a id="📄-src-features-analysis-components-severitybadge-tsx"></a>📄 `src/features/analysis/components/SeverityBadge.tsx`

**File Info:**
- **Size**: 872 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/SeverityBadge.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:56 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:29:43 (Europe/Istanbul / GMT+03:00)
- **MD5**: `babc03c5b316d9cc4417730b532d049d`
- **SHA256**: `a191dbff02eac682f0bde2110bc16bf5d8737e4932fcb07e3e773756ca50d386`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { AlertSeverity } from "../models/analysis.types";

const severityConfig: Record<
  AlertSeverity,
  { className: string }
> = {
 عالية : {
    className: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30",
  },
  متوسطة: {
    className: "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30",
  },
  منخفضة: {
    className:
      "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
};

interface SeverityBadgeProps {
  severity: AlertSeverity | null;
}

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  if (!severity) {
    return <span className="text-sm text-white/40">—</span>;
  }

  const config = severityConfig[severity];

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${config.className}`}
    >
      {severity}
    </span>
  );
}

```

---

### <a id="📄-src-features-analysis-components-vehiclecomparisontable-tsx"></a>📄 `src/features/analysis/components/VehicleComparisonTable.tsx`

**File Info:**
- **Size**: 2.85 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VehicleComparisonTable.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-14 14:51:15 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-14 23:36:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a722048be452fa67717387dde08b2760`
- **SHA256**: `8b0a1c3a27cd793225ee9a07cfcdbcdee7cd9afb0db994a36bee195607861c1a`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { FormattedComparisonRow } from "../models/vehicleDetails.types";
import { ConfidenceBar } from "./ConfidenceBar";

interface VehicleComparisonTableProps {
  rows: FormattedComparisonRow[];
}

export function VehicleComparisonTable({ rows }: VehicleComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">الخاصية</th>
              <th className="px-4 py-3.5 text-start font-medium">
                AI Detection
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                Confidence
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                البيانات الفعلية
              </th>
              <th className="px-4 py-3.5 text-start font-medium">Mismatch</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.property}
                className="border-b border-white/5 transition hover:bg-white/[0.04]"
              >
                <td className="px-4 py-3.5 font-medium text-white/80">
                  {row.propertyLabel}
                </td>
                <td className="px-4 py-3.5">
                  <ValueText value={row.aiValue} mismatch={row.mismatch} />
                </td>
                <td className="px-4 py-3.5">
                  <ConfidenceBar
                    value={row.confidence}
                    label={row.confidenceLabel}
                  />
                </td>
                <td className="px-4 py-3.5 text-white/70">
                  {row.actualValue}
                </td>
                <td className="px-4 py-3.5">
                  <MismatchBadge mismatch={row.mismatch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ValueText({
  value,
  mismatch,
}: {
  value: string;
  mismatch: boolean;
}) {
  return (
    <span
      className={`font-medium ${
        mismatch ? "text-rose-400" : "text-emerald-400"
      }`}
    >
      {value}
    </span>
  );
}

function MismatchBadge({ mismatch }: { mismatch: boolean }) {
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${
        mismatch
          ? "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30"
          : "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
      }`}
    >
      {mismatch ? "TRUE" : "FALSE"}
    </span>
  );
}

```

---

### <a id="📄-src-features-analysis-components-vehicledetailsheader-tsx"></a>📄 `src/features/analysis/components/VehicleDetailsHeader.tsx`

**File Info:**
- **Size**: 2.07 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VehicleDetailsHeader.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-14 14:51:10 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 19:35:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4257a753b7fe241f88523fe77a6b0f88`
- **SHA256**: `b522dbab9a9009798ab62f0c008031e2d0b361bc5c2203b40490dbec2e958c03`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { Button } from "../../auth";
import { AnalysisRoutes } from "../routes/analysisRoutes";

interface VehicleDetailsHeaderProps {
  onBack: () => void;
}

export function VehicleDetailsHeader({ onBack }: VehicleDetailsHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-white/40">
        <Link to={AnalysisRoutes.results} className="transition hover:text-white/70">
          نتائج التحليل
        </Link>
        <span>/</span>
        <Link to={AnalysisRoutes.results} className="transition hover:text-white/70">
          السيارات المكتشفة
        </Link>
        <span>/</span>
        <span className="font-medium text-white/70">تفاصيل المركبة</span>
      </nav>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-white">تفاصيل المركبة</h1>
          <p className="text-sm text-white/50">
            عرض ومقارنة بيانات المركبة المكتشفة بالبيانات الفعلية في النظام
          </p>
        </div>

        <div className="flex shrink-0 items-center">
          <Button
            type="button"
            variant="secondary"
            onClick={onBack}
            className="inline-flex w-auto items-center justify-center gap-2 border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 focus:ring-blue-500/30 focus:ring-offset-[#0B1220]"
          >
            <BackIcon />
            <span>رجوع</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 rtl:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
```

---

### <a id="📄-src-features-analysis-components-vehicledetailssummarycards-tsx"></a>📄 `src/features/analysis/components/VehicleDetailsSummaryCards.tsx`

**File Info:**
- **Size**: 760 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VehicleDetailsSummaryCards.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-14 14:51:15 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-14 23:36:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b6b4aee9c4329739127e85028e265e47`
- **SHA256**: `108f4d8a9567e3c6feed2774bb737e9c4736168e3b92433cddf3bbbcf829a370`
- **Encoding**: ASCII

**File code content:**

```typescript
import { CardContainer } from "../../dashboard";
import type { VehicleDetailsSummaryCard } from "../models/vehicleDetails.types";

interface VehicleDetailsSummaryCardsProps {
  cards: VehicleDetailsSummaryCard[];
}

export function VehicleDetailsSummaryCards({
  cards,
}: VehicleDetailsSummaryCardsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <CardContainer key={card.id} className="p-4">
          <p className="text-xs font-medium text-white/40">{card.title}</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-white/85">
            {card.value}
          </p>
        </CardContainer>
      ))}
    </section>
  );
}

```

---

### <a id="📄-src-features-analysis-components-vehicleinfocard-tsx"></a>📄 `src/features/analysis/components/VehicleInfoCard.tsx`

**File Info:**
- **Size**: 2.32 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VehicleInfoCard.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-14 14:51:11 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 19:35:21 (Europe/Istanbul / GMT+03:00)
- **MD5**: `d909cedf1af8489291c05b5e1d784a90`
- **SHA256**: `7af6075a8b59bb8341309a2f81af58831378c5d4459ee2891162496840994ede`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { SeverityBadge } from "./SeverityBadge";
import type { VehicleDetails } from "../models/vehicleDetails.types";

interface VehicleInfoCardProps {
  vehicle: VehicleDetails;
}

export function VehicleInfoCard({ vehicle }: VehicleInfoCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
        <img
          src={vehicle.imageUrl}
          alt={vehicle.plateNumber}
          className="h-48 w-full rounded-xl object-cover ring-1 ring-white/10 lg:h-auto lg:w-64 lg:shrink-0"
        />

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm text-white/45">رقم المركبة (original)</p>
              <p className="mt-1 text-2xl font-bold tracking-wide text-white">
                {vehicle.plateNumber}
              </p>
            </div>

            <div className="flex items-center gap-2 sm:shrink-0">
              <span className="text-sm text-white/50">Score:</span>
              <span className="text-xl font-bold text-white">
                {vehicle.score}
                <span className="text-sm font-normal text-white/40"> / 100</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/10 pt-3">
            <span className="text-sm text-white/50">درجة الخطورة:</span>
            <SeverityBadge severity={vehicle.severity} />
          </div>

          <div className="grid gap-3 border-t border-white/10 pt-3 sm:grid-cols-2">
            <div>
              <p className="text-xs text-white/40">نوع التنبيه</p>
              <p className="mt-1 text-sm font-medium text-white/85">
                {vehicle.alertType}
              </p>
            </div>
            <div>
              <p className="text-xs text-white/40">رسالة توضيحية</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">
                {vehicle.alertMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-analysis-components-videoplayermodal-tsx"></a>📄 `src/features/analysis/components/VideoPlayerModal.tsx`

**File Info:**
- **Size**: 3.42 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VideoPlayerModal.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-15 11:11:41 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:52:34 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f6c25dab5db4b5d046442e655a2593f3`
- **SHA256**: `f487fb65551c1223395ef174a14bc3a9f1ef58e41d9cd1d300535756a6adf091`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { useEffect } from "react";
import type { AnalysisVideoSummary } from "../models/analysis.types";

interface VideoPlayerModalProps {
  video: AnalysisVideoSummary;
  videoUrl: string | null;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onClose: () => void;
}

export function VideoPlayerModal({
  video,
  videoUrl,
  isLoading,
  isError,
  onRetry,
  onClose,
}: VideoPlayerModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق المشغل"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#0f172a] p-4 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 truncate text-sm font-semibold text-white/90">
            {video.fileName}
          </p>
          <button
            type="button"
            aria-label="إغلاق"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3 text-white/50">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-blue-500" />
              <p className="text-sm">جاري تحميل الفيديو...</p>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center gap-3 px-4 text-center text-white/60">
              <p className="text-sm">تعذر تحميل الفيديو المعالج</p>
              <button
                type="button"
                onClick={onRetry}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10"
              >
                إعادة المحاولة
              </button>
            </div>
          ) : (
            <video
              src={videoUrl ?? undefined}
              poster={video.thumbnailUrl}
              controls
              autoPlay
              className="h-full w-full"
            >
              متصفحك لا يدعم عرض الفيديو.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
```

---

### <a id="📄-src-features-analysis-components-videosummarycard-tsx"></a>📄 `src/features/analysis/components/VideoSummaryCard.tsx`

**File Info:**
- **Size**: 2.58 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/components/VideoSummaryCard.tsx`
- **Relative Path**: `src/features/analysis/components`
- **Created**: 2026-08-13 17:22:33 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 17:22:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `8b3c3dac8c1e5d821da0c6648491e743`
- **SHA256**: `5697974d78e36d96489421f57d32382dc85dd747ebda1756c206c8efb5271928`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Button } from "../../auth";
import { VideoStatusBadge } from "../../video";
import type { AnalysisVideoSummary } from "../models/analysis.types";

interface VideoSummaryCardProps {
  video: AnalysisVideoSummary;
  onViewProcessed: () => void;
}

export function VideoSummaryCard({
  video,
  onViewProcessed,
}: VideoSummaryCardProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-48">
          <img
            src={video.thumbnailUrl}
            alt={video.fileName}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/35">
            <button
              type="button"
              aria-label="تشغيل الفيديو"
              onClick={onViewProcessed}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-[0_0_24px_rgba(59,130,246,0.45)] transition hover:bg-blue-500"
            >
              <PlayIcon />
            </button>
          </div>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-base font-semibold text-white">
              {video.fileName}
            </p>
            <VideoStatusBadge status={video.status} />
          </div>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50">
            <MetaItem label="تاريخ المعالجة" value={video.processedAt} />
            <MetaItem label="المدة" value={video.duration} />
            <MetaItem label="الحجم" value={video.formattedSize} />
          </div>
        </div>
      </div>

      <Button
        type="button"
        onClick={onViewProcessed}
        className="w-full shrink-0 sm:w-auto sm:px-6"
      >
        <PlayIcon className="h-4 w-4" />
        عرض الفيديو المعالج
      </Button>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="text-white/35">{label}: </span>
      <span className="text-white/70">{value}</span>
    </span>
  );
}

function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

```

---

### <a id="📄-src-features-analysis-constants-analysis-constants-ts"></a>📄 `src/features/analysis/constants/analysis.constants.ts`

**File Info:**
- **Size**: 626 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/constants/analysis.constants.ts`
- **Relative Path**: `src/features/analysis/constants`
- **Created**: 2026-08-16 19:08:40 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `9367d70f6a9fe68adb1d7f0465a911c6`
- **SHA256**: `3a64fef589ab7db3aff2f2ed28dbe2b891772c4a46dd7863a9f6a5f6a2f8cc23`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { NO_ALERT_LABEL } from "../utils/violationType.utils";

export const ANALYSIS_PAGE_SIZE = 8;

export const analysisQueryKeys = {
  all: ["analysis"] as const,
  detections: (videoId: number) =>
    [...analysisQueryKeys.all, "detections", videoId] as const,
  details: (detectionId: string | number) =>
    [...analysisQueryKeys.all, "detection-details", detectionId] as const,
};

export const alertTypeOptions = [
  "الكل",
  "اختلاف بيانات المركبة",
  NO_ALERT_LABEL,
] as const;

export const severityOptions = [
  "الكل",
  "عالية",
  "متوسطة",
  "منخفضة",
] as const;

```

---

### <a id="📄-src-features-analysis-data-mockanalysisdata-ts"></a>📄 `src/features/analysis/data/mockAnalysisData.ts`

**File Info:**
- **Size**: 760 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/data/mockAnalysisData.ts`
- **Relative Path**: `src/features/analysis/data`
- **Created**: 2026-08-13 17:22:09 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5d3e5fcb90988fe72a9909a92f58f5c5`
- **SHA256**: `2ebfca9e15a0b13dd3e9f33515dc26cd51ccd2e36dedb6c2e988439ff9895182`
- **Encoding**: ASCII

**File code content:**

```typescript
import type {
  AnalysisAlert,
  AnalysisStat,
  AnalysisVideoSummary,
} from "../models/analysis.types";

/**
 * Legacy mock seed kept only for VehicleDetails (still mock-driven).
 * Analysis Results page uses live API data.
 */
export const mockAnalysisVideo: AnalysisVideoSummary = {
  id: "av1",
  fileName: "traffic_video_2026_08_10.mp4",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
  videoUrl:
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  processedAt: "2026-08-10 14:35",
  duration: "03:15",
  formattedSize: "178 MB",
  status: "completed",
};

export const mockAnalysisStats: AnalysisStat[] = [];

export const mockAnalysisAlerts: AnalysisAlert[] = [];

```

---

### <a id="📄-src-features-analysis-data-mockvehicledetailsdata-ts"></a>📄 `src/features/analysis/data/mockVehicleDetailsData.ts`

**File Info:**
- **Size**: 3.71 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/data/mockVehicleDetailsData.ts`
- **Relative Path**: `src/features/analysis/data`
- **Created**: 2026-08-14 14:51:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-14 23:36:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `77bdc18d0b2f0caafcc5658de4f1a984`
- **SHA256**: `5fe514d86d5a05c333ad7ce95ff02a1952293a3cd3433b8f5921709ceddff611`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VehicleDetails } from "../models/vehicleDetails.types";

const DEFAULT_VEHICLE_IMAGE =
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=260&fit=crop";

const baseComparison = [
  {
    property: "plate",
    propertyLabel: "رقم اللوحة",
    aiValue: "ABC-1284",
    actualValue: "ABC-1234",
    confidence: 92,
    mismatch: true,
  },
  {
    property: "model",
    propertyLabel: "الموديل",
    aiValue: "Toyota Camry",
    actualValue: "Toyota Camry",
    confidence: 96,
    mismatch: false,
  },
  {
    property: "type",
    propertyLabel: "النوع",
    aiValue: "Sedan",
    actualValue: "Sedan",
    confidence: 94,
    mismatch: false,
  },
  {
    property: "color",
    propertyLabel: "اللون",
    aiValue: "Black",
    actualValue: "White",
    confidence: 88,
    mismatch: true,
  },
];

function createDetails(
  id: string,
  plateNumber: string,
  overrides: Partial<VehicleDetails> = {},
): VehicleDetails {
  return {
    id,
    plateNumber,
    imageUrl: DEFAULT_VEHICLE_IMAGE,
    severity: "عالية",
    score: 87,
    alertType: "اختلاف في اللوحة",
    alertMessage:
      "تم اكتشاف اختلاف بين بيانات الذكاء الاصطناعي والبيانات الفعلية المسجلة في النظام",
    comparisonRows: baseComparison,
    ...overrides,
  };
}

export const mockVehicleDetailsMap: Record<string, VehicleDetails> = {
  a1: createDetails("a1", "أ ب ج 1234", {
    alertType: "مطلوب",
    alertMessage: "مطابقة مع قائمة المطلوبين — يرجى الإبلاغ فوراً",
    score: 91,
  }),
  a2: createDetails("a2", "د هـ و 5678", {
    severity: "متوسطة",
    alertType: "سرعة زائدة",
    alertMessage: "تجاوز السرعة المحددة بمقدار 35 كم/س",
    score: 72,
    comparisonRows: baseComparison.map((row) =>
      row.property === "plate"
        ? { ...row, aiValue: "DHW-5678", actualValue: "DHW-5678", mismatch: false }
        : row,
    ),
  }),
  a3: createDetails("a3", "ر س ت 9012", {
    alertType: "قائمة سوداء",
    alertMessage: "المركبة مدرجة في القائمة السوداء للنظام",
    score: 95,
  }),
  a4: createDetails("a4", "ث خ ذ 3456", {
    alertType: "لوحة مزورة",
    alertMessage:
      "احتمال تزوير اللوحة — عدم تطابق السمات البصرية مع السجل الرسمي",
    score: 87,
  }),
  a5: createDetails("a5", "ض ظ غ 7890", {
    severity: "منخفضة",
    alertType: "سلوك مشبوه",
    alertMessage: "توقف متكرر غير اعتيادي في المنطقة المراقبة",
    score: 58,
    comparisonRows: baseComparison.map((row) => ({ ...row, mismatch: false })),
  }),
  a6: createDetails("a6", "ف ق ك 2468", {
    severity: "منخفضة",
    alertType: "سرعة زائدة",
    score: 64,
  }),
  a7: createDetails("a7", "ل م ن 1357", {
    alertType: "مطلوب",
    alertMessage: "تطابق جزئي مع بلاغ سرقة مركبة",
    score: 89,
  }),
  a8: createDetails("a8", "هـ و ي 8642", {
    severity: "متوسطة",
    alertType: "سلوك مشبوه",
    score: 76,
  }),
  a9: createDetails("a9", "أ ص د 4321", {
    severity: "متوسطة",
    alertType: "قائمة سوداء",
    score: 81,
  }),
  a10: createDetails("a10", "ج ح خ 7788", {
    alertType: "سرعة زائدة",
    alertMessage: "تجاوز السرعة بمقدار 55 كم/س في منطقة سكنية",
    score: 93,
  }),
};

export const defaultVehicleDetails = mockVehicleDetailsMap.a4;

```

---

### <a id="📄-src-features-analysis-hooks-useanalysisresultsviewmodel-ts"></a>📄 `src/features/analysis/hooks/useAnalysisResultsViewModel.ts`

**File Info:**
- **Size**: 8.22 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/hooks/useAnalysisResultsViewModel.ts`
- **Relative Path**: `src/features/analysis/hooks`
- **Created**: 2026-08-13 17:22:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:58:04 (Europe/Istanbul / GMT+03:00)
- **MD5**: `0844a3f2cb2cad6d16cf198a8e5cfc36`
- **SHA256**: `3e2666f16d01d0d5e3086b8c0b5236146f0f5c96a72f1d4a07b7ee095ef772d9`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import { videosQueryKeys } from "../../video/constants/videos.constants";
import { videoService } from "../../video/services/VideoService";
import {
  ANALYSIS_PAGE_SIZE,
  analysisQueryKeys,
} from "../constants/analysis.constants";
import type { AnalysisFilters } from "../models/analysis.types";
import {
  buildAnalysisResultsPath,
  buildVehicleDetailsPath,
} from "../routes/analysisRoutes";
import { analysisService } from "../services/AnalysisService";
import { buildAnalysisStats } from "../utils/buildAnalysisStats";
import {
  findLatestCompletedVideo,
  mapVideoFileToAnalysisSummary,
} from "../utils/mapVideoToAnalysisSummary";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

function parseVideoId(raw: string | undefined): number | null {
  if (!raw) return null;
  const id = Number(raw);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export function useAnalysisResultsViewModel() {
  const navigate = useNavigate();
  const { videoId: videoIdParam } = useParams<{ videoId?: string }>();
  const parsedVideoId = parseVideoId(videoIdParam);

  const activeMenuId = useDashboardStore((s) => s.activeMenuId);
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [filters, setFilters] = useState<AnalysisFilters>({
    search: "",
    alertType: "الكل",
    severity: "الكل",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useEffect(() => {
    setActiveMenuId("analysis");
  }, [setActiveMenuId]);

  const videosQuery = useQuery({
    queryKey: videosQueryKeys.list(),
    queryFn: () => videoService.getVideos(),
  });

  useEffect(() => {
    if (parsedVideoId != null) return;
    if (videosQuery.isLoading || videosQuery.isError) return;
    if (!videosQuery.data) return;

    const latest = findLatestCompletedVideo(videosQuery.data);
    if (latest) {
      navigate(buildAnalysisResultsPath(latest.id), { replace: true });
    }
  }, [
    parsedVideoId,
    videosQuery.data,
    videosQuery.isLoading,
    videosQuery.isError,
    navigate,
  ]);

  const detectionsQuery = useQuery({
    queryKey: analysisQueryKeys.detections(parsedVideoId ?? 0),
    queryFn: () => analysisService.getVideoDetections(parsedVideoId as number),
    enabled: parsedVideoId != null,
  });

  const processedVideoQuery = useQuery({
    queryKey: videosQueryKeys.processed(parsedVideoId ?? 0),
    queryFn: () => videoService.getProcessedVideoUrl(parsedVideoId as number),
    enabled: isPlayerOpen && parsedVideoId != null,
  });

  const selectedVideoFile = useMemo(() => {
    if (parsedVideoId == null || !videosQuery.data) return null;
    return (
      videosQuery.data.find((video) => video.id === String(parsedVideoId)) ??
      null
    );
  }, [parsedVideoId, videosQuery.data]);

  const video = useMemo(() => {
    if (selectedVideoFile) {
      return mapVideoFileToAnalysisSummary(selectedVideoFile);
    }
    return null;
  }, [selectedVideoFile]);

  const alerts = useMemo(
    () => detectionsQuery.data ?? [],
    [detectionsQuery.data],
  );

  const filteredAlerts = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return alerts.filter((alert) => {
      const matchesSearch =
        query.length === 0 ||
        alert.plateNumber.toLowerCase().includes(query) ||
        alert.message.toLowerCase().includes(query);

      const matchesType =
        filters.alertType === "الكل" || alert.alertType === filters.alertType;

      const matchesSeverity =
        filters.severity === "الكل" || alert.severity === filters.severity;

      return matchesSearch && matchesType && matchesSeverity;
    });
  }, [alerts, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAlerts.length / ANALYSIS_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedAlerts = useMemo(() => {
    const start = (safePage - 1) * ANALYSIS_PAGE_SIZE;
    return filteredAlerts.slice(start, start + ANALYSIS_PAGE_SIZE);
  }, [filteredAlerts, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const formattedStats = useMemo(() => {
    const stats = buildAnalysisStats(alerts);
    return stats.map((stat) => ({
      ...stat,
      displayValue: formatNumber(stat.value),
      displayChange: `${stat.percent}%`,
    }));
  }, [alerts]);

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.alertType !== "الكل" ||
    filters.severity !== "الكل";

  const isResolvingVideoId =
    parsedVideoId == null &&
    (videosQuery.isLoading ||
      (Boolean(videosQuery.data) &&
        Boolean(findLatestCompletedVideo(videosQuery.data ?? []))));

  const isLoading =
    isResolvingVideoId ||
    (parsedVideoId != null &&
      (videosQuery.isLoading || detectionsQuery.isLoading));

  const isError =
    (parsedVideoId != null &&
      (videosQuery.isError || detectionsQuery.isError)) ||
    (parsedVideoId == null && videosQuery.isError);

  const hasNoCompletedVideo =
    parsedVideoId == null &&
    !videosQuery.isLoading &&
    !videosQuery.isError &&
    videosQuery.isSuccess &&
    !findLatestCompletedVideo(videosQuery.data ?? []);

  const isEmptyDetections =
    parsedVideoId != null &&
    !detectionsQuery.isLoading &&
    !detectionsQuery.isError &&
    alerts.length === 0;

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
  };

  const setAlertTypeFilter = (alertType: string) => {
    setFilters((prev) => ({ ...prev, alertType }));
    setCurrentPage(1);
  };

  const setSeverityFilter = (severity: string) => {
    setFilters((prev) => ({ ...prev, severity }));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  const handleViewProcessedVideo = () => {
    setIsPlayerOpen(true);
  };

  const handleCloseVideoPlayer = () => {
    setIsPlayerOpen(false);
  };

  const handleRowClick = (id: string) => {
    const alert = alerts.find((a) => a.id === id);
    if (!alert || !alert.violationType) return;
    navigate(buildVehicleDetailsPath(id));
  };

  const handleViewAlert = (id: string) => {
    const alert = alerts.find((a) => a.id === id);
    if (!alert || !alert.violationType) return;
    navigate(buildVehicleDetailsPath(id));
  };

  const handlePlayAlert = (_id: string) => {};
  const handleMoreAlert = (_id: string) => {};

  const refetch = () => {
    void videosQuery.refetch();
    if (parsedVideoId != null) {
      void detectionsQuery.refetch();
    }
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    video,
    formattedStats,
    filters,
    setSearch,
    setAlertTypeFilter,
    setSeverityFilter,
    alerts: paginatedAlerts,
    totalCount: filteredAlerts.length,
    totalAlertsCount: alerts.length,
    hasActiveFilters,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading,
    isError,
    isEmptyDetections,
    hasNoCompletedVideo,
    refetch,
    handleViewProcessedVideo,
    handleCloseVideoPlayer,
    isPlayerOpen,
    processedVideoUrl: processedVideoQuery.data ?? null,
    isProcessedVideoLoading: processedVideoQuery.isLoading,
    isProcessedVideoError: processedVideoQuery.isError,
    retryProcessedVideo: () => void processedVideoQuery.refetch(),
    handleRowClick,
    handleViewAlert,
    handlePlayAlert,
    handleMoreAlert,
  };
}
```

---

### <a id="📄-src-features-analysis-hooks-usevehicledetailsviewmodel-ts"></a>📄 `src/features/analysis/hooks/useVehicleDetailsViewModel.ts`

**File Info:**
- **Size**: 3.16 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/hooks/useVehicleDetailsViewModel.ts`
- **Relative Path**: `src/features/analysis/hooks`
- **Created**: 2026-08-14 14:51:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5154803707fc82e03810fb7a26112ec3`
- **SHA256**: `1f1474b6decd7b97636df6e3f1f7c9faa50d35ae16cb9019caca1a5933c6b88a`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { mockDashboardData, useDashboardStore } from "../../dashboard";
import { AnalysisRoutes } from "../routes/analysisRoutes";
import type {
  FormattedComparisonRow,
  VehicleDetailsSummaryCard,
} from "../models/vehicleDetails.types";
import { analysisQueryKeys } from "../constants/analysis.constants";
import { analysisService } from "../services/AnalysisService";

function parseId(raw: string | undefined): number | null {
  if (!raw) return null;
  const id = Number(raw);
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export function useVehicleDetailsViewModel() {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  useEffect(() => {
    setActiveMenuId("analysis");
  }, [setActiveMenuId]);

  const parsedId = parseId(id);

  useEffect(() => {
    if (parsedId == null) {
      // invalid id — navigate back to results
      navigate(AnalysisRoutes.results, { replace: true });
    }
  }, [parsedId, navigate]);

  const detailsQuery = useQuery({
    queryKey: analysisQueryKeys.details(id),
    queryFn: () => analysisService.getVehicleDetails(parsedId as number),
    enabled: parsedId != null,
  });

  const vehicle = detailsQuery.data ?? null;

  const comparisonRows: FormattedComparisonRow[] = useMemo(() => {
    if (!vehicle) return [];

    return vehicle.comparisonRows.map((row) => ({
      ...row,
      confidenceLabel: `${row.confidence}%`,
      mismatchLabel: row.mismatch ? "TRUE" : "FALSE",
    }));
  }, [vehicle]);

  const summaryCards: VehicleDetailsSummaryCard[] = useMemo(() => {
    if (!vehicle) return [];

    return [
      { id: "message", title: "رسالة التنبيه", value: vehicle.alertMessage },
      { id: "type", title: "نوع التنبيه", value: String(vehicle.alertType) },
      { id: "severity", title: "درجة الخطورة", value: vehicle.severity },
      { id: "score", title: "Score", value: `${vehicle.score} / 100` },
    ];
  }, [vehicle]);

  const handleBack = () => {
    navigate(AnalysisRoutes.results);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "analysis",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    vehicleId: id,
    vehicle,
    comparisonRows,
    summaryCards,
    handleBack,
    isLoading: detailsQuery.isLoading,
    isError: detailsQuery.isError,
    error: detailsQuery.error,
    refetch: detailsQuery.refetch,
  };
}

```

---

### <a id="📄-src-features-analysis-models-analysis-types-ts"></a>📄 `src/features/analysis/models/analysis.types.ts`

**File Info:**
- **Size**: 1.1 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/models/analysis.types.ts`
- **Relative Path**: `src/features/analysis/models`
- **Created**: 2026-08-13 17:21:54 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:28:55 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6e336961577534968da5d61d8684ccb8`
- **SHA256**: `9b3905edd673342e6a8a4b92e3512ef3b018ab9975313d15d677b4674d2d69e6`
- **Encoding**: UTF-8

**File code content:**

```typescript
export type AlertSeverity = "عالية" | "متوسطة" | "منخفضة";

export type AlertType =
  | "مطلوب"
  | "سرعة زائدة"
  | "لوحة مزورة"
  | "سلوك مشبوه"
  | "قائمة سوداء"
  | "اختلاف بيانات المركبة"
  | "لا يوجد تنبيه"
  | string;

export interface AnalysisVideoSummary {
  id: string;
  fileName: string;
  thumbnailUrl: string;
  processedAt: string;
  duration: string;
  formattedSize: string;
  status: "completed" | "failed" | "processing";
}

export interface AnalysisStat {
  id: string;
  title: string;
  value: number;
  percent: number;
  subtitle: string;
  icon: "vehicles" | "alerts" | "wanted" | "scans" | "units";
  gradient: string;
  isPositive: boolean;
}

export interface AnalysisAlert {
  id: string;
  plateNumber: string;
  alertType: string;
  severity: AlertSeverity | null;
  message: string;
  timestamp: string;
  // original API violation_type to control navigation and UI state
  violationType?: string | null;
}

export interface AnalysisFilters {
  search: string;
  alertType: string;
  severity: string;
}

```

---

### <a id="📄-src-features-analysis-models-vehicledetails-types-ts"></a>📄 `src/features/analysis/models/vehicleDetails.types.ts`

**File Info:**
- **Size**: 709 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/models/vehicleDetails.types.ts`
- **Relative Path**: `src/features/analysis/models`
- **Created**: 2026-08-14 14:51:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-14 23:36:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `35a7a79966e3095253b95dfc9cceaf7c`
- **SHA256**: `f0d891124259e6ce3a89db52ab2d676177151f0ff87d95f9f6807ad13ca80586`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { AlertSeverity, AlertType } from "./analysis.types";

export interface ComparisonRow {
  property: string;
  propertyLabel: string;
  aiValue: string;
  actualValue: string;
  confidence: number;
  mismatch: boolean;
}

export interface VehicleDetails {
  id: string;
  plateNumber: string;
  imageUrl: string;
  severity: AlertSeverity;
  score: number;
  alertType: AlertType | string;
  alertMessage: string;
  comparisonRows: ComparisonRow[];
}

export interface FormattedComparisonRow extends ComparisonRow {
  confidenceLabel: string;
  mismatchLabel: string;
}

export interface VehicleDetailsSummaryCard {
  id: string;
  title: string;
  value: string;
}

```

---

### <a id="📄-src-features-analysis-pages-analysisresultspage-tsx"></a>📄 `src/features/analysis/pages/AnalysisResultsPage.tsx`

**File Info:**
- **Size**: 3.72 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/pages/AnalysisResultsPage.tsx`
- **Relative Path**: `src/features/analysis/pages`
- **Created**: 2026-08-13 17:23:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:58:07 (Europe/Istanbul / GMT+03:00)
- **MD5**: `bce136bc3d129a92619758fabd1484f6`
- **SHA256**: `d5190a9a7ac9f83a029db91e6c15f6c20b06211f0645c8552bd75ed7c078a9c8`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useAnalysisResultsViewModel } from "../hooks/useAnalysisResultsViewModel";
import { ANALYSIS_PAGE_SIZE } from "../constants/analysis.constants";
import {
  AnalysisAlertsTable,
  AnalysisFilterBar,
  AnalysisResultsHeader,
  AnalysisStatsGrid,
  VideoPlayerModal,
  VideoSummaryCard,
} from "../components";

export function AnalysisResultsPage() {
  const vm = useAnalysisResultsViewModel();
  const pageStartIndex = (vm.currentPage - 1) * ANALYSIS_PAGE_SIZE + 1;

  const emptyAlertsMessage = vm.hasActiveFilters
    ? "لا توجد تنبيهات مطابقة للبحث"
    : "لا توجد تنبيهات أو مخالفات مكتشفة لهذا الفيديو";

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      {vm.isPlayerOpen && vm.video && (
        <VideoPlayerModal
          video={vm.video}
          videoUrl={vm.processedVideoUrl}
          isLoading={vm.isProcessedVideoLoading}
          isError={vm.isProcessedVideoError}
          onRetry={vm.retryProcessedVideo}
          onClose={vm.handleCloseVideoPlayer}
        />
      )}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <AnalysisResultsHeader />

        {vm.isLoading ? (
          <VehiclesTableSkeleton message="جاري تحميل نتائج التحليل..." />
        ) : vm.isError ? (
          <VehiclesErrorState
            message="تعذر تحميل نتائج تحليل الفيديو"
            onRetry={() => void vm.refetch()}
          />
        ) : vm.hasNoCompletedVideo ? (
          <VehiclesEmptyState message="لا توجد فيديوهات مكتملة لعرض نتائجها" />
        ) : (
          <>
            {vm.video && (
              <CardContainer>
                <VideoSummaryCard
                  video={vm.video}
                  onViewProcessed={vm.handleViewProcessedVideo}
                />
              </CardContainer>
            )}

            <AnalysisStatsGrid stats={vm.formattedStats} />

            <CardContainer
              title="تنبيهات المركبات"
              className="flex flex-col gap-4"
            >
              <AnalysisFilterBar
                filters={vm.filters}
                onSearchChange={vm.setSearch}
                onAlertTypeChange={vm.setAlertTypeFilter}
                onSeverityChange={vm.setSeverityFilter}
              />

              {vm.isEmptyDetections || vm.totalCount === 0 ? (
                <VehiclesEmptyState message={emptyAlertsMessage} />
              ) : (
                <>
                  <AnalysisAlertsTable
                    alerts={vm.alerts}
                    pageStartIndex={pageStartIndex}
                    onRowClick={vm.handleRowClick}
                    onView={vm.handleViewAlert}
                    onPlay={vm.handlePlayAlert}
                    onMore={vm.handleMoreAlert}
                  />

                  <VehiclesPagination
                    currentPage={vm.currentPage}
                    totalPages={vm.totalPages}
                    pageNumbers={vm.pageNumbers}
                    totalCount={vm.totalCount}
                    onPageChange={vm.goToPage}
                  />
                </>
              )}
            </CardContainer>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

```

---

### <a id="📄-src-features-analysis-pages-vehicledetailspage-tsx"></a>📄 `src/features/analysis/pages/VehicleDetailsPage.tsx`

**File Info:**
- **Size**: 1.66 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/analysis/pages/VehicleDetailsPage.tsx`
- **Relative Path**: `src/features/analysis/pages`
- **Created**: 2026-08-14 14:51:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `115557e6616e4de919c4eb5d374a6a53`
- **SHA256**: `bd1bcaad4e6a76830fb16147b0a480e3f7c23c9883eace52189a420c152554fa`
- **Encoding**: ASCII

**File code content:**

```typescript
import { DashboardLayout, CardContainer } from "../../dashboard";
import { useVehicleDetailsViewModel } from "../hooks/useVehicleDetailsViewModel";
import {
  VehicleComparisonTable,
  VehicleDetailsHeader,
  VehicleDetailsSummaryCards,
  VehicleInfoCard,
} from "../components";
import { VehiclesTableSkeleton } from "../../vehicles";
import { VehiclesErrorState } from "../../vehicles";

export function VehicleDetailsPage() {
  const vm = useVehicleDetailsViewModel();

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VehicleDetailsHeader onBack={vm.handleBack} />

        {vm.isLoading ? (
          <VehiclesTableSkeleton message="جاري تحميل تفاصيل المركبة..." />
        ) : vm.isError ? (
          <VehiclesErrorState
            message="تعذر تحميل تفاصيل المركبة"
            onRetry={() => void vm.refetch()}
          />
        ) : vm.vehicle ? (
          <>
            <VehicleInfoCard vehicle={vm.vehicle} />

            <CardContainer title="مقارنة البيانات">
              <VehicleComparisonTable rows={vm.comparisonRows} />
            </CardContainer>

            <VehicleDetailsSummaryCards cards={vm.summaryCards} />
          </>
        ) : null}
      </div>
    </DashboardLayout>
  );
}
```

---

### <a id="📄-src-features-analysis-routes-analysisroutes-ts"></a>📄 `src/features/analysis/routes/analysisRoutes.ts`

**File Info:**
- **Size**: 485 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/routes/analysisRoutes.ts`
- **Relative Path**: `src/features/analysis/routes`
- **Created**: 2026-08-13 17:22:07 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:48 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6e8b75128fcf1bf839f5a8bcc547c79e`
- **SHA256**: `92b4d06f59a18dc9316d7c8c04c3ef850ad352bf783c37c02068a7aba29ab501`
- **Encoding**: ASCII

**File code content:**

```typescript
export const AnalysisRoutes = {
  results: "/analysis/results",
  resultsWithVideo: "/analysis/results/:videoId",
  details: "/analysis/vehicle-details/:id",
} as const;

export type AnalysisRoute =
  (typeof AnalysisRoutes)[keyof typeof AnalysisRoutes];

export function buildAnalysisResultsPath(videoId: string | number): string {
  return `/analysis/results/${videoId}`;
}

export function buildVehicleDetailsPath(id: string): string {
  return `/analysis/vehicle-details/${id}`;
}

```

---

### <a id="📄-src-features-analysis-services-analysisservice-ts"></a>📄 `src/features/analysis/services/AnalysisService.ts`

**File Info:**
- **Size**: 1.44 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/services/AnalysisService.ts`
- **Relative Path**: `src/features/analysis/services`
- **Created**: 2026-08-13 17:22:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `483ad196b14c3d1a70c30e33a87388bd`
- **SHA256**: `b369e2974a7076991f721292294e1374f08c646443224852756c349ebb08d273`
- **Encoding**: ASCII

**File code content:**

```typescript
import { apiClient } from "../../../api/axios";
import { DetectionsApiEndpoints } from "../api/detections.endpoints";
import type { DetectionsApiResponse } from "../api/detections.types";
import type { AnalysisAlert, AnalysisVideoSummary } from "../models/analysis.types";
import type { VehicleDetails } from "../models/vehicleDetails.types";
import { mapDetectionApiToUi } from "../utils/mapDetectionApiToUi";
import type { DetectionDetailsResponse } from "../api/detectionDetails.types";
import { mapDetectionDetailsResponseToVehicleDetails } from "../utils/mapDetectionDetailsToVehicleDetails";

class AnalysisService {
  async getVideoDetections(videoId: number): Promise<AnalysisAlert[]> {
    const response = await apiClient.get<DetectionsApiResponse>(
      DetectionsApiEndpoints.byVideo(videoId),
    );

    return response.data.detections.map(mapDetectionApiToUi);
  }

  /** @deprecated Prefer getVideoDetections + videoService.getVideos */
  async getResults(): Promise<{
    video: AnalysisVideoSummary;
    alerts: AnalysisAlert[];
  }> {
    throw new Error(
      "AnalysisService.getResults is deprecated — use getVideoDetections",
    );
  }

  async getVehicleDetails(id: number): Promise<VehicleDetails> {
    const response = await apiClient.get<DetectionDetailsResponse>(
      DetectionsApiEndpoints.byId(id),
    );

    return mapDetectionDetailsResponseToVehicleDetails(response.data);
  }
}

export const analysisService = new AnalysisService();

```

---

### <a id="📄-src-features-analysis-utils-buildanalysisstats-ts"></a>📄 `src/features/analysis/utils/buildAnalysisStats.ts`

**File Info:**
- **Size**: 2.21 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/buildAnalysisStats.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 19:08:40 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:40 (Europe/Istanbul / GMT+03:00)
- **MD5**: `04817bce4cfccb3dc67dbf3e4d831d38`
- **SHA256**: `942914cd24f5e9c989f1c5696eee521c6447a7f651a3cf7a650b6837ba65dff6`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { AnalysisAlert, AnalysisStat } from "../models/analysis.types";

function percentOf(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 1000) / 10;
}

/**
 * Derive analysis statistics cards from detections (UI alerts).
 */
export function buildAnalysisStats(alerts: AnalysisAlert[]): AnalysisStat[] {
  const total = alerts.length;
  const withAlerts = alerts.filter(
    (alert) => alert.alertType !== "لا يوجد تنبيه",
  ).length;
  const high = alerts.filter((alert) => alert.severity === "عالية").length;
  const medium = alerts.filter((alert) => alert.severity === "متوسطة").length;
  const low = alerts.filter((alert) => alert.severity === "منخفضة").length;

  return [
    {
      id: "total",
      title: "إجمالي السيارات المكتشفة",
      value: total,
      percent: total > 0 ? 100 : 0,
      subtitle: "خلال مدة الفيديو",
      icon: "vehicles",
      gradient: "from-blue-600/40 to-indigo-700/30",
      isPositive: true,
    },
    {
      id: "alerts",
      title: "سيارات لديها تنبيهات",
      value: withAlerts,
      percent: percentOf(withAlerts, total),
      subtitle: "من إجمالي المكتشف",
      icon: "alerts",
      gradient: "from-violet-600/40 to-purple-700/30",
      isPositive: false,
    },
    {
      id: "high",
      title: "سيارات عالية الخطورة",
      value: high,
      percent: percentOf(high, total),
      subtitle: "تتطلب تدخل فوري",
      icon: "wanted",
      gradient: "from-rose-600/40 to-orange-700/30",
      isPositive: false,
    },
    {
      id: "medium",
      title: "سيارات متوسطة الخطورة",
      value: medium,
      percent: percentOf(medium, total),
      subtitle: "تحتاج متابعة",
      icon: "scans",
      gradient: "from-amber-600/40 to-yellow-700/30",
      isPositive: false,
    },
    {
      id: "low",
      title: "سيارات منخفضة الخطورة",
      value: low,
      percent: percentOf(low, total),
      subtitle: "مراقبة روتينية",
      icon: "units",
      gradient: "from-emerald-600/40 to-teal-700/30",
      isPositive: true,
    },
  ];
}

```

---

### <a id="📄-src-features-analysis-utils-confidence-utils-ts"></a>📄 `src/features/analysis/utils/confidence.utils.ts`

**File Info:**
- **Size**: 155 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/confidence.utils.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 20:19:52 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `114eebee05c3bd31b3f39ae228d63471`
- **SHA256**: `2ec1ec1420c13013fd4eb757868ab5973d69732fe8fbd70bc2b15951b89cdecc`
- **Encoding**: ASCII

**File code content:**

```typescript
export function formatConfidencePercent(value: number): string {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.round(value * 100)}%`;
}

```

---

### <a id="📄-src-features-analysis-utils-mapdetectionapitoui-ts"></a>📄 `src/features/analysis/utils/mapDetectionApiToUi.ts`

**File Info:**
- **Size**: 855 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/mapDetectionApiToUi.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 19:08:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `cbd5bd5a066996ebf9ad91e74790ec84`
- **SHA256**: `fd6654291b7a0b7e44a46a6adb380294d222949bed1fa0073d1c4e9799a0adad`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { DetectionApiItem } from "../api/detections.types";
import type { AnalysisAlert } from "../models/analysis.types";
import { mapDetectionSeverity } from "./severity.utils";
import { mapViolationTypeToLabel } from "./violationType.utils";

const EMPTY_FALLBACK = "—";

export function mapDetectionApiToUi(item: DetectionApiItem): AnalysisAlert {
  const message =
    item.message != null && item.message.trim().length > 0
      ? item.message.trim()
      : EMPTY_FALLBACK;

  return {
    id: String(item.id),
    plateNumber: item.plate_number?.trim() || EMPTY_FALLBACK,
    alertType: mapViolationTypeToLabel(item.violation_type),
    severity: mapDetectionSeverity(item.severity),
    message,
    timestamp: EMPTY_FALLBACK,
    // keep original violation_type for navigation/logic
    violationType: item.violation_type ?? null,
  };
}

```

---

### <a id="📄-src-features-analysis-utils-mapdetectiondetailstovehicledetails-ts"></a>📄 `src/features/analysis/utils/mapDetectionDetailsToVehicleDetails.ts`

**File Info:**
- **Size**: 2 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/mapDetectionDetailsToVehicleDetails.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 20:20:12 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:35:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `8344abddfed10c666587a25063211494`
- **SHA256**: `ec8ece2b28a58ecfbb8c0ad6e04be532d31f69e4b9f23ca4a5eeb90323e8ebe0`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { DetectionDetailsResponse } from "../api/detectionDetails.types";
import type { VehicleDetails, ComparisonRow } from "../models/vehicleDetails.types";
import { mapDetectionSeverity } from "./severity.utils";
import { mapViolationTypeToLabel } from "./violationType.utils";
import { formatConfidencePercent } from "./confidence.utils";

export function mapDetectionDetailsResponseToVehicleDetails(
  resp: DetectionDetailsResponse,
): VehicleDetails {
  const d = resp.detection;

  const comparisonRows: ComparisonRow[] = [
    {
      property: "plate",
      propertyLabel: "رقم اللوحة",
      aiValue: d.comparison.plate.ai,
      actualValue: d.comparison.plate.actual,
      confidence: Math.round(d.comparison.plate.confidence * 100),
      mismatch: d.comparison.plate.mismatch,
    },
    {
      property: "model",
      propertyLabel: "الموديل",
      aiValue: d.comparison.model.ai,
      actualValue: d.comparison.model.actual,
      confidence: Math.round(d.comparison.model.confidence * 100),
      mismatch: d.comparison.model.mismatch,
    },
    {
      property: "type",
      propertyLabel: "النوع",
      aiValue: d.comparison.type.ai,
      actualValue: d.comparison.type.actual,
      confidence: Math.round(d.comparison.type.confidence * 100),
      mismatch: d.comparison.type.mismatch,
    },
    {
      property: "color",
      propertyLabel: "اللون",
      aiValue: d.comparison.color.ai,
      actualValue: d.comparison.color.actual,
      confidence: Math.round(d.comparison.color.confidence * 100),
      mismatch: d.comparison.color.mismatch,
    },
  ];

  const vehicle: VehicleDetails = {
    id: String(d.id),
    plateNumber: d.comparison.plate.ai,
    imageUrl: d.vehicle_image_url,
    severity: mapDetectionSeverity(d.severity),
    score: Math.round(d.risk_score),
    alertType: mapViolationTypeToLabel(d.violation_type),
    alertMessage: d.message ?? "—",
    comparisonRows,
  };

  return vehicle;
}

```

---

### <a id="📄-src-features-analysis-utils-mapvideotoanalysissummary-ts"></a>📄 `src/features/analysis/utils/mapVideoToAnalysisSummary.ts`

**File Info:**
- **Size**: 798 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/mapVideoToAnalysisSummary.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 19:08:39 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:52:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b24d41cf0d6cc5692a567af365b168eb`
- **SHA256**: `3cd5674df60d6547708e035956b311d7b049dc6ff1cda4677bbf519f9cb5577e`
- **Encoding**: ASCII

**File code content:**

```typescript
import { DEFAULT_VIDEO_THUMBNAIL } from "../../video/utils/mapVideoApiToUi";
import type { VideoFile } from "../../video/models/video.types";
import type { AnalysisVideoSummary } from "../models/analysis.types";

export function mapVideoFileToAnalysisSummary(
  video: VideoFile,
): AnalysisVideoSummary {
  return {
    id: video.id,
    fileName: video.name,
    thumbnailUrl: video.thumbnailUrl ?? DEFAULT_VIDEO_THUMBNAIL,
    processedAt: video.uploadedAt,
    duration: video.duration,
    formattedSize: video.formattedSize,
    status: video.status,
  };
}

/** Prefer newest completed video (list order from API is newest-first). */
export function findLatestCompletedVideo(
  videos: VideoFile[],
): VideoFile | undefined {
  return videos.find((video) => video.status === "completed");
}

```

---

### <a id="📄-src-features-analysis-utils-severity-utils-ts"></a>📄 `src/features/analysis/utils/severity.utils.ts`

**File Info:**
- **Size**: 784 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/severity.utils.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 19:08:32 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:32 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7e9779664732e451e9d4f9daa4c644a6`
- **SHA256**: `a792c2a4217c94997a51ae52a88e0483f44df5e58fc66b7f5a4748efaeda08d1`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { AlertSeverity } from "../models/analysis.types";

/**
 * Maps API severity (Arabic or English) to UI AlertSeverity.
 * Returns null when severity is missing/unknown.
 */
export function mapDetectionSeverity(
  raw: string | null | undefined,
): AlertSeverity | null {
  if (raw == null) return null;

  const value = raw.trim();
  if (!value) return null;

  const normalized = value.toLowerCase();

  const map: Record<string, AlertSeverity> = {
    high: "عالية",
    medium: "متوسطة",
    low: "منخفضة",
    عالي: "عالية",
    عالية: "عالية",
    متوسط: "متوسطة",
    متوسطة: "متوسطة",
    منخفض: "منخفضة",
    منخفضة: "منخفضة",
  };

  return map[normalized] ?? map[value] ?? null;
}

```

---

### <a id="📄-src-features-analysis-utils-violationtype-utils-ts"></a>📄 `src/features/analysis/utils/violationType.utils.ts`

**File Info:**
- **Size**: 659 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/utils/violationType.utils.ts`
- **Relative Path**: `src/features/analysis/utils`
- **Created**: 2026-08-16 19:08:33 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:08:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `cc9dc8e8ee36f1b00b039511d1b74f43`
- **SHA256**: `775e70bc205c5a21cb39a53a7a28b37b24d972d6fa856e3b662d1977fa1b4648`
- **Encoding**: UTF-8

**File code content:**

```typescript
/** Known API violation_type → Arabic UI label */
const VIOLATION_TYPE_LABELS: Record<string, string> = {
  vehicle_mismatch: "اختلاف بيانات المركبة",
};

export const NO_ALERT_LABEL = "لا يوجد تنبيه";

/**
 * Maps API violation_type to a user-facing Arabic label.
 * Null/empty → "لا يوجد تنبيه".
 */
export function mapViolationTypeToLabel(
  violationType: string | null | undefined,
): string {
  if (violationType == null) return NO_ALERT_LABEL;

  const key = violationType.trim();
  if (!key) return NO_ALERT_LABEL;

  return VIOLATION_TYPE_LABELS[key] ?? VIOLATION_TYPE_LABELS[key.toLowerCase()] ?? key;
}

```

---

### <a id="📄-src-features-analysis-index-ts"></a>📄 `src/features/analysis/index.ts`

**File Info:**
- **Size**: 534 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/analysis/index.ts`
- **Relative Path**: `src/features/analysis`
- **Created**: 2026-08-13 17:23:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:09:21 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f1fed6aa0bf31b1403863970eb51c882`
- **SHA256**: `92428b47eb2550893ae3491dee03321f5363da3d612af9d97ef8be21b2704baa`
- **Encoding**: ASCII

**File code content:**

```typescript
export { AnalysisResultsPage } from "./pages/AnalysisResultsPage";
export { VehicleDetailsPage } from "./pages/VehicleDetailsPage";
export {
  AnalysisRoutes,
  buildAnalysisResultsPath,
  buildVehicleDetailsPath,
} from "./routes/analysisRoutes";
export { analysisService } from "./services/AnalysisService";
export { useAnalysisResultsViewModel } from "./hooks/useAnalysisResultsViewModel";
export { useVehicleDetailsViewModel } from "./hooks/useVehicleDetailsViewModel";
export { SeverityBadge } from "./components/SeverityBadge";

```

---

### <a id="📄-src-features-auth-components-feature-index-ts"></a>📄 `src/features/auth/components/feature/index.ts`

**File Info:**
- **Size**: 42 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/feature/index.ts`
- **Relative Path**: `src/features/auth/components/feature`
- **Created**: 2026-07-18 19:10:29 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `dec5f84ccbe58bca6bfefce498b9efcb`
- **SHA256**: `1f25a913fc2e101a3285173fffba6931eb7581014abfe26273512c5083fb79d8`
- **Encoding**: ASCII

**File code content:**

```typescript
export { LoginForm } from "./LoginForm";

```

---

### <a id="📄-src-features-auth-components-feature-loginform-tsx"></a>📄 `src/features/auth/components/feature/LoginForm.tsx`

**File Info:**
- **Size**: 1.95 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/feature/LoginForm.tsx`
- **Relative Path**: `src/features/auth/components/feature`
- **Created**: 2026-07-18 19:10:28 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 00:45:09 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5aa5a165e5da38a565f5d64b0a989683`
- **SHA256**: `60e9d05ca8056ebb4aa2baad4a9e9b3754c02159de452d3da66b2f34e25f5661`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { BaseSyntheticEvent } from "react";
import type { UseFormReturn } from "react-hook-form";
import { Input, Button, Checkbox } from "../ui";
import { PasswordInput } from "../shared";
import type { LoginFormValues } from "../../validators/loginSchema";

interface LoginFormProps {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
}

export function LoginForm({ form, onSubmit, isSubmitting }: LoginFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white">الدخول إلى النظام</h2>
        <p className="mt-1.5 text-sm text-white/50">
          للموظفين المخوّلين فقط
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
        <Input
          label="رقم الضابط"
          type="text"
          placeholder="أدخل رقم الضابط"
          autoComplete="username"
          error={errors.OfficerID?.message}
          {...register("OfficerID")}
        />

        <PasswordInput
          label="كلمة المرور"
          placeholder="أدخل كلمة المرور"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between">
          <Checkbox label="تذكرني" {...register("rememberMe")} />
          <button
            type="button"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <Button type="submit" isLoading={isSubmitting} className="mt-1">
          تسجيل الدخول
        </Button>
      </form>
    </div>
  );
}
```

---

### <a id="📄-src-features-auth-components-shared-authbrandpanel-tsx"></a>📄 `src/features/auth/components/shared/AuthBrandPanel.tsx`

**File Info:**
- **Size**: 5.25 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/shared/AuthBrandPanel.tsx`
- **Relative Path**: `src/features/auth/components/shared`
- **Created**: 2026-07-18 19:10:06 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 19:37:49 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b4f089679e5aa8c2bf460811a6e37d7c`
- **SHA256**: `fab0f327309c0b2207cc725ffd5bce27ddc1eae7f5a9e14e91662fb8391262eb`
- **Encoding**: UTF-8

**File code content:**

```typescript
interface AuthBrandPanelProps {
  activeDot?: number;
}

export function AuthBrandPanel({ activeDot = 0 }: AuthBrandPanelProps) {
  return (
    <div className="relative flex min-h-[280px] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950 via-[#0B1220] to-violet-950 px-8 py-10 text-white md:min-h-screen md:w-1/2 md:px-12 md:py-14 lg:px-16">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-blue-400/15 blur-2xl" />

      <div className="relative z-10">
        <p className="text-xl font-bold leading-tight tracking-tight">
          نظام المراقبة المرورية
        </p>
        <p className="mt-0.5 text-sm text-white/40">TrafficEye</p>
      </div>

      <div className="relative z-10 my-8 flex flex-1 flex-col justify-center md:my-0">
        <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          كشف أسرع. تمييز أذكى. أمان أكثر.
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
          نظام ذكاء اصطناعي للتعرف على لوحات المركبات وبيانات المركبات، مصمم
          لرجال المرور وجهات الأمن.
        </p>

        <div className="relative mt-8 hidden h-72 w-full max-w-lg md:block lg:h-96 lg:max-w-xl">
          <svg
            viewBox="0 0 680 380"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="كاميرا مراقبة ترصد سيارة وتعرض بياناتها الفنية"
          >
            <line x1="0" y1="300" x2="680" y2="300" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />

            <rect x="60" y="60" width="8" height="120" fill="#4438a3" />
            <rect x="50" y="55" width="60" height="30" rx="6" fill="#8b7cf6" />
            <circle cx="105" cy="70" r="8" fill="#1c1440" />
            <circle cx="105" cy="70" r="4" fill="#38bdf8" />

            <path d="M110 65 L280 210 L280 250 L110 90 Z" fill="#8b7cf6" opacity="0.12" />
            <line x1="110" y1="65" x2="280" y2="210" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <line x1="110" y1="90" x2="280" y2="250" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

            <g transform="translate(220,255)">
              <rect x="0" y="-20" width="110" height="38" rx="10" fill="#f5f4ff" />
              <rect x="8" y="-32" width="42" height="22" rx="8" fill="#f5f4ff" />
              <circle cx="16" cy="18" r="11" fill="#1c1440" />
              <circle cx="94" cy="18" r="11" fill="#1c1440" />
              <rect x="30" y="-8" width="50" height="15" rx="3" fill="#241b52" />
              <text x="55" y="3" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#f5f4ff">
                AB 123
              </text>
            </g>

            <g stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M205 235 L205 218 L222 218" />
              <path d="M335 235 L335 218 L318 218" />
              <path d="M205 273 L205 290 L222 290" />
              <path d="M335 273 L335 290 L318 290" />
            </g>

            <line x1="335" y1="255" x2="400" y2="255" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

            <g transform="translate(410,150)">
              <rect width="230" height="175" rx="12" fill="#3b2f7a" stroke="#6d5fd8" strokeWidth="0.5" />
              <line x1="18" y1="42" x2="212" y2="42" stroke="#6d5fd8" strokeWidth="0.5" opacity="0.5" />

              <text x="80" y="28" textAnchor="start" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#f5f4ff">
                AB 123
              </text>
              <text x="200" y="64" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                الموديل: تويوتا كورولا
              </text>
              <text x="200" y="86" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                اللون: أبيض
              </text>
              <text x="200" y="108" textAnchor="start" fontFamily="sans-serif" fontSize="12" fill="#c9c2f7">
                النوع: سيدان
              </text>

              <circle cx="202" cy="145" r="5" fill="#4ade80" />
              <text x="190" y="148" textAnchor="start" fontFamily="sans-serif" fontSize="10" fill="#86efac">
                تم التحقق
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === activeDot ? "bg-white" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-auth-components-shared-authsplitlayout-tsx"></a>📄 `src/features/auth/components/shared/AuthSplitLayout.tsx`

**File Info:**
- **Size**: 832 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/shared/AuthSplitLayout.tsx`
- **Relative Path**: `src/features/auth/components/shared`
- **Created**: 2026-07-18 19:10:07 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 00:44:43 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4bc7419dccfa0598dd7b4da466d4bb73`
- **SHA256**: `7d9e1fe0acad71fbf2f679604b2338e0589cec3b7a15698d0c3d8d49c1549df4`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";
import { AuthBrandPanel } from "./AuthBrandPanel";

interface AuthSplitLayoutProps {
  children: ReactNode;
  activeDot?: number;
}

export function AuthSplitLayout({
  children,
  activeDot = 0,
}: AuthSplitLayoutProps) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="flex min-h-screen w-full flex-col bg-[#0B1220] font-[Cairo,Tahoma,sans-serif] md:flex-row"
    >
      <AuthBrandPanel activeDot={activeDot} />
      <div className="flex w-full flex-1 items-center justify-center px-4 py-10 md:w-1/2 md:px-8 lg:px-12">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-xl sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-auth-components-shared-index-ts"></a>📄 `src/features/auth/components/shared/index.ts`

**File Info:**
- **Size**: 156 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/shared/index.ts`
- **Relative Path**: `src/features/auth/components/shared`
- **Created**: 2026-07-18 19:10:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f4b56e727ac2a7bffa69cb610960e808`
- **SHA256**: `41a0e67f17902056099b1a187e2b91172a1ec8485a9dd500654561d61863cc9e`
- **Encoding**: ASCII

**File code content:**

```typescript
export { AuthBrandPanel } from "./AuthBrandPanel";
export { AuthSplitLayout } from "./AuthSplitLayout";
export { PasswordInput } from "./PasswordInput";

```

---

### <a id="📄-src-features-auth-components-shared-passwordinput-tsx"></a>📄 `src/features/auth/components/shared/PasswordInput.tsx`

**File Info:**
- **Size**: 1.93 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/shared/PasswordInput.tsx`
- **Relative Path**: `src/features/auth/components/shared`
- **Created**: 2026-07-18 19:10:15 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `725d9a0befd107dc083bf60d11ba1fe1`
- **SHA256**: `d94384b9bced7f14b3c4a5d0b3717d321fa4864931946006894d305225162e99`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Input } from "../ui/Input";

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10.7 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.3 3.2" />
      <path d="M6.6 6.6C3.9 8.5 2 12 2 12s3.5 7 10 7c1.6 0 3.1-.4 4.4-1" />
      <path d="M14.1 14.1a3 3 0 1 1-4.2-4.2" />
      <path d="m3 3 18 18" />
    </svg>
  );
}

export function PasswordInput({
  label = "Password",
  error,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      {...props}
      label={label}
      error={error}
      type={visible ? "text" : "password"}
      rightElement={
        <button
          type="button"
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((v) => !v)}
          className="rounded p-0.5 text-slate-400 transition hover:text-slate-600"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
    />
  );
}

```

---

### <a id="📄-src-features-auth-components-ui-button-tsx"></a>📄 `src/features/auth/components/ui/Button.tsx`

**File Info:**
- **Size**: 1.22 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/ui/Button.tsx`
- **Relative Path**: `src/features/auth/components/ui`
- **Created**: 2026-07-18 19:09:54 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:10:04 (Europe/Istanbul / GMT+03:00)
- **MD5**: `d773d35cb22cd447b94391da1298582c`
- **SHA256**: `f77df22bdcf61162ba1662c8a0cc39909cfd14c71e26e4d16b8f500409e9c773`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  loadingLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  isLoading = false,
  loadingLabel = "جارٍ التحقق...",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B1220] disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-l from-blue-600 to-violet-600 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:from-blue-500 hover:to-violet-500 focus:ring-blue-500",
    secondary:
      "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 focus:ring-white/20",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? loadingLabel : children}
    </button>
  );
}
```

---

### <a id="📄-src-features-auth-components-ui-checkbox-tsx"></a>📄 `src/features/auth/components/ui/Checkbox.tsx`

**File Info:**
- **Size**: 780 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/ui/Checkbox.tsx`
- **Relative Path**: `src/features/auth/components/ui`
- **Created**: 2026-07-18 19:09:55 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 00:53:17 (Europe/Istanbul / GMT+03:00)
- **MD5**: `c95c83dffe3f99b06c7cd04b0e246a8c`
- **SHA256**: `e137ad85e25e94be6190b439baafa224496e04c089a17b2560109f71dd6beff2`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export function Checkbox({ label, id, className = "", ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <label
      htmlFor={checkboxId}
      className={`inline-flex cursor-pointer items-center gap-2 select-none ${className}`}
    >
      <input
        id={checkboxId}
        type="checkbox"
        className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 accent-blue-600 focus:ring-blue-500 focus:ring-offset-[#0B1220]"
        {...props}
      />
      {label ? <span className="text-sm text-white/60">{label}</span> : null}
    </label>
  );
}
```

---

### <a id="📄-src-features-auth-components-ui-index-ts"></a>📄 `src/features/auth/components/ui/index.ts`

**File Info:**
- **Size**: 110 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/ui/index.ts`
- **Relative Path**: `src/features/auth/components/ui`
- **Created**: 2026-07-18 19:09:58 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4a25df467d2836a667a9431ea71e11ed`
- **SHA256**: `292bf0eee39121353e3b9a771ea66857b7163e92f507ba6b50209144eb27b9a4`
- **Encoding**: ASCII

**File code content:**

```typescript
export { Input } from "./Input";
export { Button } from "./Button";
export { Checkbox } from "./Checkbox";

```

---

### <a id="📄-src-features-auth-components-ui-input-tsx"></a>📄 `src/features/auth/components/ui/Input.tsx`

**File Info:**
- **Size**: 1.27 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/components/ui/Input.tsx`
- **Relative Path**: `src/features/auth/components/ui`
- **Created**: 2026-07-18 19:09:52 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 00:45:35 (Europe/Istanbul / GMT+03:00)
- **MD5**: `85a3fe509e9b26eb8ac710eae4c7874e`
- **SHA256**: `14fe9fb791c923e7185d6903ba77a9c79605c2120b08cb055045c4f3390fff69`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: ReactNode;
}

export function Input({
  label,
  error,
  rightElement,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-white/70"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
            error ? "border-rose-500/60" : "border-white/10"
          } ${rightElement ? "pl-11" : ""} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {rightElement}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
}
```

---

### <a id="📄-src-features-auth-hooks-useloginviewmodel-ts"></a>📄 `src/features/auth/hooks/useLoginViewModel.ts`

**File Info:**
- **Size**: 638 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/hooks/useLoginViewModel.ts`
- **Relative Path**: `src/features/auth/hooks`
- **Created**: 2026-07-18 19:10:21 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 21:50:31 (Europe/Istanbul / GMT+03:00)
- **MD5**: `36354a4e82b8b4b8dce9e503f7086c25`
- **SHA256**: `195751cc2972d851e559ecea69d3007d0721ff6388b8b5874d78ae65b9a5a4f1`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormValues,
} from "../validators/loginSchema";

export function useLoginViewModel() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      OfficerID: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = form.handleSubmit(async (data: LoginFormValues) => {
    console.log("Login attempt:", data);
  });

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
  };
}
```

---

### <a id="📄-src-features-auth-models-auth-types-ts"></a>📄 `src/features/auth/models/auth.types.ts`

**File Info:**
- **Size**: 474 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/models/auth.types.ts`
- **Relative Path**: `src/features/auth/models`
- **Created**: 2026-07-18 19:07:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `c184ca8342497cdc7c4566acc4839a94`
- **SHA256**: `be943dc82d2cc99c0fd7291c8cd226dedb37c0a83d55c5c05533f33d4e065aa3`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginCredentials {
  OfficerID: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

```

---

### <a id="📄-src-features-auth-pages-loginpage-tsx"></a>📄 `src/features/auth/pages/LoginPage.tsx`

**File Info:**
- **Size**: 471 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/auth/pages/LoginPage.tsx`
- **Relative Path**: `src/features/auth/pages`
- **Created**: 2026-07-18 19:10:29 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5677f59b82caa12d0974f98ab73c5914`
- **SHA256**: `2e37435a4ce3799230d47ed0cbac42f8856e198b0c46b83105b380d1506e28c8`
- **Encoding**: ASCII

**File code content:**

```typescript
import { AuthSplitLayout } from "../components/shared";
import { LoginForm } from "../components/feature";
import { useLoginViewModel } from "../hooks/useLoginViewModel";

export function LoginPage() {
  const { form, onSubmit, isSubmitting } = useLoginViewModel();

  return (
    <AuthSplitLayout activeDot={0}>
      <LoginForm
        form={form}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </AuthSplitLayout>
  );
}

```

---

### <a id="📄-src-features-auth-routes-authroutes-ts"></a>📄 `src/features/auth/routes/authRoutes.ts`

**File Info:**
- **Size**: 135 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/routes/authRoutes.ts`
- **Relative Path**: `src/features/auth/routes`
- **Created**: 2026-07-18 19:09:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `1eb6dc8932d51d6881de8b94987e0adf`
- **SHA256**: `7fed5392ba2e168a70a23c7e3ad2c034d8e9af0837ed9aec5012d20ec0073763`
- **Encoding**: ASCII

**File code content:**

```typescript
export const AuthRoutes = {
  login: "/login",
} as const;

export type AuthRoute = (typeof AuthRoutes)[keyof typeof AuthRoutes];

```

---

### <a id="📄-src-features-auth-services-authservice-ts"></a>📄 `src/features/auth/services/AuthService.ts`

**File Info:**
- **Size**: 481 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/services/AuthService.ts`
- **Relative Path**: `src/features/auth/services`
- **Created**: 2026-07-18 19:09:45 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:58:14 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7c82371b705cbaaa260c7a2159ddda67`
- **SHA256**: `86103441c1842534cd65b3ffe4634b17e353c8a9e3e33524c322ceaab1e62368`
- **Encoding**: ASCII

**File code content:**

```typescript
import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../models/auth.types";

class AuthService {
  async login(_credentials: LoginCredentials): Promise<AuthResponse> {
    throw new Error("AuthService.login is not implemented yet");
  }

  async register(_credentials: RegisterCredentials): Promise<AuthResponse> {
    throw new Error("AuthService.register is not implemented yet");
  }
}

export const authService = new AuthService();

```

---

### <a id="📄-src-features-auth-store-authstore-ts"></a>📄 `src/features/auth/store/authStore.ts`

**File Info:**
- **Size**: 623 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/store/authStore.ts`
- **Relative Path**: `src/features/auth/store`
- **Created**: 2026-07-18 19:09:45 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `98608f356f1e4b03f6886d492e07f48a`
- **SHA256**: `94032444f3e94734e1ec7c93d95fcf2af6ab8924faf0d39be326e7cd645c2299`
- **Encoding**: ASCII

**File code content:**

```typescript
import { create } from "zustand";
import type { AuthState, User } from "../models/auth.types";

interface AuthStore extends AuthState {
  setUser: (user: User | null) => void;
  setAuthenticated: (value: boolean) => void;
  reset: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: user !== null,
    }),

  setAuthenticated: (value) => set({ isAuthenticated: value }),

  reset: () => set(initialState),
}));

```

---

### <a id="📄-src-features-auth-validators-loginschema-ts"></a>📄 `src/features/auth/validators/loginSchema.ts`

**File Info:**
- **Size**: 604 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/validators/loginSchema.ts`
- **Relative Path**: `src/features/auth/validators`
- **Created**: 2026-07-18 19:09:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 00:53:23 (Europe/Istanbul / GMT+03:00)
- **MD5**: `76b12e3216a0ab8af8fc90cc2c02374f`
- **SHA256**: `92432b1b35b9190a111ef7f39154560b8828f91cb6942e40f3bb14a16cc31912`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { z } from "zod";

export const loginSchema = z.object({
  OfficerID: z
    .string()
    .min(1, "رقم الضابط مطلوب")
    .min(3, "يجب أن يتكوّن رقم الضابط من 3 أحرف على الأقل")
    .max(20, "يجب ألا يتجاوز رقم الضابط 20 حرفًا"),

  password: z
    .string()
    .min(1, "كلمة المرور مطلوبة")
    .min(6, "يجب أن تتكوّن كلمة المرور من 6 أحرف على الأقل"),
  rememberMe: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
```

---

### <a id="📄-src-features-auth-index-ts"></a>📄 `src/features/auth/index.ts`

**File Info:**
- **Size**: 329 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/auth/index.ts`
- **Relative Path**: `src/features/auth`
- **Created**: 2026-07-18 19:10:31 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `46ad25546ee2a42ceada8bc1949f1f27`
- **SHA256**: `61dc709bdbd08d1650791ef31e6e089deba34916c282f08f5c9929374f0d03ec`
- **Encoding**: ASCII

**File code content:**

```typescript
export { LoginPage } from "./pages/LoginPage";
export { AuthRoutes } from "./routes/authRoutes";
export { useAuthStore } from "./store/authStore";
export { authService } from "./services/AuthService";
export { useLoginViewModel } from "./hooks/useLoginViewModel";
export { Input, Button, Checkbox } from "./components/ui";

```

---

### <a id="📄-src-features-blacklist-api-blacklist-endpoints-ts"></a>📄 `src/features/blacklist/api/blacklist.endpoints.ts`

**File Info:**
- **Size**: 152 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/api/blacklist.endpoints.ts`
- **Relative Path**: `src/features/blacklist/api`
- **Created**: 2026-08-15 21:38:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:00:27 (Europe/Istanbul / GMT+03:00)
- **MD5**: `176cd05b8d7009514e186b1d3429ee12`
- **SHA256**: `a3647acd30841fc9f7dfbd204709e162986ede227b095ce8b69abcbe683d150b`
- **Encoding**: ASCII

**File code content:**

```typescript

export const BlacklistApiEndpoints = {
  list: "/api/admin/blacklist",
  detail: (id: number | string) => `/api/admin/blacklist/${id}`,
} as const;
```

---

### <a id="📄-src-features-blacklist-api-blacklist-types-ts"></a>📄 `src/features/blacklist/api/blacklist.types.ts`

**File Info:**
- **Size**: 1023 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/api/blacklist.types.ts`
- **Relative Path**: `src/features/blacklist/api`
- **Created**: 2026-08-15 21:38:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 10:34:45 (Europe/Istanbul / GMT+03:00)
- **MD5**: `2a134771db75e6a36d8faf6a9f86e50e`
- **SHA256**: `7152d2bb4b1a1f43214fc359caf36fc19192af7a66ac438330fdd8bebcbdd057`
- **Encoding**: ASCII

**File code content:**

```typescript
import type {
  BlacklistPriority,
  BlacklistPriorityApiValue,
  BlacklistStatus,
} from "../models/blacklist.types";

export interface BlacklistApiItem {
  id: number;
  plate_number: string;
  owner_name: string;
  vehicle_type: string;
  vehicle_color: string;
  priority: BlacklistPriorityApiValue;
  status: BlacklistStatus;
  wanted: boolean;
  created_at: string;
}

export interface BlacklistApiResponse {
  data: BlacklistApiItem[];
}

export interface UpdateBlacklistRequest {
  status: BlacklistStatus;
  priority: BlacklistPriority;
  wanted: boolean;
}

export interface CreateBlacklistRequest {
  vehicle_id: number;
  status: BlacklistStatus;
  priority: BlacklistPriority;
  wanted: boolean;
}

export interface UpdateBlacklistApiPayload extends Omit<UpdateBlacklistRequest, "priority"> {
  priority: BlacklistPriorityApiValue;
}

export interface CreateBlacklistApiPayload extends Omit<CreateBlacklistRequest, "priority"> {
  priority: BlacklistPriorityApiValue;
}
```

---

### <a id="📄-src-features-blacklist-components-blacklistfilters-tsx"></a>📄 `src/features/blacklist/components/BlacklistFilters.tsx`

**File Info:**
- **Size**: 3.42 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/BlacklistFilters.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-14 23:55:48 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:18:36 (Europe/Istanbul / GMT+03:00)
- **MD5**: `542f16b9e7fc916fbcaf24d67c7527e4`
- **SHA256**: `d59c66d4f562c149aa0a51193d814c37bbfa0259975c4616ccc3bfcafb26ae8a`
- **Encoding**: ASCII

**File code content:**

```typescript
import { Input } from "../../auth";
import type { BlacklistFilters } from "../models/blacklist.types";

interface BlacklistFiltersProps {
  filters: BlacklistFilters;
  severityOptions: string[];
  typeOptions: string[];
  colorOptions: string[];
  onSearchChange: (value: string) => void;
  onSeverityChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onReset: () => void;
  onExport: () => void;
  onAddClick: () => void;
}

export function BlacklistFiltersBar({
  filters,
  severityOptions,
  typeOptions,
  colorOptions,
  onSearchChange,
  onSeverityChange,
  onTypeChange,
  onColorChange,
}: BlacklistFiltersProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1 sm:max-w-sm">
            <span className="pointer-events-none absolute inset-y-0 start-3 flex items-center text-white/35">
              <SearchIcon />
            </span>
            <Input
              value={filters.search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="بحث برقم المركبة أو اسم المالك..."
              className="border-white/10 bg-white/5 ps-10 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <FilterSelect
            label="كل درجات الخطورة"
            value={filters.severity}
            options={severityOptions}
            onChange={onSeverityChange}
          />

          <FilterSelect
            label="كل الأنواع"
            value={filters.type}
            options={typeOptions}
            onChange={onTypeChange}
          />

          <FilterSelect
            label="كل الألوان"
            value={filters.color}
            options={colorOptions}
            onChange={onColorChange}
          />
        </div>

      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-[150px]">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0f172a] text-white"
          >
            {option === "الكل" ? label : option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
        ▾
      </span>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

```

---

### <a id="📄-src-features-blacklist-components-blacklistheader-tsx"></a>📄 `src/features/blacklist/components/BlacklistHeader.tsx`

**File Info:**
- **Size**: 969 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/BlacklistHeader.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-14 23:55:31 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 21:25:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6ee6e0ead60c03b0b8ca153ae6bbccd1`
- **SHA256**: `4f30e751277fef2aa1a5945ff8b11b8bc48135bbbdd285337d65bd701c2bd7e4`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { DashboardRoutes } from "../../dashboard";

interface BlacklistHeaderProps {
  title?: string;
  subtitle?: string;
}

export function BlacklistHeader({
  title = "القائمة السوداء",
  subtitle = "إدارة المركبات المدرجة في القائمة السوداء",
}: BlacklistHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={DashboardRoutes.home}
          className="transition hover:text-white/70"
        >
          لوحة التحكم
        </Link>
        <span>/</span>
        <span className="text-white/70">القائمة السوداء</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-blacklist-components-blackliststats-tsx"></a>📄 `src/features/blacklist/components/BlacklistStats.tsx`

**File Info:**
- **Size**: 957 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/BlacklistStats.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-14 23:55:38 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 21:25:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `2a6dd450984133bab8974d629999efc2`
- **SHA256**: `6922e72195ad2060b879726990e3128e51cbca744659cbae4a4a9f69454c93de`
- **Encoding**: ASCII

**File code content:**

```typescript
import { StatCard, MenuGlyph } from "../../dashboard";

interface FormattedBlacklistStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "blacklist" | "wanted" | "scans" | "units";
}

interface BlacklistStatsProps {
  stats: FormattedBlacklistStat[];
}

export function BlacklistStats({ stats }: BlacklistStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<MenuGlyph name={stat.icon} className="h-5 w-5" />}
        />
      ))}
    </section>
  );
}

```

---

### <a id="📄-src-features-blacklist-components-blacklisttable-tsx"></a>📄 `src/features/blacklist/components/BlacklistTable.tsx`

**File Info:**
- **Size**: 5.78 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/BlacklistTable.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-14 23:55:49 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:32:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `c2f05703648d5a3683370e3574491254`
- **SHA256**: `8d52a38d6e1dfb941523f05810e82244e3f61c609de1b58844ab34605ba4347f`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ReactNode } from "react";
import { SeverityBadge } from "../../analysis";
import { MenuGlyph } from "../../dashboard";
import type { BlacklistedVehicle } from "../models/blacklist.types";

interface BlacklistTableProps {
  vehicles: BlacklistedVehicle[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onMore: (id: string) => void;
}

export function BlacklistTable({
  vehicles,
  onEdit,
  onDelete,
  onMore,
}: BlacklistTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">رقم المركبة</th>
              <th className="px-4 py-3.5 text-start font-medium">اسم المالك</th>
              <th className="px-4 py-3.5 text-start font-medium">سبب الطلب</th>
              <th className="px-4 py-3.5 text-start font-medium">درجة الخطورة</th>
              <th className="px-4 py-3.5 text-start font-medium">اللون</th>
              <th className="px-4 py-3.5 text-start font-medium">النوع</th>
              <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد مركبات مطابقة للبحث
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle) => (
                <BlacklistTableRow
                  key={vehicle.id}
                  vehicle={vehicle}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onMore={onMore}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface BlacklistTableRowProps {
  vehicle: BlacklistedVehicle;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onMore: (id: string) => void;
}

function BlacklistTableRow({
  vehicle,
  onEdit,
  onDelete,
  // onMore,
}: BlacklistTableRowProps) {
  return (
    <tr className="border-b border-white/5 transition hover:bg-white/[0.04]">
      <td className="px-4 py-3.5">
        <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
          {vehicle.plateNumber}
        </span>
      </td>
      <td className="px-4 py-3.5 text-white/80">{vehicle.ownerName}</td>
      <td className="px-4 py-3.5 text-white/65">{vehicle.reason}</td>
      <td className="px-4 py-3.5">
        <SeverityBadge severity={vehicle.severity} />
      </td>
      <td className="px-4 py-3.5">
        <span className="inline-flex items-center gap-2 text-white/75">
          <span
            className="h-3 w-3 rounded-full ring-1 ring-white/20"
            style={{ backgroundColor: vehicle.colorCode }}
          />
          {vehicle.color}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <span className="inline-flex items-center gap-2 text-white/75">
          <MenuGlyph name="vehicles" className="h-4 w-4 text-white/45" />
          {vehicle.type}
        </span>
      </td>
      <td className="px-4 py-3.5">
        <div className="flex items-center gap-1.5">
          <ActionButton
            label="حذف"
            danger
            onClick={() => onDelete(vehicle.id)}
          >
            <TrashIcon />
          </ActionButton>
          <ActionButton label="تعديل" onClick={() => onEdit(vehicle.id)}>
            <EditIcon />
          </ActionButton>
          {/* <ActionButton label="المزيد" muted onClick={() => onMore(vehicle.id)}>
            <MoreIcon />
          </ActionButton> */}
        </div>
      </td>
    </tr>
  );
}

function ActionButton({
  children,
  label,
  onClick,
  danger = false,
  muted = false,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 ${
        danger
          ? "text-rose-400 hover:text-rose-300"
          : muted
            ? "text-white/55 hover:text-white"
            : "text-blue-400 hover:text-blue-300"
      }`}
    >
      {children}
    </button>
  );
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M13 6.5l3 3" />
    </svg>
  );
}

// function MoreIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="currentColor"
//       aria-hidden
//     >
//       <circle cx="12" cy="5" r="1.6" />
//       <circle cx="12" cy="12" r="1.6" />
//       <circle cx="12" cy="19" r="1.6" />
//     </svg>
//   );
// }

```

---

### <a id="📄-src-features-blacklist-components-deleteconfirmmodal-tsx"></a>📄 `src/features/blacklist/components/DeleteConfirmModal.tsx`

**File Info:**
- **Size**: 2.75 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/DeleteConfirmModal.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-17 07:03:15 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:03:25 (Europe/Istanbul / GMT+03:00)
- **MD5**: `862b54cc34a2598ffe5a2ef259fa0f89`
- **SHA256**: `eac60b6b2185be849373b9d0973442b6027b461d95e8c052074ac6d46bdf8988`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { BlacklistedVehicle } from "../models/blacklist.types";

interface DeleteConfirmModalProps {
  vehicle: BlacklistedVehicle;
  isDeleting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function DeleteConfirmModal({
  vehicle,
  isDeleting,
  onConfirm,
  onClose,
}: DeleteConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(244,63,94,0.15)] sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">
            <WarningIcon />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">تأكيد الحذف</h2>
            <p className="mt-0.5 text-sm text-white/50">
              لا يمكن التراجع عن هذا الإجراء
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/70">
          هل أنت متأكد من حذف المركبة{" "}
          <span className="font-semibold text-white">
            {vehicle.plateNumber}
          </span>{" "}
          من القائمة السوداء؟
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting ? "جارٍ الحذف..." : "حذف نهائيًا"}
          </button>
        </div>
      </div>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}
```

---

### <a id="📄-src-features-blacklist-components-editblacklistmodal-tsx"></a>📄 `src/features/blacklist/components/EditBlacklistModal.tsx`

**File Info:**
- **Size**: 4.54 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/EditBlacklistModal.tsx`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-17 07:01:59 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:39:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `cbcbe5743ba85f117071016e34f2a038`
- **SHA256**: `40cb9afb824c4cb483572cbfde5d4cc4e1fe32856f23760b86c58836a8e8167b`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState } from "react";
import { Button } from "../../auth";
import type { UpdateBlacklistRequest } from "../api/blacklist.types";
import type {
  BlacklistedVehicle,
  BlacklistPriority,
  BlacklistStatus,
} from "../models/blacklist.types";
import {
  mapPriorityToSeverityLabel,
  mapStatusToArabicLabel,
} from "../utils/priority.utils";

interface EditBlacklistModalProps {
  vehicle: BlacklistedVehicle;
  isSaving: boolean;
  onSave: (payload: UpdateBlacklistRequest) => void;
  onClose: () => void;
}

const STATUS_OPTIONS: BlacklistStatus[] = ["active", "blocked", "pending", "review"];
const PRIORITY_OPTIONS: BlacklistPriority[] = ["low", "medium", "high"];

export function EditBlacklistModal({
  vehicle,
  isSaving,
  onSave,
  onClose,
}: EditBlacklistModalProps) {
  const [status, setStatus] = useState<BlacklistStatus>(vehicle.status);
  const [priority, setPriority] = useState<BlacklistPriority>(
    vehicle.priority,
  );
  const [wanted, setWanted] = useState(vehicle.wanted);

  const handleSubmit = () => {
    onSave({ status, priority, wanted });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            تعديل بيانات المركبة
          </h2>
          <p className="mt-1 text-sm text-white/45">{vehicle.plateNumber}</p>
        </div>

        <div className="flex flex-col gap-4">
          <SelectField
            label="الحالة"
            value={status}
            onChange={(v) => setStatus(v as BlacklistStatus)}
            options={STATUS_OPTIONS.map((s) => ({
              value: s,
              label: mapStatusToArabicLabel(s),
            }))}
          />

          <SelectField
            label="درجة الأولوية"
            value={priority}
            onChange={(v) => setPriority(v as BlacklistPriority)}
            options={PRIORITY_OPTIONS.map((p) => ({
              value: p,
              label: mapPriorityToSeverityLabel(p),
            }))}
          />

          <SelectField
            label="مطلوب أمنيًا"
            value={wanted ? "true" : "false"}
            onChange={(v) => setWanted(v === "true")}
            options={[
              { value: "true", label: "نعم" },
              { value: "false", label: "لا" },
            ]}
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <Button
            type="button"
            onClick={handleSubmit}
            isLoading={isSaving}
            loadingLabel="جارٍ الحفظ..."
            className="w-auto px-5"
          >
            حفظ التعديلات
          </Button>
        </div>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0f172a] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
          ▾
        </span>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-blacklist-components-index-ts"></a>📄 `src/features/blacklist/components/index.ts`

**File Info:**
- **Size**: 335 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/components/index.ts`
- **Relative Path**: `src/features/blacklist/components`
- **Created**: 2026-08-14 23:56:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:03:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e46a5e09bba3bbfaad647d42bbcccd66`
- **SHA256**: `980fdb922521c4f2244b3c87aa2d36d574c996e9bc850571455145265e73b28d`
- **Encoding**: ASCII

**File code content:**

```typescript
export { BlacklistHeader } from "./BlacklistHeader";
export { BlacklistStats } from "./BlacklistStats";
export { BlacklistFiltersBar } from "./BlacklistFilters";
export { BlacklistTable } from "./BlacklistTable";
export { EditBlacklistModal } from "./EditBlacklistModal";
export { DeleteConfirmModal } from "./DeleteConfirmModal";
```

---

### <a id="📄-src-features-blacklist-hooks-useblacklistviewmodel-ts"></a>📄 `src/features/blacklist/hooks/useBlacklistViewModel.ts`

**File Info:**
- **Size**: 10.2 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/hooks/useBlacklistViewModel.ts`
- **Relative Path**: `src/features/blacklist/hooks`
- **Created**: 2026-08-14 23:55:29 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:30:42 (Europe/Istanbul / GMT+03:00)
- **MD5**: `76090ebe8906a6dce077cf93493956b5`
- **SHA256**: `332cc1b1c8acdc39c3a3b7f2357198a2bc18d80a41f6df6492ddc5807ef3660d`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import type { UpdateBlacklistRequest } from "../api/blacklist.types";
import {
  BLACKLIST_DEFAULT_PAGE_SIZE,
  blacklistQueryKeys,
  type BlacklistedVehicle,
  type BlacklistFilters,
} from "../models/blacklist.types";
import { blacklistService } from "../services/BlacklistService";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

function toPercent(count: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((count / total) * 1000) / 10;
}

const initialFilters: BlacklistFilters = {
  search: "",
  severity: "الكل",
  type: "الكل",
  color: "الكل",
};

export function useBlacklistViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [filters, setFilters] = useState<BlacklistFilters>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(BLACKLIST_DEFAULT_PAGE_SIZE);
  const [editingEntry, setEditingEntry] = useState<BlacklistedVehicle | null>(
    null,
  );
  const [deletingEntry, setDeletingEntry] =
    useState<BlacklistedVehicle | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    setActiveMenuId("blacklist");
  }, [setActiveMenuId]);

  const blacklistQuery = useQuery({
    queryKey: blacklistQueryKeys.list(),
    queryFn: () => blacklistService.getBlacklist(),
  });

  const allEntries = useMemo(
    () => blacklistQuery.data ?? [],
    [blacklistQuery.data],
  );

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateBlacklistRequest;
    }) => blacklistService.updateBlacklistEntry(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistQueryKeys.all,
      });
      setEditingEntry(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => blacklistService.deleteBlacklistEntry(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: blacklistQueryKeys.all,
      });
      setDeletingEntry(null);
    },
  });

  const severityOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.severity)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const typeOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.type).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const colorOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allEntries.map((entry) => entry.color).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allEntries]);

  const filteredEntries = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return allEntries.filter((entry) => {
      const matchesSearch =
        query.length === 0 ||
        entry.plateNumber.toLowerCase().includes(query) ||
        entry.ownerName.toLowerCase().includes(query) ||
        entry.type.toLowerCase().includes(query) ||
        entry.color.toLowerCase().includes(query) ||
        entry.reason.toLowerCase().includes(query);

      const matchesSeverity =
        filters.severity === "الكل" || entry.severity === filters.severity;

      const matchesType =
        filters.type === "الكل" || entry.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || entry.color === filters.color;

      return matchesSearch && matchesSeverity && matchesType && matchesColor;
    });
  }, [allEntries, filters]);

  const totalCount = filteredEntries.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedEntries = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredEntries.slice(start, start + pageSize);
  }, [filteredEntries, safePage, pageSize]);

  const rangeStart = totalCount === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const rangeEnd = Math.min(safePage * pageSize, totalCount);

  const pageNumbers = useMemo(() => {
    const maxVisible = 5;
    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: number[] = [1];
    let start = Math.max(2, safePage - 1);
    let end = Math.min(totalPages - 1, safePage + 1);

    if (safePage <= 3) {
      start = 2;
      end = 4;
    }
    if (safePage >= totalPages - 2) {
      start = totalPages - 3;
      end = totalPages - 1;
    }

    if (start > 2) pages.push(-1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push(-2);
    pages.push(totalPages);
    return pages;
  }, [totalPages, safePage]);

  const formattedStats = useMemo(() => {
    const total = allEntries.length;
    const low = allEntries.filter((e) => e.priority === "low").length;
    const medium = allEntries.filter((e) => e.priority === "medium").length;
    const high = allEntries.filter((e) => e.priority === "high").length;

    const lowPercent = toPercent(low, total);
    const mediumPercent = toPercent(medium, total);
    const highPercent = toPercent(high, total);

    return [
      {
        id: "low",
        title: "منخفضة الخطورة",
        value: low,
        subtitle: `${lowPercent}% من الإجمالي`,
        changePercent: lowPercent,
        icon: "units" as const,
        gradient: "from-emerald-600/40 to-teal-700/30",
        isPositive: true,
        displayValue: formatNumber(low),
        displayChange: `${lowPercent}%`,
      },
      {
        id: "medium",
        title: "متوسطة الخطورة",
        value: medium,
        subtitle: `${mediumPercent}% من الإجمالي`,
        changePercent: mediumPercent,
        icon: "scans" as const,
        gradient: "from-amber-600/40 to-yellow-700/30",
        isPositive: false,
        displayValue: formatNumber(medium),
        displayChange: `${mediumPercent}%`,
      },
      {
        id: "high",
        title: "عالية الخطورة",
        value: high,
        subtitle: `${highPercent}% من الإجمالي`,
        changePercent: highPercent,
        icon: "wanted" as const,
        gradient: "from-rose-600/40 to-orange-700/30",
        isPositive: false,
        displayValue: formatNumber(high),
        displayChange: `${highPercent}%`,
      },
      {
        id: "total",
        title: "إجمالي المركبات بالقائمة السوداء",
        value: total,
        subtitle: "جميع المركبات المدرجة",
        changePercent: 100,
        icon: "blacklist" as const,
        gradient: "from-blue-600/40 to-indigo-700/30",
        isPositive: true,
        displayValue: formatNumber(total),
        displayChange: total === 0 ? "0%" : "100%",
      },
    ];
  }, [allEntries]);

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.severity !== "الكل" ||
    filters.type !== "الكل" ||
    filters.color !== "الكل";

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
  };

  const setSeverityFilter = (severity: string) => {
    setFilters((prev) => ({ ...prev, severity }));
    setCurrentPage(1);
  };

  const setTypeFilter = (type: string) => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentPage(1);
  };

  const setColorFilter = (color: string) => {
    setFilters((prev) => ({ ...prev, color }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setCurrentPage(1);
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "blacklist",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    severityOptions,
    typeOptions,
    colorOptions,
    setSearch,
    setSeverityFilter,
    setTypeFilter,
    setColorFilter,
    resetFilters,
    vehicles: paginatedEntries,
    totalCount,
    totalEntriesCount: allEntries.length,
    hasActiveFilters,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    pageSize,
    changePageSize,
    rangeStart,
    rangeEnd,
    goToPage,
    isLoading: blacklistQuery.isLoading,
    isError: blacklistQuery.isError,
    refetch: blacklistQuery.refetch,
    handleAdd: () => {},
    handleExport: () => {},
    handleEdit: (id: string) => {
      const entry = allEntries.find((e) => e.id === id) ?? null;
      setEditingEntry(entry);
    },
    handleDelete: (id: string) => {
      const entry = allEntries.find((e) => e.id === id) ?? null;
      setDeletingEntry(entry);
    },
    handleMore: (_id: string) => {},
    editingEntry,
    isSavingEdit: updateMutation.isPending,
    handleCloseEditModal: () => {
      setEditingEntry(null);
      updateMutation.reset();
    },
    handleSaveEdit: (payload: UpdateBlacklistRequest) => {
      if (!editingEntry) return;
      updateMutation.mutate({ id: editingEntry.id, payload });
    },
    deletingEntry,
    isDeleting: deleteMutation.isPending,
    handleCloseDeleteModal: () => {
      setDeletingEntry(null);
      deleteMutation.reset();
    },
    handleConfirmDelete: () => {
      if (!deletingEntry) return;
      deleteMutation.mutate(deletingEntry.id);
    },
  };
}
```

---

### <a id="📄-src-features-blacklist-models-blacklist-types-ts"></a>📄 `src/features/blacklist/models/blacklist.types.ts`

**File Info:**
- **Size**: 1.3 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/models/blacklist.types.ts`
- **Relative Path**: `src/features/blacklist/models`
- **Created**: 2026-08-14 23:54:59 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:47:17 (Europe/Istanbul / GMT+03:00)
- **MD5**: `322d182e807a1064fb5edfd0d4c50ce5`
- **SHA256**: `3a444506ccb9ba7976817502c3dd951845c074d07aec533f85909abf5755855f`
- **Encoding**: UTF-8

**File code content:**

```typescript
export type BlacklistPriority = "high" | "medium" | "low";
export type BlacklistPriorityApiValue = "عالي" | "متوسط" | "منخفض";

export type BlacklistStatus = "active" | "blocked"| "pending"|"review";

export type BlacklistSeverityLabel = "عالية" | "متوسطة" | "منخفضة";

/** Presentation model used by Blacklist UI components. */
export interface BlacklistedVehicle {
  id: string;
  plateNumber: string;
  ownerName: string;
  /** Display label for the existing "سبب الطلب" column (derived from wanted/status). */
  reason: string;
  severity: BlacklistSeverityLabel;
  priority: BlacklistPriority;
  status: BlacklistStatus;
  wanted: boolean;
  color: string;
  colorCode: string;
  type: string;
  createdAt: string;
}

export interface BlacklistFilters {
  search: string;
  severity: string;
  type: string;
  color: string;
}

export interface BlacklistStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "blacklist" | "wanted" | "scans" | "units";
  gradient: string;
  isPositive: boolean;
}

export const BLACKLIST_DEFAULT_PAGE_SIZE = 7;

export const blacklistPageSizeOptions = [7, 10, 25] as const;

export const blacklistQueryKeys = {
  all: ["blacklist"] as const,
  list: () => [...blacklistQueryKeys.all, "list"] as const,
};

```

---

### <a id="📄-src-features-blacklist-pages-blacklistpage-tsx"></a>📄 `src/features/blacklist/pages/BlacklistPage.tsx`

**File Info:**
- **Size**: 3.53 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/pages/BlacklistPage.tsx`
- **Relative Path**: `src/features/blacklist/pages`
- **Created**: 2026-08-14 23:56:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:11:11 (Europe/Istanbul / GMT+03:00)
- **MD5**: `67fdc62d72d79fa163419a18095fe699`
- **SHA256**: `2a88e0c88ed9492709d44bbfe1c75aeb0085e7ce0f29d2c6e019484a1260a633`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useBlacklistViewModel } from "../hooks/useBlacklistViewModel";
import { blacklistPageSizeOptions } from "../models/blacklist.types";
import {
  BlacklistFiltersBar,
  BlacklistHeader,
  BlacklistStats,
  BlacklistTable,
  DeleteConfirmModal,
  EditBlacklistModal,
} from "../components";

export function BlacklistPage() {
  const vm = useBlacklistViewModel();

  const emptyMessage = vm.hasActiveFilters
    ? "لا توجد نتائج مطابقة للبحث أو الفلاتر"
    : "لا توجد مركبات في القائمة السوداء";

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      {vm.editingEntry && (
        <EditBlacklistModal
          vehicle={vm.editingEntry}
          isSaving={vm.isSavingEdit}
          onSave={vm.handleSaveEdit}
          onClose={vm.handleCloseEditModal}
        />
      )}

      {vm.deletingEntry && (
        <DeleteConfirmModal
          vehicle={vm.deletingEntry}
          isDeleting={vm.isDeleting}
          onConfirm={vm.handleConfirmDelete}
          onClose={vm.handleCloseDeleteModal}
        />
      )}

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <BlacklistHeader />

        <BlacklistStats stats={vm.formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <BlacklistFiltersBar
            filters={vm.filters}
            severityOptions={vm.severityOptions}
            typeOptions={vm.typeOptions}
            colorOptions={vm.colorOptions}
            onSearchChange={vm.setSearch}
            onSeverityChange={vm.setSeverityFilter}
            onTypeChange={vm.setTypeFilter}
            onColorChange={vm.setColorFilter}
            onReset={vm.resetFilters}
            onExport={vm.handleExport}
            onAddClick={vm.handleAdd}
          />

          {vm.isLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل القائمة السوداء..." />
          ) : vm.isError ? (
            <VehiclesErrorState
              message="تعذر تحميل بيانات القائمة السوداء"
              onRetry={() => void vm.refetch()}
            />
          ) : vm.totalEntriesCount === 0 || vm.totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
              <BlacklistTable
                vehicles={vm.vehicles}
                onEdit={vm.handleEdit}
                onDelete={vm.handleDelete}
                onMore={vm.handleMore}
              />

              <VehiclesPagination
                currentPage={vm.currentPage}
                totalPages={vm.totalPages}
                pageNumbers={vm.pageNumbers}
                totalCount={vm.totalCount}
                onPageChange={vm.goToPage}
                pageSize={vm.pageSize}
                pageSizeOptions={blacklistPageSizeOptions}
                onPageSizeChange={vm.changePageSize}
                rangeStart={vm.rangeStart}
                rangeEnd={vm.rangeEnd}
              />
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
```

---

### <a id="📄-src-features-blacklist-routes-blacklistroutes-ts"></a>📄 `src/features/blacklist/routes/blacklistRoutes.ts`

**File Info:**
- **Size**: 161 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/routes/blacklistRoutes.ts`
- **Relative Path**: `src/features/blacklist/routes`
- **Created**: 2026-08-14 23:55:00 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 21:25:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `df9467297ca0bed5ee8ef1b1c93680a3`
- **SHA256**: `3c0867f53780fa70587732c601ff71adf45aa660944a775b147793479b377ccc`
- **Encoding**: ASCII

**File code content:**

```typescript
export const BlacklistRoutes = {
  list: "/blacklist",
} as const;

export type BlacklistRoute =
  (typeof BlacklistRoutes)[keyof typeof BlacklistRoutes];

```

---

### <a id="📄-src-features-blacklist-services-blacklistservice-ts"></a>📄 `src/features/blacklist/services/BlacklistService.ts`

**File Info:**
- **Size**: 1.32 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/services/BlacklistService.ts`
- **Relative Path**: `src/features/blacklist/services`
- **Created**: 2026-08-14 23:55:11 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:57:42 (Europe/Istanbul / GMT+03:00)
- **MD5**: `0de227649393905c093d2ff71a266c0f`
- **SHA256**: `0baad6d2b854433d8b5ad776edf1981c09bfe35d44b3e3dd3d1572ff00f10835`
- **Encoding**: ASCII

**File code content:**

```typescript
import { apiClient } from "../../../api/axios";
import { BlacklistApiEndpoints } from "../api/blacklist.endpoints";
import type { BlacklistedVehicle } from "../models/blacklist.types";
import { mapBlacklistApiToUi } from "../utils/mapBlacklistApiToUi";
import type {
  BlacklistApiResponse,
  CreateBlacklistRequest,
  UpdateBlacklistRequest,
} from "../api/blacklist.types";
import { mapPriorityToApiValue } from "../utils/priority.utils";

class BlacklistService {
  async getBlacklist(): Promise<BlacklistedVehicle[]> {
    const response = await apiClient.get<BlacklistApiResponse>(
      BlacklistApiEndpoints.list,
    );

    return response.data.data.map(mapBlacklistApiToUi);
  }

  
  async deleteBlacklistEntry(id: string): Promise<void> {
    await apiClient.delete(BlacklistApiEndpoints.detail(id));
  }


async updateBlacklistEntry(id: string, payload: UpdateBlacklistRequest): Promise<void> {
  await apiClient.put(BlacklistApiEndpoints.detail(id), {
    ...payload,
    priority: mapPriorityToApiValue(payload.priority),
  });
}

async addToBlacklist(payload: CreateBlacklistRequest): Promise<void> {
  await apiClient.post(BlacklistApiEndpoints.list, {
    ...payload,
    priority: mapPriorityToApiValue(payload.priority),
  });
}
}

export const blacklistService = new BlacklistService();

```

---

### <a id="📄-src-features-blacklist-utils-mapblacklistapitoui-ts"></a>📄 `src/features/blacklist/utils/mapBlacklistApiToUi.ts`

**File Info:**
- **Size**: 942 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/utils/mapBlacklistApiToUi.ts`
- **Relative Path**: `src/features/blacklist/utils`
- **Created**: 2026-08-15 21:38:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 10:37:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f552558baa10eb1f97598d72874d80a2`
- **SHA256**: `1849b2a1a6e9b7e0a1e00bc7c34ea3896f8754df0e2cd26d5701661b64351150`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { BlacklistApiItem } from "../api/blacklist.types";
import type { BlacklistedVehicle } from "../models/blacklist.types";
import { resolveVehicleColorHex } from "../../vehicles/utils/color.utils";
import {
  mapApiValueToPriority,
  mapPriorityToSeverityLabel,
  mapWantedStatusToReason,
} from "./priority.utils";

export function mapBlacklistApiToUi(
  item: BlacklistApiItem,
): BlacklistedVehicle {
  const priority = mapApiValueToPriority(item.priority);

  return {
    id: String(item.id),
    plateNumber: item.plate_number,
    ownerName: item.owner_name,
    reason: mapWantedStatusToReason(item.wanted, item.status),
    severity: mapPriorityToSeverityLabel(priority),
    priority,
    status: item.status,
    wanted: item.wanted,
    color: item.vehicle_color,
    colorCode: resolveVehicleColorHex(item.vehicle_color),
    type: item.vehicle_type,
    createdAt: item.created_at,
  };
}

```

---

### <a id="📄-src-features-blacklist-utils-priority-utils-ts"></a>📄 `src/features/blacklist/utils/priority.utils.ts`

**File Info:**
- **Size**: 1.62 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/utils/priority.utils.ts`
- **Relative Path**: `src/features/blacklist/utils`
- **Created**: 2026-08-15 21:38:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 10:36:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `981bcbed65b8ac5360233a8922e87a9a`
- **SHA256**: `a98a0b941c7dfc715a2c1279ae36144d9999259a28849c7ed21e80105a2c1e39`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type {
  BlacklistPriority,
  BlacklistPriorityApiValue,
  BlacklistSeverityLabel,
  BlacklistStatus,
} from "../models/blacklist.types";

const PRIORITY_LABEL_MAP: Record<BlacklistPriority, BlacklistSeverityLabel> = {
  high: "عالية",
  medium: "متوسطة",
  low: "منخفضة",
};

const STATUS_LABEL_MAP: Record<BlacklistStatus, string> = {
  active: "نشط",
  review: "قيد المراجعة",
  blocked: "محظور",
  pending: "قيد الانتظار",
};
export function mapPriorityToSeverityLabel(
  priority: BlacklistPriority,
): BlacklistSeverityLabel {
  return PRIORITY_LABEL_MAP[priority] ?? "متوسطة";
}

export function mapStatusToArabicLabel(status: BlacklistStatus): string {
  return STATUS_LABEL_MAP[status] ?? status;
}

export function mapWantedStatusToReason(
  wanted: boolean,
  status: BlacklistStatus,
): string {
  if (wanted) {
    return "مطلوب";
  }
  return mapStatusToArabicLabel(status);
}
const PRIORITY_API_VALUE_MAP: Record<BlacklistPriority, BlacklistPriorityApiValue> = {
  high: "عالي",
  medium: "متوسط",
  low: "منخفض",
};

export function mapPriorityToApiValue(
  priority: BlacklistPriority,
): BlacklistPriorityApiValue {
  return PRIORITY_API_VALUE_MAP[priority] ?? "متوسط";
}

const PRIORITY_FROM_API_VALUE_MAP: Record<BlacklistPriorityApiValue, BlacklistPriority> = {
  "عالي": "high",
  "متوسط": "medium",
  "منخفض": "low",
};

export function mapApiValueToPriority(
  value: BlacklistPriorityApiValue,
): BlacklistPriority {
  return PRIORITY_FROM_API_VALUE_MAP[value] ?? "medium";
}
```

---

### <a id="📄-src-features-blacklist-index-ts"></a>📄 `src/features/blacklist/index.ts`

**File Info:**
- **Size**: 517 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/blacklist/index.ts`
- **Relative Path**: `src/features/blacklist`
- **Created**: 2026-08-14 23:56:03 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:42:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `585aac18bb6916a0a470f146dcfc8e31`
- **SHA256**: `91c62c49938d96faceca4063e5bda251ba41da298dd1cf3e45d70ff6f686afe5`
- **Encoding**: ASCII

**File code content:**

```typescript
export { BlacklistPage } from "./pages/BlacklistPage";
export { BlacklistRoutes } from "./routes/blacklistRoutes";
export { blacklistService } from "./services/BlacklistService";
export { useBlacklistViewModel } from "./hooks/useBlacklistViewModel";
export type {
  BlacklistPriority,
  BlacklistStatus,
} from "./models/blacklist.types";
export type { CreateBlacklistRequest } from "./api/blacklist.types";
export {
  mapPriorityToSeverityLabel,
  mapStatusToArabicLabel,
} from "./utils/priority.utils";
```

---

### <a id="📄-src-features-dashboard-components-feature-alertssection-tsx"></a>📄 `src/features/dashboard/components/feature/AlertsSection.tsx`

**File Info:**
- **Size**: 996 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/feature/AlertsSection.tsx`
- **Relative Path**: `src/features/dashboard/components/feature`
- **Created**: 2026-07-26 21:26:20 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 11:56:26 (Europe/Istanbul / GMT+03:00)
- **MD5**: `9a2e940067462bf4d32032917fd652dc`
- **SHA256**: `2e510a1b22cc33a26a256c1463b355c5edf84233227587a770d513597f432d16`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { AlertItemData } from "../../models/dashboard.types";
import { AlertItem, CardContainer } from "../ui";

interface AlertsSectionProps {
  alerts: AlertItemData[];
}

export function AlertsSection({ alerts }: AlertsSectionProps) {
  return (
    <CardContainer
      title="أحدث التنبيهات"
      action={
        <button
          type="button"
          className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
        >
          عرض الكل
        </button>
      }
      className="h-full"
    >
      <div className="flex max-h-[420px] flex-col gap-2.5 overflow-y-auto pr-1">
        {alerts.map((alert) => (
          <AlertItem
            key={alert.id}
            plateNumber={alert.plateNumber}
            carType={alert.carType}
            status={alert.status}
            imageUrl={alert.imageUrl}
            time={alert.time}
          />
        ))}
      </div>
    </CardContainer>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-feature-analyticssection-tsx"></a>📄 `src/features/dashboard/components/feature/AnalyticsSection.tsx`

**File Info:**
- **Size**: 1.09 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/feature/AnalyticsSection.tsx`
- **Relative Path**: `src/features/dashboard/components/feature`
- **Created**: 2026-07-26 21:26:20 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5d9e31fab20a8c88e26d98a935064408`
- **SHA256**: `3ea078ce1a3fb304c97fff0edbea3c2b2a691dce6ea5521399252e910c94d79f`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type {
  BarItem,
  MatchProgress,
  PieSlice,
} from "../../models/dashboard.types";
import { BarChart, CardContainer, PieChart, ProgressCircle } from "../ui";

interface AnalyticsSectionProps {
  colorDistribution: PieSlice[];
  vehicleTypes: BarItem[];
  matchProgress: MatchProgress;
}

export function AnalyticsSection({
  colorDistribution,
  vehicleTypes,
  matchProgress,
}: AnalyticsSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <CardContainer title="توزيع ألوان المركبات">
        <PieChart data={colorDistribution} />
      </CardContainer>

      <CardContainer title="دقة التعرف">
        <div className="flex min-h-[200px] items-center justify-center py-2">
          <ProgressCircle
            percent={matchProgress.percent}
            label={matchProgress.label}
          />
        </div>
      </CardContainer>

      <CardContainer title="أنواع المركبات">
        <BarChart data={vehicleTypes} height={220} />
      </CardContainer>
    </section>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-feature-index-ts"></a>📄 `src/features/dashboard/components/feature/index.ts`

**File Info:**
- **Size**: 212 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/feature/index.ts`
- **Relative Path**: `src/features/dashboard/components/feature`
- **Created**: 2026-07-26 21:26:22 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4a03e76c494a78938ba45832c90506bc`
- **SHA256**: `e20c5977b1fd8eed66f33d3653c8a7c09c2e9ae29b9719f1b8d86c612a0dd1e2`
- **Encoding**: ASCII

**File code content:**

```typescript
export { StatsSection } from "./StatsSection";
export { ScansChartSection } from "./ScansChartSection";
export { AlertsSection } from "./AlertsSection";
export { AnalyticsSection } from "./AnalyticsSection";

```

---

### <a id="📄-src-features-dashboard-components-feature-scanschartsection-tsx"></a>📄 `src/features/dashboard/components/feature/ScansChartSection.tsx`

**File Info:**
- **Size**: 409 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/feature/ScansChartSection.tsx`
- **Relative Path**: `src/features/dashboard/components/feature`
- **Created**: 2026-07-26 21:26:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `accdf8b31d1899c8043613680fddfc84`
- **SHA256**: `31bbbd77d0d7886950ae0472690614612797d79ae267c798e4b41a3634dc9fa7`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ChartPoint } from "../../models/dashboard.types";
import { CardContainer, LineChart } from "../ui";

interface ScansChartSectionProps {
  data: ChartPoint[];
}

export function ScansChartSection({ data }: ScansChartSectionProps) {
  return (
    <CardContainer title="عدد الفحوصات خلال آخر 7 أيام">
      <LineChart data={data} />
    </CardContainer>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-feature-statssection-tsx"></a>📄 `src/features/dashboard/components/feature/StatsSection.tsx`

**File Info:**
- **Size**: 1.09 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/feature/StatsSection.tsx`
- **Relative Path**: `src/features/dashboard/components/feature`
- **Created**: 2026-07-26 21:26:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `bc55f9c6e65988ac57465f7510c485c8`
- **SHA256**: `492293a9dcd2dcfd562fd9c25ef5425383e24c1120d13f1f1de2824722f07ebe`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";
import { StatCard } from "../ui/StatCard";
import { MenuGlyph } from "../shared/icons";

interface FormattedStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "units" | "scans" | "alerts" | "wanted";
}

interface StatsSectionProps {
  stats: FormattedStat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<StatIcon name={stat.icon} />}
        />
      ))}
    </section>
  );
}

function StatIcon({ name }: { name: FormattedStat["icon"] }): ReactNode {
  return <MenuGlyph name={name} className="h-5 w-5" />;
}

```

---

### <a id="📄-src-features-dashboard-components-shared-dashboardlayout-tsx"></a>📄 `src/features/dashboard/components/shared/DashboardLayout.tsx`

**File Info:**
- **Size**: 1.32 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/shared/DashboardLayout.tsx`
- **Relative Path**: `src/features/dashboard/components/shared`
- **Created**: 2026-07-26 21:26:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `94be080970844fbbe77f66a134db5fc4`
- **SHA256**: `ef508ee91a82e5c0dd437ea778ef32e9b40a5415484f1fc4e49d6b5fa68b174b`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";
import type { SidebarMenuItem, TopbarUser } from "../../models/dashboard.types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
  user: TopbarUser;
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onCloseSidebar: () => void;
  onSelectMenu: (id: string) => void;
  onFullscreen?: () => void;
}

export function DashboardLayout({
  children,
  user,
  menuItems,
  activeMenuId,
  isSidebarOpen,
  onToggleSidebar,
  onCloseSidebar,
  onSelectMenu,
  onFullscreen,
}: DashboardLayoutProps) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="flex min-h-svh bg-[#0B1220] font-[Cairo,Tahoma,sans-serif] text-white"
    >
      <Sidebar
        menuItems={menuItems}
        activeMenuId={activeMenuId}
        isOpen={isSidebarOpen}
        onClose={onCloseSidebar}
        onSelect={onSelectMenu}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          user={user}
          onMenuClick={onToggleSidebar}
          onFullscreen={onFullscreen}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-shared-icons-tsx"></a>📄 `src/features/dashboard/components/shared/icons.tsx`

**File Info:**
- **Size**: 7.47 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/shared/icons.tsx`
- **Relative Path**: `src/features/dashboard/components/shared`
- **Created**: 2026-07-26 21:25:53 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 19:41:50 (Europe/Istanbul / GMT+03:00)
- **MD5**: `88281387c3d37689f69f117eadd97722`
- **SHA256**: `0175f8e6dbf85ef3a64a129ea1bf18a8354fab093fbf6311dc34b56b6594287a`
- **Encoding**: ASCII

**File code content:**

```typescript
interface IconProps {
  className?: string;
}

export function DashboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  );
}

export function VehiclesIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3 13h18l-1.5-5.5A2 2 0 0 0 17.6 6H6.4a2 2 0 0 0-1.9 1.5L3 13Z" />
      <path d="M5 13v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4" />
      <circle cx="7.5" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="16.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BlacklistIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M7 7l10 10" />
    </svg>
  );
}

export function UnitsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M12 3 4 7v4c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function AlertsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M12 3a6 6 0 0 1 6 6v3.5l1.5 2.5H4.5L6 12.5V9a6 6 0 0 1 6-6Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ReportsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5M8 13h8M8 17h5" />
    </svg>
  );
}

export function VideoIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="6" width="14" height="12" rx="2" />
      <path d="M17 10l4-2v8l-4-2" />
    </svg>
  );
}

export function SettingsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  );
}

export function ScansIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 12h10M3 10h18" />
    </svg>
  );
}

export function WantedIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-3.5 4.2-5 8-5s6.5 1.5 8 5" />
      <path d="M16 4l4 2-1.5 4" />
    </svg>
  );
}

export function BellIcon({ className = "h-5 w-5" }: IconProps) {
  return <AlertsIcon className={className} />;
}

export function FullscreenIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function AnalysisIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3.5 20V13.5M8.5 20V9M13.5 20V15.5" />
      <circle cx="17.5" cy="8" r="4" />
      <path d="M20.5 11l2 2" />
    </svg>
  );
}

export function ProcessedVideosIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="2.5" y="5" width="13" height="11" rx="2" />
      <path d="M7.5 8.2v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16.5" r="4.2" />
      <path d="M16.3 16.5l1.2 1.2 2.2-2.4" />
    </svg>
  );
}


export function LogoutIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}


export function LogoIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logoGrad)" />
      <path
        d="M20 7.5c6.2 2 8.2 3 8.2 3v8.2c0 7.3-3.6 11.4-8.2 13.4-4.6-2-8.2-6.1-8.2-13.4v-8.2s2-1 8.2-3Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 21.5h13l-1.4-4.2a1.4 1.4 0 0 0-1.3-.9h-8.6a1.4 1.4 0 0 0-1.3.9l-1.4 4.2Z"
        fill="#ffffff"
      />
      <rect x="13.2" y="21.5" width="13.6" height="2.6" rx="0.6" fill="#ffffff" />
      <circle cx="16" cy="24.2" r="1.5" fill="#0B1220" />
      <circle cx="24" cy="24.2" r="1.5" fill="#0B1220" />
    </svg>
  );
}

const iconMap = {
  dashboard: DashboardIcon,
  vehicles: VehiclesIcon,
  blacklist: BlacklistIcon,
  units: UnitsIcon,
  alerts: AlertsIcon,
  reports: ReportsIcon,
  video: VideoIcon,
  settings: SettingsIcon,
  scans: ScansIcon,
  wanted: WantedIcon,
  analysis: AnalysisIcon,
  processedVideos: ProcessedVideosIcon,
  logout: LogoutIcon,
} as const;

export type MenuIconKey = keyof typeof iconMap;

export function MenuGlyph({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name as MenuIconKey] ?? DashboardIcon;
  return <Icon className={className} />;
}
```

---

### <a id="📄-src-features-dashboard-components-shared-index-ts"></a>📄 `src/features/dashboard/components/shared/index.ts`

**File Info:**
- **Size**: 166 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/shared/index.ts`
- **Relative Path**: `src/features/dashboard/components/shared`
- **Created**: 2026-07-26 21:26:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7af3fa7d2c881c6a1259dbf465b0d959`
- **SHA256**: `5e988b2c9f1dc4779d9f11e9da97fd7688a2db32feb768525a26d99eca393be7`
- **Encoding**: ASCII

**File code content:**

```typescript
export { Sidebar } from "./Sidebar";
export { Topbar } from "./Topbar";
export { DashboardLayout } from "./DashboardLayout";
export { MenuGlyph } from "./icons";

```

---

### <a id="📄-src-features-dashboard-components-shared-sidebar-tsx"></a>📄 `src/features/dashboard/components/shared/Sidebar.tsx`

**File Info:**
- **Size**: 3.22 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/shared/Sidebar.tsx`
- **Relative Path**: `src/features/dashboard/components/shared`
- **Created**: 2026-07-26 21:26:00 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 18:42:01 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6d05b3e8edbead2d6012650c0c678ae1`
- **SHA256**: `ed7d5a3a81939b6ec0fab5505aec885303dba0bb7edd730af785eaa812c9bc14`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link, useNavigate } from "react-router-dom";
import type { SidebarMenuItem } from "../../models/dashboard.types";
import { LogoIcon, LogoutIcon, MenuGlyph } from "./icons";
import { useAuthStore, AuthRoutes } from "../../../auth";

interface SidebarProps {
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function Sidebar({
  menuItems,
  activeMenuId,
  isOpen,
  onClose,
  onSelect,
}: SidebarProps) {
  const navigate = useNavigate();
  const resetAuth = useAuthStore((s) => s.reset);

  const handleLogout = () => {
    resetAuth();
    onClose();
    navigate(AuthRoutes.login, { replace: true });
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 end-0 z-50 flex w-72 flex-col border-s border-white/10 bg-gradient-to-b from-[#121a2e] via-[#0f172a] to-[#0B1220] shadow-[-8px_0_40px_rgba(0,0,0,0.35)] transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-6">
          <LogoIcon className="h-10 w-10 shrink-0" />
          <div>
            <p className="text-sm font-bold leading-snug text-white">
              نظام المراقبة المرورية
            </p>
            <p className="mt-0.5 text-[11px] text-white/40">AI Car Monitoring</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => {
            const isActive = item.id === activeMenuId;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  onSelect(item.id);
                  onClose();
                }}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-l from-blue-600/80 to-violet-600/70 text-white shadow-[0_0_24px_rgba(99,102,241,0.35)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white/90"
                }`}
              >
                <MenuGlyph name={item.icon} className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-rose-500/10 px-3.5 py-3 text-sm font-medium text-rose-300 transition hover:bg-rose-500/20 hover:text-rose-200"
          >
            <LogoutIcon className="h-5 w-5 shrink-0" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
```

---

### <a id="📄-src-features-dashboard-components-shared-topbar-tsx"></a>📄 `src/features/dashboard/components/shared/Topbar.tsx`

**File Info:**
- **Size**: 2.87 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/shared/Topbar.tsx`
- **Relative Path**: `src/features/dashboard/components/shared`
- **Created**: 2026-07-26 21:26:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:42:20 (Europe/Istanbul / GMT+03:00)
- **MD5**: `003700cd700f8af997b887ee97712aa0`
- **SHA256**: `fa9b3ad7eb45a6eb7580cbd1b4ccbf9991e575be6c563dfe0beb86da8354d1ea`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ReactNode } from "react";
import type { TopbarUser } from "../../models/dashboard.types";
import { BellIcon, FullscreenIcon, MenuIcon,  } from "./icons";

interface TopbarProps {
  user: TopbarUser;
  onMenuClick: () => void;
  onFullscreen?: () => void;
}

export function Topbar({ user, onMenuClick, onFullscreen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-white/10 bg-[#0B1220]/80 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="فتح القائمة"
        >
          <MenuIcon />
        </button>
        <div>
          <h1 className="text-base font-bold text-white sm:text-lg">
            لوحة التحكم
          </h1>
          <p className="hidden text-xs text-white/40 sm:block">
            مراقبة المركبات والتنبيهات في الوقت الفعلي
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <IconButton label="الإشعارات">
          <BellIcon className="h-[18px] w-[18px]" />
          <span className="absolute top-1.5 end-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-[#0B1220]" />
        </IconButton>
        {/* <IconButton label="الإعدادات">
          <SettingsIcon className="h-[18px] w-[18px]" />
        </IconButton> */}
        <IconButton label="ملء الشاشة" onClick={onFullscreen}>
          <FullscreenIcon className="h-[18px] w-[18px]" />
        </IconButton>

        <div className="ms-1 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 py-1.5 ps-1.5 pe-3">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15"
          />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold text-white">
              {user.name}
            </p>
            <p className="truncate text-[11px] text-white/40">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-alertitem-tsx"></a>📄 `src/features/dashboard/components/ui/AlertItem.tsx`

**File Info:**
- **Size**: 1.31 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/AlertItem.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:28 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 11:55:17 (Europe/Istanbul / GMT+03:00)
- **MD5**: `17c44379b825ce8e1eb42e1258eb0d50`
- **SHA256**: `0e42c591aa37478391127c842667948b9a6dad17517779c81cafebecae9fd7e6`
- **Encoding**: ASCII

**File code content:**

```typescript
interface AlertItemProps {
  plateNumber: string;
  carType: string;
  status: string;
  imageUrl: string;
  time: string;
}

export function AlertItem({
  plateNumber,
  carType,
  status,
  imageUrl,
  time,
}: AlertItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]">
      <img
        src={imageUrl}
        alt={carType}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=140&fit=crop";
        }}
        className="h-14 w-20 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate font-semibold text-white">{plateNumber}</p>
          <span className="shrink-0 rounded-md bg-rose-500/15 px-2 py-0.5 text-[11px] font-semibold text-rose-400 ring-1 ring-rose-500/30">
            {status}
          </span>
        </div>
        <p className="mt-0.5 truncate text-sm text-white/55">{carType}</p>
        <p className="mt-1 text-[11px] text-white/35">{time}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-barchart-tsx"></a>📄 `src/features/dashboard/components/ui/BarChart.tsx`

**File Info:**
- **Size**: 1.47 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/BarChart.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:24 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f3f136a3aa55c9950d56ba6c4b971069`
- **SHA256**: `95557785b1ff3c60f7b0934fbfefc9261e733cca2f717079637557973f188136`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { BarItem } from "../../models/dashboard.types";

interface BarChartProps {
  data: BarItem[];
  height?: number;
}

export function BarChart({ data, height = 200 }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="flex h-full flex-col justify-end" style={{ minHeight: height }}>
      <div className="flex flex-1 items-end justify-between gap-2 px-1">
        {data.map((item) => {
          const pct = (item.value / max) * 100;
          return (
            <div
              key={item.label}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <span className="text-xs font-semibold text-white/70">
                {item.value}%
              </span>
              <div className="relative flex w-full flex-1 items-end justify-center">
                <div
                  className="w-[70%] max-w-10 rounded-t-lg shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all"
                  style={{
                    height: `${pct}%`,
                    background: `linear-gradient(180deg, ${item.color} 0%, ${item.color}88 100%)`,
                    minHeight: 8,
                  }}
                />
              </div>
              <span className="text-center text-[11px] text-white/45">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-cardcontainer-tsx"></a>📄 `src/features/dashboard/components/ui/CardContainer.tsx`

**File Info:**
- **Size**: 796 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/CardContainer.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `39280fc5d80a78c442a7144dc1e6431a`
- **SHA256**: `464249b067fef92fbde2b00e0b99dcbdf2dd53825d17129946aab76bd31d42f2`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  action?: ReactNode;
}

export function CardContainer({
  children,
  className = "",
  title,
  action,
}: CardContainerProps) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(59,130,246,0.06)] backdrop-blur-xl ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && (
            <h3 className="text-sm font-semibold text-white/90 md:text-base">
              {title}
            </h3>
          )}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-index-ts"></a>📄 `src/features/dashboard/components/ui/index.ts`

**File Info:**
- **Size**: 306 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/index.ts`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:28 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `49a5aa1aa9ecf62feb18ea1308198b7a`
- **SHA256**: `9a053bc3c3e80b5ba53cc6f01d53b89c82874cd681bd748a8685d110e8c6624e`
- **Encoding**: ASCII

**File code content:**

```typescript
export { CardContainer } from "./CardContainer";
export { StatCard } from "./StatCard";
export { LineChart } from "./LineChart";
export { PieChart } from "./PieChart";
export { BarChart } from "./BarChart";
export { ProgressCircle } from "./ProgressCircle";
export { AlertItem } from "./AlertItem";

```

---

### <a id="📄-src-features-dashboard-components-ui-linechart-tsx"></a>📄 `src/features/dashboard/components/ui/LineChart.tsx`

**File Info:**
- **Size**: 2.95 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/LineChart.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:19 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `cc3e07760ca4290c2c8f4d266b2cc100`
- **SHA256**: `90307512cf9b4bd529d781697d1d8df8dfdf98e2f454a278d43bc957242d92f7`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ChartPoint } from "../../models/dashboard.types";

interface LineChartProps {
  data: ChartPoint[];
  height?: number;
}

export function LineChart({ data, height = 220 }: LineChartProps) {
  const width = 560;
  const padding = { top: 20, right: 20, bottom: 36, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const max = Math.max(...data.map((d) => d.value), 1);
  const min = Math.min(...data.map((d) => d.value), 0) * 0.85;

  const points = data.map((d, i) => {
    const x =
      padding.left +
      (data.length === 1 ? chartW / 2 : (i / (data.length - 1)) * chartW);
    const y =
      padding.top + chartH - ((d.value - min) / (max - min || 1)) * chartH;
    return { x, y, ...d };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${
    padding.top + chartH
  } L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="مخطط خطي للفحوصات"
      >
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = padding.top + chartH * (1 - t);
          return (
            <line
              key={t}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          );
        })}

        <path d={areaPath} fill="url(#lineFill)" />
        <path
          d={linePath}
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((p) => (
          <g key={p.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#0B1220"
              stroke="#818CF8"
              strokeWidth="2.5"
            />
            <text
              x={p.x}
              y={height - 10}
              textAnchor="middle"
              className="fill-white/45"
              fontSize="11"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-piechart-tsx"></a>📄 `src/features/dashboard/components/ui/PieChart.tsx`

**File Info:**
- **Size**: 2.86 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/PieChart.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:22 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7160f11ee757896ff7eee6b4a70e3074`
- **SHA256**: `94106f5994ad57517f6aa25bacfc7fffda91851c736c00ce6093e8e71fde19e1`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { PieSlice } from "../../models/dashboard.types";

interface PieChartProps {
  data: PieSlice[];
  size?: number;
}

export function PieChart({ data, size = 180 }: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 8;
  const inner = radius * 0.58;

  let cumulative = 0;

  const slices = data.map((slice) => {
    const start = (cumulative / total) * Math.PI * 2 - Math.PI / 2;
    cumulative += slice.value;
    const end = (cumulative / total) * Math.PI * 2 - Math.PI / 2;

    const x1 = cx + radius * Math.cos(start);
    const y1 = cy + radius * Math.sin(start);
    const x2 = cx + radius * Math.cos(end);
    const y2 = cy + radius * Math.sin(end);
    const ix1 = cx + inner * Math.cos(end);
    const iy1 = cy + inner * Math.sin(end);
    const ix2 = cx + inner * Math.cos(start);
    const iy2 = cy + inner * Math.sin(start);
    const large = end - start > Math.PI ? 1 : 0;

    const path = [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`,
      `L ${ix1} ${iy1}`,
      `A ${inner} ${inner} 0 ${large} 0 ${ix2} ${iy2}`,
      "Z",
    ].join(" ");

    return { ...slice, path };
  });

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="shrink-0"
        role="img"
        aria-label="توزيع الألوان"
      >
        {slices.map((s) => (
          <path
            key={s.label}
            d={s.path}
            fill={s.color}
            className="opacity-90 transition hover:opacity-100"
          />
        ))}
        <circle cx={cx} cy={cy} r={inner - 2} fill="#0B1220" />
        <text
          x={cx}
          y={cy - 4}
          textAnchor="middle"
          className="fill-white"
          fontSize="18"
          fontWeight="700"
        >
          {total}%
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-white/45"
          fontSize="10"
        >
          الإجمالي
        </text>
      </svg>

      <ul className="flex w-full flex-col gap-2">
        {data.map((d) => (
          <li
            key={d.label}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="flex items-center gap-2 text-white/70">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              {d.label}
            </span>
            <span className="font-semibold text-white/90">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-progresscircle-tsx"></a>📄 `src/features/dashboard/components/ui/ProgressCircle.tsx`

**File Info:**
- **Size**: 1.81 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/ProgressCircle.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:28 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4a3d7ed38d1335e8d8aadbf56c6d8ae2`
- **SHA256**: `81e1924979498cf58557081cade43323d489bc463839e6f0e680fbb2cb9ab9f1`
- **Encoding**: ASCII

**File code content:**

```typescript
interface ProgressCircleProps {
  percent: number;
  label: string;
  size?: number;
}

export function ProgressCircle({
  percent,
  label,
  size = 160,
}: ProgressCircleProps) {
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="-rotate-90"
          role="img"
          aria-label={label}
        >
          <defs>
            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGrad)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percent}%</span>
          <span className="text-xs text-white/50">{label}</span>
        </div>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-components-ui-statcard-tsx"></a>📄 `src/features/dashboard/components/ui/StatCard.tsx`

**File Info:**
- **Size**: 1.64 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/components/ui/StatCard.tsx`
- **Relative Path**: `src/features/dashboard/components/ui`
- **Created**: 2026-07-26 21:25:13 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6ca065e1553014034cc147566ccdd2f0`
- **SHA256**: `b89bccb12c660e60904050ee0fb2620feec7ee08fb5c2c5363e3186a918626eb`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: ReactNode;
}

export function StatCard({
  title,
  displayValue,
  subtitle,
  displayChange,
  isPositive,
  gradient,
  icon,
}: StatCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradient} p-5 shadow-[0_0_30px_rgba(99,102,241,0.12)] backdrop-blur-xl`}
    >
      <div className="pointer-events-none absolute -start-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -end-4 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
          {icon}
        </div>
        <span
          className={`rounded-lg px-2 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-rose-500/15 text-rose-400"
          }`}
        >
          {displayChange}
        </span>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-3xl font-bold tracking-tight text-white">
          {displayValue}
        </p>
        <p className="mt-1 text-sm font-medium text-white/85">{title}</p>
        <p className="mt-0.5 text-xs text-white/50">{subtitle}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-dashboard-data-mockdashboarddata-ts"></a>📄 `src/features/dashboard/data/mockDashboardData.ts`

**File Info:**
- **Size**: 4.67 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/data/mockDashboardData.ts`
- **Relative Path**: `src/features/dashboard/data`
- **Created**: 2026-07-26 21:25:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 11:58:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `432cd67e7cc668133cd67877a5721ba5`
- **SHA256**: `56c2d1451d0ce5ebe8122498533e30b7baf2244303baf0d1153411b1e2d8ec02`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { DashboardData } from "../models/dashboard.types";
import { DashboardRoutes } from "../routes/dashboardRoutes";
import { VehiclesRoutes } from "../../vehicles/routes/vehiclesRoutes";
import { VideoRoutes } from "../../video/routes/videoRoutes";
import { AnalysisRoutes } from "../../analysis/routes/analysisRoutes";
import { BlacklistRoutes } from "../../blacklist/routes/blacklistRoutes";

export const mockDashboardData: DashboardData = {
  user: {
    name: "Alaa Alameen",
    role: "مشرف النظام",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ahmed",
  },
  activeMenuId: "dashboard",
  menuItems: [
    {
      id: "dashboard",
      label: "لوحة التحكم",
      icon: "dashboard",
      path: DashboardRoutes.home,
    },
    {
      id: "vehicles",
      label: "المركبات",
      icon: "vehicles",
      path: VehiclesRoutes.list,
    },
    {
      id: "blacklist",
      label: "القائمة السوداء",
      icon: "blacklist",
      path: BlacklistRoutes.list,
    },
    {
      id: "video",
      label: "تحليل الفيديو",
      icon: "video",
      path: VideoRoutes.upload,
    },
    {
      id: "analysis",
      label: "نتائج التحليل",
      icon: "analysis",
      path: AnalysisRoutes.results,
    },
    {
      id: "processedVideos",
      label: "الفيديوهات المعالجة",
      icon: "processedVideos",
      path: VideoRoutes.list,
    },
    {
      id: "settings",
      label: "الإعدادات",
      icon: "settings",
      path: "#",
    },
  ],
  stats: [
    // {
    //   id: "units",
    //   title: "وحدات الشرطة النشطة",
    //   value: 48,
    //   subtitle: "وحدة ميدانية",
    //   changePercent: 12.5,
    //   icon: "units",
    //   gradient: "from-blue-600/40 to-indigo-700/30",
    // },
    // {
    //   id: "scans",
    //   title: "اللوحات المفحوصة اليوم",
    //   value: 12840,
    //   subtitle: "فحص تلقائي",
    //   changePercent: 8.2,
    //   icon: "scans",
    //   gradient: "from-violet-600/40 to-purple-700/30",
    // },
    // {
    //   id: "alerts",
    //   title: "التنبيهات",
    //   value: 36,
    //   subtitle: "تحتاج مراجعة",
    //   changePercent: -4.1,
    //   icon: "alerts",
    //   gradient: "from-rose-600/40 to-orange-700/30",
    // },
    // {
    //   id: "wanted",
    //   title: "مركبات مطلوبة",
    //   value: 17,
    //   subtitle: "في نطاق المراقبة",
    //   changePercent: 2.8,
    //   icon: "wanted",
    //   gradient: "from-cyan-600/40 to-blue-700/30",
    // },
  ],
  weeklyScans: [
    { label: "السبت", value: 8200 },
    { label: "الأحد", value: 9400 },
    { label: "الإثنين", value: 11200 },
    { label: "الثلاثاء", value: 10500 },
    { label: "الأربعاء", value: 12100 },
    { label: "الخميس", value: 13400 },
    { label: "الجمعة", value: 12840 },
  ],
  colorDistribution: [
    { label: "أبيض", value: 32, color: "#E2E8F0" },
    { label: "أسود", value: 24, color: "#64748B" },
    { label: "فضي", value: 18, color: "#94A3B8" },
    { label: "أزرق", value: 14, color: "#3B82F6" },
    { label: "أحمر", value: 12, color: "#F43F5E" },
  ],
  vehicleTypes: [
    { label: "سيدان", value: 42, color: "#6366F1" },
    { label: "دفع رباعي", value: 28, color: "#8B5CF6" },
    { label: "شاحنة", value: 16, color: "#06B6D4" },
    { label: "دراجة", value: 8, color: "#F59E0B" },
    { label: "أخرى", value: 6, color: "#EC4899" },
  ],
  matchProgress: {
    label: "دقة المطابقة",
    percent: 87,
  },
  alerts: [
  {
    id: "a1",
    plateNumber: "أ ب ج 1234",
    carType: "تويوتا كامري",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&h=140&fit=crop",
    time: "منذ 3 دقائق",
  },
  {
    id: "a2",
    plateNumber: "د هـ و 5678",
    carType: "نيسان التيما",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1614602077554-61c72b1e4189?w=200&h=140&fit=crop",
    time: "منذ 12 دقيقة",
  },
  {
    id: "a3",
    plateNumber: "ر س ت 9012",
    carType: "هيونداي سوناتا",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1549943436-983dffe333a1?w=200&h=140&fit=crop",
    time: "منذ 28 دقيقة",
  },
  {
    id: "a4",
    plateNumber: "ث خ ذ 3456",
    carType: "كيا أوبتيما",
    status: "مطلوب",
    imageUrl:
      "https://images.unsplash.com/photo-1749058983232-59b967855b18?w=200&h=140&fit=crop",
    time: "منذ ساعة",
  },
],
};
```

---

### <a id="📄-src-features-dashboard-hooks-usedashboardviewmodel-ts"></a>📄 `src/features/dashboard/hooks/useDashboardViewModel.ts`

**File Info:**
- **Size**: 1.77 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/hooks/useDashboardViewModel.ts`
- **Relative Path**: `src/features/dashboard/hooks`
- **Created**: 2026-07-26 21:25:02 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `08cae172d719e3414da16230686177e7`
- **SHA256**: `9975b2403d3162e0a529f9247766f6292e54206130906060ed91be69bf1d4372`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useMemo } from "react";
import { mockDashboardData } from "../data/mockDashboardData";
import { useDashboardStore } from "../store/dashboardStore";
import type { DashboardData } from "../models/dashboard.types";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useDashboardViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const activeMenuId = useDashboardStore((s) => s.activeMenuId);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const data: DashboardData = useMemo(
    () => ({
      ...mockDashboardData,
      activeMenuId,
    }),
    [activeMenuId],
  );

  const formattedStats = useMemo(
    () =>
      data.stats.map((stat) => ({
        ...stat,
        displayValue: formatNumber(stat.value),
        isPositive: stat.changePercent >= 0,
        displayChange: `${stat.changePercent >= 0 ? "+" : ""}${stat.changePercent}%`,
      })),
    [data.stats],
  );

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  return {
    data,
    formattedStats,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    user: data.user,
    menuItems: data.menuItems,
    activeMenuId,
    weeklyScans: data.weeklyScans,
    colorDistribution: data.colorDistribution,
    vehicleTypes: data.vehicleTypes,
    matchProgress: data.matchProgress,
    alerts: data.alerts,
  };
}

```

---

### <a id="📄-src-features-dashboard-models-dashboard-types-ts"></a>📄 `src/features/dashboard/models/dashboard.types.ts`

**File Info:**
- **Size**: 1.28 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/models/dashboard.types.ts`
- **Relative Path**: `src/features/dashboard/models`
- **Created**: 2026-07-26 21:24:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `465393e80cd4740f3c297fd2cc043b31`
- **SHA256**: `f1e9a1a512df29bf34e85afadf5d9a85e7a0fde0d5851a5bf64efaf474144b5c`
- **Encoding**: UTF-8

**File code content:**

```typescript
export interface DashboardStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "units" | "scans" | "alerts" | "wanted";
  gradient: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface PieSlice {
  label: string;
  value: number;
  color: string;
}

export interface BarItem {
  label: string;
  value: number;
  color: string;
}

export interface AlertItemData {
  id: string;
  plateNumber: string;
  carType: string;
  status: "مطلوب" | "مشبوه" | "مراقبة";
  imageUrl: string;
  time: string;
}

export interface MatchProgress {
  label: string;
  percent: number;
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface TopbarUser {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface DashboardData {
  stats: DashboardStat[];
  weeklyScans: ChartPoint[];
  colorDistribution: PieSlice[];
  vehicleTypes: BarItem[];
  matchProgress: MatchProgress;
  alerts: AlertItemData[];
  user: TopbarUser;
  menuItems: SidebarMenuItem[];
  activeMenuId: string;
}

export interface DashboardState {
  isSidebarOpen: boolean;
  activeMenuId: string;
}

```

---

### <a id="📄-src-features-dashboard-pages-dashboardpage-tsx"></a>📄 `src/features/dashboard/pages/DashboardPage.tsx`

**File Info:**
- **Size**: 1.54 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/pages/DashboardPage.tsx`
- **Relative Path**: `src/features/dashboard/pages`
- **Created**: 2026-07-26 21:26:24 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b148c7e54ce2175cc59d7bdd81832cde`
- **SHA256**: `383647e095b5be06df562d8217cde1e9615d8c1dd7f00ad3d61bb773921ed881`
- **Encoding**: ASCII

**File code content:**

```typescript
import { DashboardLayout } from "../components/shared";
import {
  AlertsSection,
  AnalyticsSection,
  ScansChartSection,
  StatsSection,
} from "../components/feature";
import { useDashboardViewModel } from "../hooks/useDashboardViewModel";

export function DashboardPage() {
  const {
    formattedStats,
    weeklyScans,
    colorDistribution,
    vehicleTypes,
    matchProgress,
    alerts,
    user,
    menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
  } = useDashboardViewModel();

  return (
    <DashboardLayout
      user={user}
      menuItems={menuItems}
      activeMenuId={activeMenuId}
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      onCloseSidebar={() => setSidebarOpen(false)}
      onSelectMenu={setActiveMenuId}
      onFullscreen={handleFullscreen}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <StatsSection stats={formattedStats} />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <ScansChartSection data={weeklyScans} />
          </div>
          <div className="xl:col-span-2">
            <AlertsSection alerts={alerts} />
          </div>
        </div>

        <AnalyticsSection
          colorDistribution={colorDistribution}
          vehicleTypes={vehicleTypes}
          matchProgress={matchProgress}
        />
      </div>
    </DashboardLayout>
  );
}

```

---

### <a id="📄-src-features-dashboard-routes-dashboardroutes-ts"></a>📄 `src/features/dashboard/routes/dashboardRoutes.ts`

**File Info:**
- **Size**: 161 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/routes/dashboardRoutes.ts`
- **Relative Path**: `src/features/dashboard/routes`
- **Created**: 2026-07-26 21:24:45 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5c19b689decb27b843d829e7ac899218`
- **SHA256**: `da3a32210570d85a7a6a619cb8eb531211f815bccdd40d9a5927267c2dcc47e8`
- **Encoding**: ASCII

**File code content:**

```typescript
export const DashboardRoutes = {
  home: "/dashboard",
} as const;

export type DashboardRoute =
  (typeof DashboardRoutes)[keyof typeof DashboardRoutes];

```

---

### <a id="📄-src-features-dashboard-services-dashboardservice-ts"></a>📄 `src/features/dashboard/services/DashboardService.ts`

**File Info:**
- **Size**: 438 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/services/DashboardService.ts`
- **Relative Path**: `src/features/dashboard/services`
- **Created**: 2026-07-26 21:24:57 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 19:43:08 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a7a609784ff87fed093079d9b0102dee`
- **SHA256**: `32801a2b77d711e8af1fe39da863dd437500895197782fe537e51339c62c8efe`
- **Encoding**: ASCII

**File code content:**

```typescript
import type {
  AlertItemData,
  DashboardStat,
} from "../models/dashboard.types";


class DashboardService {
  async getStats(): Promise<DashboardStat[]> {
    throw new Error("DashboardService.getStats is not implemented yet");
  }

  async getAlerts(): Promise<AlertItemData[]> {
    throw new Error("DashboardService.getAlerts is not implemented yet");
  }
}

export const dashboardService = new DashboardService();

```

---

### <a id="📄-src-features-dashboard-store-dashboardstore-ts"></a>📄 `src/features/dashboard/store/dashboardStore.ts`

**File Info:**
- **Size**: 679 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/store/dashboardStore.ts`
- **Relative Path**: `src/features/dashboard/store`
- **Created**: 2026-07-26 21:24:46 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `35aa04018ecd2617fa9c09a7aed1d1cd`
- **SHA256**: `2e85990ccfb889e945088fb58176361a9ee02f2f013af53fd1996e5734803528`
- **Encoding**: ASCII

**File code content:**

```typescript
import { create } from "zustand";
import type { DashboardState } from "../models/dashboard.types";

interface DashboardStore extends DashboardState {
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActiveMenuId: (id: string) => void;
}

const initialState: DashboardState = {
  isSidebarOpen: false,
  activeMenuId: "dashboard",
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  ...initialState,

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setActiveMenuId: (id) => set({ activeMenuId: id }),
}));

```

---

### <a id="📄-src-features-dashboard-index-ts"></a>📄 `src/features/dashboard/index.ts`

**File Info:**
- **Size**: 550 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/dashboard/index.ts`
- **Relative Path**: `src/features/dashboard`
- **Created**: 2026-07-26 21:26:24 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f3f722c4dbc2265653ba559585c7ee0c`
- **SHA256**: `8f511fbda1a460bf7ccb4aef17666342142708fdf5797ee7e07c90aae832277b`
- **Encoding**: ASCII

**File code content:**

```typescript
export { DashboardPage } from "./pages/DashboardPage";
export { DashboardRoutes } from "./routes/dashboardRoutes";
export { useDashboardStore } from "./store/dashboardStore";
export { dashboardService } from "./services/DashboardService";
export { useDashboardViewModel } from "./hooks/useDashboardViewModel";
export { DashboardLayout } from "./components/shared";
export { CardContainer, StatCard } from "./components/ui";
export { MenuGlyph } from "./components/shared/icons";
export { mockDashboardData } from "./data/mockDashboardData";

```

---

### <a id="📄-src-features-vehicles-api-vehicles-endpoints-ts"></a>📄 `src/features/vehicles/api/vehicles.endpoints.ts`

**File Info:**
- **Size**: 147 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/api/vehicles.endpoints.ts`
- **Relative Path**: `src/features/vehicles/api`
- **Created**: 2026-08-15 21:27:10 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:42:48 (Europe/Istanbul / GMT+03:00)
- **MD5**: `0b7861d874511b57e59be3bd352062cc`
- **SHA256**: `113595729f8da9ec90d8442eaaf1abdf29fafc89302b98e92ea81a3d7da0e440`
- **Encoding**: ASCII

**File code content:**

```typescript
export const VehiclesApiEndpoints = {
  list: "/api/admin/vehicles",
  detail: (id: number | string) => `/api/admin/vehicles/${id}`,
} as const;
```

---

### <a id="📄-src-features-vehicles-api-vehicles-types-ts"></a>📄 `src/features/vehicles/api/vehicles.types.ts`

**File Info:**
- **Size**: 530 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/api/vehicles.types.ts`
- **Relative Path**: `src/features/vehicles/api`
- **Created**: 2026-08-15 21:27:12 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:43:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `8a8bb3a02b8aa42d0dd091cb787a0b78`
- **SHA256**: `1bc72b4ed49d575b5a3b7c57e1dac814504e7481c400fbe552b81a231308296f`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface VehicleApiItem {
  id: number;
  plate_number: string;
  country_code: string;
  type: string;
  model: string;
  color: string;
  owner_name: string;
  is_blacklisted: boolean;
  created_at: string;
}

export interface VehiclesApiResponse {
  data: VehicleApiItem[];
}
export interface CreateVehicleRequest {
  plate_number: string;
  country_code: string;
  type: string;
  model: string;
  color: string;
  owner_name: string;
}

export type UpdateVehicleRequest = CreateVehicleRequest;
```

---

### <a id="📄-src-features-vehicles-components-addtoblacklistmodal-tsx"></a>📄 `src/features/vehicles/components/AddToBlacklistModal.tsx`

**File Info:**
- **Size**: 4.56 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/AddToBlacklistModal.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-17 07:50:13 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 09:31:16 (Europe/Istanbul / GMT+03:00)
- **MD5**: `fad1639d369f1269806b07050680a42e`
- **SHA256**: `863d726c18d0b9caed367664fd089069f24256faacebbd8ebb68a29432d47294`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState } from "react";
import { Button } from "../../auth";
import {
  mapPriorityToSeverityLabel,
  mapStatusToArabicLabel,
  type BlacklistPriority,
  type BlacklistStatus,
} from "../../blacklist";
import type { Vehicle } from "../models/vehicle.types";

export interface AddToBlacklistPayload {
  status: BlacklistStatus;
  priority: BlacklistPriority;
  wanted: boolean;
}

interface AddToBlacklistModalProps {
  vehicle: Vehicle;
  isSaving: boolean;
  onSave: (payload: AddToBlacklistPayload) => void;
  onClose: () => void;
}

const STATUS_OPTIONS: BlacklistStatus[] = ["active", "blocked", "pending", "review"];
const PRIORITY_OPTIONS: BlacklistPriority[] = ["low", "medium", "high"];

export function AddToBlacklistModal({
  vehicle,
  isSaving,
  onSave,
  onClose,
}: AddToBlacklistModalProps) {
  const [status, setStatus] = useState<BlacklistStatus>("active");
  const [priority, setPriority] = useState<BlacklistPriority>("medium");
  const [wanted, setWanted] = useState(false);

  const handleSubmit = () => {
    onSave({ status, priority, wanted });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(244,63,94,0.15)] sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            إضافة إلى القائمة السوداء
          </h2>
          <p className="mt-1 text-sm text-white/45">{vehicle.plateNumber}</p>
        </div>

        <div className="flex flex-col gap-4">
          <SelectField
            label="الحالة"
            value={status}
            onChange={(v) => setStatus(v as BlacklistStatus)}
            options={STATUS_OPTIONS.map((s) => ({
              value: s,
              label: mapStatusToArabicLabel(s),
            }))}
          />

          <SelectField
            label="درجة الأولوية"
            value={priority}
            onChange={(v) => setPriority(v as BlacklistPriority)}
            options={PRIORITY_OPTIONS.map((p) => ({
              value: p,
              label: mapPriorityToSeverityLabel(p),
            }))}
          />

          <SelectField
            label="مطلوب أمنيًا"
            value={wanted ? "true" : "false"}
            onChange={(v) => setWanted(v === "true")}
            options={[
              { value: "true", label: "نعم" },
              { value: "false", label: "لا" },
            ]}
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <Button
            type="button"
            onClick={handleSubmit}
            isLoading={isSaving}
            loadingLabel="جارٍ الإضافة..."
            className="w-auto px-5"
          >
            إضافة للقائمة السوداء
          </Button>
        </div>
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#0f172a] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
          ▾
        </span>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-vehicles-components-deletevehiclemodal-tsx"></a>📄 `src/features/vehicles/components/DeleteVehicleModal.tsx`

**File Info:**
- **Size**: 2.74 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/DeleteVehicleModal.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-17 07:49:42 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:49:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `23fd892409b77c59d4e14af316025b8e`
- **SHA256**: `28457c32e091aafc135ae51e820cf465c85f35b4d89b88774e392b970b54044f`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { Vehicle } from "../models/vehicle.types";

interface DeleteVehicleModalProps {
  vehicle: Vehicle;
  isDeleting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function DeleteVehicleModal({
  vehicle,
  isDeleting,
  onConfirm,
  onClose,
}: DeleteVehicleModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(244,63,94,0.15)] sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">
            <WarningIcon />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">تأكيد الحذف</h2>
            <p className="mt-0.5 text-sm text-white/50">
              لا يمكن التراجع عن هذا الإجراء
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/70">
          هل أنت متأكد من حذف المركبة{" "}
          <span className="font-semibold text-white">
            {vehicle.plateNumber}
          </span>{" "}
          نهائيًا من قاعدة البيانات؟
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting ? "جارٍ الحذف..." : "حذف نهائيًا"}
          </button>
        </div>
      </div>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}
```

---

### <a id="📄-src-features-vehicles-components-index-ts"></a>📄 `src/features/vehicles/components/index.ts`

**File Info:**
- **Size**: 622 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/index.ts`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:43 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 08:16:15 (Europe/Istanbul / GMT+03:00)
- **MD5**: `8f07e7cd29a7cbbef06894eac27b2d59`
- **SHA256**: `a640f2a67213273d5a61b270801e6dc7464eade3cfe967ff437ba6b4c8243ffc`
- **Encoding**: ASCII

**File code content:**

```typescript
export { VehiclesHeader } from "./VehiclesHeader";
export { VehiclesStats } from "./VehiclesStats";
export { VehiclesFilterBar } from "./VehiclesFilterBar";
export { VehiclesTable } from "./VehiclesTable";
export { VehiclesPagination } from "./VehiclesPagination";
export { VehiclesTableSkeleton } from "./VehiclesTableSkeleton";
export { VehiclesErrorState } from "./VehiclesErrorState";
export { VehiclesEmptyState } from "./VehiclesEmptyState";
export { VehicleFormModal } from "./VehicleFormModal";
export { DeleteVehicleModal } from "./DeleteVehicleModal";
export { AddToBlacklistModal } from "./AddToBlacklistModal";
```

---

### <a id="📄-src-features-vehicles-components-vehicleformmodal-tsx"></a>📄 `src/features/vehicles/components/VehicleFormModal.tsx`

**File Info:**
- **Size**: 6.23 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehicleFormModal.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-17 07:48:30 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 08:15:53 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6f5183e04a3138649c6137b39c32f460`
- **SHA256**: `54ae47b98c7734e8ef3cfdf8528a2796d8df77d5f6d6f25f17a0fb050b72eaa3`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useState, type ReactNode } from "react";
import { Button, Input } from "../../auth";
import type { CreateVehicleRequest } from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { VEHICLE_TYPE_OPTIONS } from "../../video/models/video.types";
import { VEHICLE_COLOR_OPTIONS } from "../utils/color.utils";
import { VEHICLE_COUNTRY_OPTIONS } from "../utils/country.utils";

interface VehicleFormModalProps {
  mode: "create" | "edit";
  vehicle?: Vehicle;
  isSaving: boolean;
  onSave: (payload: CreateVehicleRequest) => void;
  onClose: () => void;
}

export function VehicleFormModal({
  mode,
  vehicle,
  isSaving,
  onSave,
  onClose,
}: VehicleFormModalProps) {
  const [plateNumber, setPlateNumber] = useState(vehicle?.plateNumber ?? "");
  const [ownerName, setOwnerName] = useState(vehicle?.ownerName ?? "");
  const [model, setModel] = useState(vehicle?.model ?? "");
  const [countryCode, setCountryCode] = useState(
    vehicle?.country.code ?? VEHICLE_COUNTRY_OPTIONS[0].code,
  );
  const [type, setType] = useState(vehicle?.type ?? VEHICLE_TYPE_OPTIONS[0]);
  const [color, setColor] = useState(
    vehicle?.color ?? VEHICLE_COLOR_OPTIONS[0],
  );

  const isFormValid =
    plateNumber.trim().length > 0 &&
    ownerName.trim().length > 0 &&
    model.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;
    onSave({
      plate_number: plateNumber.trim(),
      owner_name: ownerName.trim(),
      model: model.trim(),
      country_code: countryCode,
      type,
      color,
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="إغلاق"
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex w-full max-w-lg flex-col gap-5 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-[0_0_60px_rgba(59,130,246,0.15)] sm:p-6">
        <h2 className="text-lg font-bold text-white">
          {mode === "create" ? "إضافة مركبة جديدة" : "تعديل بيانات المركبة"}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="رقم اللوحة">
            <Input
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              placeholder="مثال: ABC 1234"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="اسم المالك">
            <Input
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="اسم مالك المركبة"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="الموديل">
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="مثال: كامري 2023"
              className="border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </Field>

          <Field label="الدولة">
            <SelectField
              value={countryCode}
              onChange={setCountryCode}
              options={VEHICLE_COUNTRY_OPTIONS.map((c) => ({
                value: c.code,
                label: `${c.flag} ${c.name}`,
              }))}
            />
          </Field>

          <Field label="النوع">
            <SelectField
              value={type}
              onChange={setType}
              options={VEHICLE_TYPE_OPTIONS.map((t) => ({
                value: t,
                label: t,
              }))}
            />
          </Field>

          <Field label="اللون">
            <SelectField
              value={color}
              onChange={setColor}
              options={VEHICLE_COLOR_OPTIONS.map((c) => ({
                value: c,
                label: c,
              }))}
            />
          </Field>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10"
          >
            إلغاء
          </button>
          <Button
            type="button"
            onClick={handleSubmit}
            isLoading={isSaving}
            loadingLabel="جارٍ الحفظ..."
            disabled={!isFormValid}
            className="w-auto px-5"
          >
            {mode === "create" ? "إضافة المركبة" : "حفظ التعديلات"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">{label}</label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#0f172a] text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
        ▾
      </span>
    </div>
  );
}
```

---

### <a id="📄-src-features-vehicles-components-vehiclesemptystate-tsx"></a>📄 `src/features/vehicles/components/VehiclesEmptyState.tsx`

**File Info:**
- **Size**: 347 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesEmptyState.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-15 21:27:47 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4ba3c9f3473f65aad4607453104ca61a`
- **SHA256**: `f61ac024feb2edb9fac67add34cfd3837281decd2fd9aa7e2bcfe0a8a46bd1c1`
- **Encoding**: ASCII

**File code content:**

```typescript
interface VehiclesEmptyStateProps {
  message: string;
}

export function VehiclesEmptyState({ message }: VehiclesEmptyStateProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="px-4 py-12 text-center text-sm text-white/40">
        {message}
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehicleserrorstate-tsx"></a>📄 `src/features/vehicles/components/VehiclesErrorState.tsx`

**File Info:**
- **Size**: 722 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesErrorState.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-15 21:27:43 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `0c0aa30e7b089415c3565131f23d067c`
- **SHA256**: `ba8dfd0ae2f3c124219f33d74e55e73f50e765ceb66c61905b657227df5d218a`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Button } from "../../auth";

interface VehiclesErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export function VehiclesErrorState({
  message = "تعذر تحميل بيانات المركبات",
  onRetry,
}: VehiclesErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-12 text-center">
      <p className="text-sm font-medium text-rose-300">{message}</p>
      <Button
        type="button"
        onClick={onRetry}
        className="w-auto px-5 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      >
        إعادة المحاولة
      </Button>
    </div>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehiclesfilterbar-tsx"></a>📄 `src/features/vehicles/components/VehiclesFilterBar.tsx`

**File Info:**
- **Size**: 2.83 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesFilterBar.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7d4cdef5e8bbd60ad1d034110307ea6d`
- **SHA256**: `1883a6000ac0de86bf485bac7c44ec0401f72a569028259c0ea3d85f9f0c4ba4`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Button, Input } from "../../auth";
import type { VehiclesFilters } from "../models/vehicle.types";

interface VehiclesFilterBarProps {
  filters: VehiclesFilters;
  typeOptions: string[];
  colorOptions: string[];
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onAddClick: () => void;
}

export function VehiclesFilterBar({
  filters,
  typeOptions,
  colorOptions,
  onSearchChange,
  onTypeChange,
  onColorChange,
  onAddClick,
}: VehiclesFilterBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1 sm:max-w-md">
            <Input
              value={filters.search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="يبحث عن لوحة أو مالك..."
              className="w-full border-white/10 bg-white/5 py-3 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <FilterSelect
            label="النوع"
            value={filters.type}
            options={typeOptions}
            onChange={onTypeChange}
          />

          <FilterSelect
            label="اللون"
            value={filters.color}
            options={colorOptions}
            onChange={onColorChange}
          />
        </div>

        <div className="flex items-center justify-end">
          <Button
            type="button"
            onClick={onAddClick}
            className="w-auto shrink-0 whitespace-nowrap px-5 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
          >
            + إضافة مركبة
          </Button>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-[150px] sm:min-w-[160px]">
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0f172a] text-white"
          >
            {option === "الكل" ? label : option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
        ▾
      </span>
    </div>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehiclesheader-tsx"></a>📄 `src/features/vehicles/components/VehiclesHeader.tsx`

**File Info:**
- **Size**: 914 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesHeader.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:15 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `974af16a044b009e271d343f63791be0`
- **SHA256**: `71052a0e42a0065b773f7ea9f77feb5540b993b187eb06e95556563308b514c8`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { DashboardRoutes } from "../../dashboard";

interface VehiclesHeaderProps {
  title?: string;
  subtitle?: string;
}

export function VehiclesHeader({
  title = "المركبات",
  subtitle = "إدارة قاعدة بيانات المركبات",
}: VehiclesHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={DashboardRoutes.home}
          className="transition hover:text-white/70"
        >
          لوحة التحكم
        </Link>
        <span>/</span>
        <span className="text-white/70">المركبات</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehiclespagination-tsx"></a>📄 `src/features/vehicles/components/VehiclesPagination.tsx`

**File Info:**
- **Size**: 4.27 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesPagination.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:39 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 21:25:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `d677be0b1479d969f0bf1ae5d1f4c3b5`
- **SHA256**: `3072e67b10b5133f280f2383c43f399b2511ee3a6012a7ef3881d332ec18bba0`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ReactNode } from "react";

interface VehiclesPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  totalCount: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  pageSizeOptions?: readonly number[];
  onPageSizeChange?: (size: number) => void;
  rangeStart?: number;
  rangeEnd?: number;
}

export function VehiclesPagination({
  currentPage,
  totalPages,
  pageNumbers,
  totalCount,
  onPageChange,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  rangeStart,
  rangeEnd,
}: VehiclesPaginationProps) {
  const showRange =
    typeof rangeStart === "number" &&
    typeof rangeEnd === "number" &&
    totalCount > 0;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs text-white/40">
          {showRange ? (
            <>
              عرض{" "}
              <span className="font-semibold text-white/70">{rangeStart}</span>
              {" - "}
              <span className="font-semibold text-white/70">{rangeEnd}</span>
              {" من "}
              <span className="font-semibold text-white/70">{totalCount}</span>
            </>
          ) : (
            <>
              إجمالي النتائج:{" "}
              <span className="font-semibold text-white/70">{totalCount}</span>
            </>
          )}
        </p>

        {pageSize !== undefined &&
          pageSizeOptions &&
          onPageSizeChange && (
            <div className="relative">
              <select
                aria-label="عدد العناصر في الصفحة"
                value={pageSize}
                onChange={(e) => onPageSizeChange(Number(e.target.value))}
                className="appearance-none rounded-lg border border-white/10 bg-white/5 py-1.5 pe-7 ps-2.5 text-xs text-white/70 outline-none transition focus:border-blue-500"
              >
                {pageSizeOptions.map((size) => (
                  <option
                    key={size}
                    value={size}
                    className="bg-[#0f172a] text-white"
                  >
                    {size} عرض
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 end-2 flex items-center text-white/40 text-[10px]">
                ▾
              </span>
            </div>
          )}
      </div>

      <div className="flex items-center gap-1.5">
        <PageButton
          label="السابق"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          السابق
        </PageButton>

        {pageNumbers.map((page, index) =>
          page < 0 ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm text-white/40"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2.5 text-sm font-medium transition ${
                page === currentPage
                  ? "bg-gradient-to-l from-blue-600 to-violet-600 text-white shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                  : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <PageButton
          label="التالي"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          التالي
        </PageButton>
      </div>
    </div>
  );
}

function PageButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/65 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehiclesstats-tsx"></a>📄 `src/features/vehicles/components/VehiclesStats.tsx`

**File Info:**
- **Size**: 917 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesStats.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:21 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `c484238a68ed9dd95deca24f3cce2a4c`
- **SHA256**: `76298db99aff5b54a5219e771917be136ab2d60bbd04b53c0cbae51792df4442`
- **Encoding**: ASCII

**File code content:**

```typescript
import { StatCard, MenuGlyph } from "../../dashboard";

interface FormattedVehicleStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "vehicles" | "blacklist";
}

interface VehiclesStatsProps {
  stats: FormattedVehicleStat[];
}

export function VehiclesStats({ stats }: VehiclesStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<MenuGlyph name={stat.icon} className="h-5 w-5" />}
        />
      ))}
    </section>
  );
}

```

---

### <a id="📄-src-features-vehicles-components-vehiclestable-tsx"></a>📄 `src/features/vehicles/components/VehiclesTable.tsx`

**File Info:**
- **Size**: 8.18 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesTable.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-01 19:58:39 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:55:55 (Europe/Istanbul / GMT+03:00)
- **MD5**: `933020c34621f60e5c1ccbd940951aa0`
- **SHA256**: `8358018ac3a66fc162bedade0d32120ff7220f00209eef2aa3598ab3f0a6a791`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { ReactNode } from "react";
import { Checkbox } from "../../auth";
import { MenuGlyph } from "../../dashboard";
import type { Vehicle } from "../models/vehicle.types";

interface VehiclesTableProps {
  vehicles: Vehicle[];
  selectedVehicles: string[];
  allPageSelected: boolean;
  onToggleAll: () => void;
  onToggleOne: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAddToBlacklist: (id: string) => void;
}

export function VehiclesTable({
  vehicles,
  selectedVehicles,
  allPageSelected,
  onToggleAll,
  onToggleOne,
  onEdit,
  onDelete,
  onAddToBlacklist,
}: VehiclesTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">
                <Checkbox
                  checked={allPageSelected}
                  onChange={onToggleAll}
                  aria-label="تحديد الكل"
                  className="justify-center"
                />
              </th>
              <th className="px-4 py-3.5 text-start font-medium">لوحة المركبة</th>
              <th className="px-4 py-3.5 text-start font-medium">الدولة</th>
              <th className="px-4 py-3.5 text-start font-medium">اللون</th>
              <th className="px-4 py-3.5 text-start font-medium">النوع</th>
              <th className="px-4 py-3.5 text-start font-medium">الموديل</th>
              <th className="px-4 py-3.5 text-start font-medium">المالك</th>
              <th className="px-4 py-3.5 text-start font-medium">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد مركبات مطابقة للبحث
                </td>
              </tr>
            ) : (
              vehicles.map((vehicle) => {
                const selected = selectedVehicles.includes(vehicle.id);
                return (
                  <tr
                    key={vehicle.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.04]"
                  >
                    <td className="px-4 py-3.5">
                      <Checkbox
                        checked={selected}
                        onChange={() => onToggleOne(vehicle.id)}
                        aria-label={`تحديد ${vehicle.plateNumber}`}
                      />
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex rounded-lg bg-gradient-to-l from-blue-600/30 to-violet-600/20 px-2.5 py-1 font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
                        {vehicle.plateNumber}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/80">
                        <span className="text-base leading-none">
                          {vehicle.country.flag}
                        </span>
                        <span className="font-medium">
                          {vehicle.country.code}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <span
                          className="h-3 w-3 rounded-full ring-1 ring-white/20"
                          style={{ backgroundColor: vehicle.colorHex }}
                        />
                        {vehicle.color}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-2 text-white/75">
                        <MenuGlyph
                          name="vehicles"
                          className="h-4 w-4 text-white/45"
                        />
                        {vehicle.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-white/70">
                      {vehicle.model}
                    </td>
                    <td className="px-4 py-3.5 text-white/80">
                      {vehicle.ownerName}
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <ActionButton
                          label="تعديل"
                          onClick={() => onEdit(vehicle.id)}
                        >
                          <EditIcon />
                        </ActionButton>
                        <ActionButton
                          label="حذف"
                          onClick={() => onDelete(vehicle.id)}
                          danger
                        >
                          <DeleteIcon />
                        </ActionButton>
                        {/* <ActionButton label="المزيد">
                          <MoreIcon />
                        </ActionButton> */}
                        <ActionButton
                            label={
                              vehicle.isBlacklisted
                                ? "مضافة أصلًا للقائمة السوداء"
                                : "إضافة للقائمة السوداء"
                            }
                            onClick={() => onAddToBlacklist(vehicle.id)}
                            disabled={vehicle.isBlacklisted}
                            warn
                          >
                            <BlacklistFlagIcon />
                          </ActionButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionButton({
  children,
  label,
  onClick,
  danger = false,
  warn = false,
  disabled = false,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  warn?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/5 ${
        danger
          ? "text-rose-400 hover:text-rose-300"
          : warn
            ? "text-amber-400 hover:text-amber-300"
            : "text-white/55 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="M13 6.5l3 3" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </svg>
  );
}
function BlacklistFlagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M5 3v18" />
      <path d="M5 4h12l-2.5 4L17 12H5" />
    </svg>
  );
}

// function MoreIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-3.5 w-3.5"
//       fill="currentColor"
//       aria-hidden
//     >
//       <circle cx="12" cy="5" r="1.6" />
//       <circle cx="12" cy="12" r="1.6" />
//       <circle cx="12" cy="19" r="1.6" />
//     </svg>
//   );
// }

```

---

### <a id="📄-src-features-vehicles-components-vehiclestableskeleton-tsx"></a>📄 `src/features/vehicles/components/VehiclesTableSkeleton.tsx`

**File Info:**
- **Size**: 595 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/components/VehiclesTableSkeleton.tsx`
- **Relative Path**: `src/features/vehicles/components`
- **Created**: 2026-08-15 21:27:42 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e8d859a7c4b624e5742d1ecf31fca56c`
- **SHA256**: `64f9006ec39af8846d6f5027c891696faeea65288055f490c945e3259a182717`
- **Encoding**: UTF-8

**File code content:**

```typescript
interface VehiclesTableProps {
  message?: string;
}

export function VehiclesTableSkeleton({
  message = "جاري تحميل المركبات...",
}: VehiclesTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="space-y-3 p-4">
        <p className="text-sm text-white/45">{message}</p>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-12 animate-pulse rounded-lg bg-white/[0.06]"
          />
        ))}
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-vehicles-hooks-usevehiclesviewmodel-ts"></a>📄 `src/features/vehicles/hooks/useVehiclesViewModel.ts`

**File Info:**
- **Size**: 10.38 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/hooks/useVehiclesViewModel.ts`
- **Relative Path**: `src/features/vehicles/hooks`
- **Created**: 2026-08-01 19:57:58 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 08:05:36 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5a837785fb97a301f49cf801cc900364`
- **SHA256**: `2ecd76128963292221e577efcdac8257bc72c4e077c23e7c19bc9470a7958a1c`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blacklistService, type CreateBlacklistRequest } from "../../blacklist";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import type {
  CreateVehicleRequest,
  UpdateVehicleRequest,
} from "../api/vehicles.types";
import {
  VEHICLES_PAGE_SIZE,
  vehiclesQueryKeys,
  type Vehicle,
  type VehiclesFilters,
} from "../models/vehicle.types";
import { vehiclesService } from "../services/VehiclesService";
import { useVehiclesStore } from "../store/vehiclesStore";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useVehiclesViewModel() {
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const selectedVehicles = useVehiclesStore((s) => s.selectedVehicles);
  const toggleVehicleSelection = useVehiclesStore(
    (s) => s.toggleVehicleSelection,
  );
  const selectAllVehicles = useVehiclesStore((s) => s.selectAllVehicles);
  const clearSelection = useVehiclesStore((s) => s.clearSelection);

  const [filters, setFilters] = useState<VehiclesFilters>({
    search: "",
    type: "الكل",
    color: "الكل",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [deletingVehicle, setDeletingVehicle] = useState<Vehicle | null>(null);
  const [blacklistingVehicle, setBlacklistingVehicle] =
    useState<Vehicle | null>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    setActiveMenuId("vehicles");
  }, [setActiveMenuId]);

  const vehiclesQuery = useQuery({
    queryKey: vehiclesQueryKeys.list(),
    queryFn: () => vehiclesService.getVehicles(),
  });

  const allVehicles = useMemo(
    () => vehiclesQuery.data ?? [],
    [vehiclesQuery.data],
  );

  const createVehicleMutation = useMutation({
    mutationFn: (payload: CreateVehicleRequest) =>
      vehiclesService.createVehicle(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setIsAddModalOpen(false);
    },
  });

  const updateVehicleMutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateVehicleRequest;
    }) => vehiclesService.updateVehicle(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setEditingVehicle(null);
    },
  });

  const deleteVehicleMutation = useMutation({
    mutationFn: (id: string) => vehiclesService.deleteVehicle(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setDeletingVehicle(null);
    },
  });

  const addToBlacklistMutation = useMutation({
    mutationFn: (payload: CreateBlacklistRequest) =>
      blacklistService.addToBlacklist(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: vehiclesQueryKeys.all,
      });
      setBlacklistingVehicle(null);
    },
  });

  const typeOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allVehicles.map((vehicle) => vehicle.type).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allVehicles]);

  const colorOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allVehicles.map((vehicle) => vehicle.color).filter(Boolean)),
    ).sort((a, b) => a.localeCompare(b, "ar"));
    return ["الكل", ...unique];
  }, [allVehicles]);

  const filteredVehicles = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return allVehicles.filter((vehicle) => {
      const matchesSearch =
        query.length === 0 ||
        vehicle.plateNumber.toLowerCase().includes(query) ||
        vehicle.ownerName.toLowerCase().includes(query) ||
        vehicle.model.toLowerCase().includes(query) ||
        vehicle.country.code.toLowerCase().includes(query) ||
        vehicle.type.toLowerCase().includes(query) ||
        vehicle.color.toLowerCase().includes(query);

      const matchesType =
        filters.type === "الكل" || vehicle.type === filters.type;

      const matchesColor =
        filters.color === "الكل" || vehicle.color === filters.color;

      return matchesSearch && matchesType && matchesColor;
    });
  }, [allVehicles, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVehicles.length / VEHICLES_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedVehicles = useMemo(() => {
    const start = (safePage - 1) * VEHICLES_PAGE_SIZE;
    return filteredVehicles.slice(start, start + VEHICLES_PAGE_SIZE);
  }, [filteredVehicles, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const formattedStats = useMemo(() => {
    const total = allVehicles.length;
    const blacklisted = allVehicles.filter((v) => v.isBlacklisted).length;
    const blacklistPercent =
      total === 0 ? 0 : Math.round((blacklisted / total) * 1000) / 10;

    return [
      {
        id: "total",
        title: "إجمالي المركبات",
        value: total,
        subtitle: "في قاعدة البيانات",
        changePercent: 0,
        icon: "vehicles" as const,
        gradient: "from-blue-600/40 to-indigo-700/30",
        displayValue: formatNumber(total),
        isPositive: true,
        displayChange: `${formatNumber(total)}`,
      },
      {
        id: "blacklist",
        title: "المركبات في القائمة السوداء",
        value: blacklisted,
        subtitle: "تحتاج متابعة",
        changePercent: blacklistPercent,
        icon: "blacklist" as const,
        gradient: "from-rose-600/40 to-orange-700/30",
        displayValue: formatNumber(blacklisted),
        isPositive: false,
        displayChange: `${blacklistPercent}%`,
      },
    ];
  }, [allVehicles]);

  const pageIds = paginatedVehicles.map((v) => v.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selectedVehicles.includes(id));

  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.type !== "الكل" ||
    filters.color !== "الكل";

  const setSearch = (search: string) => {
    setFilters((prev) => ({ ...prev, search }));
    setCurrentPage(1);
    clearSelection();
  };

  const setTypeFilter = (type: string) => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentPage(1);
    clearSelection();
  };

  const setColorFilter = (color: string) => {
    setFilters((prev) => ({ ...prev, color }));
    setCurrentPage(1);
    clearSelection();
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const toggleSelectAllOnPage = () => {
    if (allPageSelected) {
      selectAllVehicles(
        selectedVehicles.filter((id) => !pageIds.includes(id)),
      );
    } else {
      selectAllVehicles([...new Set([...selectedVehicles, ...pageIds])]);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "vehicles",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    typeOptions,
    colorOptions,
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles: paginatedVehicles,
    totalCount: filteredVehicles.length,
    totalVehiclesCount: allVehicles.length,
    hasActiveFilters,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading: vehiclesQuery.isLoading,
    isError: vehiclesQuery.isError,
    isFetching: vehiclesQuery.isFetching,
    refetch: vehiclesQuery.refetch,

    handleAddVehicle: () => setIsAddModalOpen(true),
    isAddModalOpen,
    isSavingVehicle: createVehicleMutation.isPending,
    handleCloseAddModal: () => {
      setIsAddModalOpen(false);
      createVehicleMutation.reset();
    },
    handleCreateVehicle: (payload: CreateVehicleRequest) => {
      createVehicleMutation.mutate(payload);
    },

    handleEditVehicle: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setEditingVehicle(vehicle);
    },
    editingVehicle,
    isSavingEdit: updateVehicleMutation.isPending,
    handleCloseEditModal: () => {
      setEditingVehicle(null);
      updateVehicleMutation.reset();
    },
    handleUpdateVehicle: (payload: UpdateVehicleRequest) => {
      if (!editingVehicle) return;
      updateVehicleMutation.mutate({ id: editingVehicle.id, payload });
    },

    handleDeleteVehicle: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setDeletingVehicle(vehicle);
    },
    deletingVehicle,
    isDeletingVehicle: deleteVehicleMutation.isPending,
    handleCloseDeleteModal: () => {
      setDeletingVehicle(null);
      deleteVehicleMutation.reset();
    },
    handleConfirmDeleteVehicle: () => {
      if (!deletingVehicle) return;
      deleteVehicleMutation.mutate(deletingVehicle.id);
    },

    handleAddToBlacklist: (id: string) => {
      const vehicle = allVehicles.find((v) => v.id === id) ?? null;
      setBlacklistingVehicle(vehicle);
    },
    blacklistingVehicle,
    isAddingToBlacklist: addToBlacklistMutation.isPending,
    handleCloseBlacklistModal: () => {
      setBlacklistingVehicle(null);
      addToBlacklistMutation.reset();
    },
    handleConfirmAddToBlacklist: (payload: {
      status: CreateBlacklistRequest["status"];
      priority: CreateBlacklistRequest["priority"];
      wanted: boolean;
    }) => {
      if (!blacklistingVehicle) return;
      addToBlacklistMutation.mutate({
        vehicle_id: Number(blacklistingVehicle.id),
        ...payload,
      });
    },
  };
}
```

---

### <a id="📄-src-features-vehicles-models-vehicle-types-ts"></a>📄 `src/features/vehicles/models/vehicle.types.ts`

**File Info:**
- **Size**: 885 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/models/vehicle.types.ts`
- **Relative Path**: `src/features/vehicles/models`
- **Created**: 2026-08-01 19:57:25 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `381ee18bf8aadc7cd73f1804e9dcf052`
- **SHA256**: `790b4082c8356e2a62ff99b7c24918464d009c1d92a5c276a5f549e2a9121109`
- **Encoding**: ASCII

**File code content:**

```typescript
export interface VehicleCountry {
  code: string;
  name: string;
  flag: string;
}

/** Presentation model used by Vehicles UI components. */
export interface Vehicle {
  id: string;
  plateNumber: string;
  country: VehicleCountry;
  color: string;
  colorHex: string;
  type: string;
  model: string;
  ownerName: string;
  isBlacklisted: boolean;
  createdAt: string;
}

export interface VehicleStat {
  id: string;
  title: string;
  value: number;
  subtitle: string;
  changePercent: number;
  icon: "vehicles" | "blacklist";
  gradient: string;
}

export interface VehiclesFilters {
  search: string;
  type: string;
  color: string;
}

export interface VehiclesSelectionState {
  selectedVehicles: string[];
}

export const VEHICLES_PAGE_SIZE = 8;

export const vehiclesQueryKeys = {
  all: ["vehicles"] as const,
  list: () => [...vehiclesQueryKeys.all, "list"] as const,
};

```

---

### <a id="📄-src-features-vehicles-pages-vehiclespage-tsx"></a>📄 `src/features/vehicles/pages/VehiclesPage.tsx`

**File Info:**
- **Size**: 4.49 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/pages/VehiclesPage.tsx`
- **Relative Path**: `src/features/vehicles/pages`
- **Created**: 2026-08-01 19:58:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 08:05:34 (Europe/Istanbul / GMT+03:00)
- **MD5**: `53e3092c43d440c24c43f0a6ff0b1844`
- **SHA256**: `a877cf6d148413ed1e759bd0d5160fd3a60f92752cf16a66564667eb4e8dbe0d`
- **Encoding**: ASCII

**File code content:**

```typescript
import {
  DashboardLayout,
  CardContainer,
} from "../../dashboard";
import { useVehiclesViewModel } from "../hooks/useVehiclesViewModel";
import {
  AddToBlacklistModal,
  DeleteVehicleModal,
  VehicleFormModal,
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesFilterBar,
  VehiclesHeader,
  VehiclesPagination,
  VehiclesStats,
  VehiclesTable,
  VehiclesTableSkeleton,
} from "../components";

export function VehiclesPage() {
  const {
    user,
    menuItems,
    activeMenuId,
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    formattedStats,
    filters,
    typeOptions,
    colorOptions,
    setSearch,
    setTypeFilter,
    setColorFilter,
    vehicles,
    totalCount,
    totalVehiclesCount,
    hasActiveFilters,
    selectedVehicles,
    toggleVehicleSelection,
    allPageSelected,
    toggleSelectAllOnPage,
    currentPage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading,
    isError,
    refetch,
    handleAddVehicle,
    isAddModalOpen,
    isSavingVehicle,
    handleCloseAddModal,
    handleCreateVehicle,
    handleEditVehicle,
    editingVehicle,
    isSavingEdit,
    handleCloseEditModal,
    handleUpdateVehicle,
    handleDeleteVehicle,
    deletingVehicle,
    isDeletingVehicle,
    handleCloseDeleteModal,
    handleConfirmDeleteVehicle,
    handleAddToBlacklist,
    blacklistingVehicle,
    isAddingToBlacklist,
    handleCloseBlacklistModal,
    handleConfirmAddToBlacklist,
  } = useVehiclesViewModel();

  const emptyMessage = hasActiveFilters
    ? "لا توجد مركبات مطابقة للبحث"
    : "لا توجد مركبات في قاعدة البيانات";

  return (
    <DashboardLayout
      user={user}
      menuItems={menuItems}
      activeMenuId={activeMenuId}
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
      onCloseSidebar={() => setSidebarOpen(false)}
      onSelectMenu={setActiveMenuId}
      onFullscreen={handleFullscreen}
    >
      {isAddModalOpen && (
        <VehicleFormModal
          mode="create"
          isSaving={isSavingVehicle}
          onSave={handleCreateVehicle}
          onClose={handleCloseAddModal}
        />
      )}

      {editingVehicle && (
        <VehicleFormModal
          mode="edit"
          vehicle={editingVehicle}
          isSaving={isSavingEdit}
          onSave={handleUpdateVehicle}
          onClose={handleCloseEditModal}
        />
      )}

      {deletingVehicle && (
        <DeleteVehicleModal
          vehicle={deletingVehicle}
          isDeleting={isDeletingVehicle}
          onConfirm={handleConfirmDeleteVehicle}
          onClose={handleCloseDeleteModal}
        />
      )}

      {blacklistingVehicle && (
        <AddToBlacklistModal
          vehicle={blacklistingVehicle}
          isSaving={isAddingToBlacklist}
          onSave={handleConfirmAddToBlacklist}
          onClose={handleCloseBlacklistModal}
        />
      )}

      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VehiclesHeader />

        <VehiclesStats stats={formattedStats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <VehiclesFilterBar
            filters={filters}
            typeOptions={typeOptions}
            colorOptions={colorOptions}
            onSearchChange={setSearch}
            onTypeChange={setTypeFilter}
            onColorChange={setColorFilter}
            onAddClick={handleAddVehicle}
          />

          {isLoading ? (
            <VehiclesTableSkeleton />
          ) : isError ? (
            <VehiclesErrorState onRetry={() => void refetch()} />
          ) : totalVehiclesCount === 0 || totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
              <VehiclesTable
                vehicles={vehicles}
                selectedVehicles={selectedVehicles}
                allPageSelected={allPageSelected}
                onToggleAll={toggleSelectAllOnPage}
                onToggleOne={toggleVehicleSelection}
                onEdit={handleEditVehicle}
                onDelete={handleDeleteVehicle}
                onAddToBlacklist={handleAddToBlacklist}
              />

              <VehiclesPagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageNumbers={pageNumbers}
                totalCount={totalCount}
                onPageChange={goToPage}
              />
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
```

---

### <a id="📄-src-features-vehicles-routes-vehiclesroutes-ts"></a>📄 `src/features/vehicles/routes/vehiclesRoutes.ts`

**File Info:**
- **Size**: 156 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/routes/vehiclesRoutes.ts`
- **Relative Path**: `src/features/vehicles/routes`
- **Created**: 2026-08-01 19:57:27 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b377991c5b3c367d4fc27b1f797be70b`
- **SHA256**: `d84e07d9a41c99d5b08e4ed4942bd3c1649905f9a9ed6ed6596e8b0de11a43fa`
- **Encoding**: ASCII

**File code content:**

```typescript
export const VehiclesRoutes = {
  list: "/vehicles",
} as const;

export type VehiclesRoute =
  (typeof VehiclesRoutes)[keyof typeof VehiclesRoutes];

```

---

### <a id="📄-src-features-vehicles-services-vehiclesservice-ts"></a>📄 `src/features/vehicles/services/VehiclesService.ts`

**File Info:**
- **Size**: 1.03 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/services/VehiclesService.ts`
- **Relative Path**: `src/features/vehicles/services`
- **Created**: 2026-08-01 19:57:42 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:47:52 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e3e2a5ff2541352c5391885a433f99af`
- **SHA256**: `ecb4bae6399538222644e2ca89a697fb34adeaba2f4164cc118fe541bd6070cb`
- **Encoding**: ASCII

**File code content:**

```typescript
import { apiClient } from "../../../api/axios";
import { VehiclesApiEndpoints } from "../api/vehicles.endpoints";
import type {
  CreateVehicleRequest,
  UpdateVehicleRequest,
  VehiclesApiResponse,
} from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { mapVehicleApiToUi } from "../utils/mapVehicleApiToUi";

class VehiclesService {
  async getVehicles(): Promise<Vehicle[]> {
    const response = await apiClient.get<VehiclesApiResponse>(
      VehiclesApiEndpoints.list,
    );

    return response.data.data.map(mapVehicleApiToUi);
  }

  async createVehicle(payload: CreateVehicleRequest): Promise<void> {
    await apiClient.post(VehiclesApiEndpoints.list, payload);
  }

  async updateVehicle(
    id: string,
    payload: UpdateVehicleRequest,
  ): Promise<void> {
    await apiClient.put(VehiclesApiEndpoints.detail(id), payload);
  }

  async deleteVehicle(id: string): Promise<void> {
    await apiClient.delete(VehiclesApiEndpoints.detail(id));
  }
}

export const vehiclesService = new VehiclesService();
```

---

### <a id="📄-src-features-vehicles-store-vehiclesstore-ts"></a>📄 `src/features/vehicles/store/vehiclesStore.ts`

**File Info:**
- **Size**: 967 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/store/vehiclesStore.ts`
- **Relative Path**: `src/features/vehicles/store`
- **Created**: 2026-08-01 19:57:28 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `1b85fe1379c6cd7859cd7e94f15675f6`
- **SHA256**: `2314de1e97409f21dd446f87fd760af60e92bcc91eb394e8248d411e99daac77`
- **Encoding**: ASCII

**File code content:**

```typescript
import { create } from "zustand";
import type { VehiclesSelectionState } from "../models/vehicle.types";

interface VehiclesStore extends VehiclesSelectionState {
  setSelectedVehicles: (ids: string[]) => void;
  toggleVehicleSelection: (id: string) => void;
  selectAllVehicles: (ids: string[]) => void;
  clearSelection: () => void;
}

const initialState: VehiclesSelectionState = {
  selectedVehicles: [],
};

export const useVehiclesStore = create<VehiclesStore>((set, get) => ({
  ...initialState,

  setSelectedVehicles: (ids) => set({ selectedVehicles: ids }),

  toggleVehicleSelection: (id) => {
    const { selectedVehicles } = get();
    const exists = selectedVehicles.includes(id);
    set({
      selectedVehicles: exists
        ? selectedVehicles.filter((item) => item !== id)
        : [...selectedVehicles, id],
    });
  },

  selectAllVehicles: (ids) => set({ selectedVehicles: ids }),

  clearSelection: () => set({ selectedVehicles: [] }),
}));

```

---

### <a id="📄-src-features-vehicles-utils-color-utils-ts"></a>📄 `src/features/vehicles/utils/color.utils.ts`

**File Info:**
- **Size**: 470 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/utils/color.utils.ts`
- **Relative Path**: `src/features/vehicles/utils`
- **Created**: 2026-08-15 21:27:17 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:44:18 (Europe/Istanbul / GMT+03:00)
- **MD5**: `77fae5536689bd321403952545ce17ab`
- **SHA256**: `334f359a52cca55b5bd82dc3f24d9bd450793ead8bce09722a45cbee0b17bb07`
- **Encoding**: UTF-8

**File code content:**

```typescript
const COLOR_HEX_MAP: Record<string, string> = {
  أبيض: "#E2E8F0",
  أسود: "#1E293B",
  فضي: "#94A3B8",
  أزرق: "#3B82F6",
  أحمر: "#F43F5E",
  رمادي: "#64748B",
  أخضر: "#10B981",
  أصفر: "#F59E0B",
  بني: "#92400E",
  ذهبي: "#D97706",
};

export function resolveVehicleColorHex(color: string): string {
  return COLOR_HEX_MAP[color] ?? "#64748B";
}
export const VEHICLE_COLOR_OPTIONS = Object.keys(COLOR_HEX_MAP);
```

---

### <a id="📄-src-features-vehicles-utils-country-utils-ts"></a>📄 `src/features/vehicles/utils/country.utils.ts`

**File Info:**
- **Size**: 955 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/utils/country.utils.ts`
- **Relative Path**: `src/features/vehicles/utils`
- **Created**: 2026-08-15 21:27:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:44:16 (Europe/Istanbul / GMT+03:00)
- **MD5**: `354de24849bfa94538cd5512d7934dcd`
- **SHA256**: `b703283aeadf3e590f5c8e58a1a912a9c9f17ce38919fc08a0eca2aa75b5007f`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VehicleCountry } from "../models/vehicle.types";

const COUNTRY_MAP: Record<string, Omit<VehicleCountry, "code">> = {
  KSA: { name: "السعودية", flag: "🇸🇦" },
  UAE: { name: "الإمارات", flag: "🇦🇪" },
  QAT: { name: "قطر", flag: "🇶🇦" },
  KWT: { name: "الكويت", flag: "🇰🇼" },
  BHR: { name: "البحرين", flag: "🇧🇭" },
  OMN: { name: "عُمان", flag: "🇴🇲" },
  JOR: { name: "الأردن", flag: "🇯🇴" },
  EGY: { name: "مصر", flag: "🇪🇬" },
};

export function resolveVehicleCountry(countryCode: string): VehicleCountry {
  const code = countryCode.toUpperCase();
  const known = COUNTRY_MAP[code];

  if (known) {
    return { code, ...known };
  }

  return {
    code,
    name: code,
    flag: "🏳️",
  };
}
export const VEHICLE_COUNTRY_OPTIONS = Object.entries(COUNTRY_MAP).map(
  ([code, info]) => ({ code, ...info }),
);
```

---

### <a id="📄-src-features-vehicles-utils-mapvehicleapitoui-ts"></a>📄 `src/features/vehicles/utils/mapVehicleApiToUi.ts`

**File Info:**
- **Size**: 686 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/utils/mapVehicleApiToUi.ts`
- **Relative Path**: `src/features/vehicles/utils`
- **Created**: 2026-08-15 21:27:18 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e3d1a20664917f4eea9c7f44aa26e3a8`
- **SHA256**: `3f883326fd213e9c74894ddcd306bd83ce80475d383f2c20b01f129501ad6dc3`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { VehicleApiItem } from "../api/vehicles.types";
import type { Vehicle } from "../models/vehicle.types";
import { resolveVehicleColorHex } from "../utils/color.utils";
import { resolveVehicleCountry } from "../utils/country.utils";

export function mapVehicleApiToUi(item: VehicleApiItem): Vehicle {
  return {
    id: String(item.id),
    plateNumber: item.plate_number,
    country: resolveVehicleCountry(item.country_code),
    color: item.color,
    colorHex: resolveVehicleColorHex(item.color),
    type: item.type,
    model: item.model,
    ownerName: item.owner_name,
    isBlacklisted: item.is_blacklisted,
    createdAt: item.created_at,
  };
}

```

---

### <a id="📄-src-features-vehicles-index-ts"></a>📄 `src/features/vehicles/index.ts`

**File Info:**
- **Size**: 586 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/vehicles/index.ts`
- **Relative Path**: `src/features/vehicles`
- **Created**: 2026-08-01 19:58:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `9f5b00d6fa8bd0dd78dfcfd338c4d97f`
- **SHA256**: `524d86c7d968cb5af16a3d6007d480e1c5b853e7546796f6403e33c1d97123bf`
- **Encoding**: ASCII

**File code content:**

```typescript
export { VehiclesPage } from "./pages/VehiclesPage";
export { VehiclesRoutes } from "./routes/vehiclesRoutes";
export { useVehiclesStore } from "./store/vehiclesStore";
export { vehiclesService } from "./services/VehiclesService";
export { useVehiclesViewModel } from "./hooks/useVehiclesViewModel";
export { VehiclesPagination } from "./components/VehiclesPagination";
export { VehiclesTableSkeleton } from "./components/VehiclesTableSkeleton";
export { VehiclesErrorState } from "./components/VehiclesErrorState";
export { VehiclesEmptyState } from "./components/VehiclesEmptyState";

```

---

### <a id="📄-src-features-video-api-videos-endpoints-ts"></a>📄 `src/features/video/api/videos.endpoints.ts`

**File Info:**
- **Size**: 169 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/api/videos.endpoints.ts`
- **Relative Path**: `src/features/video/api`
- **Created**: 2026-08-15 21:45:06 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:50:05 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b9ced48fa86685f46c67c7acc637eac3`
- **SHA256**: `632dd564d7a29ef704205f1445b8113dc79c3abf946d9c114031d3a4c226f597`
- **Encoding**: ASCII

**File code content:**

```typescript
export const VideosApiEndpoints = {
  list: "/api/admin/videos",
  processed: (videoId: number | string) =>
    `/api/admin/videos/processed/${videoId}`,
} as const;
```

---

### <a id="📄-src-features-video-api-videos-types-ts"></a>📄 `src/features/video/api/videos.types.ts`

**File Info:**
- **Size**: 703 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/api/videos.types.ts`
- **Relative Path**: `src/features/video/api`
- **Created**: 2026-08-15 21:45:06 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:50:03 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7bc6551122143c1e3da5dbbb9464d783`
- **SHA256**: `4d0c1363ef40654b7bcabba80f9b2060658b38145391c34393edc3fed8b04316`
- **Encoding**: UTF-8

**File code content:**

```typescript
export type VideoStatus = "completed" | "processing" | "failed";

export interface VideoApiItem {
  id: number;
  name: string;
  uploaded_at: string;
  duration: string;
  status: VideoStatus;
}

export interface VideosApiResponse {
  videos: VideoApiItem[];
}

export interface CreateVideoRequest {
  original_path: string;
  name: string;
  duration: number;
  size: number;
}

/** Backend create response — fields may vary; id is the stable identifier. */
export interface CreateVideoResponse {
  id: number;
  name?: string;
  uploaded_at?: string;
  duration?: string | number;
  status?: VideoStatus;
}

export interface ProcessedVideoResponse {
  url: string;
}
```

---

### <a id="📄-src-features-video-components-index-ts"></a>📄 `src/features/video/components/index.ts`

**File Info:**
- **Size**: 468 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/components/index.ts`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:40 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 10:31:26 (Europe/Istanbul / GMT+03:00)
- **MD5**: `4783a1be1e3a7106a228bf94c33ff86e`
- **SHA256**: `6981d07da316348e191696997c652de3cfc7864b08828adf31b4ad7dc581e4ae`
- **Encoding**: ASCII

**File code content:**

```typescript
export { VideoUploadHeader } from "./VideoUploadHeader";
export { VideoUploadZone } from "./VideoUploadZone";
export { SelectedVideoCard } from "./SelectedVideoCard";
export { RecentVideosTable } from "./RecentVideosTable";
export { VideoStatusBadge } from "./VideoStatusBadge";
export { VideosHeader } from "./VideosHeader";
export { VideosStats } from "./VideosStats";
export { VideosFilterBar } from "./VideosFilterBar";
export { VideosTable } from "./VideosTable";
```

---

### <a id="📄-src-features-video-components-recentvideostable-tsx"></a>📄 `src/features/video/components/RecentVideosTable.tsx`

**File Info:**
- **Size**: 3.17 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/RecentVideosTable.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:40 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:11:29 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a440ff49dd587fa244b8d1a263e8a6e1`
- **SHA256**: `84940ba29457c5ef05a286908394ceb1d87f1f90b35795f22bae162eb16d85b3`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import type { VideoFile } from "../models/video.types";
import { VideoRoutes } from "../routes/videoRoutes";
import { VideoStatusBadge } from "./VideoStatusBadge";

interface RecentVideosTableProps {
  videos: VideoFile[];
  onRowClick: (id: string) => void;
}

export function RecentVideosTable({
  videos,
  onRowClick,
}: RecentVideosTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
                <th className="px-4 py-3.5 text-start font-medium">
                  اسم الفيديو
                </th>
                <th className="px-4 py-3.5 text-start font-medium">
                  تاريخ الرفع
                </th>
                <th className="px-4 py-3.5 text-start font-medium">المدة</th>
                <th className="px-4 py-3.5 text-start font-medium">الحجم</th>
                <th className="px-4 py-3.5 text-start font-medium">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr
                  key={video.id}
                  onClick={() => onRowClick(video.id)}
                  className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.04]"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <img
                        src={video.thumbnailUrl}
                        alt=""
                        className="h-10 w-14 shrink-0 rounded-md object-cover ring-1 ring-white/10"
                      />
                      <span className="font-medium text-white/90">
                        {video.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.uploadedAt}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.duration}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.formattedSize}
                  </td>
                  <td className="px-4 py-3.5">
                    <VideoStatusBadge status={video.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        to={VideoRoutes.list}
        className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-blue-400 transition hover:text-blue-300"
      >
        عرض جميع الفيديوهات
        <ArrowIcon />
      </Link>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}
```

---

### <a id="📄-src-features-video-components-selectedvideocard-tsx"></a>📄 `src/features/video/components/SelectedVideoCard.tsx`

**File Info:**
- **Size**: 3.58 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/SelectedVideoCard.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:33 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:10:23 (Europe/Istanbul / GMT+03:00)
- **MD5**: `2016409741010d73fc45c84f1a573bae`
- **SHA256**: `30c6e8f1ad822bc5ae34837719137e4e022326c9d83606ec23ec9b9dfaf363d7`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ReactNode } from "react";
import { Button } from "../../auth";
import type { SelectedVideoDisplay } from "../models/video.types";

interface SelectedVideoCardProps {
  video: SelectedVideoDisplay;
  onRemove: () => void;
  onStartProcessing: () => void;
  isProcessing: boolean;
  canStartProcessing: boolean;
}

export function SelectedVideoCard({
  video,
  onRemove,
  onStartProcessing,
  isProcessing,
  canStartProcessing,
}: SelectedVideoCardProps) {
  return (
    <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
      <p className="text-sm font-semibold text-white/90">الملف المختار</p>

      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center">
        <img
          src={video.thumbnailUrl}
          alt={video.name}
          className="h-20 w-32 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-white">{video.name}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <MetaItem icon={<FileIcon />}>{video.format}</MetaItem>
            <MetaItem icon={<SizeIcon />}>{video.formattedSize}</MetaItem>
            <MetaItem icon={<DurationIcon />}>{video.duration}</MetaItem>
          </div>
        </div>

        <button
          type="button"
          aria-label="حذف الملف المختار"
          onClick={onRemove}
          className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 transition hover:bg-rose-500/20 sm:self-center"
        >
          <TrashIcon />
        </button>
      </div>

      <p className="text-xs text-white/35">
        تأكد من أن الفيديو واضح وخالي من التشويش للحصول على أفضل نتائج
      </p>

      <Button
        type="button"
        onClick={onStartProcessing}
        disabled={!canStartProcessing}
        isLoading={isProcessing}
        loadingLabel="جاري بدء المعالجة..."
        className="w-full sm:w-auto sm:self-start sm:px-8"
      >
        <PlayIcon />
        بدء المعالجة
      </Button>
    </div>
  );
}

function MetaItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-white/35">{icon}</span>
      {children}
    </span>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function SizeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

function DurationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 7h16M9 7V5h6v2M8 7l1 12h6l1-12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

```

---

### <a id="📄-src-features-video-components-videosfilterbar-tsx"></a>📄 `src/features/video/components/VideosFilterBar.tsx`

**File Info:**
- **Size**: 2.2 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideosFilterBar.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-15 10:27:51 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `91496c4e620d0b552fc297d55014bd68`
- **SHA256**: `d6d6944150f2a84242a4a49a417ba66f72e9930b4b0b1ebeba896ffb9f2017cb`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Button, Input } from "../../auth";
import { videoStatusOptions } from "../constants/videos.constants";

interface VideosFilterBarProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onUploadClick: () => void;
}

export function VideosFilterBar({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onUploadClick,
}: VideosFilterBarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1 sm:max-w-md">
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث باسم الفيديو..."
            className="w-full border-white/10 bg-white/5 py-3 text-white placeholder:text-white/35 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        <div className="relative min-w-[160px]">
          <select
            aria-label="الحالة"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pe-9 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            {videoStatusOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#0f172a] text-white"
              >
                {option === "الكل" ? "الحالة" : option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-white/40">
            ▾
          </span>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Button
          type="button"
          onClick={onUploadClick}
          className="w-auto shrink-0 whitespace-nowrap px-5 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
        >
          + رفع فيديو جديد
        </Button>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-video-components-videosheader-tsx"></a>📄 `src/features/video/components/VideosHeader.tsx`

**File Info:**
- **Size**: 978 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideosHeader.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-15 10:26:51 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 10:26:57 (Europe/Istanbul / GMT+03:00)
- **MD5**: `1a025f7376a28031d9844810553e5240`
- **SHA256**: `1aa84336929a1f43d165ce00a085e0c22b0a63a064ccc190cafef9896a9c7efd`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { DashboardRoutes } from "../../dashboard";

interface VideosHeaderProps {
  title?: string;
  subtitle?: string;
}

export function VideosHeader({
  title = "الفيديوهات المعالجة",
  subtitle = "سجل جميع الفيديوهات المرفوعة وحالة معالجتها",
}: VideosHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={DashboardRoutes.home}
          className="transition hover:text-white/70"
        >
          لوحة التحكم
        </Link>
        <span>/</span>
        <span className="text-white/70">الفيديوهات المعالجة</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-video-components-videosstats-tsx"></a>📄 `src/features/video/components/VideosStats.tsx`

**File Info:**
- **Size**: 934 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideosStats.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-15 10:27:19 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 10:27:33 (Europe/Istanbul / GMT+03:00)
- **MD5**: `6062e867cd0326ea341bdd71792356a2`
- **SHA256**: `422a17d1666f6ad3749b5efaea6f8a66944c8e04dee5576500a9bb7069920de2`
- **Encoding**: ASCII

**File code content:**

```typescript
import { StatCard, MenuGlyph } from "../../dashboard";

interface FormattedVideoStat {
  id: string;
  title: string;
  displayValue: string;
  subtitle: string;
  displayChange: string;
  isPositive: boolean;
  gradient: string;
  icon: "processedVideos" | "video" | "alerts";
}

interface VideosStatsProps {
  stats: FormattedVideoStat[];
}

export function VideosStats({ stats }: VideosStatsProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          displayValue={stat.displayValue}
          subtitle={stat.subtitle}
          displayChange={stat.displayChange}
          isPositive={stat.isPositive}
          gradient={stat.gradient}
          icon={<MenuGlyph name={stat.icon} className="h-5 w-5" />}
        />
      ))}
    </section>
  );
}
```

---

### <a id="📄-src-features-video-components-videostable-tsx"></a>📄 `src/features/video/components/VideosTable.tsx`

**File Info:**
- **Size**: 3.01 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideosTable.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-15 10:28:11 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 21:29:10 (Europe/Istanbul / GMT+03:00)
- **MD5**: `cbe10f408a3eb903bff0b95d32f75a39`
- **SHA256**: `3269ea251acc8ce3ec54931c0cb78b0ebfb19d54067b5828bcc3730328787d38`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VideoFile } from "../models/video.types";
import { VideoStatusBadge } from "./VideoStatusBadge";

interface VideosTableProps {
  videos: VideoFile[];
  onRowClick: (id: string) => void;
}

export function VideosTable({ videos, onRowClick }: VideosTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-white/50">
              <th className="px-4 py-3.5 text-start font-medium">
                اسم الفيديو
              </th>
              <th className="px-4 py-3.5 text-start font-medium">
                تاريخ الرفع
              </th>
              <th className="px-4 py-3.5 text-start font-medium">المدة</th>
              <th className="px-4 py-3.5 text-start font-medium">الحجم</th>
              <th className="px-4 py-3.5 text-start font-medium">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {videos.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-12 text-center text-white/40"
                >
                  لا توجد فيديوهات مطابقة للبحث
                </td>
              </tr>
            ) : (
              videos.map((video) => (
                <tr
                  key={video.id}
                  onClick={() => onRowClick(video.id)}
                  className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.04]"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      {video.thumbnailUrl ? (
                        <img
                          src={video.thumbnailUrl}
                          alt=""
                          className="h-10 w-14 shrink-0 rounded-md object-cover ring-1 ring-white/10"
                        />
                      ) : (
                        <div className="h-10 w-14 shrink-0 rounded-md bg-white/10 ring-1 ring-white/10" />
                      )}
                      <span className="font-medium text-white/90">
                        {video.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.uploadedAt}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.duration}
                  </td>
                  <td className="px-4 py-3.5 text-white/60">
                    {video.formattedSize}
                  </td>
                  <td className="px-4 py-3.5">
                    <VideoStatusBadge status={video.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

---

### <a id="📄-src-features-video-components-videostatusbadge-tsx"></a>📄 `src/features/video/components/VideoStatusBadge.tsx`

**File Info:**
- **Size**: 859 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideoStatusBadge.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:36 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:36 (Europe/Istanbul / GMT+03:00)
- **MD5**: `246c0fa20143c1f4d2351cbf0f3086d1`
- **SHA256**: `66fecb184b966435d1380ae0ee5965bedb2f0399c9c88ad6caf582f3c7a77349`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VideoStatus } from "../models/video.types";

const statusConfig: Record<
  VideoStatus,
  { label: string; className: string }
> = {
  completed: {
    label: "مكتمل",
    className:
      "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
  failed: {
    label: "فشل",
    className: "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30",
  },
  processing: {
    label: "قيد المعالجة",
    className: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
  },
};

interface VideoStatusBadgeProps {
  status: VideoStatus;
}

export function VideoStatusBadge({ status }: VideoStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[11px] font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}

```

---

### <a id="📄-src-features-video-components-videouploadheader-tsx"></a>📄 `src/features/video/components/VideoUploadHeader.tsx`

**File Info:**
- **Size**: 975 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideoUploadHeader.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:26 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:26 (Europe/Istanbul / GMT+03:00)
- **MD5**: `807d4d61d52515fcfce5bdaa3e8a5fd5`
- **SHA256**: `9363e0439157525da93c91f54a5f235e1b342e40a4906b924b7a0110ddf4474f`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { Link } from "react-router-dom";
import { VideoRoutes } from "../routes/videoRoutes";

interface VideoUploadHeaderProps {
  title?: string;
  subtitle?: string;
}

export function VideoUploadHeader({
  title = "رفع فيديو جديد",
  subtitle = "قم برفع فيديو لبدء عملية التحليل والكشف باستخدام الذكاء الاصطناعي",
}: VideoUploadHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center gap-2 text-xs text-white/40">
        <Link
          to={VideoRoutes.list}
          className="transition hover:text-white/70"
        >
          تحليل الفيديو
        </Link>
        <span>/</span>
        <span className="text-white/70">رفع فيديو</span>
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>
    </div>
  );
}

```

---

### <a id="📄-src-features-video-components-videouploadzone-tsx"></a>📄 `src/features/video/components/VideoUploadZone.tsx`

**File Info:**
- **Size**: 4.29 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/components/VideoUploadZone.tsx`
- **Relative Path**: `src/features/video/components`
- **Created**: 2026-08-13 14:39:30 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:30 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5e7226952353b143f2db27fe1faa5f31`
- **SHA256**: `8424df13cf681edd80a89d354633dfb482979a63adbeb22a0ae4e78ba60fef10`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { ChangeEvent, DragEvent, RefObject } from "react";
import { Button } from "../../auth";

interface VideoUploadZoneProps {
  isDragging: boolean;
  supportedFormats: readonly string[];
  maxSizeLabel: string;
  accept: string;
  validationError: string | null;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onDragEnter: (event: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onBrowseClick: () => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function VideoUploadZone({
  isDragging,
  supportedFormats,
  maxSizeLabel,
  accept,
  validationError,
  fileInputRef,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onBrowseClick,
  onFileChange,
}: VideoUploadZoneProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        role="button"
        tabIndex={0}
        aria-label="منطقة رفع الفيديو"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onBrowseClick();
          }
        }}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={onBrowseClick}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-12 text-center transition sm:py-16 ${
          isDragging
            ? "border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            : "border-white/15 bg-white/[0.02] hover:border-blue-500/50 hover:bg-white/[0.04]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={onFileChange}
          aria-hidden
        />

        <div
          className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/25 transition ${
            isDragging ? "scale-110 bg-blue-500/20" : ""
          }`}
        >
          <CloudUploadIcon
            className={`h-8 w-8 text-blue-400 ${isDragging ? "text-blue-300" : ""}`}
          />
        </div>

        <p className="text-lg font-semibold text-white">اسحب الفيديو هنا</p>
        <p className="mt-1.5 text-sm text-white/45">
          أو اضغط لاختيار ملف من جهازك
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-white/40">الصيغ المدعومة:</span>
          {supportedFormats.map((format) => (
            <span
              key={format}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/70"
            >
              {format}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/35">
          الحد الأقصى لحجم الملف: {maxSizeLabel}
        </p>

        <Button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onBrowseClick();
          }}
          className="mt-6 w-auto px-6 shadow-[0_0_24px_rgba(99,102,241,0.35)]"
        >
          <FolderIcon className="h-4 w-4" />
          اختيار ملف من الجهاز
        </Button>
      </div>

      {validationError && (
        <p className="text-sm text-rose-400" role="alert">
          {validationError}
        </p>
      )}
    </div>
  );
}

function CloudUploadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path d="M12 16V8m0 0-3 3m3-3 3 3" />
      <path d="M7 16h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.5 2A3.5 3.5 0 0 0 7 16Z" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden
    >
      <path d="M4 8h5l2 2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

```

---

### <a id="📄-src-features-video-constants-videos-constants-ts"></a>📄 `src/features/video/constants/videos.constants.ts`

**File Info:**
- **Size**: 671 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/constants/videos.constants.ts`
- **Relative Path**: `src/features/video/constants`
- **Created**: 2026-08-15 21:45:10 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:50:51 (Europe/Istanbul / GMT+03:00)
- **MD5**: `d408f7ca65b624cae79dc33fdb6d25df`
- **SHA256**: `07eb67f9930ff58ebdd2c53a4dd6ce1fe29960f7db990bfa81ffcbf4828dfce1`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VideoStatus } from "../models/video.types";

export const VIDEOS_PAGE_SIZE = 8;

export const videoStatusOptions = [
  "الكل",
  "مكتمل",
  "قيد المعالجة",
  "فشل",
] as const;

export const statusLabelToKey: Record<string, VideoStatus> = {
  مكتمل: "completed",
  "قيد المعالجة": "processing",
  فشل: "failed",
};

export const videosQueryKeys = {
  all: ["videos"] as const,
  list: () => [...videosQueryKeys.all, "list"] as const,
  recent: () => [...videosQueryKeys.all, "recent"] as const,
  processed: (videoId: number) =>
    [...videosQueryKeys.all, "processed", videoId] as const,
};
```

---

### <a id="📄-src-features-video-data-mockvideodata-ts"></a>📄 `src/features/video/data/mockVideoData.ts`

**File Info:**
- **Size**: 1.08 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/data/mockVideoData.ts`
- **Relative Path**: `src/features/video/data`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `663bd2ad00d44c84567e9dcbb11e7df9`
- **SHA256**: `e5cb90a0aacb945c4191f1a129d27d72e90bda4c61b6c107955f51379bc77212`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { VideoFile } from "../models/video.types";
import { DEFAULT_VIDEO_THUMBNAIL } from "../utils/mapVideoApiToUi";

/**
 * Local UI-only seed for the upload page recent list.
 * Processed Videos list uses GET /api/admin/videos.
 */
export const mockRecentVideos: VideoFile[] = [
  {
    id: "rv1",
    name: "traffic_video_2026_08_10.mp4",
    size: 186646528,
    formattedSize: "178 MB",
    duration: "03:15",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-10 14:22",
    status: "completed",
  },
  {
    id: "rv2",
    name: "traffic_video_2026_08_09.mp4",
    size: 327155712,
    formattedSize: "312 MB",
    duration: "06:40",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-09 11:05",
    status: "completed",
  },
  {
    id: "rv3",
    name: "traffic_video_2026_08_07.mp4",
    size: 117440512,
    formattedSize: "112 MB",
    duration: "02:18",
    format: "MP4",
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: "2026-08-07 09:47",
    status: "failed",
  },
];

export { DEFAULT_VIDEO_THUMBNAIL };

```

---

### <a id="📄-src-features-video-hooks-useprocessedvideosviewmodel-ts"></a>📄 `src/features/video/hooks/useProcessedVideosViewModel.ts`

**File Info:**
- **Size**: 5.21 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/hooks/useProcessedVideosViewModel.ts`
- **Relative Path**: `src/features/video/hooks`
- **Created**: 2026-08-15 10:29:07 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 21:45:23 (Europe/Istanbul / GMT+03:00)
- **MD5**: `960d9e63ccb405070218869adc36b3be`
- **SHA256**: `be5d129535a53ecb671ae93c2470bc693711207521b9c02980d591b5ee1a5cca`
- **Encoding**: ASCII

**File code content:**

```typescript
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { mockDashboardData, useDashboardStore } from "../../dashboard";
import {
  statusLabelToKey,
  VIDEOS_PAGE_SIZE,
  videosQueryKeys,
} from "../constants/videos.constants";
import { buildAnalysisResultsPath } from "../../analysis";
import { VideoRoutes } from "../routes/videoRoutes";
import { videoService } from "../services/VideoService";

function formatNumber(value: number): string {
  return new Intl.NumberFormat("ar-EG").format(value);
}

export function useProcessedVideosViewModel() {
  const navigate = useNavigate();
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const [search, setSearchState] = useState("");
  const [status, setStatusState] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setActiveMenuId("processedVideos");
  }, [setActiveMenuId]);

  const videosQuery = useQuery({
    queryKey: videosQueryKeys.list(),
    queryFn: () => videoService.getVideos(),
  });

  const videos = useMemo(
    () => videosQuery.data ?? [],
    [videosQuery.data],
  );

  const filteredVideos = useMemo(() => {
    const query = search.trim().toLowerCase();

    return videos.filter((video) => {
      const matchesSearch =
        query.length === 0 || video.name.toLowerCase().includes(query);

      const matchesStatus =
        status === "الكل" || video.status === statusLabelToKey[status];

      return matchesSearch && matchesStatus;
    });
  }, [videos, search, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredVideos.length / VIDEOS_PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedVideos = useMemo(() => {
    const start = (safePage - 1) * VIDEOS_PAGE_SIZE;
    return filteredVideos.slice(start, start + VIDEOS_PAGE_SIZE);
  }, [filteredVideos, safePage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const stats = useMemo(() => {
    const total = videos.length;
    const completed = videos.filter((v) => v.status === "completed").length;
    const processing = videos.filter((v) => v.status === "processing").length;
    const failed = videos.filter((v) => v.status === "failed").length;

    return [
      {
        id: "total",
        title: "إجمالي الفيديوهات",
        displayValue: formatNumber(total),
        subtitle: "منذ بداية التشغيل",
        displayChange: "",
        isPositive: true,
        gradient: "from-blue-600/40 to-indigo-700/30",
        icon: "processedVideos" as const,
      },
      {
        id: "completed",
        title: "مكتملة",
        displayValue: formatNumber(completed),
        subtitle: "تمت معالجتها بنجاح",
        displayChange: "",
        isPositive: true,
        gradient: "from-emerald-600/40 to-teal-700/30",
        icon: "processedVideos" as const,
      },
      {
        id: "processing",
        title: "قيد المعالجة",
        displayValue: formatNumber(processing),
        subtitle: "جارٍ تحليلها الآن",
        displayChange: "",
        isPositive: true,
        gradient: "from-amber-600/40 to-yellow-700/30",
        icon: "video" as const,
      },
      {
        id: "failed",
        title: "فشلت",
        displayValue: formatNumber(failed),
        subtitle: "تحتاج إعادة رفع",
        displayChange: "",
        isPositive: false,
        gradient: "from-rose-600/40 to-orange-700/30",
        icon: "alerts" as const,
      },
    ];
  }, [videos]);

  const hasActiveFilters = search.trim().length > 0 || status !== "الكل";

  const setSearch = (value: string) => {
    setSearchState(value);
    setCurrentPage(1);
  };

  const setStatus = (value: string) => {
    setStatusState(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  };

  const handleUploadClick = () => {
    navigate(VideoRoutes.upload);
  };

  const handleRowClick = (id: string) => {
    navigate(buildAnalysisResultsPath(id));
  };

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "processedVideos",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    stats,
    search,
    status,
    setSearch,
    setStatus,
    videos: paginatedVideos,
    totalCount: filteredVideos.length,
    totalVideosCount: videos.length,
    hasActiveFilters,
    currentPage: safePage,
    totalPages,
    pageNumbers,
    goToPage,
    isLoading: videosQuery.isLoading,
    isError: videosQuery.isError,
    refetch: videosQuery.refetch,
    handleUploadClick,
    handleRowClick,
  };
}
```

---

### <a id="📄-src-features-video-hooks-usevideouploadviewmodel-ts"></a>📄 `src/features/video/hooks/useVideoUploadViewModel.ts`

**File Info:**
- **Size**: 7.68 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/hooks/useVideoUploadViewModel.ts`
- **Relative Path**: `src/features/video/hooks`
- **Created**: 2026-08-13 14:39:21 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:11:27 (Europe/Istanbul / GMT+03:00)
- **MD5**: `bcdf9919e0a3e4a764e18c11fd21b7c4`
- **SHA256**: `d736d72997189ec7d8323bf4cb42ff8c4a435ad824ec7a98dad653c6d80e6f09`
- **Encoding**: ASCII

**File code content:**

```typescript
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  mockDashboardData,
  useDashboardStore,
} from "../../dashboard";
import { buildAnalysisResultsPath } from "../../analysis/routes/analysisRoutes";
import type { CreateVideoRequest } from "../api/videos.types";
import { videosQueryKeys } from "../constants/videos.constants";
import { DEFAULT_VIDEO_THUMBNAIL } from "../data/mockVideoData";
import type { SelectedVideoDisplay } from "../models/video.types";
import { videoService } from "../services/VideoService";
import { buildOriginalPath } from "../utils/buildOriginalPath";
import { formatDuration } from "../utils/formatDuration";
import { readVideoDurationSeconds } from "../utils/readVideoDuration";
import {
  VIDEO_FORMAT_LABELS,
  VIDEO_UPLOAD_CONFIG,
} from "../validators/videoUpload.constants";
import { validateVideoFile } from "../validators/videoUploadSchema";

export type UploadFeedback = {
  type: "success" | "error";
  message: string;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024 ** 2) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${Math.round(bytes / 1024 ** 2)} MB`;
}

function getFileExtension(name: string): string {
  return name.split(".").pop()?.toUpperCase() ?? "—";
}

export function useVideoUploadViewModel() {
  const navigate = useNavigate();
  const isSidebarOpen = useDashboardStore((s) => s.isSidebarOpen);
  const toggleSidebar = useDashboardStore((s) => s.toggleSidebar);
  const setSidebarOpen = useDashboardStore((s) => s.setSidebarOpen);
  const setActiveMenuId = useDashboardStore((s) => s.setActiveMenuId);

  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<UploadFeedback | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [durationSeconds, setDurationSeconds] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] =
    useState<SelectedVideoDisplay | null>(null);

  useEffect(() => {
    setActiveMenuId("video");
  }, [setActiveMenuId]);

  const recentVideosQuery = useQuery({
    queryKey: videosQueryKeys.recent(),
    queryFn: () => videoService.getRecentVideos(),
  });

  const recentVideos = useMemo(
    () => recentVideosQuery.data ?? [],
    [recentVideosQuery.data],
  );

  const resetFileInput = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedFile(null);
    setDurationSeconds(null);
    setSelectedVideo(null);
    resetFileInput();
  }, [resetFileInput]);

  const createVideoMutation = useMutation({
    mutationFn: (payload: CreateVideoRequest) =>
      videoService.createVideo(payload),
    onSuccess: async () => {
      setFeedback({
        type: "success",
        message: "تم بدء معالجة الفيديو بنجاح",
      });
      clearSelection();
      setValidationError(null);
      await queryClient.invalidateQueries({ queryKey: videosQueryKeys.all });
    },
    onError: () => {
      setFeedback({
        type: "error",
        message: "فشل بدء معالجة الفيديو، يرجى المحاولة مرة أخرى.",
      });
    },
  });

  const processFile = useCallback(async (file: File) => {
    const validation = validateVideoFile(file);

    if (!validation.success) {
      setValidationError(validation.error ?? "ملف غير صالح");
      setFeedback(null);
      clearSelection();
      return;
    }

    setValidationError(null);
    setFeedback(null);

    try {
      const duration = await readVideoDurationSeconds(file);

      setSelectedFile(file);
      setDurationSeconds(duration);
      setSelectedVideo({
        name: file.name,
        format: getFileExtension(file.name),
        formattedSize: formatFileSize(file.size),
        duration: formatDuration(duration),
        thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
      });
    } catch {
      clearSelection();
      setValidationError(
        "تعذر قراءة مدة الفيديو. يرجى اختيار ملف فيديو صالح.",
      );
    }
  }, [clearSelection]);

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        void processFile(file);
      }
      event.target.value = "";
    },
    [processFile],
  );

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      const file = event.dataTransfer.files?.[0];
      if (file) {
        void processFile(file);
      }
    },
    [processFile],
  );

  const clearSelectedVideo = useCallback(() => {
    clearSelection();
    setValidationError(null);
    setFeedback(null);
    createVideoMutation.reset();
  }, [clearSelection, createVideoMutation]);

  const startProcessing = useCallback(() => {
    if (
      !selectedFile ||
      durationSeconds === null ||
      createVideoMutation.isPending
    ) {
      return;
    }

    setFeedback(null);

    const payload: CreateVideoRequest = {
      original_path: buildOriginalPath(selectedFile.name),
      name: selectedFile.name,
      duration: durationSeconds,
      size: selectedFile.size,
    };

    createVideoMutation.mutate(payload);
  }, [selectedFile, durationSeconds, createVideoMutation]);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }
  }, []);

  const uploadConfig = useMemo(
    () => ({
      supportedFormats: VIDEO_FORMAT_LABELS,
      maxSizeLabel: VIDEO_UPLOAD_CONFIG.maxSizeLabel,
      accept: VIDEO_UPLOAD_CONFIG.supportedFormats
        .map((f) => `.${f}`)
        .join(","),
    }),
    [],
  );

  const isProcessing = createVideoMutation.isPending;
  const canStartProcessing =
    Boolean(selectedFile) &&
    durationSeconds !== null &&
    Boolean(selectedVideo) &&
    !isProcessing;

  return {
    user: mockDashboardData.user,
    menuItems: mockDashboardData.menuItems,
    activeMenuId: "video",
    isSidebarOpen,
    toggleSidebar,
    setSidebarOpen,
    setActiveMenuId,
    handleFullscreen,
    fileInputRef,
    uploadConfig,
    isDragging,
    validationError,
    feedback,
    selectedVideo,
    isProcessing,
    recentVideos,
    isRecentVideosLoading: recentVideosQuery.isLoading,
    isRecentVideosError: recentVideosQuery.isError,
    refetchRecentVideos: recentVideosQuery.refetch,
    canStartProcessing,
    openFilePicker,
    handleFileChange,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    clearSelectedVideo,
    startProcessing,
    handleRowClick: (id: string) => {
    navigate(buildAnalysisResultsPath(id)); 
    },
  };
}

```

---

### <a id="📄-src-features-video-models-video-types-ts"></a>📄 `src/features/video/models/video.types.ts`

**File Info:**
- **Size**: 744 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/models/video.types.ts`
- **Relative Path**: `src/features/video/models`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 07:46:54 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a7e08026194f8dc6187d5cfb616cd1ae`
- **SHA256**: `08ffb28f9ed39a81832881067413e87c7d1e8d274388b6e64e8a1345baf8b1a3`
- **Encoding**: UTF-8

**File code content:**

```typescript
export type VideoStatus = "completed" | "failed" | "processing";

export interface VideoFile {
  id: string;
  name: string;
  size: number;
  formattedSize: string;
  duration: string;
  format: string;
  thumbnailUrl?: string;
  uploadedAt: string;
  status: VideoStatus;
}

export interface SelectedVideoDisplay {
  name: string;
  format: string;
  formattedSize: string;
  duration: string;
  thumbnailUrl: string;
}

export interface VideoUploadConfig {
  supportedFormats: readonly string[];
  maxSizeBytes: number;
  maxSizeLabel: string;
}
export const VEHICLE_TYPE_OPTIONS = [
  "سيدان",
  "دفع رباعي",
  "كروس أوفر",
  "هاتشباك",
  "شاحنة",
  "حافلة",
  "دراجة نارية",
  "أخرى",
];
```

---

### <a id="📄-src-features-video-pages-processedvideospage-tsx"></a>📄 `src/features/video/pages/ProcessedVideosPage.tsx`

**File Info:**
- **Size**: 2.32 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/pages/ProcessedVideosPage.tsx`
- **Relative Path**: `src/features/video/pages`
- **Created**: 2026-08-15 10:29:56 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 21:45:25 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e54a6f0f89d07e5ed9cfe8a846d88bf7`
- **SHA256**: `bd43ecd6f213164822c05e8b387181cf7ff02599ed6e8eb86acb94f3c69e2cb4`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesPagination,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useProcessedVideosViewModel } from "../hooks/useProcessedVideosViewModel";
import {
  VideosFilterBar,
  VideosHeader,
  VideosStats,
  VideosTable,
} from "../components";

export function ProcessedVideosPage() {
  const vm = useProcessedVideosViewModel();

  const emptyMessage = vm.hasActiveFilters
    ? "لا توجد فيديوهات مطابقة للبحث"
    : "لا توجد فيديوهات معالجة";

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VideosHeader />

        <VideosStats stats={vm.stats} />

        <CardContainer className="flex flex-col gap-4 p-4 sm:p-5">
          <VideosFilterBar
            search={vm.search}
            status={vm.status}
            onSearchChange={vm.setSearch}
            onStatusChange={vm.setStatus}
            onUploadClick={vm.handleUploadClick}
          />

          {vm.isLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل الفيديوهات..." />
          ) : vm.isError ? (
            <VehiclesErrorState
              message="تعذر تحميل بيانات الفيديوهات"
              onRetry={() => void vm.refetch()}
            />
          ) : vm.totalVideosCount === 0 || vm.totalCount === 0 ? (
            <VehiclesEmptyState message={emptyMessage} />
          ) : (
            <>
              <VideosTable
                videos={vm.videos}
                onRowClick={vm.handleRowClick}
              />

              <VehiclesPagination
                currentPage={vm.currentPage}
                totalPages={vm.totalPages}
                pageNumbers={vm.pageNumbers}
                totalCount={vm.totalCount}
                onPageChange={vm.goToPage}
              />
            </>
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}

```

---

### <a id="📄-src-features-video-pages-videouploadpage-tsx"></a>📄 `src/features/video/pages/VideoUploadPage.tsx`

**File Info:**
- **Size**: 2.95 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/features/video/pages/VideoUploadPage.tsx`
- **Relative Path**: `src/features/video/pages`
- **Created**: 2026-08-13 14:39:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-17 06:13:49 (Europe/Istanbul / GMT+03:00)
- **MD5**: `abcc9c3b9e8886d3d397ad28b5752665`
- **SHA256**: `c52a151291d93d9fec64d9d3e903f0bd59856d77e07c86f65f7cf3387b928fcb`
- **Encoding**: ASCII

**File code content:**

```typescript
import { DashboardLayout, CardContainer } from "../../dashboard";
import {
  VehiclesEmptyState,
  VehiclesErrorState,
  VehiclesTableSkeleton,
} from "../../vehicles";
import { useVideoUploadViewModel } from "../hooks/useVideoUploadViewModel";
import {
  RecentVideosTable,
  SelectedVideoCard,
  VideoUploadHeader,
  VideoUploadZone,
} from "../components";

export function VideoUploadPage() {
  const vm = useVideoUploadViewModel();

  return (
    <DashboardLayout
      user={vm.user}
      menuItems={vm.menuItems}
      activeMenuId={vm.activeMenuId}
      isSidebarOpen={vm.isSidebarOpen}
      onToggleSidebar={vm.toggleSidebar}
      onCloseSidebar={() => vm.setSidebarOpen(false)}
      onSelectMenu={vm.setActiveMenuId}
      onFullscreen={vm.handleFullscreen}
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:gap-5">
        <VideoUploadHeader />

        <CardContainer>
          <VideoUploadZone
            isDragging={vm.isDragging}
            supportedFormats={vm.uploadConfig.supportedFormats}
            maxSizeLabel={vm.uploadConfig.maxSizeLabel}
            accept={vm.uploadConfig.accept}
            validationError={vm.validationError}
            fileInputRef={vm.fileInputRef}
            onDragEnter={vm.handleDragEnter}
            onDragLeave={vm.handleDragLeave}
            onDragOver={vm.handleDragOver}
            onDrop={vm.handleDrop}
            onBrowseClick={vm.openFilePicker}
            onFileChange={vm.handleFileChange}
          />

          {vm.feedback && (
            <p
              className={`mt-3 text-sm ${
                vm.feedback.type === "success"
                  ? "text-emerald-400"
                  : "text-rose-400"
              }`}
              role="status"
            >
              {vm.feedback.message}
            </p>
          )}

          {vm.selectedVideo && (
            <SelectedVideoCard
              video={vm.selectedVideo}
              onRemove={vm.clearSelectedVideo}
              onStartProcessing={vm.startProcessing}
              isProcessing={vm.isProcessing}
              canStartProcessing={vm.canStartProcessing}
            />
          )}
        </CardContainer>

        <CardContainer title="الفيديوهات المرفوعة مؤخراً">
          {vm.isRecentVideosLoading ? (
            <VehiclesTableSkeleton message="جاري تحميل الفيديوهات..." />
          ) : vm.isRecentVideosError ? (
            <VehiclesErrorState
              message="تعذر تحميل الفيديوهات المرفوعة مؤخراً"
              onRetry={() => void vm.refetchRecentVideos()}
            />
          ) : vm.recentVideos.length === 0 ? (
            <VehiclesEmptyState message="لا توجد فيديوهات مرفوعة بعد" />
          ) : (
            <RecentVideosTable
            videos={vm.recentVideos}
            onRowClick={vm.handleRowClick}
          />
          )}
        </CardContainer>
      </div>
    </DashboardLayout>
  );
}
```

---

### <a id="📄-src-features-video-routes-videoroutes-ts"></a>📄 `src/features/video/routes/videoRoutes.ts`

**File Info:**
- **Size**: 160 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/routes/videoRoutes.ts`
- **Relative Path**: `src/features/video/routes`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **MD5**: `de9f019c14b3f152dc947af969b996e2`
- **SHA256**: `5b7cf4f9a6cc4d9bd2b4c1f7d792106ea78342562dae4989967bb5cadf6da191`
- **Encoding**: ASCII

**File code content:**

```typescript
export const VideoRoutes = {
  upload: "/video/upload",
  list: "/video",
} as const;

export type VideoRoute = (typeof VideoRoutes)[keyof typeof VideoRoutes];

```

---

### <a id="📄-src-features-video-services-videoservice-ts"></a>📄 `src/features/video/services/VideoService.ts`

**File Info:**
- **Size**: 1.36 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/services/VideoService.ts`
- **Relative Path**: `src/features/video/services`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 20:50:30 (Europe/Istanbul / GMT+03:00)
- **MD5**: `5cdbe42b0ce4c2d8ba4f061fe48dbdb0`
- **SHA256**: `8a76585b6da15b483c5082dcf28e03e279df8afcb7a73a75a82072a3e25a9dd4`
- **Encoding**: ASCII

**File code content:**

```typescript
import { apiClient } from "../../../api/axios";
import { VideosApiEndpoints } from "../api/videos.endpoints";
import type {
  CreateVideoRequest,
  CreateVideoResponse,
  ProcessedVideoResponse,
  VideosApiResponse,
} from "../api/videos.types";
import type { VideoFile } from "../models/video.types";
import { mapVideoApiToUi } from "../utils/mapVideoApiToUi";

class VideoService {
  async getVideos(): Promise<VideoFile[]> {
    const response = await apiClient.get<VideosApiResponse>(
      VideosApiEndpoints.list,
    );

    return response.data.videos.map(mapVideoApiToUi);
  }

  async getRecentVideos(): Promise<VideoFile[]> {
    const videos = await this.getVideos();
    return videos.slice(0, 3);
  }

  async getProcessedVideoUrl(videoId: number): Promise<string> {
    const response = await apiClient.get<ProcessedVideoResponse>(
      VideosApiEndpoints.processed(videoId),
    );

    return response.data.url;
  }

  async createVideo(data: CreateVideoRequest): Promise<CreateVideoResponse> {
    const response = await apiClient.post<CreateVideoResponse>(
      VideosApiEndpoints.list,
      data,
    );

    return response.data;
  }

  async deleteVideo(_id: string): Promise<void> {
    // TODO: integrate with delete API when available
    throw new Error("VideoService.deleteVideo is not implemented yet");
  }
}

export const videoService = new VideoService();
```

---

### <a id="📄-src-features-video-utils-buildoriginalpath-ts"></a>📄 `src/features/video/utils/buildOriginalPath.ts`

**File Info:**
- **Size**: 499 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/utils/buildOriginalPath.ts`
- **Relative Path**: `src/features/video/utils`
- **Created**: 2026-08-16 18:09:58 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:09:58 (Europe/Istanbul / GMT+03:00)
- **MD5**: `90352257c0c1f339eca632cb52ed012a`
- **SHA256**: `2aa50b745adfb11696f656d8e38fcbb3367c6d3d65ce26808b3f91fb9d6f3215`
- **Encoding**: ASCII

**File code content:**

```typescript
/**
 * Builds a relative storage path for the backend.
 * Never uses absolute filesystem / browser local paths.
 *
 * Convention (adjustable in one place):
 *   originals/{filename_with_extension}
 */
export function buildOriginalPath(fileName: string): string {
  const basename =
    fileName.replace(/\\/g, "/").split("/").filter(Boolean).pop() ??
    fileName.trim();

  if (!basename) {
    throw new Error("Invalid video file name for original_path");
  }

  return `originals/${basename}`;
}

```

---

### <a id="📄-src-features-video-utils-formatduration-ts"></a>📄 `src/features/video/utils/formatDuration.ts`

**File Info:**
- **Size**: 578 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/utils/formatDuration.ts`
- **Relative Path**: `src/features/video/utils`
- **Created**: 2026-08-15 21:45:10 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7c211a7317f6f2f1ae6abb26f854057e`
- **SHA256**: `0488652ad3a493025d06c201b45158df57b7b3a88318bb46cd5bfe6830cbf5af`
- **Encoding**: ASCII

**File code content:**

```typescript
/**
 * Convert API duration seconds (e.g. "267.77") to mm:ss (e.g. "04:27").
 */
export function formatDuration(durationSeconds: string | number): string {
  const raw =
    typeof durationSeconds === "number"
      ? durationSeconds
      : Number.parseFloat(durationSeconds);

  if (!Number.isFinite(raw) || raw < 0) {
    return "--:--";
  }

  const totalSeconds = Math.round(raw);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

```

---

### <a id="📄-src-features-video-utils-mapvideoapitoui-ts"></a>📄 `src/features/video/utils/mapVideoApiToUi.ts`

**File Info:**
- **Size**: 725 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/utils/mapVideoApiToUi.ts`
- **Relative Path**: `src/features/video/utils`
- **Created**: 2026-08-15 21:45:10 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `3de3241bccb11abc49095b7745dab427`
- **SHA256**: `c61550aa86fbdbb7bd2950336906d5a4149d72ba42bca253fb3bf8b5c52220f4`
- **Encoding**: UTF-8

**File code content:**

```typescript
import type { VideoApiItem } from "../api/videos.types";
import type { VideoFile } from "../models/video.types";
import { formatDuration } from "./formatDuration";

export const DEFAULT_VIDEO_THUMBNAIL =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=160&h=100&fit=crop";

export function mapVideoApiToUi(item: VideoApiItem): VideoFile {
  const extension = item.name.split(".").pop()?.toUpperCase() ?? "MP4";

  return {
    id: String(item.id),
    name: item.name,
    size: 0,
    formattedSize: "—",
    duration: formatDuration(item.duration),
    format: extension,
    thumbnailUrl: DEFAULT_VIDEO_THUMBNAIL,
    uploadedAt: item.uploaded_at,
    status: item.status,
  };
}

```

---

### <a id="📄-src-features-video-utils-readvideoduration-ts"></a>📄 `src/features/video/utils/readVideoDuration.ts`

**File Info:**
- **Size**: 871 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/utils/readVideoDuration.ts`
- **Relative Path**: `src/features/video/utils`
- **Created**: 2026-08-16 18:10:00 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:10:00 (Europe/Istanbul / GMT+03:00)
- **MD5**: `7d824b33429cd96d25d2f5a504aa107c`
- **SHA256**: `2bd2d7b320858e1b590a0993a96b66b9e724806136aa626cf2b8b8593089438c`
- **Encoding**: ASCII

**File code content:**

```typescript
/**
 * Extract video duration in seconds via HTMLVideoElement metadata.
 */
export function readVideoDurationSeconds(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    const objectUrl = URL.createObjectURL(file);

    const cleanup = () => {
      URL.revokeObjectURL(objectUrl);
      video.removeAttribute("src");
      video.load();
    };

    video.onloadedmetadata = () => {
      const duration = video.duration;
      cleanup();

      if (!Number.isFinite(duration) || duration <= 0) {
        reject(new Error("Could not read video duration"));
        return;
      }

      resolve(duration);
    };

    video.onerror = () => {
      cleanup();
      reject(new Error("Could not read video duration"));
    };

    video.src = objectUrl;
  });
}

```

---

### <a id="📄-src-features-video-validators-videoupload-constants-ts"></a>📄 `src/features/video/validators/videoUpload.constants.ts`

**File Info:**
- **Size**: 238 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/validators/videoUpload.constants.ts`
- **Relative Path**: `src/features/video/validators`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **MD5**: `b228eb876cf168fd6142c4d4066a630d`
- **SHA256**: `8a7f96afa52373b8632ed55d8c145b56966e40ebaed137c93753c077075364a2`
- **Encoding**: ASCII

**File code content:**

```typescript
export const VIDEO_UPLOAD_CONFIG = {
  supportedFormats: ["mp4", "avi", "mov", "mkv"] as const,
  maxSizeBytes: 2 * 1024 ** 3,
  maxSizeLabel: "2 GB",
} as const;

export const VIDEO_FORMAT_LABELS = ["MP4", "AVI", "MOV", "MKV"] as const;

```

---

### <a id="📄-src-features-video-validators-videouploadschema-ts"></a>📄 `src/features/video/validators/videoUploadSchema.ts`

**File Info:**
- **Size**: 1.1 KB
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/validators/videoUploadSchema.ts`
- **Relative Path**: `src/features/video/validators`
- **Created**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:39:16 (Europe/Istanbul / GMT+03:00)
- **MD5**: `beee6ad7e85e318427ce97761a55ff74`
- **SHA256**: `ae911d75a9fe8025b700c9ffb85d7a3e12edc2e1542a60015173a8e053e19c4d`
- **Encoding**: UTF-8

**File code content:**

```typescript
import { z } from "zod";
import { VIDEO_UPLOAD_CONFIG } from "./videoUpload.constants";

const supportedSet = new Set<string>(VIDEO_UPLOAD_CONFIG.supportedFormats);

export const videoFileMetaSchema = z.object({
  name: z.string().min(1, "اسم الملف مطلوب"),
  size: z
    .number()
    .max(
      VIDEO_UPLOAD_CONFIG.maxSizeBytes,
      `حجم الملف يتجاوز الحد الأقصى ${VIDEO_UPLOAD_CONFIG.maxSizeLabel}`,
    ),
  extension: z
    .string()
    .refine((ext) => supportedSet.has(ext.toLowerCase()), {
      message: "صيغة الملف غير مدعومة",
    }),
});

export type VideoFileMeta = z.infer<typeof videoFileMetaSchema>;

export function validateVideoFile(file: File): {
  success: boolean;
  error?: string;
} {
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

  const result = videoFileMetaSchema.safeParse({
    name: file.name,
    size: file.size,
    extension,
  });

  if (!result.success) {
    return {
      success: false,
      error: result.error.issues[0]?.message ?? "ملف غير صالح",
    };
  }

  return { success: true };
}

```

---

### <a id="📄-src-features-video-index-ts"></a>📄 `src/features/video/index.ts`

**File Info:**
- **Size**: 522 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/features/video/index.ts`
- **Relative Path**: `src/features/video`
- **Created**: 2026-08-13 14:39:44 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:09:46 (Europe/Istanbul / GMT+03:00)
- **MD5**: `54f129be5f51e95ff4fbf543b8ebd096`
- **SHA256**: `bb14f4652c2a7f29bc8b5484ad4157050b6f3f608e9fd115a48c52dda0d12fd7`
- **Encoding**: ASCII

**File code content:**

```typescript
export { VideoUploadPage } from "./pages/VideoUploadPage";
export { ProcessedVideosPage } from "./pages/ProcessedVideosPage";
export { VideoRoutes } from "./routes/videoRoutes";
export { videoService } from "./services/VideoService";
export { videosQueryKeys } from "./constants/videos.constants";
export { useVideoUploadViewModel } from "./hooks/useVideoUploadViewModel";
export { useProcessedVideosViewModel } from "./hooks/useProcessedVideosViewModel";
export { VideoStatusBadge } from "./components/VideoStatusBadge";

```

---

### <a id="📄-src-app-css"></a>📄 `src/App.css`

**File Info:**
- **Size**: 2.82 KB
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `src/App.css`
- **Relative Path**: `src`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:11 (Europe/Istanbul / GMT+03:00)
- **MD5**: `efa60320f4ec2ac0dfc408a33d89eb49`
- **SHA256**: `6e25a776d3e8102da5bacb3cb99f4a5fc662a2e01e6143140671a556d28c3d5c`
- **Encoding**: ASCII

**File code content:**

```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

```

---

### <a id="📄-src-app-tsx"></a>📄 `src/App.tsx`

**File Info:**
- **Size**: 1.96 KB
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/App.tsx`
- **Relative Path**: `src`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 19:09:21 (Europe/Istanbul / GMT+03:00)
- **MD5**: `ab1a90a32bb1d5e3218f47c7ddbaf34d`
- **SHA256**: `9249e1317e94ad4a2c3bf483386802082df97695f3f73f67792de0dfbbe1712b`
- **Encoding**: ASCII

**File code content:**

```typescript
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage, AuthRoutes } from "./features/auth";
import { DashboardPage, DashboardRoutes } from "./features/dashboard";
import { VehiclesPage, VehiclesRoutes } from "./features/vehicles";
import { VideoUploadPage, ProcessedVideosPage, VideoRoutes } from "./features/video";import {
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
          <Route path={VideoRoutes.list} element={<ProcessedVideosPage />} />
          <Route
            path={AnalysisRoutes.resultsWithVideo}
            element={<AnalysisResultsPage />}
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

```

---

### <a id="📄-src-index-css"></a>📄 `src/index.css`

**File Info:**
- **Size**: 167 B
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `src/index.css`
- **Relative Path**: `src`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `e316651f5d54bf4cf69c31c08a260121`
- **SHA256**: `d2a6aa661936e38655759fda134c637c5b7a3ebf0b8aff38b801dbffec74ef4b`
- **Encoding**: ASCII

**File code content:**

```css
@import "tailwindcss";

body {
  margin: 0;
  font-family: "Cairo", Tahoma, sans-serif;
  background-color: #0b1220;
  color: #fff;
}

#root {
  min-height: 100svh;
}

```

---

### <a id="📄-src-main-tsx"></a>📄 `src/main.tsx`

**File Info:**
- **Size**: 230 B
- **Extension**: `.tsx`
- **Language**: `typescript`
- **Location**: `src/main.tsx`
- **Relative Path**: `src`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `787e5a07efeb2bf6209d5937195f2f68`
- **SHA256**: `6e9e5807fcbd48b75a96db5cbef36c996262196be42e6d4760dc86babbe61ad2`
- **Encoding**: ASCII

**File code content:**

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

---

### <a id="📄-src-vite-env-d-ts"></a>📄 `src/vite-env.d.ts`

**File Info:**
- **Size**: 166 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `src/vite-env.d.ts`
- **Relative Path**: `src`
- **Created**: 2026-08-15 21:27:08 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-16 18:03:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a37febf950dd86b9c537654e955538bd`
- **SHA256**: `462b9b449f37b7293dfe2697fdb456477849b02127a0e19a6a9ce67f410e65b2`
- **Encoding**: ASCII

**File code content:**

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

```

---

### <a id="📄-eslint-config-js"></a>📄 `eslint.config.js`

**File Info:**
- **Size**: 771 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `eslint.config.js`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-15 10:48:50 (Europe/Istanbul / GMT+03:00)
- **MD5**: `1e80434e4125e23131fb26f7b4881502`
- **SHA256**: `ff642f2009fe4976484585b94354ae348b7c2df9d51723bf17500ed92c0fbcbf`
- **Encoding**: ASCII

**File code content:**

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
])
```

---

### <a id="📄-index-html"></a>📄 `index.html`

**File Info:**
- **Size**: 679 B
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `index.html`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-08-13 14:14:41 (Europe/Istanbul / GMT+03:00)
- **MD5**: `23dd3b68317d1a57a2faff4b76953163`
- **SHA256**: `5f2c33b95ca03acf258b6a1973bfeadadd62c6b9e6ac25f4ef79619b8f221023`
- **Encoding**: UTF-8

**File code content:**

```html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>نظام المراقبة المرورية</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

---

### <a id="📄-package-lock-json"></a>📄 `package-lock.json`

**File Info:**
- **Size**: 121.98 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package-lock.json`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:58 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-07-18 19:16:24 (Europe/Istanbul / GMT+03:00)
- **MD5**: `8c2808ccd628e8a1dac4817f5ce6eb88`
- **SHA256**: `c709cd1dbc05f6b188c379119d95a0f9f590c0ffcf678037ffc7b4134db35ac8`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "my-app",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "my-app",
      "version": "0.0.0",
      "dependencies": {
        "@hookform/resolvers": "^5.4.0",
        "@tanstack/react-query": "^5.101.0",
        "axios": "^1.18.0",
        "react": "^19.2.6",
        "react-dom": "^19.2.6",
        "react-hook-form": "^7.82.0",
        "react-router-dom": "^7.17.0",
        "zod": "^4.4.3",
        "zustand": "^5.0.14"
      },
      "devDependencies": {
        "@eslint/js": "^10.0.1",
        "@tailwindcss/postcss": "^4.3.1",
        "@types/node": "^24.12.3",
        "@types/react": "^19.2.14",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^6.0.1",
        "autoprefixer": "^10.5.0",
        "eslint": "^10.3.0",
        "eslint-plugin-react-hooks": "^7.1.1",
        "eslint-plugin-react-refresh": "^0.5.2",
        "globals": "^17.6.0",
        "postcss": "^8.5.15",
        "tailwindcss": "^4.3.1",
        "typescript": "~6.0.2",
        "typescript-eslint": "^8.59.2",
        "vite": "^8.0.12"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.7.tgz",
      "integrity": "sha512-DkXD5OJQaAQIdZ1bt3UZdEnHAn9Imd3IVBdX03UFe+ony9Ojw5pzr9YVKGDY1jt+Gcn/FnGkNf8r+Vj5NOJWtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.7.tgz",
      "integrity": "sha512-hnORnjP/1P/zFEndoeX+n+t1RwWRJiJpM/jO7FW32Kn9r5+sJB2JWOdYo4L6k78j15eCwY3Gm/7364B1EMwtNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.7"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.7.tgz",
      "integrity": "sha512-EhlfNQtZ+NK22w5BM61ciuiq1m58ed33Wr1Xan//ZRTy6hgjnwyCffRYwzsGXdASJSUJ1guZILsErh1eQcl+zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.7.tgz",
      "integrity": "sha512-4zBIxpPzowiZpusoFkyGVwakdRJUyuH5PxQ/PrqghfdFWWasvnCdPfQXHrenDai+gyLARulZjZowCOj6fjT4pA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.23.5.tgz",
      "integrity": "sha512-Y3kKLvC1dvTOT+oGlqNQ1XLqK6D1HU2YXPc52NmAlJZbMMWDzGYXMiPRJ8TYD39muD/OTjlZmNJ4ib7dvSrMBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^3.0.5",
        "debug": "^4.3.1",
        "minimatch": "^10.2.4"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.6.0.tgz",
      "integrity": "sha512-ii6Bw9jJ2zi2cWA2Z+9/QZ/+3DX6kwaV5Q986D/CdP3Lap3w/pgQZ373FV7byY/i7L4IRH/G43I5dz1ClsCbpA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/core": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-1.2.1.tgz",
      "integrity": "sha512-MwcE1P+AZ4C6DWlpin/OmOA54mmIZ/+xZuJiQd4SyB29oAJjN30UW9wkKNptW2ctp4cEsvhlLY/CsQ1uoHDloQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/js": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-10.0.1.tgz",
      "integrity": "sha512-zeR9k5pd4gxjZ0abRoIaxdc7I3nDktoXZk2qOv9gCNWx3mVwEn32VRhyLaRsDiJjTs0xq/T8mfPtyuXu7GWBcA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "eslint": "^10.0.0"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-3.0.5.tgz",
      "integrity": "sha512-vqTaUEgxzm+YDSdElad6PiRoX4t8VGDjCtt05zn4nU810UIx/uNEV7/lZJ6KwFThKZOzOxzXy48da+No7HZaMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.7.2.tgz",
      "integrity": "sha512-+CNAzxglkrpNf/kKywqQfk74QjtceuOE7Qm+AF8miRvPF/wmmK5+OJOgVh3AVTT3RP2mH3+FOaxlE5v72owk0A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@hookform/resolvers": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-5.4.0.tgz",
      "integrity": "sha512-EIsqr/t/qbinPIhGjMdtvutIN1Kk4uwbROE9/UQ93CAVGR7GkA7Y92+fX80OzXi/OB67jVFYwKGO1WzkxmkFZw==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/utils": "^0.3.0"
      },
      "peerDependencies": {
        "react-hook-form": "^7.55.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.5.tgz",
      "integrity": "sha512-AWPoBRJ9tsnVhor4sjO7rkni+7p+2IAEFj6cx06UgP10jkQHqay/36uRV/bFkgrh18D9vb4cr8Q0Pthskgzy+Q==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.133.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.133.0.tgz",
      "integrity": "sha512-KzkdCd6Uxqnf6l3HOw1xfatAlUURA0g14cvBYFyJ5SaNOQbOUvBr9PKArcPcrNIeRsBdgcUzOGrhKveVpvOIGA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.3.tgz",
      "integrity": "sha512-454rs7jHngixp/NMxd5srYD57OnzSlZ/eFTETjORQHLwJG1lRtmNOJcBerZlfu4GjKqeq8aCCIQrMdHyhI51Hw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.3.tgz",
      "integrity": "sha512-PcAhP+ynjURNyy8SKGl5DQP94aGuB/7JrXJb/t7P+hanXvQVMWzUvRRhBAcg/lNRadBhoUPqSoP4xw5tR/KBEA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.3.tgz",
      "integrity": "sha512-9YpfeUvSE2RS7wysJ81uOZkXJz7f7Q55H2Gvp3VEw/EsahqDtrphrZ0EwDLK5vvKOzaCrBsjF8JmnMLcUt78Gg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.3.tgz",
      "integrity": "sha512-yB1IlAsSNHncV6SCTL27/MVGR5htvQsoGxIv5KMGXALp+Ll1wYsn+x98M9MW7qa+NdSbvrrY7ANI4wLJ0n1e6g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.3.tgz",
      "integrity": "sha512-Yi30IVAAfLUCy2MseFjbB1jAMDl1VMCAas5StnYp8da9+CKvMd2H2cbEjWcw5NPaPqzvYkVIaF1nNUG+b7u/sw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.3.tgz",
      "integrity": "sha512-jsO7R8To+AdlYgUmN5sHSCZbfhtMBkO0WUx8iORQnPcMMdgr7qM2DQmMwgabs3GhNztdmoKkMKQFHD6DTMCIQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.3.tgz",
      "integrity": "sha512-VWkUHwWriDciit80wleYwKILoR/KMvxh/IdwS/paX+ZgpuRpCrKLUdadJbc0NpBEiyhpYawsJ73j9aCvOH+f7Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.0.3.tgz",
      "integrity": "sha512-5f1laC0SlIR0yDbFCd8acUhvJIag6N3zC5P7oUPN6wX0aOma+uKJ0wBDH5aq7I1PVI2ttTlhJwzwRIBnLiSGEg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.0.3.tgz",
      "integrity": "sha512-Iq4ko0r4XsgbrF/LunNgHtAGLRRVE2kXonAXQ/MV0mC6jQpMOhW1SvtZja2EhC/kd05++bP78dsqBeIQyYJ6Yg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.3.tgz",
      "integrity": "sha512-B8m6tD5+/N5FeNQFbKlLA/2yVq9ycQP1SeedyEYYKWBNR3ZQbkvIUcNnDNM03lO1l5F2roiiFJGgvoLLyZXtSg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.3.tgz",
      "integrity": "sha512-pSdpdUJHkuCxun9LE7jvgUB9qsRgaiyNNCX7m/AvHTcq67AiT/Yhoxvw5zPfhrM8k/BfP8ce/hMOpthKDpEUow==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.3.tgz",
      "integrity": "sha512-OXXS3RKJgX2uLwM+gYyuH5omcH8fL1LJs96pZGgtetVCahON57+d4SJHzTgZiOjxgGkSnpXpOsWuPDGAKAigEg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.3.tgz",
      "integrity": "sha512-JTtb8BWFynicNSoPrehsCzBtOKjZ6jhMiPFEmOiuXg1Fl8dn2KHQob+GuPSGR0dryQa1PQJbzjF3dqO/whhjLg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.3.tgz",
      "integrity": "sha512-gEdFFEN70A/jxb2svrWsN3aDL7OUtmvlOy+6fa2jxG8K0wQ1ZbdeLGnidov6Yu5/733dI5ySfzFlQ/cb0bSz1g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.3.tgz",
      "integrity": "sha512-eXB7CHuaQdqmJcc3koCNtNPmT/bj2gc999kUFgBxG8Ac0NdgXc4rkCHhqrgrhN3zddvvvrgzj1e90SuSfmyIXA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==",
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.1.tgz",
      "integrity": "sha512-6NDaqRoAMSXD1mr/RXu0HBvNE9a2n5tHPsxu9XHLws8o4Twes5rBM2205SUUiJ9goAtadrN6xTGX0UDEwp/N4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "5.21.6",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.1"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.1.tgz",
      "integrity": "sha512-yVPyo8RNkabVr3O2EhHEE0Rewu7YKzc1DhIqfL46LKveFrmu9XbDazNOJY7/GRuvw1h6u3utWnR29H/p5JPlgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.1",
        "@tailwindcss/oxide-darwin-arm64": "4.3.1",
        "@tailwindcss/oxide-darwin-x64": "4.3.1",
        "@tailwindcss/oxide-freebsd-x64": "4.3.1",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.1",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.1",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.1",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.1",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.1",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.1",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.1",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.1"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.1.tgz",
      "integrity": "sha512-SVlyf61g374l5cHyg8x9kf5xmLcOaxvOTsbsqDnSsDJaKOEFZ7GCvi84VAVGpxojYOs1+3K6M0UjXfqPU8vmOQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.1.tgz",
      "integrity": "sha512-hVnWLwv+e/l7c4WKyVtHVrIPvYdqWHjRB3MDIqARynzFtnQg85kmQEFCbV9Ja0VVx4xXTIiDWY60Y7iz/iNoDA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.1.tgz",
      "integrity": "sha512-Cf7abu0WVgbhU7ANgPUnSAvm7nCvMweusHb8FnaHlLfv/Caq4GYaEZg7ZImzzmjx4lIAfuS8q+eLIS7A7IzxIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.1.tgz",
      "integrity": "sha512-ZZqzX2Y+GXtXXfqSfpJhDm60OoZfvLHLCgm+J7NVqgHHJjG/m9ugZI77RwTsVd4fnBJuCFP6Ae6kTJb71UdS8g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.1.tgz",
      "integrity": "sha512-/Ah/xik0LaMYfv9DZ0S/t4pBlBNYOcqtRwusjgovHkvT8ixueWCLyJjsaF5kQIckjb4IT8Q6K6p/iPmZMixYgg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.1.tgz",
      "integrity": "sha512-gqdFoVJlw444GvpnheZLHmvTzSxI/cOUUh2KSNejQjTcYkW062SVD+En0rUgD+QV91bz1XGIGtt1HJd48xUGbQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.1.tgz",
      "integrity": "sha512-Bwv9KwOvE0VKa86xPFif9b9c3Y1NxOV1P0gLti/IYaWEsQYZXDlxfGEtA8mdDZ7SG3wyNXAWYT5SIn3giL57oA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.1.tgz",
      "integrity": "sha512-Ymi8O8T15HYQdOUWUtTI6ldN0neHP85FC+Qz32xTcZ7iJXtem/x8ITev0o1e9e5rkqj4lONZfTRLvkmin1+tKg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.1.tgz",
      "integrity": "sha512-M+P/91qJ6uILLw4k2G93GMDRAXj61SMvFQYt39AqvUqYgExXpLL5aepfns7sj4HiAQeolirQF9E0lzRvdf4zPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.1.tgz",
      "integrity": "sha512-zsM8uOeqvVGHsAXsJxsT28ttosFahLJKCLOTUBqRAtKnVgGSRitds9T432QiT8b77Yga7JIBkulIRRlJPtYhRA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.10.0",
        "@emnapi/runtime": "^1.10.0",
        "@emnapi/wasi-threads": "^1.2.1",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.1.tgz",
      "integrity": "sha512-aiNvSq9BsVk8V513lDKlrCFAgf8qBMPZTpgEhInL+NwQqs97mYmupVMrPrgBBSL8Pv/0zXu9MrMF9rMun1ZeNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.1.tgz",
      "integrity": "sha512-xDEyu1rg290472FEGaKHnzyDyh5QH+AlWvsU5hMoMtPpzmKlRI0jaYKCgSHDYtaQWZOYbMaduSyCwFwY4n1HmA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.1.tgz",
      "integrity": "sha512-dNJuNbdEJT/SWRuXTYP1WSamelsz3ztkUsdtWQPjrexysrTpaEPM40P/71knXiXLYEojqPOEGitVLLpPMS5T6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.1",
        "@tailwindcss/oxide": "4.3.1",
        "postcss": "8.5.15",
        "tailwindcss": "4.3.1"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "5.101.0",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.101.0.tgz",
      "integrity": "sha512-cQetA74EB+seWySv1TTKr828TnP0u39m6LykwDXIo84SNortpDkp30TMEjkqtYCNP9c40uT/iwl6MLiufEt0Ow==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "5.101.0",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.101.0.tgz",
      "integrity": "sha512-rLlJXSpkqfizLWgkR5+eLeIk0MvTx/meEIR7LRjxic+qxiQP8zVjq7BqQkiCMNLQBlLfuOLqqr6KO5GtrDlmSg==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "5.101.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^18 || ^19"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.2",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.2.tgz",
      "integrity": "sha512-RoBvJ2X0wuKlWFIjrwffGw1IqZHKQqzIchKaadZZfnNpsAYp2mM0h36JtPCjNDAHGgYez/15uMBpfGwchhiMgg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/esrecurse": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@types/esrecurse/-/esrecurse-4.3.1.tgz",
      "integrity": "sha512-xJBAbDifo5hpffDBuHl0Y8ywswbiAp/Wi7Y/GtAgSlZyIABppyurxVueOPE8LUQOxdlgi6Zqce7uoEpqNTeiUw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.13.2",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.13.2.tgz",
      "integrity": "sha512-fRa09kZTgu8o71KFcDjUFuc7F+dEbZYZmkI0mg5YBTRs0yMKjYHsq/c0urDKeDb+D5qVgXOdFcuu+DZPKOITwA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.18.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.61.0.tgz",
      "integrity": "sha512-bFNvl9ZczlVb+wR2Akszf3gHfKVj/8WanXaGJ3UstTA7brNKg0cNdk6X1Psu5V7MZ2oQtzZKOEzIUehaoxbDGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.61.0",
        "@typescript-eslint/type-utils": "8.61.0",
        "@typescript-eslint/utils": "8.61.0",
        "@typescript-eslint/visitor-keys": "8.61.0",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.61.0",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.61.0.tgz",
      "integrity": "sha512-5B7PfA2e1NQGCnDHd/0lW7W3gvp3d59Ryw54FYO8Uswxo9f6ikw3AZV+Xj/TvpImmpsiYyUqAfhC6kJID1jF6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.61.0",
        "@typescript-eslint/types": "8.61.0",
        "@typescript-eslint/typescript-estree": "8.61.0",
        "@typescript-eslint/visitor-keys": "8.61.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.61.0.tgz",
      "integrity": "sha512-DV42F7MLJO6Rax7SK1yg43tcnEfGUrurSpSxKuVX+a3RCTzBlH3fuxprrOJXKCJGAaw82xXocikJ0uQaqwXgGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.61.0",
        "@typescript-eslint/types": "^8.61.0",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.61.0.tgz",
      "integrity": "sha512-IWdXFHFSb6mlC3HPc7QsLDm5zYEbUla6trDEHf32D3/dnuUyXd87plScSNXSbm0/RxMvObpI17sv/EDTGrGZkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.61.0",
        "@typescript-eslint/visitor-keys": "8.61.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.61.0.tgz",
      "integrity": "sha512-O5Amvdv9ztMpxpf+vmFULGG78IE6Qwdr3bCGvqwG4nwc9H2qXkOYJJnRbRHyMkQTjv1d03olqwwwzHLMqpFePQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.61.0.tgz",
      "integrity": "sha512-TuBiQYIkd97yBfInHCTKVYMbX4kvEmpOEuixIuzCU9p8BGT1SfyyO0d0IfDMbPIHcjn/hWnusUX5e8v5Xg+X8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.61.0",
        "@typescript-eslint/typescript-estree": "8.61.0",
        "@typescript-eslint/utils": "8.61.0",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.61.0.tgz",
      "integrity": "sha512-9QTQpZ5Iin4CdIodfbDQFSeiSJKidgYJYug1P9CC2xWgUTvlmixViqDZNciMjwLBZyJnG4tGmPl97rVAFb1AJg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.61.0.tgz",
      "integrity": "sha512-42zatd5qSvvcV1JdDBCLxYRznvP4eIHpPoZXdkPFnAmanA4FuZ5dibSnCBggY8hQnqajPpoGjXFdZ7fIJKQnlA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.61.0",
        "@typescript-eslint/tsconfig-utils": "8.61.0",
        "@typescript-eslint/types": "8.61.0",
        "@typescript-eslint/visitor-keys": "8.61.0",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.4.tgz",
      "integrity": "sha512-rUCObTnP32Q08R2uuIrt7r9PlEonuTmtuXYcW6s5kjdlj3xbnwe+21yXptAUYcMAABLkYYTtnmzb3w3EDZfueA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.61.0.tgz",
      "integrity": "sha512-3bzFt7ImFMW/jVYwJamDoe/dMOdFLSC6pom6rRjdh4SZJEYupyMzem8e7vKZLclLfpHjlwSAXOUxtKxGXUiLqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.61.0",
        "@typescript-eslint/types": "8.61.0",
        "@typescript-eslint/typescript-estree": "8.61.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.61.0.tgz",
      "integrity": "sha512-QVLZu3ZPQEE+HICQyAMZ2yLQhxf0meY/wx6Hx14YcTNj13JB3qHlX3lJ02L3fLGHgERRH71kvYDwiXIguT3AjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.61.0",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.2.tgz",
      "integrity": "sha512-DlSMqo4WhThw4vB8Mpn0Woe9J+Jfq1geJ61AKW0QEgLzGMNwtIMdxbDUzLxcun8W7NbJO0e2Jg/Nxm3cCSVzzg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/acorn": {
      "version": "8.17.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.17.0.tgz",
      "integrity": "sha512-xRQbDb9BnwDafYNn6Vwl839DYVjqXYb1XVGtWAZ1kcDc6iwAL4hg3B1dZlRiuENFeO2H53gFG3in621AdERVAg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.5.0.tgz",
      "integrity": "sha512-FMhOoZV4+qR6aTUALKX2rEqGG+oyATvwBt9IIzVR5rMa2HRWPkxf+P+PAJLD1I/H5/II+HuZcBJYEFBpq39ong==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.2",
        "caniuse-lite": "^1.0.30001787",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/axios": {
      "version": "1.18.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.18.0.tgz",
      "integrity": "sha512-E32NzpYKp++W7XRe52rHiXV2ehxmh3wbdgO7MHeFM+vqxLBYHzt0ElkiImtOBxtOmyp0yoC8C6uESVV84Y2/hw==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.16.0",
        "form-data": "^4.0.5",
        "https-proxy-agent": "^5.0.1",
        "proxy-from-env": "^2.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.37",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.37.tgz",
      "integrity": "sha512-girxaJ7WZssDOFhzCGZTDKoTa1gk6A1TbflaYTpykLJ4UU9Fz9kx1aREM8JCuoVHbL8X8T/mJg7w2oYSq72Oig==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.6.tgz",
      "integrity": "sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.12",
        "caniuse-lite": "^1.0.30001782",
        "electron-to-chromium": "^1.5.328",
        "node-releases": "^2.0.36",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001799",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001799.tgz",
      "integrity": "sha512-hG1bReV+OUU+MOqK4t/ZWI0tZOyz3rqS9XuhOUz1cIcbwBKjOyJEJuw9ER5JuNyqxNk8u/JUVbGibBOL1yrjFw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.372",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.372.tgz",
      "integrity": "sha512-M3yhbAlilnwqC8D21t28UCDGHyitShTmmLRU/H+b74P6Ski16Nb9HONYEaVpMj/pwC7BEo5B95FpjODLCWbtfA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.21.6",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.21.6.tgz",
      "integrity": "sha512-aNnGCvbJ/RIyWo1IuhNdVjnNF+EjH9wpzpNHt+ci/m9He9LJvUN8wrCcXjp9cWsGNAuvSpVFTx/vraAFQ8qGjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "10.5.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-10.5.0.tgz",
      "integrity": "sha512-1y+7C+vi12bUK1IpZeaV3gsH9fHLBmPvYmPx42pvT/E9yG0IC8g3PUZZgp0+JLJl7ZDK0flc2gc+Aw9dpCvIsQ==",
      "dev": true,
      "license": "MIT",
      "workspaces": [
        "packages/*"
      ],
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.2",
        "@eslint/config-array": "^0.23.5",
        "@eslint/config-helpers": "^0.6.0",
        "@eslint/core": "^1.2.1",
        "@eslint/plugin-kit": "^0.7.2",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^9.1.2",
        "eslint-visitor-keys": "^5.0.1",
        "espree": "^11.2.0",
        "esquery": "^1.7.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "minimatch": "^10.2.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.5.3.tgz",
      "integrity": "sha512-5EMmLCV98Pi4o/f/3DP/v/tNqLHMIc9I8LKClNDWhZ9JTho89/kQcitCXQBMG7sAfVRK0Ie3T2EDOzp1YXYiVA==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": "^9 || ^10"
      }
    },
    "node_modules/eslint-scope": {
      "version": "9.1.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-9.1.2.tgz",
      "integrity": "sha512-xS90H51cKw0jltxmvmHy2Iai1LIqrfbw57b79w/J7MfvDfkIkFZ+kj6zC3BjtUwh150HsSSdxXZcsuv72miDFQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@types/esrecurse": "^4.3.1",
        "@types/estree": "^1.0.8",
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-11.2.0.tgz",
      "integrity": "sha512-7p3DrVEIopW1B1avAGLuCSh1jubc01H2JHc8B4qqGblmg5gI9yumBgACjWo4JlIc04ufug4xJ3SQI8HkS/Rgzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.16.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^5.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.16.0.tgz",
      "integrity": "sha512-y5rN/uOsadFT/JfYwhxRS5R7Qce+g3zG97+JrtFZlC9klX/W5hD7iiLzScI4nZqUS7DNUdhPgw4xI8W2LuXlUw==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.6.tgz",
      "integrity": "sha512-vKatAh4SlVfgbv+YtmhiRjhEMJsYpsG1Y2rMQtR+SVSbytsSD1YGzDIcrAJmdFec88u/+VoGmxnl+80gL1tRCQ==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.4",
        "mime-types": "^2.1.35"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "17.6.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-17.6.0.tgz",
      "integrity": "sha512-sepffkT8stwnIYbsMBpoCHJuJM5l98FUF2AnE07hfvE0m/qp3R586hw4jF4uadbhvg1ooIdzuu7CsfD2jzCaNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.12",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.12.tgz",
      "integrity": "sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.47",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.47.tgz",
      "integrity": "sha512-Uzmd6LXpouKo8EUK68IjH4+E01w/hXyV3R3g/geCJo+rXLNfh1xucB+LOzYEOQPSiUK3h/xZf0cQGcSsmyL2Og==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.15",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz",
      "integrity": "sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/proxy-from-env": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-2.1.0.tgz",
      "integrity": "sha512-cJ+oHTW1VAEa8cJslgmUZrc+sjRKgAKl3Zyse6+PV38hZe/V6Z14TbCuXcan9F9ghlz4QrFr2c92TNF82UkYHA==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.82.0",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.82.0.tgz",
      "integrity": "sha512-Zw/uFZ2dO+02GHlBn7JFGn8kZJ7LdM33B/0BXOovzFay+CMhf94JMw5BVu+F1tVkUKjNvBuaE3fz5BJhga10Tg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-router": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.17.0.tgz",
      "integrity": "sha512-FDELK7rTMlCHO5+reyXsPlmfr7N1F91lPHsWYfMEGQm/KQ+F4JFM8jGoeQDmDvdTs93Fw9aSilH+uKRb4/jXvQ==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.17.0.tgz",
      "integrity": "sha512-fyU2yjGups/hE6Xz0I5ZYbVL8Gx29eCjgpHaRaTaVU+OOAdfRX05KsvyRm0GO8YQwOkhpU3MurW1jyMUJn+zSw==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.17.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/rolldown": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.3.tgz",
      "integrity": "sha512-i00lAJ2ks1BYr7rjNjKC7BcqAS7nVfiT3QX1SI5aY+AFHblCmaUf9OE9dbdzDvW6dJxbi2ZCZiy9v3CcwOiX3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.133.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.0.3",
        "@rolldown/binding-darwin-arm64": "1.0.3",
        "@rolldown/binding-darwin-x64": "1.0.3",
        "@rolldown/binding-freebsd-x64": "1.0.3",
        "@rolldown/binding-linux-arm-gnueabihf": "1.0.3",
        "@rolldown/binding-linux-arm64-gnu": "1.0.3",
        "@rolldown/binding-linux-arm64-musl": "1.0.3",
        "@rolldown/binding-linux-ppc64-gnu": "1.0.3",
        "@rolldown/binding-linux-s390x-gnu": "1.0.3",
        "@rolldown/binding-linux-x64-gnu": "1.0.3",
        "@rolldown/binding-linux-x64-musl": "1.0.3",
        "@rolldown/binding-openharmony-arm64": "1.0.3",
        "@rolldown/binding-wasm32-wasi": "1.0.3",
        "@rolldown/binding-win32-arm64-msvc": "1.0.3",
        "@rolldown/binding-win32-x64-msvc": "1.0.3"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.1.tgz",
      "integrity": "sha512-hk+TB1m+K8CYNrP6rjQaq/Y+4Zylwpa87mLYBKCunwnnQ9p+fHb7kmSfGqyEJoxF/O6CDyABWVFEafNSYKll+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-6.0.3.tgz",
      "integrity": "sha512-y2TvuxSZPDyQakkFRPZHKFm+KKVqIisdg9/CZwm9ftvKXLP8NRWj38/ODjNbr43SsoXqNuAisEf1GdCxqWcdBw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.61.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.61.0.tgz",
      "integrity": "sha512-8y31Rd0eGTrDKqhy6vT0HtzhN+YLjQizwX3aA3hPXP/ynSfnrBXcQY5IzsP9/DM7+klX4IUncZZjkchP0z+rUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.61.0",
        "@typescript-eslint/parser": "8.61.0",
        "@typescript-eslint/typescript-estree": "8.61.0",
        "@typescript-eslint/utils": "8.61.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.18.2.tgz",
      "integrity": "sha512-AsuCzffGHJybSaRrmr5eHr81mwJU3kjw6M+uprWvCXiNeN9SOGwQ3Jn8jb8m3Z6izVgknn1R0FTCEAP2QrLY/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "8.0.16",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.0.16.tgz",
      "integrity": "sha512-h9bXPmJichP5fLmVQo3PyaGSDE2n3aPuomeAlVRm0JLmt4rY6zmPKd59HYI4LNW8oTK7tlTsuC7l/m7awx9Jcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.4",
        "postcss": "^8.5.15",
        "rolldown": "1.0.3",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.1.18",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    },
    "node_modules/zustand": {
      "version": "5.0.14",
      "resolved": "https://registry.npmjs.org/zustand/-/zustand-5.0.14.tgz",
      "integrity": "sha512-/8tAspM5LMPr28b3fwLYrtdj77ECpfZviaP75CMTnwO8ISyaE4GDIG/9rDDYq/cH9D2Xw2A2RXglLInmVBQB/g==",
      "license": "MIT",
      "engines": {
        "node": ">=12.20.0"
      },
      "peerDependencies": {
        "@types/react": ">=18.0.0",
        "immer": ">=9.0.6",
        "react": ">=18.0.0",
        "use-sync-external-store": ">=1.2.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "immer": {
          "optional": true
        },
        "react": {
          "optional": true
        },
        "use-sync-external-store": {
          "optional": true
        }
      }
    }
  }
}

```

---

### <a id="📄-package-json"></a>📄 `package.json`

**File Info:**
- **Size**: 1.03 KB
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `package.json`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-07-18 19:16:24 (Europe/Istanbul / GMT+03:00)
- **MD5**: `654bf2f8ecb4143cedf7667f8f6960b4`
- **SHA256**: `8952f1c94d102caa5ac629e8ec862580c90bc301069341573f9d63dc97828467`
- **Encoding**: ASCII

**File code content:**

```json
{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.4.0",
    "@tanstack/react-query": "^5.101.0",
    "axios": "^1.18.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-hook-form": "^7.82.0",
    "react-router-dom": "^7.17.0",
    "zod": "^4.4.3",
    "zustand": "^5.0.14"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@tailwindcss/postcss": "^4.3.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}

```

---

### <a id="📄-postcss-config-js"></a>📄 `postcss.config.js`

**File Info:**
- **Size**: 75 B
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `postcss.config.js`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:39:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 12:50:57 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a37b7fd0f4f6cbb71bc96eff25be69b2`
- **SHA256**: `7f756a2d1790a87cd6cf2e8b46b3b1652812e3190b671d92831dc966276ef5a6`
- **Encoding**: ASCII

**File code content:**

```javascript

export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

### <a id="📄-readme-md"></a>📄 `README.md`

**File Info:**
- **Size**: 2.37 KB
- **Extension**: `.md`
- **Language**: `text`
- **Location**: `README.md`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `f6e3faf55d738cf2affe1b44195f27cf`
- **SHA256**: `8dc9e0ee2281acb3324624fbe6eb7e1377cc626f616ea4dc90e3a90ae094374d`
- **Encoding**: ASCII

**File code content:**

````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

~~~~js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
~~~~

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

~~~~js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
~~~~

````

---

### <a id="📄-tailwind-config-ts"></a>📄 `tailwind.config.ts`

**File Info:**
- **Size**: 203 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `tailwind.config.ts`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:39:01 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 12:39:11 (Europe/Istanbul / GMT+03:00)
- **MD5**: `400bc83bd0cc7d7ae13418ecf0e4cc13`
- **SHA256**: `5dabb54ec8d28c373789a086d4c54a4e8f1685cead671c90bb323f4a1d9c2d59`
- **Encoding**: ASCII

**File code content:**

```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

---

### <a id="📄-tsconfig-app-json"></a>📄 `tsconfig.app.json`

**File Info:**
- **Size**: 617 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.app.json`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `136630b5accce1ca50663df229534a26`
- **SHA256**: `b1eac9ba6cd1c01d59ebca159805e052c798d9d4ab904680b79ce3e306ea0bbd`
- **Encoding**: ASCII

**File code content:**

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

---

### <a id="📄-tsconfig-json"></a>📄 `tsconfig.json`

**File Info:**
- **Size**: 119 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.json`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `a3d39fa780ebff65444de257f291ce6c`
- **SHA256**: `770b4140bbb581e2dfd9ea9946ffc9c75a1d86ba7d2db5f77c83e37cbdf9d808`
- **Encoding**: ASCII

**File code content:**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

---

### <a id="📄-tsconfig-node-json"></a>📄 `tsconfig.node.json`

**File Info:**
- **Size**: 591 B
- **Extension**: `.json`
- **Language**: `json`
- **Location**: `tsconfig.node.json`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `70bdd0a673bcfc0e828080b306e7c680`
- **SHA256**: `90a22c920cbc14624fb4658b58f15c875abf3234224f3933f211849c3ada3242`
- **Encoding**: ASCII

**File code content:**

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

---

### <a id="📄-vite-config-ts"></a>📄 `vite.config.ts`

**File Info:**
- **Size**: 161 B
- **Extension**: `.ts`
- **Language**: `typescript`
- **Location**: `vite.config.ts`
- **Relative Path**: `root`
- **Created**: 2026-06-15 12:29:35 (Europe/Istanbul / GMT+03:00)
- **Modified**: 2026-06-15 10:40:12 (Europe/Istanbul / GMT+03:00)
- **MD5**: `88439104b3c207f17d33ef3160e3b080`
- **SHA256**: `4d36db3522a7b2dd10e0936e1004373c7ee65f10f7cd7920cd76410459c15a45`
- **Encoding**: ASCII

**File code content:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

---

