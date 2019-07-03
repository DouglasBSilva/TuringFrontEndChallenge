export class Review {

  public name: string;
  public review: string;
  public rating: number;
  public created_on: string;

  contructor(
    name?: string,
    review?: string,
    rating?: number,
    created_on?: string,
  ) {
    this.name = name;
    this.review = review;
    this.rating = rating;
    this.created_on = created_on;
  }
}
