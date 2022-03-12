import Vue from 'vue'
import { Base } from "./base.js"
import { Brain } from './brain.js'

export { Command }

class Command extends Base {
  constructor(options = {}) {
    super(options)
    options['type'] == undefined ? this['type'] = "command": ""
    // this.options = options

    // this._data = Object.assign({}, modele)
    // this["ve:created"] = Date.now()
    // this.id = uuidv4()
    //console.log(this)
    // ...
    //this.options = options
    this.init()
  }
  async init(){
    let c = this.command
    if (this.isValidUrl(c)){
      this.type = "url";
      this.value = c;
      this.isFile = this.isFile(c)
    }else{
      this.date= Date.now()
      let lastChar = c.slice(-1);
      if (lastChar == "," || lastChar == ";" ||  lastChar == "." || lastChar == "-"){
        this.traiteTriplet(c)
      }else{
        this.lower= c.toLowerCase()
        this.array = c.split(' ')
        this.arrayLower = this.lower.split(' ')
        this.result = undefined

        switch (this.arrayLower[0]) {
          case 'leave':
          this.result = "leaving "
          this.store.commit('app/setWorld', null)
          break;
          case 'brain':

          this.world = this.store.state.app.world
          if(this.world == null){
            alert("Please enter a world to create a brain")
          }else{
            this.brain = new Brain({world: this.world, name: this.array[1]})
            this.brain.name == undefined || this.brain.name.length == 0 ? this.brain.name = this.brain.id : ""
            // this.brain = await Vue.prototype.$loadBrain(this.brain)
            // console.log(this.brain)
            this.store.commit('app/setBrain', this.brain)
          }

          break;
          default:
          this.existWorld = this.store.state.app.worlds.find(w => w.id == c)
          if(this.existWorld != undefined){
            this.result = "opening "+this.existWorld.name
            this.store.commit('app/setWorld', this.existWorld)
          }
        }


      }


    }
    this.store.commit('os/pushHistory', this)
    console.log(this)
    if (this.type == "triplet"){
     await Vue.prototype.$addToBrain(this)
    }

    return this;
  }

  traiteTriplet(message){
    var result = {}
    var inputNew = "";
    let lastChar = message.slice(-1);
    let messageCut = message.slice(0,-1).split(" ");
    let isTriplet = true;
    //  console.log(messageCut);

    let detectLiteral = "";
    let messageCutTemp = [];
    messageCut.forEach(function(part){
      part = part.trim();
      //  console.log(part);
      if (part.startsWith('"')){
        detectLiteral ="debut";
        //  console.log(detectLiteral);
        messageCutTemp.push(part.substr(1));
      }else if (part.endsWith('"')){
        detectLiteral = "fin";
        //console.log(detectLiteral);
        messageCutTemp.push(messageCutTemp.pop()+" "+part.slice(0,-1));
      }else if (detectLiteral == "debut"){
        //  console.log("recupere le dernier et lui ajoute part" )
        messageCutTemp.push(messageCutTemp.pop()+" "+part)
      }else {
        messageCutTemp.push(part);
      }
    });
    if (messageCutTemp.length > 0){
      messageCut = messageCutTemp;
    }
    switch(lastChar){
      case '.':
      inputNew = "";
      break;
      case ';':
      if (messageCut[0].indexOf(" ") > -1){
        inputNew = '"'+messageCut[0]+'"'+' ';
      }else{
        inputNew = messageCut[0]+' ';
      }
      break;
      case ',':
      if (messageCut[0].indexOf(" ") > -1){
        inputNew = '"'+messageCut[0]+'" ';
      }else{
        inputNew = messageCut[0]+' ';
      }
      if (messageCut[1].indexOf(" ") > -1){
        inputNew += '"'+messageCut[1]+'" ';
      }else{
        inputNew += messageCut[1]+' ';
      }
      break;
      case '-':
      if (messageCut[2].indexOf(" ") > -1){
        inputNew = '"'+messageCut[2]+'"'+' ';
      }else{
        inputNew = messageCut[2]+' ';
      }
      break;
      default:
      console.log("Oh oh Houston this message should never be shown !  "+message)
      //this.sendMessage(message);
      //  this.agentInput.send('agentSocket', {type: "sendMessage", message:message});
      //  this.catchTriplet(message.slice(0,-1), this.network); // A REMPLACER PAR CATCHTRIPLETS V2
      // inputNew = "";
      // isTriplet = false;
    }
    if (isTriplet){
      //  console.log("est Triplet",messageCut)
      result.type = "triplet";
      var tripletvalue = {};
      tripletvalue.subject = messageCut[0];
      tripletvalue.predicate = messageCut[1];
      tripletvalue.object = messageCut[2];
      result.value = tripletvalue;
      result.inputNew = inputNew;
    }else {
      //  console.log("n'est pas triplet")
      result.type = "message";
      result.value = message;
      result.inputNew = inputNew;
    }
    Object.assign(this, result);
    //  return result;
  }


  isValidUrl(string){
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  isFile(pathname) {
    return pathname.split('/').pop().indexOf('.') > -1;
  }
}
