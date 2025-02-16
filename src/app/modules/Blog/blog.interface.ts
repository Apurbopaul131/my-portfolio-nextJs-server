/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
export type BlogCategory =
  | 'Web Development'
  | 'Mobile App Development'
  | 'Software Engineering & Best Practices'
  | 'Programming Languages'
  | 'Data Science & Machine Learning'
  | 'Cloud Computing & DevOps'
  | 'Cybersecurity & Ethical Hacking'
  | 'Game Development'
  | 'Blockchain & Web3 Development'
  | 'Tech Trends & Career Growth';
export interface TBlog {
  title: string;
  content: string;
  author: string;
  image: string;
  category: BlogCategory;
  publish_date: Date;
}

export interface BlogModel extends Model<TBlog> {
  isBlogExistById(id: string): Promise<TBlog>;
}
