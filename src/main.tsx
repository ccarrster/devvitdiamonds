// Learn more at developers.reddit.com/docs
import { Devvit, useState } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: 'Add my post',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title: 'My devvit post',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created post!' });
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: 'Experience Post',
  height: 'regular',
  render: (_context) => {
    const [gold, setGold] = useState(100);
    const [silver, setSilver] = useState(100);
    const [bonds, setBonds] = useState(100);
    const [oil, setOil] = useState(100);
    const [industrial, setIndustrial] = useState(100);
    const [grain, setGrain] = useState(100);
    const [money, setMoney] = useState(5000);
    const [playerGold, setPlayerGold] = useState(0);
    const [playerSilver, setPlayerSilver] = useState(0);
    const [playerBonds, setPlayerBonds] = useState(0);
    const [playerOil, setPlayerOil] = useState(0);
    const [playerIndustrial, setPlayerIndustrial] = useState(0);
    const [playerGrain, setPlayerGrain] = useState(0);
    const [roll, setRoll] = useState('Buy some stocks with the green buttons then roll the dice');
    const [rollIcon, setRollIcon] = useState('random');
    const [rollAction, setRollAction] = useState('random');
    const [rollColor, setRollColor] = useState('black');
    const [actionColor, setActionColor] = useState('black');
    const [mode, setMode] = useState('play');
    const [actionStock, setActionStock] = useState('');
    const [moneyChange, setMoneyChange] = useState(0);
    const [changePlayerGold, setChangePlayerGold] = useState(0)
    const [changePlayerSilver, setChangePlayerSilver] = useState(0)
    const [changePlayerBonds, setChangePlayerBonds] = useState(0)
    const [changePlayerOil, setChangePlayerOil] = useState(0)
    const [changePlayerIndustrial, setChangePlayerIndustrial] = useState(0)
    const [changePlayerGrain, setChangePlayerGrain] = useState(0)
    const [rollCount, setRollCount] = useState(0)
    //coins,topic-pets,user-note,hot,settings,topic-homegarden
    //Add help button
    //Show what changed
    //Tool tips?
    //What are all these things?

    

    function resetPlayerChanges(){
      setChangePlayerGold(0)
      setChangePlayerSilver(0)
      setChangePlayerBonds(0)
      setChangePlayerOil(0)
      setChangePlayerIndustrial(0)
      setChangePlayerGrain(0)
    }

    if(mode == 'help'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <text wrap={true}>How much money you can make in 10 minutes in a fake stock market?</text>
        <image url="globalvalue.png" imageWidth={420} imageHeight={73}></image>
        <text wrap={true}>This is a list of stocks and their current values.</text>
        <image url="graph.png" imageWidth={144} imageHeight={64}></image>
        <text wrap={true}>This is graph of the current stock values.</text>
        <hstack>
        <button onPress={() => {
          setMode('help2')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help2'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <text wrap={true}>Start with $5000 and buy some of 6 different stocks.</text>
        <image url="buysell.png" imageWidth={674} imageHeight={99}></image>
        <text wrap={true}>Here are the buttons to buy and sell stocks.</text>
        <text wrap={true}>If you do not have enough money the buy buttons are disabled.</text>
        <text wrap={true}>If you do not have any stocks the sell buttons are disabled.</text>
        <hstack><button onPress={() => {
          setMode('help')
        }}>Previous</button>
        <button onPress={() => {
          setMode('help3')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help3'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image url="stockbought.png" imageWidth={245} imageHeight={45}></image>
        <text wrap={true}>When you buy stocks your money goes down(red) and your stocks go up(green).</text>
        <hstack><button onPress={() => {
          setMode('help2')
        }}>Previous</button>
        <button onPress={() => {
          setMode('help4')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help4'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <text wrap={true}>Now watch the stock market change.</text>
        <image url="rolldice.png" imageWidth={674} imageHeight={99}></image>
        <text wrap={true}>You roll the dice to change the stock market.</text>
        <hstack>
        <button onPress={() => {
          setMode('help3')
        }}>Previous</button>
        <button onPress={() => {
          setMode('help5')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help5'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image url="upfive.png" imageWidth={82} imageHeight={38}></image>
        <text wrap={true}>Stocks can go up (5, 10, 20).</text>
        <image url="down.png" imageWidth={71} imageHeight={38}></image>
        <text wrap={true}>Stocks can go down (5, 10, 20).</text>
        <hstack>
        <button onPress={() => {
          setMode('help4')
        }}>Previous</button>
        <button onPress={() => {
          setMode('help6')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help6'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image url="div5.png" imageWidth={104} imageHeight={32}></image>
        <text wrap={true}>Stocks that you own with a value of 100 or higher can pay you dividends (5%, 10%, 20%).</text>
        <image url="divnothing.png" imageWidth={84} imageHeight={31}></image>
        <text wrap={true}>If you do not own the stock or its value is bellow 100 no dividends are paid.</text>
        <hstack>
        <button onPress={() => {
          setMode('help5')
        }}>Previous</button>
        <button onPress={() => {
          setMode('help7')
        }}>Next</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    if(mode == 'help7'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image url="player.png" imageWidth={603} imageHeight={45}></image>
        <text wrap={true}>This shows the money and stocks you own.</text>
        <text wrap={true}>When stocks value reaches 200+ they split, You double your shares and the value is set to 100 again.</text>
        <text wrap={true}>When the stocks value reaches 0 or less they bust and you lose all your shares. The value is set to 100 again.</text>
        <text wrap={true}>Hit up ccarrster with feedback.</text>
        <hstack>
        <button onPress={() => {
          setMode('help6')
        }}>Previous</button>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </hstack>
        </vstack>  
      )
    }

    let totalValue = money + gold / 100 * playerGold + silver / 100 * playerSilver + bonds / 100 * playerBonds + oil / 100 * playerOil + industrial / 100 * playerIndustrial + grain / 100 * playerGrain
    
    //Can Buy Sell
    let canNotBuyGold = money < gold / 100 * 500
    let canNotBuySilver = money < silver / 100 * 500
    let canNotBuyBonds = money < bonds / 100 * 500
    let canNotBuyOil = money < oil / 100 * 500
    let canNotBuyIndustrial = money < industrial / 100 * 500
    let canNotBuyGrain = money < grain / 100 * 500

    let canNotSellGold = playerGold == 0
    let canNotSellSilver = playerSilver == 0
    let canNotSellBonds = playerBonds == 0
    let canNotSellOil = playerOil == 0
    let canNotSellIndustrial = playerIndustrial == 0
    let canNotSellGrain = playerGrain == 0

    let canNotRoll = canNotSellGold && canNotSellSilver && canNotSellBonds && canNotSellOil && canNotSellIndustrial && canNotSellGrain


    let goldBackground = 'black';
    let silverBackground = 'black';
    let bondsBackground = 'black';
    let oilBackground = 'black';
    let industrialBackground = 'black';
    let grainBackground = 'black';

    if(actionStock == 'gold'){
      goldBackground = actionColor;
    }
    if(actionStock == 'silver'){
      silverBackground = actionColor;
    }
    if(actionStock == 'bonds'){
      bondsBackground = actionColor;
    }
    if(actionStock == 'oil'){
      oilBackground = actionColor;
    }
    if(actionStock == 'industrial'){
      industrialBackground = actionColor;
    }
    if(actionStock == 'grain'){
      grainBackground = actionColor;
    }

    let moneyColor = 'black';
    if(moneyChange == 0){
      moneyColor = 'black';
    }
    if(moneyChange < 0){
      moneyColor = 'red';
    }
    if(moneyChange > 0){
      moneyColor = 'green';
    }


    let playerGoldColor = 'black';
    let playerSilverColor = 'black';
    let playerBondsColor = 'black';
    let playerOilColor = 'black';
    let playerIndustrialColor = 'black';
    let playerGrainColor = 'black';

    if(changePlayerGold > 0){
      playerGoldColor = "green";
    }
    if(changePlayerGold < 0){
      playerGoldColor = "red";
    }
    if(changePlayerSilver > 0){
      playerSilverColor = "green";
    }
    if(changePlayerSilver < 0){
      playerSilverColor = "red";
    }
    if(changePlayerBonds > 0){
      playerBondsColor = "green";
    }
    if(changePlayerBonds < 0){
      playerBondsColor = "red";
    }
    if(changePlayerOil > 0){
      playerOilColor = "green";
    }
    if(changePlayerOil < 0){
      playerOilColor = "red";
    }
    if(changePlayerIndustrial > 0){
      playerIndustrialColor = "green";
    }
    if(changePlayerIndustrial < 0){
      playerIndustrialColor = "red";
    }
    if(changePlayerGrain > 0){
      playerGrainColor = "green";
    }
    if(changePlayerGrain < 0){
      playerGrainColor = "red";
    }


    if(mode == 'play'){
    return (
      <vstack height="100%" width="100%" gap="medium" alignment="center middle" backgroundColor="ivory">
        <hstack gap="small" backgroundColor="mintcream">
          <icon name="world"></icon>
          <icon name="coins" color="gold"></icon><text color={`${goldBackground}`} width="30px">{`${gold}`}</text>
          <icon name="topic-pets" color="silver"></icon><text color={`${silverBackground}`} width="30px">{`${silver}`}</text>
          <icon name="user-note" color="blue"></icon><text color={`${bondsBackground}`} width="30px">{`${bonds}`}</text>
          <icon name="hot" color="black"></icon><text color={`${oilBackground}`} width="30px">{`${oil}`}</text>
          <icon name="settings" color="pink"></icon><text color={`${industrialBackground}`} width="30px">{`${industrial}`}</text>
          <icon name="topic-homegarden" color="orange"></icon><text color={`${grainBackground}`} width="30px">{`${grain}`}</text>
          <hstack height="54px">
            <icon size="xsmall" name="coins" color="gold"></icon><hstack alignment="top center" width="10px" backgroundColor="gold" height={`${gold / 5}px`}></hstack>
            <icon size="xsmall" name="topic-pets" color="silver"></icon><hstack alignment="top center" width="10px" backgroundColor="silver" height={`${silver / 5}px`}></hstack>
            <icon size="xsmall" name="user-note" color="blue"></icon><hstack alignment="top center" width="10px" backgroundColor="blue" height={`${bonds / 5}px`}></hstack>
            <icon size="xsmall" name="hot" color="black"></icon><hstack alignment="top center" width="10px" backgroundColor="black" height={`${oil / 5}px`}></hstack>
            <icon size="xsmall" name="settings" color="pink"></icon><hstack alignment="top center" width="10px" backgroundColor="pink" height={`${industrial / 5}px`}></hstack>
            <icon size="xsmall" name="topic-homegarden" color="orange"></icon><hstack alignment="top center" width="10px" backgroundColor="orange" height={`${grain / 5}px`}></hstack>
          </hstack>
          <button onPress={() => {
          setMode('help')
        }}>Help?</button>
        </hstack>

        <hstack>
        <button icon="random" disabled={canNotRoll} appearance="primary" onPress={() => 
          {
            setRollCount(rollCount + 1)
            resetPlayerChanges()
            setMoneyChange(0)
            let d1 = Math.floor(Math.random() * 6)
            let stock = ''
            let d2 = Math.floor(Math.random() * 6)
            let value = ''
            let d3 = Math.floor(Math.random() * 6)
            let action = ''
            let divString = ''
            if(d1 == 0){
              stock = 'gold'
              setRollIcon("coins")
              setRollColor("gold")
            } else if(d1 == 1){
              stock = 'silver'
              setRollIcon("topic-pets")
              setRollColor("silver")
            } else if(d1 == 2){
              stock = 'bonds'
              setRollIcon("user-note")
              setRollColor("blue")
            } else if(d1 == 3){
              stock = 'oil'
              setRollIcon("hot")
              setRollColor("black")
            } else if(d1 == 4){
              stock = 'industrial'
              setRollIcon("settings")
              setRollColor("pink")
            } else if(d1 == 5){
              stock = 'grain'
              setRollIcon("topic-homegarden")
              setRollColor("orange")
            }
            setActionStock(stock)
            if(d2 == 0){
              value = '5'
            } else if(d2 == 1){
              value = '10'
            } else if(d2 == 2){
              value = '20'
            } else if(d2 == 3){
              value = '5'
            } else if(d2 == 4){
              value = '10'
            } else if(d2 == 5){
              value = '20'
            }
            if(d3 == 0){
              action = 'up'
              setRollAction('upvote');
              setActionColor('green');
            } else if(d3 == 1){
              action = 'down'
              setRollAction('downvote');
              setActionColor('red');
            } else if(d3 == 2){
              action = 'div'
              setRollAction('award');
              setActionColor('blue');
            } else if(d3 == 3){
              action = 'up'
              setRollAction('upvote');
              setActionColor('green');
            } else if(d3 == 4){
              action = 'down'
              setRollAction('downvote');
              setActionColor('red');
            } else if(d3 == 5){
              action = 'div'
              setRollAction('award');
              setActionColor('blue');
            }

            if(action == 'up'){
              if(stock == 'gold'){
                if(gold + parseInt(value) > 195){
                  setGold(100)  
                  setPlayerGold(playerGold * 2)
                  setChangePlayerGold(playerGold)
                } else {
                  setGold(gold + parseInt(value))
                }
              } else if(stock == 'silver'){
                if(silver + parseInt(value) > 195){
                  setSilver(100)  
                  setPlayerSilver(playerSilver * 2)
                  setChangePlayerSilver(playerSilver)
                } else {
                  setSilver(silver + parseInt(value))
                }
              } else if(stock == 'bonds'){
                if(bonds + parseInt(value) > 195){
                  setBonds(100)  
                  setPlayerBonds(playerBonds * 2)
                  setChangePlayerBonds(playerBonds)
                } else {
                  setBonds(bonds + parseInt(value))
                }
              } else if(stock == 'oil'){
                if(oil + parseInt(value) > 195){
                  setOil(100)  
                  setPlayerOil(playerOil * 2)
                  setChangePlayerOil(playerOil)
                } else {
                  setOil(oil + parseInt(value))
                }
              } else if(stock == 'industrial'){
                if(industrial + parseInt(value) > 195){
                  setIndustrial(100)  
                  setPlayerIndustrial(playerIndustrial * 2)
                  setChangePlayerIndustrial(playerIndustrial)
                } else {
                  setIndustrial(industrial + parseInt(value))
                }
              } else if(stock == 'grain'){
                if(grain + parseInt(value) > 195){
                  setGrain(100)  
                  setPlayerGrain(playerGrain * 2)
                  setChangePlayerGrain(playerGrain)
                } else {
                  setGrain(grain + parseInt(value))
                }
              }
            } else if(action == 'down'){
              if(stock == 'gold'){
                if(gold - parseInt(value) < 5){
                  setGold(100)  
                  setPlayerGold(0)
                  setChangePlayerGold(playerGold * -1)
                } else {
                  setGold(gold - parseInt(value))
                }
              } else if(stock == 'silver'){
                if(silver - parseInt(value) < 5){
                  setSilver(100)  
                  setPlayerSilver(0)
                  setChangePlayerSilver(playerSilver * -1)
                } else {
                  setSilver(silver - parseInt(value))
                }
              } else if(stock == 'bonds'){
                if(bonds - parseInt(value) < 5){
                  setBonds(100)  
                  setPlayerBonds(0)
                  setChangePlayerBonds(playerBonds * -1)
                } else {
                  setBonds(bonds - parseInt(value))
                }
              } else if(stock == 'oil'){
                if(oil - parseInt(value) < 5){
                  setOil(100)  
                  setPlayerOil(0)
                  setChangePlayerOil(playerOil * -1)
                } else {
                  setOil(oil - parseInt(value))
                }
              } else if(stock == 'industrial'){
                if(industrial - parseInt(value) < 5){
                  setIndustrial(100)  
                  setPlayerIndustrial(0)
                  setChangePlayerIndustrial(playerIndustrial * -1)
                } else {
                  setIndustrial(industrial - parseInt(value))
                }
              } else if(stock == 'grain'){
                if(grain - parseInt(value) < 5){
                  setGrain(100)  
                  setPlayerGrain(0)
                  setChangePlayerGrain(playerGrain * -1)
                } else {
                  setGrain(grain - parseInt(value))
                }
              }
            } else if(action == 'div'){
              if(stock == 'gold'){
                if(gold >= 100 && playerGold > 0){
                  setMoney(money + playerGold * (0.01 * parseInt(value)))
                  setMoneyChange(playerGold * (0.01 * parseInt(value)));
                  divString = '+$'+playerGold * (0.01 * parseInt(value))
                }
              } else if(stock == 'silver'){
                if(silver >= 100 && playerSilver > 0){
                  setMoney(money + playerSilver * (0.01 * parseInt(value)))
                  setMoneyChange(playerSilver * (0.01 * parseInt(value)));
                  divString = '+$'+playerSilver * (0.01 * parseInt(value))
                }
              } else if(stock == 'bonds'){
                if(bonds >= 100 && playerBonds > 0){
                  setMoney(money + playerBonds * (0.01 * parseInt(value)))
                  setMoneyChange(playerBonds * (0.01 * parseInt(value)));
                  divString = '+$'+playerBonds * (0.01 * parseInt(value))
                }
              } else if(stock == 'oil'){
                if(oil >= 100 && playerOil > 0){
                  setMoney(money + playerOil * (0.01 * parseInt(value)))
                  setMoneyChange(playerOil * (0.01 * parseInt(value)));
                  divString = '+$'+playerOil * (0.01 * parseInt(value))
                }
              } else if(stock == 'industrial'){
                if(industrial >= 100 && playerIndustrial > 0){
                  setMoney(money + playerIndustrial * (0.01 * parseInt(value)))
                  setMoneyChange(playerIndustrial * (0.01 * parseInt(value)));
                  divString = '+$'+playerIndustrial * (0.01 * parseInt(value))
                }
              } else if(stock == 'grain'){
                if(grain >= 100 && playerGrain > 0){
                  setMoney(money + playerGrain * (0.01 * parseInt(value)))
                  setMoneyChange(playerGrain * (0.01 * parseInt(value)));
                  divString = '+$'+playerGrain * (0.01 * parseInt(value))
                }
              }
            }           
            setRoll(value + divString);
          }}>Roll Dice</button><text alignment="middle">Number of rolls {`${rollCount}`}</text></hstack>
        <hstack>
          <icon name={rollIcon} color={rollColor}></icon>
          <icon name={rollAction} color={actionColor}></icon>
          <text>{`${roll}`}</text>
        </hstack>

        <hstack gap="small" backgroundColor="seashell">
          <icon name="profile"></icon>
          <text>Total Value ${`${totalValue}`}</text>
          <icon name="payment"></icon><text color={`${moneyColor}`}>${`${money}`}</text>
          <icon name="coins" color="gold"></icon><text color={`${playerGoldColor}`}>{`${playerGold}`}</text>
          <icon name="topic-pets" color="silver"></icon><text color={`${playerSilverColor}`}>{`${playerSilver}`}</text>
          <icon name="user-note" color="blue"></icon><text color={`${playerBondsColor}`}>{`${playerBonds}`}</text>
          <icon name="hot" color="black"></icon><text color={`${playerOilColor}`}>{`${playerOil}`}</text>
          <icon name="settings" color="pink"></icon><text color={`${playerIndustrialColor}`}>{`${playerIndustrial}`}</text>
          <icon name="topic-homegarden" color="orange"></icon><text color={`${playerGrainColor}`}>{`${playerGrain}`}</text>
        </hstack>

        <hstack>
        <button size="small" icon="coins" disabled={canNotBuyGold} appearance="success" onPress={() => 
          {
            let cost = gold / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerGold((playerGold) => playerGold + 500)
              setChangePlayerGold(500)
            }
          }
        }>
          +500 -${gold / 100 * 500}
        </button>
        <button size="small" icon="topic-pets" disabled={canNotBuySilver} appearance="success" onPress={() => 
          {
            let cost = silver / 100 * 500
            if(money >= cost){
              resetPlayerChanges()
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerSilver((playerSilver) => playerSilver + 500)
              setChangePlayerSilver(500)
            }
          }
        }>
          +500 -${silver / 100 * 500}
        </button>

        <button size="small" icon="user-note" disabled={canNotBuyBonds} appearance="success" onPress={() => 
          {
            let cost = bonds / 100 * 500
            if(money >= cost){
              resetPlayerChanges()
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerBonds((playerBonds) => playerBonds + 500)
              setChangePlayerBonds(500)
            }
          }
        }>
          +500 -${bonds / 100 * 500}
        </button>

        <button size="small" icon="hot" disabled={canNotBuyOil} appearance="success" onPress={() => 
          {
            let cost = oil / 100 * 500
            if(money >= cost){
              resetPlayerChanges()
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerOil((playerOil) => playerOil + 500)
              setChangePlayerOil(500)
            }
          }
        }>
          +500 -${oil / 100 * 500}
        </button>

        <button size="small" icon="settings" disabled={canNotBuyIndustrial} appearance="success" onPress={() => 
          {
            let cost = industrial / 100 * 500
            if(money >= cost){
              resetPlayerChanges()
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerIndustrial((playerIndustrial) => playerIndustrial + 500)
              setChangePlayerIndustrial(500)
            }
          }
        }>
          +500 -${industrial / 100 * 500}
        </button>

        <button size="small" icon="topic-homegarden" disabled={canNotBuyGrain} appearance="success" onPress={() => 
          {
            let cost = grain / 100 * 500
            if(money >= cost){
              resetPlayerChanges()
              setMoney(money - cost)
              setMoneyChange(cost * - 1);
              setPlayerGrain((playerGrain) => playerGrain + 500)
              setChangePlayerGrain(500)
            }
          }
        }>
          +500 -${grain / 100 * 500}
        </button>
        </hstack>

        <hstack>
        <button size="small" icon="coins" disabled={canNotSellGold} appearance="destructive" onPress={() => 
          {
            if(playerGold >= 500){
              resetPlayerChanges()
              setPlayerGold((playerGold) => playerGold - 500)
              setMoney(money + (gold / 100 * 500))
              setMoneyChange((gold / 100 * 500));
              setChangePlayerGold(-500)
            }
          }}>
          -500 +${gold / 100 * 500}
        </button>
        <button size="small" icon="topic-pets" disabled={canNotSellSilver} appearance="destructive" onPress={() => 
          {
            if(playerSilver >= 500){
              resetPlayerChanges()
              setPlayerSilver((playerSilver) => playerSilver - 500)
              setMoney(money + (silver / 100 * 500))
              setMoneyChange((silver / 100 * 500));
              setChangePlayerSilver(-500)
            }
          }}>
          -500 +${silver / 100 * 500}
        </button>

        <button size="small" icon="user-note" disabled={canNotSellBonds} appearance="destructive" onPress={() => 
          {
            if(playerBonds >= 500){
              resetPlayerChanges()
              setPlayerBonds((playerBonds) => playerBonds - 500)
              setMoney(money + (bonds / 100 * 500))
              setMoneyChange((bonds / 100 * 500));
              setChangePlayerBonds(-500)
            }
          }}>
          -500 +${bonds / 100 * 500}
        </button>

        <button size="small" icon="hot" disabled={canNotSellOil} appearance="destructive" onPress={() => 
          {
            if(playerOil >= 500){
              resetPlayerChanges()
              setPlayerOil((playerOil) => playerOil - 500)
              setMoney(money + (oil / 100 * 500))
              setMoneyChange((oil / 100 * 500));
              setChangePlayerOil(-500)
            }
          }}>
          -500 +${oil / 100 * 500}
        </button>

        <button size="small" icon="settings" disabled={canNotSellIndustrial} appearance="destructive" onPress={() => 
          {
            if(playerIndustrial >= 500){
              resetPlayerChanges()
              setPlayerIndustrial((playerIndustrial) => playerIndustrial - 500)
              setMoney(money + (industrial / 100 * 500))
              setMoneyChange((industrial / 100 * 500));
              setChangePlayerIndustrial(-500)
            }
          }}>
          -500 +${industrial / 100 * 500}
        </button>

        <button size="small" icon="topic-homegarden" disabled={canNotSellGrain} appearance="destructive" onPress={() => 
          {
            if(playerGrain >= 500){
              resetPlayerChanges()
              setPlayerGrain((playerGrain) => playerGrain - 500)
              setMoney(money + (grain / 100 * 500))
              setMoneyChange((grain / 100 * 500));
              setChangePlayerGrain(-500)
            }
          }}>
          -500 +${grain / 100 * 500}
        </button>


        </hstack>
      </vstack>
    );
  }
  },
});

export default Devvit;
