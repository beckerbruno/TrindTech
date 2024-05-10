'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);  

  // return <form action={dispatch}>...</form>;
  
  return (  
  <form action={dispatch}>
  <div className="flex flex-wrap gap-4">
    
    {/* Customer Name */}
    <div className="w-full mb-4">
      <label htmlFor="customer" className="mb-2 block text-sm font-medium">
        Choose customer
      </label>
      <div className="relative">
        <select
          id="customer"
          name="customerId"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((name) => (
            <option key={name.id} value={name.id}>
              {name.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customerId &&
          state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>

    {/* Invoice Amount */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="amount" className="mb-2 block text-sm font-medium">
        Choose an amount
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Enter USD amount"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>
    </div>

    {/* Invoice Status */}
    <fieldset>
      <legend className="mb-2 block text-sm font-medium">
        Set the invoice status
      </legend>
      <div className="flex items-center">
        {/* Pending */}
        <div className="flex items-center mr-4">
          <input
            id="pending"
            name="status"
            type="radio"
            value="pending"
            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
          />
          <label
            htmlFor="pending"
            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
          >
            Pending <ClockIcon className="h-4 w-4" />
          </label>
        </div>
        {/* Paid */}
        <div className="flex items-center">
          <input
            id="paid"
            name="status"
            type="radio"
            value="paid"
            className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
          />
          <label
            htmlFor="paid"
            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
          >
            Paid <CheckIcon className="h-4 w-4" />
          </label>
        </div>
      </div>
    </fieldset>

    {/* First Name */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="first Name" className="mb-2 block text-sm font-medium">
        First Name
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="first-name"
          name="first-name"
          type="string"
          placeholder="Enter first name"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Last Name */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="Last Name" className="mb-2 block text-sm font-medium">
        Last Name
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="last-name"
          name="last-name"
          type="string"
          placeholder="Enter last name"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>
       
    {/* Data de Nascimento */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="dob" className="mb-2 block text-sm font-medium">
        DOB
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="dob"
          name="dob"
          type="string"
          placeholder="DD/MM/AAAA"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* CPF */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="cpf" className="mb-2 block text-sm font-medium">
        CPF
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="cpf"
          name="cpf"
          type="string"
          placeholder="Enter CPF (000.000.000-00)"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Gênero */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="gender" className="mb-2 block text-sm font-medium">
        Gender
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="gender"
          name="gender"
          type="string"
          placeholder="Enter your gender"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Email */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        Email*
      </label>
      <div className="relative mt-8 rounded-md">
        <input
          id="email"
          name="email"
          type="string"
          placeholder="Enter your email"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    <div className="w-full mb-4">
      <label htmlFor="loc" className="mb-2 block text-xl font-big">
        Localização
      </label>
    </div>
  

    {/* CEP */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="cep" className="mb-2 block text-sm font-medium">
        CEP*
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="last-name"
          name="last-name"
          type="string"
          placeholder="Enter last name"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* País */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="country" className="mb-2 block text-sm font-medium">
        Country
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="country"
          name="country"
          type="string"
          placeholder="Enter your Country"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Rua */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="adress" className="mb-2 block text-sm font-medium">
        Adress
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="adress"
          name="adress"
          type="string"
          placeholder="Enter your Adress"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Bairro */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="Neighborhood" className="mb-2 block text-sm font-medium">
        Neighborhood
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="Neighborhood"
          name="Neighborhood"
          type="string"
          placeholder="Enter last name"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Número */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="Nuber" className="mb-2 block text-sm font-medium">
        Number
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="number"
          name="number"
          type="string"
          placeholder="Enter adresses number"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Complemento */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="complement" className="mb-2 block text-sm font-medium">
        Complement
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="complement"
          name="complement"
          type="string"
          placeholder="Enter Complement"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Cidade */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="City" className="mb-2 block text-sm font-medium">
        City
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="city"
          name="city"
          type="string"
          placeholder="Enter your city"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Estado */}
    <div className="w-full lg:w-2/5">
      <label htmlFor="state" className="mb-2 block text-sm font-medium">
        State
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="state-name"
          name="state-name"
          type="string"
          placeholder="Enter state"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>
   
    <div className="w-full lg:w-2/5">
      <label htmlFor="Last Name" className="mb-2 block text-lg font-medium">
        Cursos
      </label>
    </div>

    {/* Cursos */}
    <div className="w-full lg:w-3/5">
      <label htmlFor="courses" className="mb-2 block text-sm font-medium">
        Courses
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="courses"
          name="courses"
          type="string"
          placeholder="What course did you do?"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Data de Conclusão */}
    <div className="w-full lg:w-1/5">
      <label htmlFor="Last Name" className="mb-2 block text-sm font-medium">
        Data de Conclusão
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="date"
          name="date"
          type="string"
          placeholder="DD/MM/AAAA"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Cursos 2 */}
    <div className="w-full lg:w-3/5">
      <label htmlFor="courses" className="mb-2 block text-sm font-medium">
        Courses
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="courses"
          name="courses"
          type="string"
          placeholder="What course did you do?"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Data de Conclusão 2*/}
    <div className="w-full lg:w-1/5">
      <label htmlFor="Last Name" className="mb-2 block text-sm font-medium">
        Data de Conclusão
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id="date"
          name="date"
          type="string"
          placeholder="DD/MM/AAAA"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          required
        />
      </div>
    </div>

    {/* Botão de Adicionar Cursos */}
    <div className="w-full">
      <label htmlFor="Last Name" className="mb-2 block text-sm font-medium">
        
      </label>
      {/* Botão para adicionar mais cursos */}
    </div>
  </div>

  <div className="mt-6 flex justify-end gap-4">
    <Link
      href="/dashboard/invoices"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
    Cancel
    </Link>
    <Button type="submit">Create Invoice</Button>
  </div>
  </form>
 );
} 
