import { useState } from "react";
import Checkbox from "../Assets/Images/Checkbox.svg";
import ActiveIcon from "../Assets/Images/active.svg";
import InActiveIcon from "../Assets/Images/inactive.svg";
import TableComponent from "../Components/TableComponent";

const Content = () => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [contactEmail, setContactEmail] = useState("alternate email");
  const [email, setEmail] = useState("billing@untitledui.com");

  const subMenu = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notification",
    "Integrations",
    "API",
  ];

  return (
    <div className="p-6 bg-primary w-full h-screen overflow-y-scroll">
      <div>
        <h1 className="text-[#101828] text-[30px] font-inter font-medium">Settings</h1>
        <p className="text-[16px] text-[#667085] font-normal">Manage your team and preferences here.</p>
      </div>
      <div className="my-5">
        <div className="w-full flex overflow-x-scroll">
          {subMenu.map((menu, index) => (
            <div
              className="text-[14px] first:rounded-s-[8px] last:rounded-e-[8px] font-inter whitespace-nowrap font-medium bg-[#ffffff] hover:text-[#1D2939] border-[.9px] hover:bg-[#F9FAFB] border-[#D0D5DD] py-[10px] px-[20px]"
              key={index}
            >
              {menu}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-[#101828] text-[18px] font-inter font-medium">Payment method</h1>
        <p className="text-[14px] text-[#667085] font-normal">Update your billing details and address.</p>
      </div>
      <hr className="my-5 text-[#EAECF0] bg-accent" />
      <div className="grid grid-cols-6 gap-4">
        <div className="max-sm:col-start-1 max-sm:col-end-7 col-start-1 col-end-3">
          <h1 className="text-[#101828] text-[14px] font-inter font-medium">Contact email</h1>
          <p className="text-[14px] text-[#667085] font-normal">Where should invoices be sent?</p>
        </div>
        <div className="max-sm:col-start-1 max-sm:col-end-7 col-start-3 col-end-7">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setContactEmail("own email")}>
            {contactEmail === "own email" ? <img src={Checkbox} alt="" /> : <img src={InActiveIcon} alt="" />}
            <span className="text-[#344054] font-medium font-inter text-[14px]" htmlFor="email">
              Send to my account email
            </span>
          </div>
          <span className="text-[#667085] ms-7 font-inter text-[14px]">olivia@untitledui.com</span>
          <div className="flex gap-3 mt-4 items-center cursor" onClick={() => setContactEmail("alternate email")}>
            {contactEmail === "alternate email" ? <img src={Checkbox} alt="" /> : <img src={InActiveIcon} alt="" />}
            <div>
              <span className="text-[#344054] font-medium font-inter text-[14px]" htmlFor="alternate_email">
                Send to an alternative email
              </span>
            </div>
          </div>
          {contactEmail === "alternate email" && (
            <div className="flex bg-[#ffffff] border-[#D0D5DD] md:ms-6 items-center border gap-3 rounded-[8px] h-[44px] mt-3 px-2 max-sm:w-full w-2/3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3333 5.00001C18.3333 4.08334 17.5833 3.33334 16.6667 3.33334H3.33332C2.41666 3.33334 1.66666 4.08334 1.66666 5.00001M18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33332C2.41666 16.6667 1.66666 15.9167 1.66666 15V5.00001M18.3333 5.00001L9.99999 10.8333L1.66666 5.00001"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="email"
                className="text-[16px] text-[#101828] font-inter h-full w-full border-0 bg-none outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
              />
            </div>
          )}
        </div>
      </div>
      <hr className="my-5 text-[#EAECF0] bg-accent" />
      <div className="grid grid-cols-6 gap-4">
        <div className="max-sm:col-start-1 max-sm:col-end-7 col-start-1 col-end-3">
          <h1 className="text-[#101828] text-[14px] font-inter font-medium">Card details</h1>
          <p className="text-[14px] text-[#667085] font-normal">Select default payment method.</p>
        </div>
        <div className="max-sm:col-start-1 max-sm:col-end-7 col-start-3 col-end-7">
          <div
            className={`rounded-[8px] mt-4 ${
              paymentMethod === "visa" ? "border-[#D6BBFB] bg-[#F9F5FF]" : "border-[#EAECF0] bg-[#fff]"
            } border p-4`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3337 21.1443H11.5874L9.52795 13.0565C9.4302 12.6844 9.22265 12.3555 8.91736 12.2005C8.15546 11.811 7.3159 11.5009 6.40001 11.3446V11.0332H10.8241C11.4347 11.0332 11.8927 11.5009 11.969 12.0442L13.0375 17.8782L15.7825 11.0332H18.4525L14.3337 21.1443ZM19.979 21.1443H17.3853L19.521 11.0332H22.1147L19.979 21.1443ZM25.4703 13.8343C25.5466 13.2897 26.0045 12.9783 26.5388 12.9783C27.3784 12.9001 28.2929 13.0565 29.0562 13.4447L29.5141 11.2677C28.7509 10.9564 27.9113 10.8 27.1494 10.8C24.6321 10.8 22.8003 12.2005 22.8003 14.1443C22.8003 15.623 24.0978 16.3995 25.0137 16.8672C26.0045 17.3336 26.3862 17.645 26.3098 18.1114C26.3098 18.811 25.5466 19.1224 24.7847 19.1224C23.8688 19.1224 22.9529 18.8892 22.1147 18.4996L21.6568 20.6779C22.5726 21.0661 23.5635 21.2225 24.4794 21.2225C27.302 21.2993 29.0562 19.9001 29.0562 17.8C29.0562 15.1553 25.4703 15.0003 25.4703 13.8343ZM38.1333 21.1443L36.0739 11.0332H33.8619C33.4039 11.0332 32.946 11.3446 32.7933 11.811L28.9798 21.1443H31.6498L32.1828 19.6669H35.4633L35.7686 21.1443H38.1333ZM34.2435 13.7561L35.0054 17.5668H32.8697L34.2435 13.7561Z"
                    fill="#172B85"
                  />
                  <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7" />
                </svg>
                <div>
                  <p className="font-inter font-medium text-[14px] text-[#53389E]">Visa ending in 1234</p>
                  <p className="font-inter font-normal text-[14px] text-[#53389E]">Expiry 06/2024</p>
                  <div className="flex mt-2 gap-3">
                    <button
                      className="bg-[transparent] text-[#9E77ED] font-inter font-normal text-[14px]"
                      onClick={() => setPaymentMethod("visa")}
                    >
                      {paymentMethod === "visa" ? "Default" : "Set as default"}
                    </button>
                    <button className="bg-[transparent] text-[#9E77ED] font-inter font-normal text-[14px]">Edit</button>
                  </div>
                </div>
              </div>
              {paymentMethod === "visa" ? <img src={ActiveIcon} alt="" /> : <img src={InActiveIcon} alt="" />}
            </div>
          </div>
          <div
            className={`rounded-[8px] mt-4 ${
              paymentMethod === "mastercard" ? "border-[#D6BBFB] bg-[#F9F5FF]" : "border-[#EAECF0] bg-[#fff]"
            } border p-4`}
          >
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="p-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="19" viewBox="0 0 30 19" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9053 16.4392C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.63995C0 4.70621 4.04776 0.706619 9.04092 0.706619C11.2787 0.706619 13.3266 1.50995 14.9053 2.84068C16.484 1.50995 18.5319 0.706619 20.7697 0.706619C25.7628 0.706619 29.8106 4.70621 29.8106 9.63995C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4392Z"
                      fill="#ED0006"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3626 18.0818 9.63995C18.0818 6.91735 16.8492 4.47921 14.9053 2.84067C16.484 1.50995 18.5319 0.706619 20.7697 0.706619C25.7628 0.706619 29.8106 4.70621 29.8106 9.63995C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4392Z"
                      fill="#F9A000"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3626 18.0818 9.63996C18.0818 6.91737 16.8492 4.47925 14.9053 2.84071C12.9614 4.47925 11.7288 6.91737 11.7288 9.63996C11.7288 12.3626 12.9614 14.8007 14.9053 16.4392Z"
                      fill="#FF5E00"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-inter font-medium text-[14px] text-[#53389E]">Mastercard ending in 1234</p>
                  <p className="font-inter font-normal text-[14px] text-[#53389E]">Expiry 06/2024</p>
                  <div className="flex mt-2 gap-3">
                    <button
                      className="bg-[transparent] text-[#9E77ED] font-inter font-normal text-[14px]"
                      onClick={() => setPaymentMethod("mastercard")}
                    >
                      {paymentMethod === "mastercard" ? "Default" : "Set as default"}
                    </button>
                    <button className="bg-[transparent] text-[#9E77ED] font-inter font-normal text-[14px]">Edit</button>
                  </div>
                </div>
              </div>
              {paymentMethod === "mastercard" ? <img src={ActiveIcon} alt="" /> : <img src={InActiveIcon} alt="" />}
            </div>
          </div>
          <button
            className="bg-[transparent] flex mt-3 gap-2 text-[#667085] font-inter font-normal text-[14px]"
            onClick={() => setPaymentMethod("visa")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 4.16666V15.8333M4.16667 10H15.8333"
                stroke="#667085"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add new payment method
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 max-sm:block">
        <h1 className="text-[#101828] text-[18px] font-inter font-medium">Billing history</h1>
        <button className="flex items-center rounded-[8px] text-[14px] font-inter font-medium border border-[#D0D5DD] px-[16px] py-[10px] gap-2 max-sm:mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_5735_218)">
              <path
                d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.4 15.075C18.1245 14.5655 18.6678 13.8385 18.9511 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56386 18.1782 8.82674 17.4634 8.3038C16.7486 7.78086 15.8857 7.49931 15 7.5H13.95C13.6994 6.52323 13.2304 5.61604 12.5784 4.84674C11.9265 4.07743 11.1085 3.46605 10.186 3.05863C9.26356 2.65121 8.26071 2.45836 7.25294 2.4946C6.24518 2.53084 5.25877 2.79523 4.36797 3.26786C3.47717 3.74049 2.70519 4.40904 2.11016 5.22319C1.51513 6.03734 1.11255 6.97587 0.932723 7.96813C0.752897 8.96038 0.800514 9.9805 1.07199 10.9517C1.34346 11.9229 1.83172 12.8198 2.50001 13.575"
                stroke="#344054"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_5735_218">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Download all
        </button>
      </div>
      <TableComponent />
    </div>
  );
};

export default Content;
