// import React from "react";
// import { Col, Row } from "antd";
// import {
//   PieChartOutlined,
//   UsergroupAddOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   //   getItem("Navigation One", "sub1", <MailOutlined />, [
//   //     getItem(
//   //       "Item 1",
//   //       "g1",
//   //       null,
//   //       [getItem("Option 1", "1"), getItem("Option 2", "2")],
//   //       "group"
//   //     ),
//   //     getItem(
//   //       "Item 2",
//   //       "g2",
//   //       null,
//   //       [getItem("Option 3", "3"), getItem("Option 4", "4")],
//   //       "group"
//   //     ),
//   //   ]),
//   //   getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
//   //     getItem("Option 5", "5"),
//   //     getItem("Option 6", "6"),
//   //     getItem("Submenu", "sub3", null, [
//   //       getItem("Option 7", "7"),
//   //       getItem("Option 8", "8"),
//   //     ]),
//   //   ]),
//   //   {
//   //     type: "divider",
//   //   },
//   //   getItem("Navigation Three", "sub4", <SettingOutlined />, [
//   //     getItem("Option 9", "9"),
//   //     getItem("Option 10", "10"),
//   //     getItem("Option 11", "11"),
//   //     getItem("Option 12", "12"),
//   //   ]),
//   getItem(
//     "Dashboard",
//     "grp",
//     null,
//     [
//       getItem(<PieChartOutlined />, "Home"),
//       getItem(<UsergroupAddOutlined />, "Group"),
//       getItem(<FileTextOutlined />, "File"),
//     ],
//     "group"
//   ),
// ];

// const Dashboard = () => {
//   const onClick = (e) => {
//     console.log("click ", e);
//   };
//   return (
//     <Row>
//       <Col style={{}} span={18} push={6}></Col>
//       <Col style={{}} span={6} pull={18}>
//         <Menu
//           onClick={onClick}
//           style={{
//             width: 256,
//           }}
//           defaultSelectedKeys={["1"]}
//           defaultOpenKeys={["sub1"]}
//           mode="inline"
//           items={items}
//         />
//       </Col>
//     </Row>
//   );
// };

// export default Dashboard;
