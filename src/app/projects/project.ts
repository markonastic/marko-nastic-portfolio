export interface ProjectInterface {
  name: string;
  madeWith: string;
  description: string;
  pages: [{
    name: string,
    url: string
  }];
  images: string[];
}
