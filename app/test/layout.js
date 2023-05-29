"use client";
import store from "@/utils/reduxStore/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
export default function DashBoardLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <main className="w-4/5">{children}</main>
      </Provider>
    </ThemeProvider>
  );
}
