'use client'

import { useState } from 'react'
import { site } from '@/lib/site'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// If this is ever cleared, the form tells people to call so a lead is never silently lost.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeezavv'

const SERVICES = ['AC repair', 'New AC or replacement', 'Mini split', 'Heating or heat pump', 'AC maintenance', 'Ductwork', 'Mobile home AC', 'Something else']
const SOURCES = ['Google', 'Facebook', 'Friend, family or neighbor', 'Saw your truck or a job you did', 'Worked with you before', 'Other']

const field = 'w-full rounded border border-muted bg-white px-4 py-3 text-[18px] text-ink placeholder:text-muted focus:border-black'
const lbl = 'mb-1.5 block text-[16px] font-semibold text-ink'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const callText = `Please call us at ${site.phoneDisplay}.`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage(`Our form is not set up yet. ${callText}`)
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMessage('')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (res.ok) { setStatus('success'); form.reset() }
      else {
        const json = await res.json().catch(() => null)
        setErrorMessage(json?.errors?.[0]?.message ?? `Something went wrong. ${callText}`)
        setStatus('error')
      }
    } catch {
      setErrorMessage(`We could not send your message. ${callText}`)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="bg-surface p-8">
        <p className="font-display text-[24px] font-semibold">Thanks, we got your message.</p>
        <p className="mt-2 text-[18px] leading-[1.6]">We’ll get back to you. If your AC is down, call {site.phoneDisplay}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New service request from premium-air-services.com" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className={lbl}>Name <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" required autoComplete="name" className={field} /></div>
        <div><label htmlFor="phone" className={lbl}>Phone <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} /></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="email" className={lbl}>Email</label><input id="email" name="email" type="email" autoComplete="email" className={field} /></div>
        <div><label htmlFor="town" className={lbl}>Town or address</label><input id="town" name="town" type="text" autoComplete="street-address" className={field} /></div>
      </div>
      <div>
        <label htmlFor="service" className={lbl}>What do you need?</label>
        <select id="service" name="service" className={field} defaultValue=""><option value="">Choose one</option>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <div>
        <label htmlFor="source" className={lbl}>How did you find us?</label>
        <select id="source" name="source" className={field} defaultValue=""><option value="">Choose one</option>{SOURCES.map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <div>
        <label htmlFor="message" className={lbl}>What is your system doing? <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" required rows={5} className={`${field} resize-y`} />
      </div>
      <p className="text-[16px] text-muted">Fields marked * are required.</p>
      {status === 'error' && <p role="alert" className="rounded border-2 border-black bg-surface px-4 py-3 text-[17px] font-semibold text-ink">{errorMessage}</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-dark w-full disabled:cursor-not-allowed disabled:opacity-70">{status === 'loading' ? 'Sending...' : 'Send my request'}</button>
    </form>
  )
}
