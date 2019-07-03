

export class Department{
	
	public department_id: number;
	public name: string;
	public description: string;

	constructor(department_id: number, name: string, description: string){
		this.department_id = department_id;
		this.name = name;
		this.description = description;
	}
}
