'use strict';


class Events{
  constructor($state,$http){
    this.$state = $state;
    // this.moment = new moment();
    this.count = 0;
    this.eventArr = [];
    this.duration={
      'home':0,
      'account':0,
      'bills':0,
      'shop':0,
      'more':0
    };
    this.visitCount={
      'home':0,
      'account':0,
      'bills':0,
      'shop':0,
      'more':0
    };
    this.visitCountPercent={
      'home':0,
      'account':0,
      'bills':0,
      'shop':0,
      'more':0
    };
    this.durationPercent={
      'home':0,
      'account':0,
      'bills':0,
      'shop':0,
      'more':0
    };
    this.report={
      'timeDuration':[],
      'durationPercentage' : [],
      'visitCount':[],
      'visitCountPercentage':[],
      'eventSeq':[],
      'issuePrediction':{'priority1':'','priority2':''}
    };
    this.eventSeq = [];
    this.$http = $http;
  }

  getTime(state){
    this.eventSeq.push(state);
    let timeStamp = new moment().unix();
    // console.log("yayyy",state,timeStamp);
    this.eventArr.push({"state":state,"timeStamp":timeStamp});
    this.count++;
    let totalTime = timeStamp - this.eventArr[0].timeStamp;

    // console.log("pushed ",this.eventArr[this.count++]);
    if(this.count > 1){
      this.duration[this.eventArr[this.count-2].state] += (timeStamp-this.eventArr[this.count-2].timeStamp);
      this.visitCount[this.eventArr[this.count-2].state]++;
      Object.keys(this.durationPercent).map((key,ind)=>{
        this.durationPercent[key] = ((this.duration[key]/totalTime)*100).toFixed(2);
        this.visitCountPercent[key] = ((this.visitCount[key]/this.count)*100).toFixed(2);
      });
      this.getReport(state);

    }
  }

  callToast(state){
    let vm = this;
    iziToast.warning({onClosed: (event)=>{
      if(event.closedBy === 'toast'){
        vm.$state.go('chat')
      console.log("forceclose")
      }},
        closeOnClick:true,progressBar:false,position: "bottomRight", title: 'Facing issues with '+state, message: 'Ask Us?'});
  }

  getReport(state){
    this.report['issuePrediction'].priority1 = this.eventSeq[this.eventSeq.length-1];
    this.report.timeDuration = this.duration;
    this.report.durationPercentage= this.durationPercent;
    this.report.visitCount= this.visitCount;
    this.report.visitCountPercentage= this.visitCountPercent;
    let maxVisited = Math.max.apply(null,Object.values(this.visitCountPercent));
    let maxtimeSpent = Math.max.apply(null,Object.values(this.durationPercent));
    let indVal = (maxVisited > maxtimeSpent)?Object.values(this.visitCountPercent).indexOf(maxVisited.toFixed(2)):Object.values(this.durationPercent).indexOf(maxtimeSpent.toFixed(2));
    this.report['issuePrediction'].priority2 = (Object.keys(this.duration)[indVal] === 'home')?'promotions':Object.keys(this.duration)[indVal];
    this.report['eventSeq'] = this.eventSeq;
    console.log(this.report);
    this.$http.post('http://localhost:3000/sendReport',{'data':this.report}).then(result=>{
      console.log("result is ",result);
    }).catch(error=>{
      console.log("error is ",error);
    });
  }




}

angular
  .module('tmobilefeApp')
  .service('Events',
    function($state,$http){
      return new Events($state,$http);
    });
