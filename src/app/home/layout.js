import {  Inter } from "next/font/google";
import "../globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: Use as a CSS variable
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
      <body   className="bg-bgGrey" >
        <ToastContainer position="top-right" autoClose={3000} />
        
        {children}
      </body>
  );
}
