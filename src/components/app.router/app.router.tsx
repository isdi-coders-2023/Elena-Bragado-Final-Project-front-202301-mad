import { Suspense } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"}></Route>
      </Routes>
    </Suspense>
  );
}
export default AppRouter;
