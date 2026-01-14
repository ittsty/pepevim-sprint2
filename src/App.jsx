import React from 'react';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="relative w-full min-h-screen">
      {/* ตรงนี้จะดึงหน้า About หรือ Contact มาแสดงตาม URL */}
      <Outlet />
    </main>
  );
}

export default App;