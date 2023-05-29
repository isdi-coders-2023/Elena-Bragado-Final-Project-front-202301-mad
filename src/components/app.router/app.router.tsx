import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const Login = lazy(() => import("../login/login"));
const Register = lazy(() => import("../register/register"));
const AddProfessional = lazy(
  () => import("../addprofessionals/addprofessional")
);
const ProfessionalsPage = lazy(() => import("../professionals/professionals"));
const ProfessionalDetail = lazy(
  () => import("../professionaldetail/professionaldetail")
);
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
