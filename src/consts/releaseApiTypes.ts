export interface ReleaseApiData {
  id: number;
  status: string;
  year: number;
  resource_url: string;
  uri: string;
  artists?: ArtistsEntityOrExtraartistsEntity[] | null;
  artists_sort: string;
  labels?: LabelsEntity[] | null;
  series?: null[] | null;
  companies?: null[] | null;
  formats?: FormatsEntity[] | null;
  data_quality: string;
  community: Community;
  format_quantity: number;
  date_added: string;
  date_changed: string;
  num_for_sale: number;
  lowest_price?: null;
  title: string;
  country: string;
  released: string;
  released_formatted: string;
  identifiers?: null[] | null;
  genres?: string[] | null;
  styles?: string[] | null;
  tracklist?: TracklistEntity[] | null;
  extraartists?: null[] | null;
  images?: ImagesEntity[] | null;
  thumb: string;
  blocked_from_sale: boolean;
}
export interface ArtistsEntityOrExtraartistsEntity {
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
export interface FormatsEntity {
  name: string;
  qty: string;
  text: string;
  descriptions?: string[] | null;
}
export interface Community {
  have: number;
  want: number;
  rating: Rating;
  submitter: ContributorsEntityOrSubmitter;
  contributors?: ContributorsEntityOrSubmitter[] | null;
  data_quality: string;
  status: string;
}
export interface Rating {
  count: number;
  average: number;
}
export interface ContributorsEntityOrSubmitter {
  username: string;
  resource_url: string;
}
export interface TracklistEntity {
  position: string;
  type_: string;
  title: string;
  extraartists?: ArtistsEntityOrExtraartistsEntity[] | null;
  duration: string;
}
export interface ImagesEntity {
  type: string;
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
}

export interface Release {
  id: number;
  title: string;
  artist_name: string;
  label: string;
  format: string;
  release_date: string;
  genre: string;
  style: string;
  track_list: Track[];
  album_art: string;
}

export interface Track {
  position: number;
  type_: string;
  title: string;
  duration: string;
}
