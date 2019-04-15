import React, {Component} from 'react';

export default class FeedbackPane extends Component {


  randomLuckRollOutcome = () => {
    const outcomes = [
      'I just got off the phone with someone who sounded angry. Our captain had too much rum & soda, and he ran the boat into a coral reef at 60 knots! ',
      'Did you see the news? Pirates boarded your ship! They took all of the cargo, but they were nice enough to leave part of one engine.',
      'I was talking to the captain and he said an iceberg ran into the side of your ship. Icebergs can do that?',
      'On a not so good note, a 75ft rogue wave took some of the containers with it!',
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} (Your luck is not on your side right now.)`
  }

  randomShakedownRollOutcome = () => {
    const outcomes = [
      `Unfortunately, you have been "taxed" by one of the local "families." He did say it was for protection though, so that's good... I guess.`,
      'By the way, I saw a nefarious character walk into your office while you went to get coffee and left with your coin collection, and a couple of filing cabinets.',
      'Oh, and while you were gone, some big guy with a crowbar came by and took a bunch of nice things.',
      'Maybe you should hire some protection? People keep taking advantage of your great personality.',
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} (Your shipment made it through, but you were shaken down.)`
  }

  randomHeatRollOutcome = () => {
    const outcomes = [
      'I just thought I would mention, you may want to cool it down a little with the whole mobster ambiance thing you have going on. The police confiscated your cargo.',
      'And....our shipment was seized by angry customs agents.',
      'Hey by the way, you may want to stay away from your boat...temporarily...there are police everywhere.',
      'So... You know about these things we have called laws, right?',
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} (Your heat level caused law enforcement action.)`
  }

  randomSuccessRollOutcome = () => {
    const outcomes = [
      'Time to party! Everything went great!',
      'Success! We are rich!',
      'Nothing went wrong! We are doing SOMETHING right...',
      'That went perfectly! This is great!',
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} (Perfect shipment.)`
  }

  outcome = (outcome) => {
    switch(outcome) {
      default:
        console.log('Bug in outcome switch FeedbackPane.js')
        break;
      case 'LuckRoll':
        return this.randomLuckRollOutcome()
      case 'ShakedownRoll':
        return this.randomShakedownRollOutcome()
      case 'HeatRoll':
        return this.randomHeatRollOutcome()
      case 'none':
        return this.randomSuccessRollOutcome()
    }
  }

  feedbackZero = () => {
    const outcomes = [
      `I'm glad you are willing to do business.`,
      `You are easy to deal with. I can see this business relationship going somewhere.`,
      `If only paying taxes were this easy!`,
      `I'm glad we both see the value of getting thigs done quickly.`,
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return choice
  }

  feedbackOne = (successful) => {

    let second;

    const success = [
      `Wow though, I feel great. I feel like you feel after listening to one of those motivational speakers. You have a deal. (Haggle Success)`,
      `You know, you're exactly right though. Great points. I will sweeten the deal. (Haggle Success)`,
      `I will throw in a little extra though. Because it's you. (Haggle Success)`,
      `Oddly, There's just something about this place that makes me want to spend money. (Haggle Success)`,
    ]

    const fail = [
      `How about this: I give you double the initial offer, and then you give me back triple the original offer... (Haggle Fail)`,
      `*Stares directly at you angrily* (Haggle Fail)`,
      `I think I will just stick with my original plan of shorting you on our originial agreement.(Haggle Fail)`,
      `You are one sleezy #&%$. You aren't allowed within a thousand feet of a used car lot, am I right? Do you haggle with vending machines? (Haggle Fail)`,
    ]

    if (successful === 'successful') {
      second = success[Math.floor(Math.random()*success.length)];
    }else{
      second = fail[Math.floor(Math.random()*fail.length)];
    }

    const outcomes = [
      `Hmm... Someone who never settles for the initial offer...`,
      `So this is not a haggle-free shipyard?`,
      `My cousin is just like you. He negotiates for literally everything.`,
      `Wow ok... Did I accidentally step into a car dealership?.`,
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} ${second}`
  }

  feedbackTwo = () => {
    const outcomes = [
      `I don't know what to say. Not everyone is cut out for this. Let me know if you change your mind.`,
      `Maybe next time, boss. Hey, do you know of a good steakhouse around here?`,
      `Well geez, what a shame. TOTALLY unrelated, do you think I can use your bathroom real quick? It's a number 2... if you were curious.`,
      `Ok... I guess. Do you know of any real, actual shipping companies around here then?`,
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return `${choice} (You turned down the last job.)`
  }

  feedbackThree = () => {
    const outcomes = [
      'Um,.. Ok. Thanks for doing that for free.',
      `I hope you ship things better than you negotiate... Anyhoooo...`,
      `I feel like I paid too much! *playful gut punch* I'm just kidding!!! `,
      `This is kind of weird you're doing this for free. Is there some kind of catch?.`,
    ]
    const choice = outcomes[Math.floor(Math.random()*outcomes.length)];
    return choice
  }

  choice = (choice) => {
    switch(choice) {
      default:
        console.log('Bug in choice switch FeedbackPane.js')
        break;
      case 0:
        return `${this.feedbackZero()} ${this.outcome(this.props.results.rollResult)}`
      case 1:
        return `${this.feedbackOne(this.props.results.karmaResult)} ${this.outcome(this.props.results.rollResult)}`
      case 2:
        return this.feedbackTwo()
      case 3:
        return `${this.feedbackThree()} ${this.outcome(this.props.results.rollResult)}`
    }
  }

  decisionResults = () => {

  }

  render() {
    return(
      <div>
      <h2>Results: </h2>
      Customer says: {this.choice(this.props.results.jobChoice)}<br/><br/>
      Profit: {`$${this.props.results.jobProfit}`}<br/><br/>
      <button onClick={() => this.props.setLoopStage(0)}>loopstage</button>
      </div>
    )
  }
}
