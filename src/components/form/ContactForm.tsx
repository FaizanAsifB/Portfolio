import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z
    .string()
    .min(5, {
      message: 'Message must be at least 5 characters.'
    })
    .max(500, {
      message: 'Message must not be longer than 500 characters.'
    })
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  async function onSubmit(formValues: z.infer<typeof ContactFormSchema>) {
    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
      })

      if (!res.ok) {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='max-w-[500px]'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative mt-6 lg:mt-10'>
                  <Input placeholder='Name' {...field} />
                  <FormLabel>Name</FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className='relative mt-6 lg:mt-10'>
                  <Input placeholder='Email' {...field} />
                  <FormLabel>Email</FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <div className='relative mt-10'>
                  <Textarea placeholder='Message' {...field} />
                  <FormLabel className='top-0 peer-focus:top-0'>
                    Message
                  </FormLabel>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='my-8 grid w-full place-items-center'>
          <Button
            type='submit'
            disabled={
              form.formState.isSubmitting || form.formState.isSubmitSuccessful
            }
          >
            {form.formState.isSubmitting && (
              <>
                <LoaderCircle className='animate-spin' /> Sending...
              </>
            )}
            {form.formState.isSubmitSuccessful && (
              <>
                <CircleCheck /> Email Sent
              </>
            )}
            {!form.formState.isSubmitSuccessful &&
              !form.formState.isSubmitting && (
                <>
                  <Send size={20} />
                  Submit
                </>
              )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default ContactForm
