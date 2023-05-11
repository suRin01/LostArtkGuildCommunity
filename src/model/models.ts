export type searchParams = {
  searchType: string;
  searchValue: number | string
}


export type jwtToken = {
  payload: {
    idx: number;
    username: string;
    sub: string
  };
  access_token: string;
  refresh_token: string;
}