export class Content {
    private temperatura: string = "0"

    constructor(temperatura: string) {
        this.temperatura = temperatura
    }

    public getTemperatura():string {
        return this.temperatura
    }

    public setTemperatura(temperatura: string) {
        this.temperatura = temperatura
    }

}