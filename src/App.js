import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RatingForm from "./components/form/RatingForm";
import RatingList from "./components/RatingList";
import RatingStats from "./components/RatingStats";
import { RatingProvider } from "./context/RatingContext";

export default function App() {
  return (
    <RatingProvider>
      <Header />
      <div className="wrapper">
        <RatingForm />
        <RatingStats />
        <RatingList />
      </div>
      <Footer />
    </RatingProvider>
  );
}
