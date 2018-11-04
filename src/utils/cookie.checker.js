import cookies from './cookies';

/**
 * Checks whether theres a cookie that signifies that theres
 * am active session
 * @returns {boolean} Returns true if theres an active session, false otherwise
 */
export function cookieChecker() {
  return cookies.get('session') !== null;
}

export default cookieChecker;