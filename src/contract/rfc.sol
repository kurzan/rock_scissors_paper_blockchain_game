/**
 *Submitted for verification at BscScan.com on 2023-03-27
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract RockScissorsPapper {


    address public owner;


    enum StatusEnum {
        WON,
        LOST,
        TIE
    }

    struct Game {
        uint bet;
        uint playerChoice;
        uint contractChoice;
        StatusEnum status;
        uint received;
    }


    constructor() payable {
      owner = msg.sender;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }


    modifier correctOption(uint8 _option) {
        require(_option > 0 && _option < 4, "Choice must be a number 1 (rock), 2 (scissors), 3 (papper)");
        _;
    }


    event GameStarted(address player, uint256 playerBet, uint8 playerChoice, uint256 contractChoice);
    event GameOver(address player, StatusEnum status, uint256 received, uint contractChoice);
    event Received(address sender, uint256 value);

    Game[] games;

    function playGame(uint8 _option) payable public correctOption(_option) {
       
        require(msg.value >= 0.0001 ether, "Min bet is 0.0001 tBNB");
        require(address(this).balance >= msg.value * 2, "Smart-contract run out of funds" );

        Game memory currentGame;

        uint256 _output = block.timestamp%3 + 1;


        emit GameStarted(msg.sender, msg.value, _option, _output);


        StatusEnum _status;    
        uint256 _received;


        if (_option == _output) {
            _received = msg.value;
            payWinner(msg.sender, _received);
            _status = StatusEnum.TIE;


        } else if ((_option == 1 && _output == 2) || (_option == 2 && _output == 3) || (_option == 3 && _output == 1)) {


            _received = msg.value* 2;
            payWinner(msg.sender, _received );
            _status = StatusEnum.WON;


        } else {
            _status = StatusEnum.LOST;
            _received = 0;
        }

        currentGame.bet = msg.value;
        currentGame.playerChoice = _option;
        currentGame.contractChoice = _output;
        currentGame.status = _status;
        currentGame.received = _received;

        games.push(currentGame);
   
        emit GameOver(msg.sender, _status, _received, _output);
    }

    function getGames() public view returns(Game[] memory) {
        return games;
    }


    function payWinner(address _recipient, uint256 _amount) internal {
        payable(_recipient).transfer(_amount);
    }


    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }


    receive() external payable {
        emit Received(msg.sender, msg.value);
    }


    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }


}