import { ContactFormSchema } from '@/components/form/ContactForm'
import type { APIRoute } from 'astro'
import { Resend } from 'resend'

export const prerender = false

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()

  const validatedFields = ContactFormSchema.safeParse(body)

  if (!validatedFields.success) {
    return new Response(null, {
      status: 400,
      statusText: 'Missing Fields. Failed to send email.'
    })
  }

  const { email, name, message } = validatedFields.data

  const send = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'faizanasif.dev@gmail.com',
    subject: 'Hello',
    html: '<h1>Hello World!</h1>',
    text: email + name + message
  })

  if (send.data) {
    return new Response(JSON.stringify({ message: send.data }), {
      status: 200,
      statusText: 'OK'
    })
  } else {
    return new Response(JSON.stringify({ message: send.error }), {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}
