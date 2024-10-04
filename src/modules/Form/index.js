import Input from "../../components/input";

 const Form = () => {
  return (
    <div className="bg-white w-[500px] h-[700px] shadow-lg rounded-lg flex flex-col justify-center items-center">
    <div className=" text-4xl font-extrabold">Welcome</div>
    <div className="text-xl font-light mb-10" >Sign up now to get started !</div> 

    <Input label="Full Name" name="Name"  placeholder="enter Your Full Name" className="mb-6"/>
    <Input label="Email Address" name="Email"  placeholder="enter Your Email" className="mb-6" />
    <Input label="Password" name="Password"  placeholder="enter Your Password" className="mb-6"/>
    </div>
  )
}


export default Form;