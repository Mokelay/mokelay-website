import { createError, readBody } from 'h3'
import { formatValidationError, loginSchema } from '~~/server/utils/validation'
import { findUserByEmail, toPublicUser } from '~~/server/utils/user-store'

export default defineEventHandler(async (event) => {
  const parsed = loginSchema.safeParse(await readBody(event))

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: formatValidationError(parsed.error),
    })
  }

  const user = await findUserByEmail(parsed.data.email)

  if (!user || !(await verifyPassword(user.passwordHash, parsed.data.password))) {
    throw createError({
      statusCode: 401,
      statusMessage: '邮箱或密码不正确。',
    })
  }

  const publicUser = toPublicUser(user)

  await setUserSession(event, {
    user: publicUser,
    loggedInAt: new Date().toISOString(),
  })

  return { user: publicUser }
})
