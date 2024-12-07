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
    const [rollIcon, setRollIcon] = useState('random');
    const [rollAction, setRollAction] = useState('random');
    const [rollColor, setRollColor] = useState('black');
    const [actionColor, setActionColor] = useState('black');
    const [mode, setMode] = useState('help');
    //coins,topic-pets,user-note,hot,settings,topic-homegarden
//Add help button

    if(mode == 'help'){
      return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <text wrap={true}>How much money you can make in 10 minutes in a fake stock market?</text>
        <text wrap={true}>Start with $5000 and buy some of 6 different stocks.</text>
        <text wrap={true}>Roll the dice to move the stocks up/down or pay dividends.</text>
        <text wrap={true}>Stocks only pay dividends if their value is 100 or greater.</text>
        <text wrap={true}>The higher value of the stocks, the more they cost. Lower the value less they cost.</text>
        <text wrap={true}>If the stock reaches 200, double the amount you own. If the stock reaches 0, you lose all of that stock.</text>
        <text wrap={true}>Buy or sell stocks at any time.</text>
        <button onPress={() => {
          setMode('play')
        }}>Play</button>
        </vstack>  
      )
    }

    if(mode == 'play'){
    return (
      <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <hstack>
          <icon name="payment"></icon><text>{`${money}`}</text>
        </hstack>
        <hstack>
          <icon name="profile"></icon>
          <icon name="coins" color="gold"></icon><text>{`${playerGold}`}</text>
          <icon name="topic-pets" color="silver"></icon><text>{`${playerSilver}`}</text>
          <icon name="user-note" color="blue"></icon><text>{`${playerBonds}`}</text>
          <icon name="hot" color="black"></icon><text>{`${playerOil}`}</text>
          <icon name="settings" color="pink"></icon><text>{`${playerIndustrial}`}</text>
          <icon name="topic-homegarden" color="green"></icon><text>{`${playerGrain}`}</text>
        </hstack>
        <hstack>
          <icon name="world"></icon>
          <icon name="coins" color="gold"></icon><text>{`${gold}`}</text>
          <icon name="topic-pets" color="silver"></icon><text>{`${silver}`}</text>
          <icon name="user-note" color="blue"></icon><text>{`${bonds}`}</text>
          <icon name="hot" color="black"></icon><text>{`${oil}`}</text>
          <icon name="settings" color="pink"></icon><text>{`${industrial}`}</text>
          <icon name="topic-homegarden" color="green"></icon><text>{`${grain}`}</text>
        </hstack>
        
        <hstack>
        <button icon="coins" appearance="success" onPress={() => 
          {
            let cost = gold / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerGold((playerGold) => playerGold + 500)
            }
          }
        }>
          +500
        </button>
        <button icon="topic-pets" appearance="success" onPress={() => 
          {
            let cost = silver / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerSilver((playerSilver) => playerSilver + 500)
            }
          }
        }>
          +500
        </button>

        <button icon="user-note" appearance="success" onPress={() => 
          {
            let cost = bonds / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerBonds((playerBonds) => playerBonds + 500)
            }
          }
        }>
          +500
        </button>

        <button icon="hot" appearance="success" onPress={() => 
          {
            let cost = oil / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerOil((playerOil) => playerOil + 500)
            }
          }
        }>
          +500
        </button>

        <button icon="settings" appearance="success" onPress={() => 
          {
            let cost = industrial / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerIndustrial((playerIndustrial) => playerIndustrial + 500)
            }
          }
        }>
          +500
        </button>

        <button icon="topic-homegarden" appearance="success" onPress={() => 
          {
            let cost = grain / 100 * 500
            if(money >= cost){
              setMoney(money - cost)
              setPlayerGrain((playerGrain) => playerGrain + 500)
            }
          }
        }>
          +500
        </button>
        </hstack>

        <hstack>
        <button icon="coins" appearance="destructive" onPress={() => 
          {
            if(playerGold >= 500){
              setPlayerGold((playerGold) => playerGold - 500)
              setMoney(money + (gold / 100 * 500))
            }
          }}>
          -500
        </button>
        <button icon="topic-pets" appearance="destructive" onPress={() => 
          {
            if(playerSilver >= 500){
              setPlayerSilver((playerSilver) => playerSilver - 500)
              setMoney(money + (silver / 100 * 500))
            }
          }}>
          -500
        </button>

        <button icon="user-note" appearance="destructive" onPress={() => 
          {
            if(playerBonds >= 500){
              setPlayerBonds((playerBonds) => playerBonds - 500)
              setMoney(money + (bonds / 100 * 500))
            }
          }}>
          -500
        </button>

        <button icon="hot" appearance="destructive" onPress={() => 
          {
            if(playerOil >= 500){
              setPlayerOil((playerOil) => playerOil - 500)
              setMoney(money + (oil / 100 * 500))
            }
          }}>
          -500
        </button>

        <button icon="settings" appearance="destructive" onPress={() => 
          {
            if(playerIndustrial >= 500){
              setPlayerIndustrial((playerIndustrial) => playerIndustrial - 500)
              setMoney(money + (industrial / 100 * 500))
            }
          }}>
          -500
        </button>

        <button icon="topic-homegarden" appearance="destructive" onPress={() => 
          {
            if(playerGrain >= 500){
              setPlayerGrain((playerGrain) => playerGrain - 500)
              setMoney(money + (grain / 100 * 500))
            }
          }}>
          -500
        </button>


        </hstack>


        <button icon="random" appearance="primary" onPress={() => 
          {
            let d1 = Math.floor(Math.random() * 6)
            let stock = ''
            let d2 = Math.floor(Math.random() * 6)
            let value = ''
            let d3 = Math.floor(Math.random() * 6)
            let action = ''
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
              setRollColor("green")
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
            setRoll(value);

            if(action == 'up'){
              if(stock == 'gold'){
                if(gold + parseInt(value) > 195){
                  setGold(100)  
                  setPlayerGold(playerGold * 2)
                } else {
                  setGold(gold + parseInt(value))
                }
              } else if(stock == 'silver'){
                if(silver + parseInt(value) > 195){
                  setSilver(100)  
                  setPlayerSilver(playerSilver * 2)
                } else {
                  setSilver(silver + parseInt(value))
                }
              } else if(stock == 'bonds'){
                if(bonds + parseInt(value) > 195){
                  setBonds(100)  
                  setPlayerBonds(playerBonds * 2)
                } else {
                  setBonds(bonds + parseInt(value))
                }
              } else if(stock == 'oil'){
                if(oil + parseInt(value) > 195){
                  setOil(100)  
                  setPlayerOil(playerOil * 2)
                } else {
                  setOil(oil + parseInt(value))
                }
              } else if(stock == 'industrial'){
                if(industrial + parseInt(value) > 195){
                  setIndustrial(100)  
                  setPlayerIndustrial(playerIndustrial * 2)
                } else {
                  setIndustrial(industrial + parseInt(value))
                }
              } else if(stock == 'grain'){
                if(grain + parseInt(value) > 195){
                  setGrain(100)  
                  setPlayerGrain(playerGrain * 2)
                } else {
                  setGrain(grain + parseInt(value))
                }
              }
            } else if(action == 'down'){
              if(stock == 'gold'){
                if(gold - parseInt(value) < 5){
                  setGold(100)  
                  setPlayerGold(0)
                } else {
                  setGold(gold - parseInt(value))
                }
              } else if(stock == 'silver'){
                if(silver - parseInt(value) < 5){
                  setSilver(100)  
                  setPlayerSilver(0)
                } else {
                  setSilver(silver - parseInt(value))
                }
              } else if(stock == 'bonds'){
                if(bonds - parseInt(value) < 5){
                  setBonds(100)  
                  setPlayerBonds(0)
                } else {
                  setBonds(bonds - parseInt(value))
                }
              } else if(stock == 'oil'){
                if(oil - parseInt(value) < 5){
                  setOil(100)  
                  setPlayerOil(0)
                } else {
                  setOil(oil - parseInt(value))
                }
              } else if(stock == 'industrial'){
                if(industrial - parseInt(value) < 5){
                  setIndustrial(100)  
                  setPlayerIndustrial(0)
                } else {
                  setIndustrial(industrial - parseInt(value))
                }
              } else if(stock == 'grain'){
                if(grain - parseInt(value) < 5){
                  setGrain(100)  
                  setPlayerGrain(0)
                } else {
                  setGrain(grain - parseInt(value))
                }
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
          }}></button>
        <hstack>
          <icon name={rollIcon} color={rollColor}></icon>
          <icon name={rollAction} color={actionColor}></icon>
          <text>{`${roll}`}</text>
        </hstack>
      </vstack>
    );
  }
  },
});

export default Devvit;
