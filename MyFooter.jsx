import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "react-scroll-to-top";
export function MyFooter()
{
    return(
        <footer>
            <ScrollToTop smooth top="20" color="blue" className="up"/>
            <h2>This Project Complete By &copy; Abdelmaksoud Eid</h2>
            <div>
                <a href="https://www.facebook.com/me/"><i class="bi bi-facebook"></i></a>
                <a href="https://web.whatsapp.com/"><i class="bi bi-whatsapp"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
            </div>
        </footer>
    );
}