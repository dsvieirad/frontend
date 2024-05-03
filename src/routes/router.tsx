import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/app/home/page";
import Login from "@/app/login/page";
import UserRegistration from "@/app/users/resgistration/page";
import User from "@/app/users/page";
import BookRegistration from "@/app/books/registration/page";
import Book from "@/app/books/page";
import Bookshelf from "@/app/bookshelf/page";
import ForgetPassword from "@/app/login/forget/page";

const AppRoutes: React.FC = () => {
  useEffect(() => {
    window.location.href = "/login";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/registration" element={<UserRegistration />} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/registration" element={<BookRegistration />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
