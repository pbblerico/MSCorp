export interface Application {
  id: number;
  message: string;
  date: string;

  client: string;
}

export const applications = [
  {
    id: 1,
    message: "Vpravit' nogu",
    date: "04.05.2023",
    client: "Miras",
  },
]
