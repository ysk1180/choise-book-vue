import { BookData } from '@/types/book.t';

export interface State {
  keyword: string;
  loading: boolean;
  books: BookData[] | [];
}