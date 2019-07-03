export class Error  {
    public code: string;
    public message: string;
    public field: string;
    public status: string;

    constructor(
        code: string,
        message: string,
        field: string,
        status: string
    ) {
    this.code = code;
    this.message = message;
    this.field = field;
    this.status = status;
    }



}
