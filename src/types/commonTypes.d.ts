export type TSlide = {
  title: string;
  specialization?: string;
  text: string;
  image: string;
};

export type TSlideReview = {
  name: string;
  role: string;
  date: string;
  review: string;
  imageUrl: string;
};

export interface IProject {
  _id: string;
  title: string;
  imageUrl: string;
  status: string;
  link: string;
  description: string;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: {
      _id: string;
      name: string;
      link: string;
    };
    role: {
      _id: string;
      name: string;
    };
  }>;
}
