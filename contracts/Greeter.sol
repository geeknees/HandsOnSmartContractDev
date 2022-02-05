pragma solidity >= 0.4.0 < 0.8.12;

contract Greeter {

  function greet() external pure returns(string memory){
    return "Hello, World!";
  }
}
