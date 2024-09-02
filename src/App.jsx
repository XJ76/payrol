import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing Pages

// import not found page
import NotFoundPage from "./pages/notFound";

// import user account aunthentication pages
import Login from "./pages/auth/login";
import Reg from "./pages/auth/singup";

// student logged in areas
import Dashboard from "./pages/student/dashboard";

//Registration page
import Registration from "./pages/Registration/Registration";

//Payment page
import Payment from "./pages/Payments/Payments";

//deposit page
import TimeTable from "./pages/TimeTable/TimeTable";

//withdraw page
import Resources from "./pages/resources/Resources";

//ClassResults page
import ClassResults from "./pages/ClassResults/ClassResults";

//ClassResults page
import AccountSettings from "./pages/accountSettings/accountSettings";

import Employees from "./pages/Employees/Employees"
//ClassResults page
import Logout from "./pages/logout/logout";
import MainLayout from "./components/layouts/mainLayout";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            {/* <Route index element={<Login />} /> */}

            {/* logged in routes */}
            <Route index element={<Dashboard />} />

            {/* agents page */}
            <Route path="/employee/registration" element={<Employees />} />

            {/* Payment page */}
            <Route path="/employee/paymenthistory" element={<Payment />} />

            {/* deposit  page */}
            <Route path="/student/timetable" element={<TimeTable />} />

            {/* withdraw  page */}
            <Route path="student/studynotes" element={<Resources />} />

            {/* ClassResults page */}
            <Route path="student/myresults" element={<ClassResults />} />

            {/* account settings page */}
            <Route path="student/settings" element={<AccountSettings />} />

            {/* ClassResults page */}
            <Route path="student/logout" element={<Logout />} />
            <Route path="register" element={<Reg />} />
            {/* not found page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
