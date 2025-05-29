// app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{ width: 250, background: "#222", color: "#fff", padding: 20 }}
      >
        <h2>Dashboard Menu</h2>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="/dashboard/profile">Profile</a>
            </li>
            <li>
              <a href="/dashboard/settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 20 }}>{children}</main>
    </div>
  );
}
