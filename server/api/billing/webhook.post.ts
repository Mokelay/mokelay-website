import { getHeader, readRawBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readRawBody(event)
  const signature = getHeader(event, 'stripe-signature')
  const config = useRuntimeConfig(event)

  if (!config.stripeWebhookSecret) {
    return {
      received: true,
      mode: 'placeholder',
      message: 'Stripe webhook secret is not configured yet.',
    }
  }

  if (!body || !signature) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing Stripe webhook body or signature.',
    })
  }

  return {
    received: true,
    mode: 'configured',
    message: 'Stripe signature verification will be implemented with Billing phase two.',
  }
})
