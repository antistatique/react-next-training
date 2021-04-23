import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type FormData = {
  lastName: string;
  firstName: string;
  email: string;
  message: string;
};

const Form = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);

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
        {errors.firstName && <span>First name is required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName">Last name</label>
        <input 
          id="lastName" 
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i }) } 
          placeholder="Last name"
          className="border" 
        />
        {errors.lastName && <span>Last name is required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">First name</label>
        <input 
          id="email" 
          type="email" {...register("email", {required: true} )} 
          placeholder="Email" 
          className="border"
        />
        {errors.email && <span>Email is required</span>}
      </div>

      <div className="flex flex-col">
        <textarea 
          {...register("message", {required: true, maxLength: 240})} 
          placeholder="Message 240 caractères max"
          className="border"
        />
        {errors.message && errors.message.type === "required" && <span>Message is required</span>}
        {errors.message && errors.message.type === "maxLength" && <span>Max length exceeded</span> }
      </div>

      <input type="submit" />
    </form>
  );

}



export default Form;