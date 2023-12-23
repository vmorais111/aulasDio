saldo=1000
deposito=0
contador_deposito=0
saque=0
contador_saque=0
usuario_lista={}
conta_corrente_lista=[]
contador_contas=0

texticulo='''
           ***Bem vindo ao Banco XYZ***            
==================================================
    Por favor, insira qual operação deseja fazer:
    [1] Depósito
    [2] Saque (limite de 3 por dia)
    [3] Extrato
    [4] Cadastrar Usuário
    [5] Criar conta corrente
    [6] Exibir contas e usuarios
    [0] Sair
==================================================
'''

def criar_usuario():
    # criação dos valores da função - usuário e chave
    chave=''
    usuario={'nome':'',
             'data_nascimento':'',
             'cpf':'',
             'endereço':{
                 'logradouro':'',
                 'numero':'',
                 'bairro':'',
                 'cidade':'',
                 'estado':''
            }}
    
    # texto inicial
    print('''
                  Cadastro de Usuário
               =========================
Insira os dados a seguir para cadastrar um novo usuário:
          ''')
    
    # controle de input dos dados/ popular os campos dos usuário
    for i in usuario:
        if i == 'endereço':
          for x in usuario[i]:
            usuario[i][x]=input (f'Insira o {x}: ')
        elif i=='cpf':
            verify=input(f'Insira o {i}(utilize apenas números): ')
            if not verify in usuario_lista:
                usuario[i]=verify
                chave= verify
            else:
                print('Usuário já cadastrado! Tente novamente!')
        else:
            usuario[i] = input (f'Insira o {i}: ')
    
    # inserção dos dados do usuário no dicionário (chave como CPF)
    usuario_lista.update({chave:usuario})

def criar_conta_corrente():
    global contador_contas
    conta_corrente={
             'agência':'0001',
             'numero da conta':0,
             'usuario':{}
            }
    
    for i in conta_corrente:
        if i == 'agência':
            continue
        elif i == 'numero da conta':
            contador_contas+=1
            conta_corrente[i]=contador_contas
        else:
            verify = input ('Insira o cpf (em numeros) do usuário vinculado a essa conta:')
            if verify in usuario_lista:
                conta_corrente[i]=usuario_lista[verify]
            else:
                print('ERROR! Operação não efetuada!')
    
    conta_corrente_lista.append(conta_corrente)


def verifica_contador_saque():
    global contador_saque
    if contador_saque>=3:
        print('Erro ao realizar a operação! Limite de 3 saques diários ultrapassado!')

def retirar_dinheiro(saldo_retirado):
    global contador_saque,saque,saldo
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

def depositar_dinheiro(saldo_depositado):
    global deposito,contador_deposito,saldo
    deposito+=saldo_depositado
    contador_deposito+=1
    saldo+=saldo_depositado
    print(f'Operação realizada com sucesso! Seu saldo atual é de: {saldo} R$')

def extrato_conta():  
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

while True:
    x=input( texticulo + '\nSelecione a operação desejada: ')
    if x=='0':
        break
    if x=='1':
        saldo_depositado=float(input('Insira o valor a ser depositado: '))
        depositar_dinheiro(saldo_depositado)
    if x=='2':
        verifica_contador_saque()
        saldo_retirado=float(input('Insira o valor de seu saque(limite de 500,00 R$): '))
        retirar_dinheiro(saldo_retirado)
    if x=='3':
        extrato_conta()
    if x=='4':
        criar_usuario()
    if x=='5':
        criar_conta_corrente()
    if x=='6':
        print(f'Usuários: {usuario_lista}')
        print(f'Contas: {conta_corrente_lista}')
