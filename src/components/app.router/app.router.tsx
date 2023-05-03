import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import ProfessionalsPage from "../../pages/professionals";
import AddProfessional from "../addprofessionals/addprofessional";
import ProfessionalDetail from "../professionaldetail/professionaldetail";

const Login = lazy(() => import("../login/login"));
const Register = lazy(() => import("../register/register"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route
          path={"/professionals/add"}
          element={<AddProfessional></AddProfessional>}
        ></Route>
        <Route
          path={"/professionals"}
          element={<ProfessionalsPage></ProfessionalsPage>}
        ></Route>
        <Route
          path={"/professionals/details"}
          element={<ProfessionalDetail></ProfessionalDetail>}
        ></Route>
        <Route path={"/"} element={<Login></Login>}></Route>
      </Routes>
    </Suspense>
  );
}
