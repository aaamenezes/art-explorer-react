import { ParsedUrlQuery } from 'querystring';

export function parseSearchParams(searchParams: ParsedUrlQuery['slug']) {
  if (Array.isArray(searchParams)) return searchParams[0];
  if (searchParams) return searchParams;
  return '';
}
