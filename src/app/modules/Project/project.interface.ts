export type TProjectCategory = 'frontend' | 'backend' | 'fullstack';
export type TProject = {
  title: string;
  year: string;
  category: TProjectCategory;
  description: string;
  image: string;
  liveLink: string;
  futureScope: string;
  challenges: string;
  repoLink: string;
  technologies: string;
  author: string;
};
