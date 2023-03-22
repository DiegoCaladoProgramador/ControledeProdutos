class Produto {
    constructor(){
        this.id = 1;
        this.arrayProdutos=[];
    }

    adicionar(){
        let produto = this.lerDados();
        if(this.validar(produto)){
            this.salvar(produto);
        }

        this.listar();
        this.cancelar();
    }

    lerDados(){
        let produto = {}
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value;
        produto.precoProduto = document.getElementById('pdpreco').value;

        return produto;
    }

    validar(produto){
        let msg = '';

        if (produto.nomeProduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto! \n';
        }

        if (produto.precoProduto == ''){
            msg += 'Por favor, insira corretamente o Valor do produto! \n';
        }
        if(msg != ''){
            return false;
        }
        return true;
    }

    salvar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img');
            imagem.src = 'delete.png';
            imagem.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")")
            td_del.appendChild(imagem);
        }
    }

    cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }

    deletar(id){
        let tbody = document.getElementById('tbody');
        for (let i = 0 ; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    }
}

var produto = new Produto();