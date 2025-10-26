import { ParsedUrlQuery } from 'querystring';

export interface HomeTemplateProps {
  searchParams?: Record<string, ParsedUrlQuery['slug']>;
}
