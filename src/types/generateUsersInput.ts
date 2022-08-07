export enum Gender {
  Male = "male",
  Female = "female",
  Both = "both",
}

export type Input = {
  gender: Gender;
  numOfUsers: number;
};
