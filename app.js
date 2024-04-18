// get UI
const inputs = document.querySelectorAll('inputs'); 
let datas= []; 


inputs.forEach(function(input){ 
	console.log(input); 

	input.addEventLinstener('keyup',function(){ 
		// console.log(this.value); 

		datas.push({ 
			digit:input[0].values,
			name:input[1].values,
			exp:inputs[2].values,
			ccv:inputs[3].values
		});

		// console.log(datas);

		console.log(datas[datas.length-1]);
	}); 
}); 
