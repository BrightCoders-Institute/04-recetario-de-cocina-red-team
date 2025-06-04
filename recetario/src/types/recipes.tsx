export type Recipes = {
  id: string;
  name: string;
  image: string;
  category: string;
  servings: number;
  ingredients: { 
    name: string; 
    quantity: string}[];
};