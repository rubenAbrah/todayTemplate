import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "/@/components/Layout";
import Wisard from "/@/pages/addUserData/Wisard";
import DashboardPage from "/@/pages/dashboard/DashboardPage";
import MinSectionsDashboard from "./pages/minSectiosDahboard/MinSectionsDashboard";
import ProfilePage from "/@/pages/profile/ProfilePage";
import AuthLoyauth from "/@/pages/auth/AuthLoyauth";
import LoginPage from "/@/pages/auth/login/LoginPage";
import RegistrationPage from "/@/pages/auth/registration/RegistrationPage";
import ResetPasswordPage from "./pages/auth/resetPassword/ResetPasswordPage";
// export default function App() {
//   let isAuth = false;
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* {isAuth && (
//           <Route path="/" element={<AuthLoyauth />}>
//             <Route index element={<LoginPage />} />
//             <Route path="registration" element={<RegistrationPage />} />
//             <Route path="resetPassword" element={<ResetPasswordPage />} />
//           </Route>
//         )}

//         {!isAuth && ( */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Wisard />} />
//           <Route path="blogs" element={<DashboardPage />}>
//             <Route index element={<>132</>} />
//             <Route path="/blogs/blog" element={<>blog</>} />
//           </Route>
//           <Route path="dashboard2" element={<MinSectionsDashboard />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="*" element={404} />
//         </Route>
//         {/* )} */}
//       </Routes>
//       <As />
//     </BrowserRouter>
//   );
// }
let routes = [
  {
    link: "/",
    element: <Layout />,
    childrens: [
      { link: "index", element: <Wisard /> },
      {
        link: "blogs",
        element: <DashboardPage />,
        childrens: [
          {
            link: "index",
            element: <>132</>,
          },
          {
            link: "/blogs/blog",
            element: <>blog</>,
          },
        ],
      },
      {
        link: "dashboard2",
        element: <MinSectionsDashboard />,
      },
      {
        link: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];
  function App() {
  let arr = [1,2,3]
  return (
    <>
    {/* // <BrowserRouter>
    //   <Routes> */}
          {routes.map((route, ind) =>(
          // ind == 0 ? (
          //   <Route key={ind} index element={route.element} />
          // ) : (
          //   <Route key={ind} path={route.link} element={route.element}>
          //     {route.childrens ? <App childrens={childrens} /> : ""}  
          //   </Route>
          // ))
          route.link 
          )  
          
           )}
         {/* </Routes>
     </BrowserRouter>   */}
     {/* {arr.map(el=> <div className="">{el}</div>)} */}
    
          </>
  );
}

export default App 