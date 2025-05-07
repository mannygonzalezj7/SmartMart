import type { Metadata } from "next";
import "../styles/app.css";
import "../styles/Header.css";
import "../styles/home.css";
import "../styles/tripPlanner.css";
import "../styles/grocery.css";
import "../styles/forms.css";
import "../styles/Footer.css";
import Header from "../components/Header";
import Footer from "components/Footer";

export const metadata: Metadata = {
  title: "SmartMart",
  description:
    "SmartMart helps you save time with optimized routes and an easy-to-use grocery list. Find popular products and make your shopping trips faster and more efficient.",
  keywords: [
    "route optimization",
    "grocery list",
    "shopping trips",
    "faster shopping",
    "smart grocery shopping",
    "grocery products",
    "time-saving",
  ],
  authors: [{ name: "SmartMart Team" }],
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
        <Footer />
      </body>
    </html>
  );
}
