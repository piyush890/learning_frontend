import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  School,
  BookOpen,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  BarChart2,
  Code2,
  MapPin
} from "lucide-react";
import { registerUser } from "../Network/AuthApi";
import { Spinner } from "@/components/ui/spinner"

export default function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    college_n_university: "",
    degree: "",
    tech_stack: "",
    experience: "",
    city: ""
  });
  const [showloader, setShowLoader] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const submitForm = async () =>{
    setShowLoader(true);
     var response = await registerUser(formData);
     if(response.status === 200){
      alert("Registration success");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        dob: "",
        college_n_university: "",
        degree: "",
        tech_stack: "",
        experience: "",
        city: ""
      });
     }else{
      alert("Registration failed. Please try again.");
     }
     setShowLoader(false);
  }

  return (
    <div
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      className="min-h-screen flex items-stretch"
    >
      {/* Left Panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-[45%] relative overflow-hidden "
        style={{
          background: "linear-gradient(145deg, #dce8ff 0%, #eef3ff 50%, #e8edff 100%)",
        }}
      >
        {/* Subtle grid overlay */}
       
          <img src="/formPageImage.webp" className="object-fill" alt="" srcset="" />
        {/* Logo */}
        



        {/* Book stack labels */}
      
      </div>

      {/* Right Panel — Form */}
      <div
        className="flex-1 flex items-center justify-center px-8 py-12 overflow-y-auto"
        style={{ background: "#ffffff" }}
      >
        <div className="w-full max-w-xl">
          {/* Header */}
           
         
     <div className="Form">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Register for Summer Training
            </h2>
            <p className="text-gray-400 text-sm">Fill out the form and start your journey into the world of technology.</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full Name">
                <InputBox icon={<User className="w-4 h-4" />} name="name" placeholder="Enter full name" type="text" value={formData.name} onChange={handleChange} />
              </Field>
              <Field label="Email Address">
                <InputBox icon={<Mail className="w-4 h-4" />} name="email" placeholder="Enter email address" type="email" value={formData.email} onChange={handleChange} />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Phone Number">
                <InputBox icon={<Phone className="w-4 h-4" />} name="mobile" placeholder="Enter phone number" type="tel" value={formData.mobile} onChange={handleChange} />
              </Field>
              <Field label="Date of Birth">
                <InputBox icon={<Calendar className="w-4 h-4" />} name="dob" placeholder="DD / MM / YYYY" type="text" value={formData.dob} onChange={handleChange} />
              </Field>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="College / University">
                <InputBox icon={<School className="w-4 h-4" />} name="college_n_university" placeholder="Enter college or university" type="text" value={formData.college_n_university} onChange={handleChange} />
              </Field>
              <Field label="Degree">
                <SelectBox name="degree" value={formData.degree} onChange={handleChange} icon={<GraduationCap className="w-4 h-4" />}>
                  <option value="">Select degree</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>B.Sc</option>
                  <option>MBA</option>
                </SelectBox>
              </Field>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Tech Stack">
                <SelectBox name="tech_stack" value={formData.tech_stack} onChange={handleChange} icon={<BookOpen className="w-4 h-4" />}>
                  <option value="">Select Your Tech Stack</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Flutter Development</option>
                  <option>FullStack Development</option>
                  <option>Python Development</option>
                  <option>Server & Deployment</option>
                </SelectBox>
              </Field>
              <Field label="Experience Level">
                <SelectBox name="experience" value={formData.experience} onChange={handleChange} icon={<BarChart2 className="w-4 h-4" />}>
                  <option value="">Select level</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                </SelectBox>
              </Field>
            </div>


             <div className="grid md:grid-cols-1 gap-4">
              <Field label="City">
                <InputBox icon={<MapPin className="w-4 h-4" />} name="city" placeholder="Enter Your City" type="text" value={formData.city} onChange={handleChange} />
              </Field>
             
            </div>
            {/* Password */}
            

            {/* Submit */}
            
            <button
              type="button"
              onClick={()=>submitForm()}
              className="w-full h-13 py-3.5 rounded-xl text-white font-semibold text-base tracking-wide shadow-lg transition-all hover:opacity-90 active:scale-[0.99]"
              style={{
                background: "linear-gradient(90deg, #3b5bdb 0%, #7048e8 100%)",
                boxShadow: "0 8px 24px rgba(59,91,219,0.35)",
              }}
            >
              <div className="flex items-center justify-center gap-5">
                {
                  showloader ? <Spinner></Spinner> : "Register Now"
                }
                
              </div>
             
            </button>

       
            

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              Your information is safe with us.
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function InputBox({ icon, name, placeholder, type, value, onChange }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 pl-11 pr-4 rounded-xl text-sm text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 transition-all"
        style={{ focusRingColor: "#3b5bdb" }}
      />
    </div>
  );
}

const FeeSummary = () =>{
    return <div className="w-full ">
  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-900">
      Fee Summary
    </h2>

    <p className="mt-2 text-slate-500">
      Review your payment details before proceeding.
    </p>
  </div>

  {/* Fee Details */}
  <div className="space-y-5">
    {/* Registration Fee */}
    <div className="flex items-center justify-between">
      <p className="text-slate-600 text-lg">
        Registration Fee
      </p>

      <p className="font-semibold text-slate-900 text-lg">
        ₹4,999
      </p>
    </div>

    {/* GST */}
    <div className="flex items-center justify-between">
      <p className="text-slate-600 text-lg">
        GST (18%)
      </p>

      <p className="font-semibold text-slate-900 text-lg">
        ₹900
      </p>
    </div>

    {/* Divider */}
    <div className="border-t border-dashed border-slate-200 pt-5">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-slate-900">
          Total Amount
        </p>

        <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ₹5,899
        </p>
      </div>
    </div>
  </div>


  {/* Button */}
  <button className="mt-10 w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300">
    Proceed to Payment
  </button>

  {/* Secure Text */}
  <div className="mt-5 flex items-center justify-center gap-2 text-slate-400 text-sm">
    <span>🔒</span>
    <p>Secure payment powered by Razorpay</p>
  </div>
</div>
}

function SelectBox({ icon, name, value, onChange, children }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">{icon}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-12 pl-11 pr-8 rounded-xl text-sm text-gray-700 border border-gray-200 bg-white focus:outline-none focus:ring-2 appearance-none transition-all cursor-pointer"
      >
        {children}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
    </div>
  );
}