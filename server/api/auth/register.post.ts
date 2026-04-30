import { createError, readBody } from 'h3'
import { formatValidationError, registerSchema } from '~~/server/utils/validation'
import { createUser, findUserByEmail, toPublicUser } from '~~/server/utils/user-store'

export default defineEventHandler(async (event) => {
  const parsed = registerSchema.safeParse(await readBody(event))

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: formatValidationError(parsed.error),
    })
  }

  const existingUser = await findUserByEmail(parsed.data.email)

  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: '该邮箱已经注册，请直接登录。',
    })
  }

  const passwordHash = await hashPassword(parsed.data.password)

  try {
    const user = await createUser({
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash,
    })
    const publicUser = toPublicUser(user)

    await setUserSession(event, {
      user: publicUser,
      loggedInAt: new Date().toISOString(),
    })

    return { user: publicUser }
  } catch (error) {
    const code = typeof error === 'object' && error && 'code' in error ? error.code : undefined

    if (code === '23505') {
      throw createError({
        statusCode: 409,
        statusMessage: '该邮箱已经注册，请直接登录。',
      })
    }

    throw error
  }
})
