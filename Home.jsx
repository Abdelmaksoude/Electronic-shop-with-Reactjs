import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MySlider } from "../componant/MySlider";
export function Home()
{
    return(
        <div className="">
            <MySlider />
            <section>
                <h1>Electronic shop</h1>
                <p>This the wpsite introduction smart device like <span>Laptob</span> & <span>Phone</span> & <span>Television</span></p>
            </section>
            <div>
            <div className="categores">
                <button>
                    <NavLink className="nav-link" to="CardLab">Laptop</NavLink>
                </button>
                <button>
                    <NavLink className="nav-link" to="CardPhone">Phone</NavLink>
                </button>
                <button>
                    <NavLink className="nav-link" to="CardTelevesion">Televesion</NavLink>
                </button>
            </div>
            <div>
                <Outlet />
            </div>
            </div>
        </div>
    );
}