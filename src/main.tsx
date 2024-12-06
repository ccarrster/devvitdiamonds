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
    const [roll, setRoll] = useState('');

    if(gold < 5){
      setPlayerGold(0)
      setGold(100)
    }
    if(silver < 5){
      setPlayerSilver(0)
      setSilver(100)
    }
    if(bonds < 5){
      setPlayerBonds(0)
      setBonds(100)
    }
    if(oil < 5){
      setPlayerOil(0)
      setOil(100)
    }
    if(industrial < 5){
      setPlayerIndustrial(0)
      setIndustrial(100)
    }
    if(grain < 5){
      setPlayerGrain(0)
      setGrain(100)
    }

    if(gold > 195){
      setPlayerGold(playerGold * 2)
      setGold(100)
    }
    if(silver > 195){
      setPlayerSilver(playerSilver * 2)
      setSilver(100)
    }
    if(bonds > 195){
      setPlayerBonds(playerBonds * 2)
      setBonds(100)
    }
    if(oil > 195){
      setPlayerOil(playerOil * 2)
      setOil(100)
    }
    if(industrial > 195){
      setPlayerIndustrial(playerIndustrial * 2)
      setIndustrial(100)
    }
    if(grain > 195){
      setPlayerGrain(playerGrain * 2)
      setGrain(100)
    }


    return (
      <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <text size="large">{`Player Money: ${money}`}</text>
        <text size="large">{`Player Gold: ${playerGold}`} {`Silver: ${playerSilver}`} {`Bonds: ${playerBonds}`} {`Oil: ${playerOil}`} {`Industrial: ${playerIndustrial}`} {`Grain: ${playerGrain}`}</text>
        <text size="large">{`Global Gold: ${gold}`} {`Silver: ${silver}`} {`Bonds: ${bonds}`} {`Oil: ${oil}`} {`Industrial: ${industrial}`} {`Grain: ${grain}`}</text>
        <text size="large">{`Roll: ${roll}`}</text>
        
        <hstack>
        <button appearance="primary" onPress={() => 
          {
            let cost = gold / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerGold((playerGold) => playerGold + 500)
            }
          }
        }>
          Buy 500 Gold
        </button>
        <button appearance="primary" onPress={() => 
          {
            let cost = silver / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerSilver((playerSilver) => playerSilver + 500)
            }
          }
        }>
          Buy 500 Silver
        </button>

        <button appearance="primary" onPress={() => 
          {
            let cost = bonds / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerBonds((playerBonds) => playerBonds + 500)
            }
          }
        }>
          Buy 500 Bonds
        </button>

        <button appearance="primary" onPress={() => 
          {
            let cost = oil / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerOil((playerOil) => playerOil + 500)
            }
          }
        }>
          Buy 500 Oil
        </button>

        <button appearance="primary" onPress={() => 
          {
            let cost = industrial / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerIndustrial((playerIndustrial) => playerIndustrial + 500)
            }
          }
        }>
          Buy 500 Industrial
        </button>

        <button appearance="primary" onPress={() => 
          {
            let cost = grain / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerGrain((playerGrain) => playerGrain + 500)
            }
          }
        }>
          Buy 500 Grain
        </button>


        </hstack>

        <hstack>
        <button appearance="primary" onPress={() => 
          {
            if(playerGold >= 500){
              setPlayerGold((playerGold) => playerGold - 500)
              setMoney(money + (gold / 100 * 500))
            }
          }}>
          Sell 500 Gold
        </button>
        <button appearance="primary" onPress={() => 
          {
            if(playerSilver >= 500){
              setPlayerSilver((playerSilver) => playerSilver - 500)
              setMoney(money + (silver / 100 * 500))
            }
          }}>
          Sell 500 Silver
        </button>

        <button appearance="primary" onPress={() => 
          {
            if(playerBonds >= 500){
              setPlayerBonds((playerBonds) => playerBonds - 500)
              setMoney(money + (bonds / 100 * 500))
            }
          }}>
          Sell 500 Bonds
        </button>

        <button appearance="primary" onPress={() => 
          {
            if(playerOil >= 500){
              setPlayerOil((playerOil) => playerOil - 500)
              setMoney(money + (oil / 100 * 500))
            }
          }}>
          Sell 500 Oil
        </button>

        <button appearance="primary" onPress={() => 
          {
            if(playerIndustrial >= 500){
              setPlayerIndustrial((playerIndustrial) => playerIndustrial - 500)
              setMoney(money + (industrial / 100 * 500))
            }
          }}>
          Sell 500 Industrial
        </button>

        <button appearance="primary" onPress={() => 
          {
            if(playerGrain >= 500){
              setPlayerGrain((playerGrain) => playerGrain - 500)
              setMoney(money + (grain / 100 * 500))
            }
          }}>
          Sell 500 Grain
        </button>


        </hstack>


        <button appearance="primary" onPress={() => 
          {
            let d1 = Math.floor(Math.random() * 6)
            let stock = ''
            let d2 = Math.floor(Math.random() * 6)
            let value = ''
            let d3 = Math.floor(Math.random() * 6)
            let action = ''
            if(d1 == 0){
              stock = 'gold'
            } else if(d1 == 1){
              stock = 'silver'
            } else if(d1 == 2){
              stock = 'bonds'
            } else if(d1 == 3){
              stock = 'oil'
            } else if(d1 == 4){
              stock = 'industrial'
            } else if(d1 == 5){
              stock = 'grain'
            }
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
            } else if(d3 == 1){
              action = 'down'
            } else if(d3 == 2){
              action = 'div'
            } else if(d3 == 3){
              action = 'up'
            } else if(d3 == 4){
              action = 'down'
            } else if(d3 == 5){
              action = 'div'
            }
            setRoll(stock + " " + action + " " + value);

            if(action == 'up'){
              if(stock == 'gold'){
                setGold(gold + parseInt(value))
              } else if(stock == 'silver'){
                setSilver(silver + parseInt(value))
              } else if(stock == 'bonds'){
                setBonds(bonds + parseInt(value))
              } else if(stock == 'oil'){
                setOil(oil + parseInt(value))
              } else if(stock == 'industrial'){
                setIndustrial(industrial + parseInt(value))
              } else if(stock == 'grain'){
                setGrain(grain + parseInt(value))
              }
            } else if(action == 'down'){
              if(stock == 'gold'){
                setGold(gold - parseInt(value))
              } else if(stock == 'silver'){
                setSilver(silver - parseInt(value))
              } else if(stock == 'bonds'){
                setBonds(bonds - parseInt(value))
              } else if(stock == 'oil'){
                setOil(oil - parseInt(value))
              } else if(stock == 'industrial'){
                setIndustrial(industrial - parseInt(value))
              } else if(stock == 'grain'){
                setGrain(grain - parseInt(value))
              }
            } else if(action == 'div'){
              if(stock == 'gold'){
                if(gold >= 100){
                  setMoney(money + playerGold * (0.01 * parseInt(value)))
                }
              } else if(stock == 'silver'){
                if(silver >= 100){
                  setMoney(money + playerSilver * (0.01 * parseInt(value)))
                }
              } else if(stock == 'bonds'){
                if(bonds >= 100){
                  setMoney(money + playerBonds * (0.01 * parseInt(value)))
                }
              } else if(stock == 'oil'){
                if(oil >= 100){
                  setMoney(money + playerOil * (0.01 * parseInt(value)))
                }
              } else if(stock == 'industrial'){
                if(industrial >= 100){
                  setMoney(money + playerIndustrial * (0.01 * parseInt(value)))
                }
              } else if(stock == 'grain'){
                if(grain >= 100){
                  setMoney(money + playerGrain * (0.01 * parseInt(value)))
                }
              }
            }

          }}>
          Roll Dice
        </button>
      </vstack>
    );
  },
});

export default Devvit;
