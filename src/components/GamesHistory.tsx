

const games = [
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  },
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  },
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  }
]


const GamesHistory = () => {
  return(
    <section>
      
      <div className="container mx-auto text-center pt-10 pb-10">
        <h1 className="text-3xl font-semibold pb-4">Недавние игры</h1>

        <div className="flex flex-col mx-auto">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Ставка</th>
                      <th scope="col" className="px-6 py-4">Статус</th>
                      <th scope="col" className="px-6 py-4">Получено</th>
                      <th scope="col" className="px-6 py-4">Транзакция</th>
                    </tr>
                  </thead>
                  <tbody>
                  {games.map(game => (
                                    <tr className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">{game.gameId}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{game.bet} tBNB</td>
                                      <td className="whitespace-nowrap px-6 py-4">{game.status}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{game.receive} tBNB</td>
                                      <td className="whitespace-nowrap px-6 py-4">{game.txhash}</td>
                                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
};

export default GamesHistory;