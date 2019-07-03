

export class CategoryBasic{
	
	public category_id: number;
	public name: string;
	public department_id: number;

	constructor(category_id: number, name: string, department_id: number){
		this.category_id = category_id;
		this.department_id = department_id;
		this.name = name;
	}

}