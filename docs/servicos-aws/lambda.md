# lambda

## Monitoramento
É possível monitorar as execuções de código lambda utilizando o serviço de CloudWatch da AWS.

No painel, é possível visualizar 'invocations count', 'duration' e 'Error and Success Count' runs count.

### Logs
Ao executar uma função Lambda, é criado um grupo de logs dentro do CloudWatch. Nestes logs, podemos visualizar quando a função iniciou, logs intermediários* e quando a função finalizou.

Logs intermediários são logs que podemos definir ao longo da função para que o CloudWatch disponibilize.

Em Python, por exemplo, basta utilizar

```python
print(f'Nome do log: {event}') #event é o parametro
```

Nota: Para cada execução da função na AWS Lambda, haverá pelo menos 3 entradas:
- Inicio da execução (RequestId)
- Final da execução (mesmo RequestID)
- Report (performance, duracao e memória utillizada)

***

