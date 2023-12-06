saldo=1000
deposito=0
contador_deposito=0
saque=0
contador_saque=0

texticulo='''
           ***Bem vindo ao Banco XYZ***            
==================================================
    Por favor, insira qual operação deseja fazer:
    [1] Depósito
    [2] Saque (limite de 3 por dia)
    [3] Extrato
    [0] Sair
==================================================
'''

while True:
    x=input( texticulo + '\nSelecione a operação desejada: ')
    if x=='0':
        break
    if x=='1':
        saldo_depositado=float(input('Insira o valor a ser depositado: '))
        deposito+=saldo_depositado
        contador_deposito+=1
        saldo+=saldo_depositado
        print(f'Operação realizada com sucesso! Seu saldo atual é de: {saldo} R$')
    if x=='2':
        if contador_saque<3:
            saldo_retirado=float(input('Insira o valor de seu saque(limite de 500,00 R$): '))
            if saldo_retirado<=500 and saldo_retirado<=saldo:
                contador_saque+=1
                saque+=saldo_retirado
                saldo-=saldo_retirado
                print(f'Operação realizada com sucesso! Seu saldo atual é de: {saldo}')
            elif saldo_retirado>saldo and saldo_retirado<=500:
                print('Saque não realizado. Valor digitado é maior que o dinheiro disponível na conta! Seu saldo atual é de '+
                      f'{saldo} R$!')
            else:
                print('Erro ao realizar a operação. Valor digitado é maior que o limite!')
        else:
            print('Erro ao realizar a operação! Limite de 3 saques diários ultrapassado!')
    if x=='3':
        print(f'''
                Extrato da conta - Banco XYZ
              ================================
                Saldo: {saldo}
                Total depositado: {deposito}
                Total sacado: {saque}
                Qntd saques realizados:{contador_saque}
                Qntd depositos realizados: {contador_deposito}
              ================================
              ''')
    

