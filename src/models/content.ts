export class Content {
    private temperatura: string = "0"
    private luminosidade: string = "0"

    constructor(temperatura: string, luminosidade: string) {
        this.temperatura = temperatura
        this.luminosidade = luminosidade
    }

    public getTemperatura():string {
        return this.temperatura
    }

    public setTemperatura(temperatura: string) {
        this.temperatura = temperatura
    }

    public getLuminosidade(): string {
        return this.luminosidade
    }

    public setLuminosidade(luminosidade: string) {
        this.luminosidade = luminosidade
    }

}