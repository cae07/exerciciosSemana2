# Bem vindos ao repositório de exercicios da Semana 2

### Nesse repositório você encontra os exercícios da segunda semana do treinamento dos fundamentos de programação
<br>

### Como utilizar esse repositório

 * faça o clone do repositório <br>
``` git clone git@github.com:cae07/exerciciosSemana2.git ``` <br>
<b>ou via http</b> <br>
```git clone https://github.com/cae07/exerciciosSemana2.git ```

 * Entre na pasta clonada e instale as dependencias <br>
``` cd exerciciosSemana2 ``` <br>
``` npm install ``` <br>
 * crie uma branch para trabalhar <br>
``` git checkout -b nomeDaSuaBranch ```

 * Siga as instruções desse repositório e divirta-se

## Depois de finalizar o desenvolvimento desses algoritmos

### fique a vontade de subir um PR pra eu olhar se quiser <br>

```
git add .
git commit -m "descrição do commit"
git push -u origin nomeDaSuaBranch
 ```

 # AVISO:
 ## Não altere o arquivo de testes. Fique a vontade para analisá-lo, mas nunca para alterá-lo.

 ----------

### Exercicio 1 - Função validateIsNumber(number) <br>

Este método recebe um número como parâmetro e retorna true se a variável passada for um número válido, ou retorna false se a variável passada não for um número válido.

```
validateIsNumber(14);
// true

validateIsNumber('15');
// false
```

------------

### Exercício 2 - Função calculateTriangleArea(base, height)
Este método recebe dois parâmetros: <br>
* base => base do triângulo 
* height => altura do triângulo <br>

E retorna como resultado uma string da área do triângulo no seguinte formato: <br>

```
"A área do triangulo de base = valorDaBase X altura = valorDaAltura é X."
```

<b>Exemplo:</b> 

```
calculateTriangleArea(4, 5);
// "A área do triangulo de base = 4 X altura = 5 é 10."
```

----------------

### Exercício 3 - Função concatString(array)
Este método recebe um array de strings como parâmetro e retorna uma string no formato "primeiroItem, segundoItem".

<b>Exemplo:</b> 

```
concatString(['item', 'caixa', 'tela', 'joias'])
// 'item, joias'
```

------------

### Exercício 4 - Função teamPoints(wins, ties)
Este método recebe 2 parâmetros de entrada
* wins => número de vitórias do time
* ties => número de empates do time; <br>


E calcula os pontos desse time levando em consideração as seguintes condições
* cada vitória vale 3 pontos
* cada empate vale 1 ponto

```
o retorno deve ser uma string no seguinte formato: "O time recebeu x pontos nessa temporada."
```

<b>Exemplo:</b> 

```
teamPoints(3, 4);
// "O time recebeu 13 pontos nessa temporada."
```


-------------

<b><h2 style="color: yellow; text-shadow: red 1px 1px">A partir deste ponto começaremos a implementar condições de erro em alguns exercícios</h2></b>

### Exercício 5 - Função highestNumber(array)
Este método recebe um array de numbers e retorna uma string quantas vezes o número com o maior valor se repete neste array no seguinte formatto: <br>
* "O número x se repete x vezes nesse array." => se o número de repetições for maior que 1 vez <br>
* "O número x se repete 1 vez nesse array." => se o número de repetições for igual a 1 vez <br>

<b>Exemplo:</b>  <br>

```
highestNumber([1, 8, 3, 8, 4, 5, 7, 8])
// "O número 8 se repete 3 vezes nesse array."
```

### Casos de erro
 - Se algum dos valores não for do tipo number, espera que o método dispare um erro com a mensagem:
 
 ```Apenas tipos number são aceitos como parâmetro.```

 <b>Exemplo:</b>  <br>

```
highestNumber([1, 8, 3, "A", 4, 5, "7", 8])
// "Apenas tipos number são aceitos como parâmetro."
```

----------

### Exercício 6 - Função fizzBuzz(array)

Este é um clássico, o método recebe um array de numbers e retorna um array com as seguintes condições: 
* se o número for divisível apenas por 3 => retorna uma string com o valor "fizz";
* se o número for divisível apenas por 5 => retorna uma string com o valor "buzz";
* se o número for divisível por 5 e for divisível por 3 => retorna uma string com o valor "fizzbuzz";
* caso o número não seja divisível nem por 3 e nem por 5 => retorna uma string com o valor "bug";

<b>Exemplo:</b>

```
fizzBuzz([3, 5, 15])
// ['fizz', 'buzz', 'fizzbuzz'];
```

-------------

### Exercício 7 - Função encoder(string) e função  decoder(string)

Os dois métodos recebem um parâmetro do tipo string. O primeiro método deve substituir todas as vogais minúsculas pelos seguintes valores:

* a => 1
* e => 2
* i => 3
* o => 4
* u => 5

<b>ex:</b>

```
encoder('Ola turma.')
// 'Ol1 t5rm1.'
```


E o segundo método retorna uma string codificada pelo primeiro método e retorna a mensagem decodificada.

<b>Exemplo:</b>

```
decoder('Ol1 t5rm1.')
// 'Ola turma.'
```

-------------

### Exercício 8 - Função welcome(string, string)

Esta função recebe dois parâmetros:
 - language: string;
 - name: string;

E retorna uma string com a saudação de acordo com o idioma e nome fornecidos, ex:

Neste exercício você tem um dataBase (vulgo objeto) disponível para poder retornar a saudação na lingua da pessoa inserida como parâmetro.

<b>Exemplo:</b>

```
welcome('english', 'Maria')
// 'Welcome Maria.'
```

## Casos de erro:

 - Se o idioma fornecido não existir no dataBase, deve-se então retornar um erro com a mensagem:

<b>O idioma parametroLanguage não foi encontrado. Por favor tente novamente mais tarde.</b>

<b>Exemplo:</b>

```
welcome('batata', 'Maria')
// 'O idioma batata não foi encontrado. Por favor tente novamente mais tarde.'
```

 - Se passar um nome inválido por parâmetro, deve-se então retornar um erro com a mensagem:

<b>O nome nomePassado não existe. Por favor insira um nome válido.</b> <br>
<b style="color: orangered; ; text-shadow: black 0.5px 0.5px">ps: Nomes inválidos são nomes que possuem números juntamente com os caracteres do nome</b>

<b>Exemplo:</b>

```
welcome('german', 'P3dr0')
// 'O nome P3dr0 não existe. Por favor insira um nome válido.'
```


O objeto disponível é exatamente como esse abaixo.

```
const translator = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}
```




-------------

## EXERCÍCIOS BÔNUS

### Exercício 9 - Função phoneNumber(array)

Esta função recebe um array com números e retorna o número de telefone formatado, deve respeitar as seguintes regras:

* O array não pode conter mais de 11 números;
* Todos os númeors devem possuir o valor entre 0 - 9; <br>
* A string não pode conter 3 vezes o mesmo número;

No caso de cair em alguma dessas regras, o retorno deve ser o seguinte:

```'Este número de telefone não existe.'```

No que validar todas as regras o retorno deve ser uma string que respeite o seguinte formato:

```(xx)xxxxx-xxxx```

Onde cada x será substituido pelo número correspondente passado por parâmetro na função, 

<b>Exemplo:</b>

```
phoneNumber('11985233214');
// (11)98523-3214
```

----------

### Exercício 10 - Função calculatePaint(heigh, width)

Esta função recebe dois parâmetros de entrada que são as medidas de uma parede:
* heigh => altura em centímetros
* width => largura em centímetros

E calcula a quantidade de tinta necessária para pintar toda a parede, levando em consideração as seguintes regras:

* 1 litro de tinta cobre 1,5m² de parede;
* Deverá ser calculado o material necessário para cobrir a parede sem falhas da lata de maior tamanho para a de menor tamanho;
* existe latas com os seguintes tamanhos (18 litros, 5 litros, 1 litro, 0,5 litro);
* Não pode haver falhas na pintura e nem excesso de desperdício, 

<b>Exemplo:</b>

```
calculatePaint(450, 210);
// 'Você precisa de 1 lata de 5 litros, 1 lata de 1 litro e 1 lata de 0,5 litros para realizar esse trabalho.'
```

----------

### BÔNUS FINAL

 - Transforme todos os métodos desse repositório para arrowFunctions;
 - Resolva todos os problemas de linter que existirem.