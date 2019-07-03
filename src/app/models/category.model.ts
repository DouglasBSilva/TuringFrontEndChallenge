

export class Category{
	
	public category_id: number;
	public name: string;
	public description: string;
	public department_id: number;

	constructor(category_id: number, name: string, description: string, department_id: number){
		this.category_id = category_id;
		this.department_id = department_id;
		this.name = name;
		this.description = description;
	}

}
