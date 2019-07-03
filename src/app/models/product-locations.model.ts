export class Review {

  public category_id: number;
  public category_name: string;
  public department_id: number;
  public department_name: string;

  contructor(
    category_id?: number,
    category_name?: string,
    department_id?: number,
    department_name?: string,
  ){
    this.category_id = category_id;
    this.category_name = category_name;
    this.department_id = department_id;
    this.department_name = department_name;
  }

}
