import { Suspense } from "react";
import { Routes } from "react-router";

export function AppRouter() {
  return (
    <Suspense>
      <Routes></Routes>
    </Suspense>
  );
}
export default AppRouter;
