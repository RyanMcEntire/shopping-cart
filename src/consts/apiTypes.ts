export interface ApiData {
  pagination: Pagination;
  releases?: ReleasesEntity[] | null;
}
export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: Urls;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Urls {}
export interface ReleasesEntity {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: BasicInformation;
}
export interface BasicInformation {
  id: number;
  master_id: number;
  master_url?: string | null;
  resource_url: string;
  thumb: string;
  cover_image: string;
  title: string;
  year: number;
  formats?: FormatsEntity[] | null;
  artists?: ArtistsEntity[] | null;
  labels?: LabelsEntity[] | null;
  genres?: string[] | null;
  styles?: string[] | null;
}
export interface FormatsEntity {
  name: string;
  qty: string;
  text?: string | null;
  descriptions?: string[] | null;
}
export interface ArtistsEntity {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}
export interface LabelsEntity {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
}
