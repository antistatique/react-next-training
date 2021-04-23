import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const Form = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-10">

      <div className="flex flex-col">
        <label htmlFor="firstName">First name</label>
        <input 
          id="firstName" 
          {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i }) } 
          placeholder="First name"
          className="border" 
        />
        {errors.firstName && "First name is required"}
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName">First name</label>
        <input 
          id="lastName" 
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i }) } 
          placeholder="Last name"
          className="border" 
        />
        {errors.lastName && "Last name is required"}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">First name</label>
        <input 
          id="email" 
          type="email" {...register("email", {required: true} )} 
          placeholder="Email" 
          className="border"
        />
        {errors.email && "Email is required"}
      </div>

      <div className="flex flex-col">
        <textarea 
          {...register("message", { required: true, maxLength: 30 })} 
          placeholder="Message"
          className="border"
        />
        {errors.message && "Message is required"}
      </div>

      <input type="submit" />
    </form>
  );

}

export default Form;