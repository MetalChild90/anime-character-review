import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RatingForm from "./components/RatingForm";
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
