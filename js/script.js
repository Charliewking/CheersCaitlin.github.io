(function(angular) {
  'use strict';
angular.module('cheersCaitlin', ['ui.bootstrap'])
  .controller('AccordionDemoCtrl', ['$scope', function ($scope) {
  $scope.oneAtATime = true;

	$scope.Red		= "#DB3340"
	$scope.Yellow	= "#E8B71A"
	$scope.Cream	= "#F7EAC8"
	$scope.Green	= "#1FDA9A"
	$scope.Blue		= "#28ABE3"
	
	var Red 	= '#DB3340'
	var Yellow	= '#E8B71A'
	var Cream	= '#F7EAC8'
	var Green	= '#1FDA9A'
	var Blue	= '#28ABE3'
  
  
  $scope.samples = [
    {
      title: 'Musings Over Cats and Their Reaction to Cuddles',
	  color: '#6FB7D6',
      contents: [
	  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
	  "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. ","Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.",
	  "Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. ",
	  "Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo."
	  ]
    },
    {
      title: 'Where Oh Where Could My Baby Be?',
	  color: '#6FB717',
      contents: [
	  'Medical marijuana has been legal in Colorado since 2001, and recreational marijuana use became legal a year ago. But marijuana businesses have had limited, if any, access to banking services. The federal government considers marijuana illegal and so traditional banks, fearing prosecution for aiding and abetting illegal drug dealers, have shut down pot-business accounts and declined to give loans. Some banks have ferreted out pot entrepreneurs by sniffing their bills, leading to a countermove: bills sprayed with air freshener.',
	  'Without a bank account, pot businesses deal in cash, lots of it, held in safes, handed out in clipped bundles on payday, carried in brown paper bags and cardboard boxes to the tax office and the utility company, ferried around the state by armored vehicles and armed guards. And without access to essential banking services — from credit cards to electronic transfers to loans — those businesses pay a huge premium. The reality in Colorado is that it is legal to grow pot but extremely hard to grow a pot business.',
	  'The Fourth Corner partners saw a need and a business opportunity. State accreditation in hand, the partners took a step this November that typically goes off without a hitch: they applied to the Federal Reserve Bank for a “master account.” This is the account they would use to deposit funds and transfer them electronically with other banks — the lifeblood of commerce.',
	  'Mr. Mason could not find a case of a state accredited financial institution being denied a master account. Usually, approval comes in days, he noted. But it has been nearly three months since the application was filed and there has been no answer, just a letter in early January saying the request was under review. Mr. Mason said the application was on the desk of a specialist in bank risk, a guy named Ryan Harwell in Kansas City, the Fed’s Midwest regional office that oversees the Denver branch.’,’Continue reading the main story.',
	  'While the Federal Reserve declined to comment — as a matter of policy, its officials don’t comment on pending applications — Mr. Mason suggested a reason the Fed may be wary of granting the account.’,’“This legitimizes the marijuana industry to the extent it’s never been legitimized before,” he said. If Fourth Corner gets approval, businesses would have a place to deposit and to borrow. Other institutions might well follow, and the federal government “would become complicit, and the walls start tumbling down.”',
	  'At the same time, Mr. Mason argued that the Federal Reserve Bank was not only within its rights to approve the credit union but was obliged to do so.'
	  ]
    }
  ];
  
  $scope.interests = [
	{
		title: 'American University',
		content: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ',
		linktitle: 'Button stuff',
		linkURL: '',
		image: 'images/american.jpg',
		color: '#28ABE3'
	},
	{
		title: 'I\'m really cute',
		content: 'Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor',
		linktitle: 'click the button',
		linkURL: '',
		image: 'images/caitlin2.jpg',
		color: '#28ABE3'
	},
	{
		title: 'You are watching a show',
		content: 'sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
		linktitle: 'super long button title',
		linkURL: '',
		image: 'images/caitlin3.jpg',
		color: '#28ABE3'
	}
  ];
  
  //var samples = sampleSvc.getSamples();

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  
  $scope.contacts = [
	{
		medium: 'phone',
		content: '(614)2824350',
		message: 'Mobile',
		color: '#DB3340',
		image: 'images/call.png'
	},
	{
		medium: 'email',
		content: 'mailto:caitlin.langfitt@gmail.com',
		message: 'send me an email!',
		color: '#DB3340',
		image: 'images/email.png'
	},
	{
		medium: 'address',
		content: 'http://www.linkedin.com/pub/caitlin-langfitt/40/991/594',
		message: 'address',
		color: '#DB3340',
		image: 'images/linkedin.png'
	}
	];
  
  $scope.categories = [
	{
		title: 'research assistant',
		subtitle: 'worked there for 6 months',
		lines: [
			'made copies',
			'did other cool things',
			'was excellent at being really awesome'
		]
	}
	];
  
  }]);
  
})(window.angular);