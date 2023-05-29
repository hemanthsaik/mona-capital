"use client";
import DashBoardNav from "@/components/DashBoardNav";
import store from "@/utils/reduxStore/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
export default function DashBoardLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <div className="flex">
          <DashBoardNav />
          <main className="w-4/5">{children}</main>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
