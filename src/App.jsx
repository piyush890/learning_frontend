import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './Page/LandingPage'
import PrivacyPolicy from './Page/PrivacyPolicy'
import TermsAndConditions from './Page/TermsAndCondition'
import RefundShippingPolicy from './Page/RefundPolicy'
import ContactUsPage from './Page/ContactUs'
import AboutUs from './Page/Aboutus'
import OurTeamPage from './Page/OurTeam'
import StudentDetailsForm from './Page/StudentForm'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element ={<LandingPage/>}/>
      <Route path='/privacy&policy' element ={<PrivacyPolicy/>}/>
      <Route path='/terms&conditions' element ={<TermsAndConditions/>}/>
      <Route path='/refundPolicy' element ={<RefundShippingPolicy/>}/>
      <Route path='/contactus' element ={<ContactUsPage/>}/>
      <Route path='/aboutus' element ={<AboutUs/>}/>
      <Route path='/ourteam' element ={<OurTeamPage/>}/>
      <Route path='/form' element ={<StudentDetailsForm/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
