import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AddProduct = React.lazy(() => import("pages/AddProduct"));
const CartProductList = React.lazy(() => import("pages/CartProductList"));
const CheckoutSuccessful = React.lazy(() => import("pages/CheckoutSuccessful"));
const Checkoutinprocess = React.lazy(() => import("pages/Checkoutinprocess"));
const PaymentInfo = React.lazy(() => import("pages/PaymentInfo"));
const ShippingInfo = React.lazy(() => import("pages/ShippingInfo"));
const ShopReviews = React.lazy(() => import("pages/ShopReviews"));
const ShopDetailitem = React.lazy(() => import("pages/ShopDetailitem"));
const ShopSearch = React.lazy(() => import("pages/ShopSearch"));
const EKYCSuccessful = React.lazy(() => import("pages/EKYCSuccessful"));
const EKYCSignature = React.lazy(() => import("pages/EKYCSignature"));
const EKYCIntroductionStepFour = React.lazy(() =>
  import("pages/EKYCIntroductionStepFour")
);
const EKYCConfirmInformation = React.lazy(() =>
  import("pages/EKYCConfirmInformation")
);
const EKYCIntroductionStepThree = React.lazy(() =>
  import("pages/EKYCIntroductionStepThree")
);
const EKYCIntroductionStepTwo = React.lazy(() =>
  import("pages/EKYCIntroductionStepTwo")
);
const EKYCIntroductionStepOne = React.lazy(() =>
  import("pages/EKYCIntroductionStepOne")
);
const EKYCBegin = React.lazy(() => import("pages/EKYCBegin"));
const EKYCScanFace = React.lazy(() => import("pages/EKYCScanFace"));
const EKYCScanIDCardAddimage = React.lazy(() =>
  import("pages/EKYCScanIDCardAddimage")
);
const EKYCScanIDCard = React.lazy(() => import("pages/EKYCScanIDCard"));
const Customer = React.lazy(() => import("pages/Customer"));
const Settings = React.lazy(() => import("pages/Settings"));
const Profile = React.lazy(() => import("pages/Profile"));
const Conversation = React.lazy(() => import("pages/Conversation"));
const Tracktasks = React.lazy(() => import("pages/Tracktasks"));
const FileManagementDefault = React.lazy(() =>
  import("pages/FileManagementDefault")
);
const CalenderWeek = React.lazy(() => import("pages/CalenderWeek"));
const CalenderDay1Event = React.lazy(() => import("pages/CalenderDay1Event"));
const CalenderDayNoevent = React.lazy(() => import("pages/CalenderDayNoevent"));
const CalenderMonth = React.lazy(() => import("pages/CalenderMonth"));
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const SigninDefault = React.lazy(() => import("pages/SigninDefault"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<SigninDefault />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/calendermonth" element={<CalenderMonth />} />
          <Route path="/calenderdaynoevent" element={<CalenderDayNoevent />} />
          <Route path="/calenderday1event" element={<CalenderDay1Event />} />
          <Route path="/calenderweek" element={<CalenderWeek />} />
          <Route
            path="/filemanagementdefault"
            element={<FileManagementDefault />}
          />
          <Route path="/tracktasks" element={<Tracktasks />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
          <Route
            path="/ekycscanidcardaddimage"
            element={<EKYCScanIDCardAddimage />}
          />
          <Route path="/ekycscanface" element={<EKYCScanFace />} />
          <Route path="/ekycbegin" element={<EKYCBegin />} />
          <Route
            path="/ekycintroductionstepone"
            element={<EKYCIntroductionStepOne />}
          />
          <Route
            path="/ekycintroductionsteptwo"
            element={<EKYCIntroductionStepTwo />}
          />
          <Route
            path="/ekycintroductionstepthree"
            element={<EKYCIntroductionStepThree />}
          />
          <Route
            path="/ekycconfirminformation"
            element={<EKYCConfirmInformation />}
          />
          <Route
            path="/ekycintroductionstepfour"
            element={<EKYCIntroductionStepFour />}
          />
          <Route path="/ekycsignature" element={<EKYCSignature />} />
          <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
          <Route path="/shopsearch" element={<ShopSearch />} />
          <Route path="/shopdetailitem" element={<ShopDetailitem />} />
          <Route path="/shopreviews" element={<ShopReviews />} />
          <Route path="/shippinginfo" element={<ShippingInfo />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/checkoutinprocess" element={<Checkoutinprocess />} />
          <Route path="/checkoutsuccessful" element={<CheckoutSuccessful />} />
          <Route path="/cartproductlist" element={<CartProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
