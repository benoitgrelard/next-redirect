'use client';

import { RedirectType, redirect } from 'next/navigation';
import { action } from './action';

async function formAction(formData: FormData) {
  const result = await action(formData);
  if (result.redirect) redirect(result.url, RedirectType.push);
}

export function Forms() {
  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="redirect_from" value="server" />
        <button type="submit">Trigger server action (which redirects from server)</button>
      </form>

      <br />

      <form action={formAction}>
        <input type="hidden" name="redirect_from" value="client" />
        <button type="submit">Trigger server action (then redirect from client)</button>
      </form>
    </>
  );
}
