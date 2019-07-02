import jwt_decode from 'jwt-decode';

export function decodeToken<TDecodedValue>(token: string): TDecodedValue {
  return jwt_decode(token);
}