import { PencilIcon, PlusIcon, TrashIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
// import { deleteInvoice, orderInvoice } from '@/app/lib/actions';

export function CreateStudent() {
  return (
    <Link
      href="/dashboard/customers"
      className="flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Student</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
 
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
          <TrashIcon className="w-4" />
      </button>
    </form>
  );
}

export function OrderInvoice() { 
  // const handleOrderInvoice = async () => {
  //   const result = await orderInvoice(); // Chama a função orderInvoice quando o botão é clicado
  //   console.log(result.message); // Exibe a mensagem de retorno no console, você pode tratar de acordo com sua necessidade
  // };
  return (
    <form> {/*onSubmit={(e) => e.preventDefault()}*/}
      <button className="rounded-md border p-2 hover:bg-gray-100"> {/* onClick={handleOrderInvoice} */}
        <span className="sr-only">Order</span>
        <ArrowsUpDownIcon className="w-4" />
      </button>
    </form>
  );
}