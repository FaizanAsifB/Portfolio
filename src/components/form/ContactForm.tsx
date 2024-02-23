import { zodResolver } from '@hookform/resolvers/zod'
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
import { Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.'
    })
    .max(250, {
      message: 'Message must not be longer than 250 characters.'
    })
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values)
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
                <div className='relative mt-10'>
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
                <div className='relative mt-10'>
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
        <div className='w-full grid place-items-center my-8'>
          <Button type='submit'>
            <Send size={20} />
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default ContactForm
