import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;  
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

  const prevState = {}; // Estado anterior da fatura (se aplicável)
  const formData = new FormData(); // Dados do formulário com as atualizações

// Chama a função updateInvoice com os parâmetros apropriados
  updateInvoice(id, prevState, formData)
  .then((result) => {
    // Lida com o resultado da chamada da função
    console.log('Resultado da atualização da fatura:', result);
  })
  .catch((error) => {
    // Lida com erros, se houver algum
    console.error('Erro ao atualizar a fatura:', error);
  });

    if (!invoice) {
      notFound();
    }
      
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          { label: 'Edit Invoice', href: `/dashboard/invoices/${id}/edit`, active: true },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}