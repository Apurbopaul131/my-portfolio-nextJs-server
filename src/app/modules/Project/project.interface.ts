export type TProjectCategory = 'frontend' | 'backend' | 'fullstack';
export type TProject = {
  title: string;
  year: string;
  category: TProjectCategory;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
  technologies: string;
  author: string;
};
