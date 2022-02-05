const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
  it("has been deployd successfully", async () => {
    const greeter = await GreeterContract.deployed();
    assert(greeter, "Contract was not deplyed");
  });
});
