import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing Pages

// import not found page
import NotFoundPage from "./pages/notFound";

// import user account aunthentication pages
import Login from "./pages/auth/login";
import Reg from "./pages/auth/singup";
import Schedualing from "./pages/Schedualing";
// student logged in areas
import Dashboard from "./pages/Workshop/dashboard";
import Registration from "./pages/Registration";
import JobAllocation from "./pages/JobAllocation";
import Logout from "./pages/logout/logout";
import MainLayout from "./components/layouts/mainLayout";
import Invoice from "./pages/Invoice";
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
            <Route path="/registration" element={<Registration />} />
            <Route path="/job-allocation" element={<JobAllocation />} />
            <Route path="/schedualing" element={<Schedualing />} />
            <Route path="/invoice" element={<Invoice />} />
            {/* not found page */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
