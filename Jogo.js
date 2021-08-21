class jogo{
    constructor(data,hora,local,adversario,juiz){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.adversario = adversario;
        this.juiz = juiz;
    }

    getData(){
        return this.data;
    }
    setData(data){
        this.data = data;

    }
}

module.exports = jogo;

