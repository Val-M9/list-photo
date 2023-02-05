export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Support = {
  url: string;
  text: string;
};

export type UserInfoDto = {
  data: UserData;
  support: Support;
};
