import { useState } from "react";
import { Table, Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import Avatar1 from "../Assets/Images/profile_icon.svg";
import Avatar2 from "../Assets/Images/avatar_2.svg";
import Avatar3 from "../Assets/Images/avatar_3.svg";
import Avatar4 from "../Assets/Images/avatar_4.svg";

const TableComponent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Invoice",
      dataIndex: "invoice",
      className: "text-[#101828] font-inter font-medium text-[14px] lg:w-[300px]",
      sorter: (a, b) => a.age - b.age,
      responsive: ["xs", "sm"],
    },
    {
      title: "Amount",
      dataIndex: "amount",
      className: "text-[#667085] font-inter font-base text-[14px]",
      responsive: ["xs", "sm"],
    },
    {
      title: "Date",
      dataIndex: "date",
      className: "text-[#667085] font-inter font-base text-[14px]",
      responsive: ["md", "lg", "xl"],
    },
    {
      title: "Status",
      dataIndex: "status",
      responsive: ["md", "lg", "xl"],
      render: () => (
        <button className="flex gap-2 items-center text-[12px] font-inter font-medium text-[#027A48] rounded-[16px] bg-[#ECFDF3] px-3 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="#12B76A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Paid
        </button>
      ),
    },
    {
      title: "Users on plan",
      dataIndex: "plan",
      responsive: ["md", "lg", "xl"],
      render: () => (
        <>
          <Avatar.Group
            maxCount={4}
            size={25}
            maxStyle={{
              color: "#475467",
              backgroundColor: "#F9FAFB",
            }}
          >
            <Avatar src={Avatar1} size={25} />
            <Avatar src={Avatar2} size={25} />
            <Avatar src={Avatar3} size={25} />
            <Avatar src={Avatar4} size={25} />
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" size={25} />
            <Avatar
              size={25}
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
            <Tooltip title="Ant User" placement="top">
              <Avatar
                size={25}
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              size={25}
              style={{
                backgroundColor: "#1677ff",
              }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "plan",
      responsive: ["md", "lg", "xl"],
      render: () => (
        <>
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
        </>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const data = [];
  for (let i = 1; i <= 7; i++) {
    data.push({
      key: i,
      invoice: "Basic Plan – Dec 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
    });
  }
  return (
    <Table
      size="large"
      className="mt-5"
      columns={columns}
      dataSource={data}
      rowSelection={rowSelection}
      pagination={{
        position: ["none", "none"],
      }}
    />
  );
};

export default TableComponent;
