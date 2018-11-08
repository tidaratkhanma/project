import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import ATM from "@/pages/ATM.vue";
import car from "@/pages/car.vue";
import Report from "@/pages/Report.vue";
import Larnplam from "@/pages/Larnplam.vue";
import sirinton from "@/pages/sirinton.vue";
import Customer from "@/pages/Customer.vue";
import Statistics from "@/pages/Statistics.vue";
import show_report from "@/pages/show_report.vue";
import setting from "@/pages/setting.vue";
import Login from '@/components/Login'
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "ATM",
        name: "ATM FITM",
        component: ATM
      },
      {
        path: "car",
        name: "Under the roof",
        component: car
      },
      {
        path: "Report",
        name: "Report",
        component: Report
      },
      {
        path: "Larnplam",
        name: "Larnplam",
        component: Larnplam
      },
      {
        path: "sirinton",
        name: "sirinton",
        component: sirinton
      },
      {
        path: "Statistics",
        name: "Statistics",
        component: Statistics
      },
      {
        path: "Customer",
        name: "Customer",
        component: Customer
      },
      {
        path: "setting",
        name: "Setting",
        component: setting
      },
      {
        path: "show_report",
        name: "show report",
        component: show_report
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
