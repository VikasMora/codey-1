import Cookies from 'js-cookie'

// Cookie names
const AUTH_TOKEN_COOKIE = 'auth_token'
const USERNAME_COOKIE = 'username'
const IS_TEACHER_COOKIE = 'is_teacher'
const SESSION_EXPIRY_HOURS = 24 // 24 hours session

/**
 * Set authentication cookies after successful login
 * @param {string} username - The authenticated user's username
 * @param {boolean} isTeacher - Whether the user is a teacher
 * @param {string} token - Optional authentication token (can be username for now)
 */
export const setAuthCookies = (username, isTeacher = false, token = null) => {
  const expires = SESSION_EXPIRY_HOURS / 24 // Convert to days for js-cookie

  // Set username cookie
  Cookies.set(USERNAME_COOKIE, username, { 
    expires, 
    secure: false, // Set to true in production with HTTPS
    sameSite: 'lax'
  })

  // Set isTeacher cookie
  Cookies.set(IS_TEACHER_COOKIE, isTeacher.toString(), { 
    expires, 
    secure: false, // Set to true in production with HTTPS
    sameSite: 'lax'
  })

  // Set auth token cookie (using username as token for now)
  Cookies.set(AUTH_TOKEN_COOKIE, token || username, { 
    expires, 
    secure: false, // Set to true in production with HTTPS
    sameSite: 'lax'
  })
}

/**
 * Get the current authenticated username from cookies
 * @returns {string|null} Username if authenticated, null otherwise
 */
export const getAuthenticatedUser = () => {
  return Cookies.get(USERNAME_COOKIE) || null
}

/**
 * Get the authentication token from cookies
 * @returns {string|null} Auth token if exists, null otherwise
 */
export const getAuthToken = () => {
  return Cookies.get(AUTH_TOKEN_COOKIE) || null
}

/**
 * Get the user's teacher status from cookies
 * @returns {boolean} True if user is a teacher, false otherwise
 */
export const getIsTeacher = () => {
  const isTeacherStr = Cookies.get(IS_TEACHER_COOKIE)
  return isTeacherStr === 'true'
}

/**
 * Get the user's role from cookies
 * @returns {string} 'teacher' or 'student' based on isTeacher flag
 */
export const getUserRole = () => {
  return getIsTeacher() ? 'teacher' : 'student'
}

/**
 * Check if user is currently authenticated
 * @returns {boolean} True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
  const username = getAuthenticatedUser()
  const token = getAuthToken()
  return !!(username && token)
}

/**
 * Clear all authentication cookies (logout)
 */
export const clearAuthCookies = () => {
  Cookies.remove(USERNAME_COOKIE)
  Cookies.remove(AUTH_TOKEN_COOKIE)
  Cookies.remove(IS_TEACHER_COOKIE)
}

/**
 * Refresh authentication cookies (extend session)
 * @param {string} username - The user's username
 * @param {boolean} isTeacher - Whether the user is a teacher
 * @param {string} token - Optional authentication token
 */
export const refreshAuthCookies = (username, isTeacher = false, token = null) => {
  if (isAuthenticated()) {
    setAuthCookies(username, isTeacher, token)
  }
}