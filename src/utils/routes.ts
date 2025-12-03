import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../components/DashboardLayout";
import MainDashboard from "../pages/MainDashboard";
import HazardReports from "../pages/HazardReports";
import Analytics from "../pages/Analytics";
import BlastingSafety from "../pages/BlastingSafety";
import MachinerySafety from "../pages/MachinerySafety";
import Ventilation from "../pages/Ventilation";
import TrainingCompliance from "../pages/TrainingCompliance";
import AdvisoryManagement from "../pages/AdvisoryManagement";
import MineRegistry from "../pages/MineRegistry";
import InspectionReport from "../pages/InspectionReport";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: MainDashboard },
      { path: "hazards", Component: HazardReports },
      { path: "analytics", Component: Analytics },
      { path: "blasting", Component: BlastingSafety },
      { path: "machinery", Component: MachinerySafety },
      { path: "ventilation", Component: Ventilation },
      { path: "training", Component: TrainingCompliance },
      { path: "advisory", Component: AdvisoryManagement },
      { path: "mines", Component: MineRegistry },
      { path: "inspection", Component: InspectionReport },
    ],
  },
]);
