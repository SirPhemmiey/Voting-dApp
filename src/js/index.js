//0x30753e4a8aad7f8597332e813735def5dd395028
//const web3 = new Web3(new web3.providers.HttpProvider("http://localhost:7545"));
//const abi = JSON.parse

// App = {
//     web3provider: null,
//     contracts: {},
//     init: function() {
//         let candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"};
//         if (typeof web3 !== 'undefined') {
//             App.web3Provider = web3.currentProvider;
//         }
//         else {
//            App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
//         }
//         web3 = new Web3(App.web3Provider);
//         return App.initContract();
//     },
//     initContract: function() {
//         $,getJSON('Voting.json', function(data) {
//             App.contracts.Voting = TruffleContract(data);
//             App.contracts.Voting.setProvider(App.web3Provider);

//             return App.countVotes();
//         });
//         return App.bindEvents();   
//     },
//     bindEvents: function() {
//         // $(document).on('click', '.vote', function() {
//         //     let candidateName = $("#name").val();
//         // });
//         $(document).on('click', '.vote', App.handleVote);
//     },
//     countVotes: function() {
//         candidateName = Object.keys(candidates);
//         for(let i=0; i < candidateName.length; i++) {
//             let name = candidateName[i];
//             App.contracts.Voting.deployed().then(function(instance) {
//                 return instance.totalVotesFor.call(name).toString();
//             }).then(function(votes) {
//                 $("#"+ candidates[name]).html(votes);
//             });
//         }
//     },
//     handleVote: function() {
//         // let candidateName = $("#name").val();
//         // let votingInstance;
//         // web3.eth.getAccounts(function(error, accounts) {
//         //     if (error) {
//         //         console.log("An error occured");
//         //     }
//         //     let account = accounts[0];
//         //     App.contracts.Voting.deployed().then(function(instance) {
//         //         votingInstance = instance;
//         //         return votingInstance.voteForCandidate(candidateName, {from: account});
//         //     }).then(function(result) {
//         //         return App.countVotes();
//         //     }).catch(function(err) {
//         //         console.log(err.message);
//         //     });
//         // });
//         alert()
//     }
// };

function init () {
    let candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"};
    if (typeof web3 !== 'undefined') {
        const web3Provider = web3.currentProvider;
    }
    else {
       const web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
    }
    web3 = new Web3(web3Provider);
    return initContract();
}
    function initContract() {
        $.getJSON('Voting.json', function(data) {
            contracts.Voting = TruffleContract(data);
            contracts.Voting.setProvider(web3Provider);
            return countVotes();
        });
        return bindEvents();   
    }
        function bindEvents() {
        $(document).on('click', '.vote', function() {
            let candidateName = $("#name").val();
        });
        $(document).on('click', '.vote', handleVote());
    }
        function countVotes() {
        candidateName = Object.keys(candidates);
        for(let i=0; i < candidateName.length; i++) {
            let name = candidateName[i];
            contracts.Voting.deployed().then(function(instance) {
                return instance.totalVotesFor.call(name).toString();
            }).then(function(votes) {
                $("#"+ candidates[name]).html(votes);
            });
        }
    }
        function handleVote() {
        let candidateName = $("#name").val();
        let votingInstance;
        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log("An error occured");
            }
            let account = accounts[0];
            web3.eth.contracts.Voting.deployed().then(function(instance) {
                votingInstance = instance;
                return votingInstance.voteForCandidate(candidateName, {from: account});
            }).then(function(result) {
                return countVotes();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
       // alert("lolss")
    }

$(document).ready(function() {
    init();
})

// $(function() 
//     $(window).load(function() {
//       App.init();
//     });
//   });