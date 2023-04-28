
export interface Event {
  id: number;
  message: string;
  date: string;

  doctor: string;

}

export const events = [
  {
    id: 1,
    message: "tooth extraction",
    date: "21.09.2025",
    doctor: "Torekhan",
  },
  {
    id: 2,
    message: "analyse blood",
    date: "21.09.2025",
    doctor: "Erdauit",
  }
]
