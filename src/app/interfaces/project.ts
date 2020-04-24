export interface IProject {
  name: string;
  madeWith: string;
  description: string;
  pages: IProjectPages[];
  images: string[];
}

export interface IProjectPages {
  name: string;
  url: string;
}
