let saldo = 1000;
let opcao;

do {
    opcao = Number(prompt("1 - Depósito\n",  "2 - Saque\n", "3 - Encerrar"
    ));

    switch (opcao) {

        case 1:
            let deposito = Number(prompt("Digite o valor do depósito"));
            saldo += deposito;
            alert("Saldo atualizado: R$ " + saldo);
            break;

        case 2:
            let saque = Number(prompt("Digite o valor do saque"));

            if (saque <= saldo) {
                saldo -= saque;
                alert("Saldo atualizado: R$ " + saldo);
            } else {
                alert("Saldo insuficiente");
            }
            break;

        case 3:
            alert("Programa encerrado");
            break;

        default:
            alert("Opção inválida");
    }

} while (opcao != 3);




