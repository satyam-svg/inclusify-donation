"use client";
import React, { useState } from "react";
import "./donation.css";
import Image from "next/image";
import tick from "./image/Ok.png";
import heart from './image/Heart Cross.png'
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
const Page = () => {
  const [selectedPrice, setSelectedPrice] = useState<number | null>(50);
  const router = useRouter();
  const handleBoxClick = (price: number) => {
    setSelectedPrice(price);
  };
  function handlePage(){
    router.push("/payment")
  }

  return (
    <>
      <div className="donation">
        <div className="donation_items">
         
          <div className="company_logo">
            <h1>INCLUSIFY</h1>
            <h2>Empower Justice Through Donations</h2>
            <div className="company_plans">
              <div className="company_plans_items">
                <div className="plans_items1">
                  <div className="plans_items_content">
                    <h3>ONE TIME</h3>
                    <Image src={tick} alt="loading-image" priority />
                  </div>
                  <div className="divider_plans"></div>
                </div>
                <div className="plans_items2">
                  <div className="plans_items_content">
                    <h3>Monthly</h3>
                    <Image src={heart} alt="loading-image" priority />
                  </div>
                </div>
                <div className="plans_items2">
                  <div className="plans_items_content">
                    <h3>Yearly</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="plans_price">
            <div className="plans_price_row1">
              <div
                className={`plan_box ${selectedPrice === 50 ? "selected" : ""}`}
                onClick={() => handleBoxClick(50)}
              >
                Rs.50
              </div>
              <div
                className={`plan_box ${selectedPrice === 100 ? "selected" : ""}`}
                onClick={() => handleBoxClick(100)}
              >
                Rs.100
              </div>
              <div
                className={`plan_box ${selectedPrice === 250? "selected" : ""}`}
                onClick={() => handleBoxClick(250)}
              >
                Rs.250
              </div>
            </div>
            <div className="plans_price_row1">
              <div
                className={`plan_box ${selectedPrice === 500 ? "selected" : ""}`}
                onClick={() => handleBoxClick(500)}
              >
                Rs.500
              </div>
              <div
                className={`plan_box ${selectedPrice === 1000 ? "selected" : ""}`}
                onClick={() => handleBoxClick(1000)}
              >
                Rs.1000
              </div>
              <div
                className={`plan_box ${selectedPrice === 2500 ? "selected" : ""}`}
                onClick={() => handleBoxClick(2500)}
              >
                Rs.2500
              </div>
            </div>
            <div className="result_price">
              <h4>Rs.</h4>{selectedPrice !== null && <p> {selectedPrice}</p>}
              <h5>INR</h5>
              
            </div>
            <h6>Fuel the cause: <u>Your donations empower access to justice.</u></h6>

            <button onClick={handlePage} className="final_donation">
          Donate Rs.{selectedPrice !== null && <p> {selectedPrice}</p>}
        </button>
          </div>
        </div>
      </div>
    </>
  );

};


export default Page;