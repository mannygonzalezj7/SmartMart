import type { Metadata } from "next";
import "../styles/app.css";
import "../styles/Header.css";
import "../styles/home.css";
import "../styles/tripPlanner.css";
import "../styles/grocery.css";
import "../styles/forms.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "SmartMart",
  description: "Welcome to SmartMart!",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
