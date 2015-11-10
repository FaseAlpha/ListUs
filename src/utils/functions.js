

export function arrayPositionByObjectKey(key, value, array){
	//let position=-1;
	for(let i=0; i<array.length; i++){
		if(array[i][key] == value) return i;
		//debugger;
	}
	return -1;
}


export function cloneObject(obj){
	let newObj={};
	for(key in obj){
		newObj[key] = obj[key];
	}
	return newObj;
}

export function lastStringOfUrl(){
	const url = window.location+'';
	return url.split('/')[url.split('/').length-1];
}