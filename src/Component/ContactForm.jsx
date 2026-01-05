import React, {useState} from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const validate = () => {
    if (!name.trim()) return 'Please enter your name.'
    if (!email.trim()) return 'Please enter your email.'
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
    if (!re.test(email)) return 'Please enter a valid email.'
    if (!message.trim()) return 'Please enter a message.'
    if (honeypot) return 'Bot detected.'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    setSubmitting(true)
    try {
      // Simulate async submission. Replace with real API call as needed.
      await new Promise((r) => setTimeout(r, 900))
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError('Submission failed. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className='w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg'>
        <h3 className='text-xl font-semibold mb-2'>Thanks — we received your message</h3>
        <p className='text-sm text-gray-700'>We will get back to you shortly.</p>
        <button onClick={() => setSuccess(false)} className='mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg'>Send another</button>
      </div>
    )
  }

  return (
    <div className='w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg'>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <input type='text' name='company' value={honeypot} onChange={(e)=>setHoneypot(e.target.value)} className='hidden' aria-hidden='true' autoComplete='off' />

        <div>
          <label className='sr-only' htmlFor='name'>Your Name</label>
          <input 
            id='name'
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-6 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 '
            required
          />
        </div>

        <div>
          <label className='sr-only' htmlFor='email'>Your Email</label>
          <input
            id='email'
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-6 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100'
            required
          />
        </div>

        <div>
          <label className='sr-only' htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            placeholder='Your Message'
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200'
            required
          />
        </div>

        {error && <p className='text-sm text-red-600'>{error}</p>}

        <div className='flex justify-center'>
          <button type='submit' disabled={submitting} className={`rounded-lg border shadow-xl px-8 py-2 bg-indigo-500 hover:bg-indigo-300 text-white transition duration-300 ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}>
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
