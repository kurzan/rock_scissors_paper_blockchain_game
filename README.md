![image](https://user-images.githubusercontent.com/112556583/227868344-428ee955-f7ad-4b84-897d-c21b40d162d4.png)

# Web-3.0 игра "Камень ножницы бумага"

### Ссылка на деплой 

https://kurzan.github.io/rock_scissors_paper_blockchain_game/

### Описание

Приложение позволяет играть в "камень-можницы бумага" против смарт-контрака, работающего на Binance Smart Chain Testen. Игра идет на тестовую криптовалюту tBNB, которую можно получить бесплатно в тестовых кранах, например https://testnet.bnbchain.org/faucet-smart. 

Для начала игры необходимо подключить свой криптовалютный кошелек, выбрать ход и указать сумму ставки. Минимальная сумма ставки 0,0001 tBNB, максимальная ставка не может превышать сумму баланса контракта, разделенную на два. 

### Правила игры

Камень бьет ножницы</br>
Ножницы режут бумагу</br>
Бумага покрывает камень</br>

В случае победы игрок получает х2 от суммы ставки, в случае ничьи получает назад свою ставку, в случае проигрыша ничего не получает, а сумма ставки уходит на баланс контракта.

## Процесс игры

<b>1. Подключаем кошелек, делам ход и указываем сумму ставки. Нажимаем на кнопку "Начать игру" и подтверждаем транзакцию </b>

![image](https://user-images.githubusercontent.com/112556583/227874054-f9c729f0-f98c-435b-a74b-e3b8cabd282f.png)

<b>2. В появившемся окне ожидаем ход смарт-контрака </b>

![image](https://user-images.githubusercontent.com/112556583/227874314-74f9d80b-579f-4fa0-a3f6-457914d5435f.png)

<b>3. Получаем результат игры и ссылку на транзакцию в Bsc Testnet Scan </b>

![image](https://user-images.githubusercontent.com/112556583/227874521-fb920520-bfbe-4509-9219-09d82ba60c1f.png)

<b> 4. Смотрим историю игр </b>

![image](https://user-images.githubusercontent.com/112556583/227873236-0eafb276-994a-44cb-9ace-a7bcc46faf38.png)


## Установка и запуск проект

<b>npm install</br>
<b>npm run start</br>


