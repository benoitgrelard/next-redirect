'use server';

import { redirect } from 'next/navigation';

export async function action(formData: FormData) {
  if (formData.get('redirect_from') === 'server') {
    redirect('/email');
  }

  return { redirect: true, url: '/email' };
}
