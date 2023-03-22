class Produto {
    constructor(){
        this.id = 1;
        this.arrayProdutos=[];
    }

    adicionar(){
        let produto = this.lerDados();
        if(this.validar(produto) == true){
            this.Salvar(Produto);
        }

        this.listar();
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
            alert(msg);
            return false;
        }
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
            td_del.appendChild(imagem);
        }
    }
}

var produto = new Produto();