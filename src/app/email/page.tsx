export default async function EmailPage() {
  console.log('EmailPage');
  await sendEmail();

  return (
    <main>
      <p>We have sent you an email</p>
    </main>
  );
}

async function sendEmail() {
  console.log('sendEmail');
}
